import speakeasy from 'speakeasy';
import shortId from 'shortid';
import qrcode from 'qrcode';
import mails from './mails';
import createPasswordEngine from './utils/password-engine';
import createTokenEngine from './utils/token-engine';

export default ({ secret, mail, issuer, loginBy = 'email' }) => {
  const qr = (field, x) =>
    new Promise((yay, nay) => {
      qrcode.toString(
        `otpauth://totp/${field}?secret=${x}&issuer=${issuer || 'Olymp'}`,
        { type: 'svg' },
        (err, data) => (err ? nay(err) : yay(data)),
      );
    });
  const cleanUser = ({ salt, hash, confirmed, _id, ...rest }) => rest;
  const passwordEngine = createPasswordEngine({});
  const tokenEngine = createTokenEngine({ secret });

  return {
    passwordEngine,
    tokenEngine,
    checkTokenValue: (key, k) => tokenEngine.verify(key).then(c => c[k]),
    checkToken: key =>
      tokenEngine
        .verify(key)
        .then(() => true)
        .catch(() => false),

    getUser: (db, id) =>
      db
        .collection('user')
        .findOne({ id })
        .then(cleanUser),
    login: (db, field, pw, totp) => {
      let user = null;

      return db
        .collection('user')
        .findOne({ [loginBy]: field })
        .then(usr => {
          user = usr;
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          return passwordEngine.match(user, pw);
        })
        .then(isValid => {
          if (!isValid) {
            throw new Error('Wrong password.');
          }
          // TOTP
          if (user.totp && !totp) {
            throw new Error('Please provide a totp token');
          } else if (user.totp) {
            const verified = speakeasy.totp.verify({
              secret: user.totp,
              encoding: 'base32',
              token: totp,
            });
            if (!verified) {
              throw new Error('TOTP token error');
            }
          }
          // END TOTP
          return {
            token: tokenEngine.createFromUser(user, { days: 7 }),
            user: cleanUser(user),
          };
        });
    },
    verify: (db, key) => {
      // TODO remove!
      if (!key) {
        throw new Error('No Key');
      }
      return tokenEngine
        .verify(key)
        .then(({ id, orgId, scopes }) => ({ id, orgId, scopes }))
        .then(item => {
          console.log(item);
          const { id } = item;
          if (!id) {
            throw new Error('Error.');
          }
          return db.collection('user').findOne({ id });
        })
        .then(user => {
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          user.token = tokenEngine.createFromUser(user, { days: 7 });
          return cleanUser(user);
        });
    },
    // Get user by email/realm and post new user
    register: (db, rawUser, pwd, key) => {
      const filter = { [loginBy]: rawUser[loginBy] };
      rawUser.confirmed = !!key;
      rawUser.id = shortId.generate();
      if (!pwd || pwd.length < 6) {
        throw new Error('Password too short');
      }
      const init = key ? tokenEngine.verify(key) : Promise.resolve(filter);
      return init
        .then(user => {
          if (user[loginBy] !== rawUser[loginBy]) {
            throw new Error('Unexpected name');
          }
          return Promise.all([
            db.collection('user').findOne(filter),
            passwordEngine.set(rawUser, pwd),
          ]);
        })
        .then(([currentUser, user]) => {
          if (currentUser) {
            throw new Error('USER_ALREADY_EXISTS Error.');
          }
          return db.collection('user').insert(user);
        })
        .then(result => {
          let confirmationToken;
          if (!result.confirmed) {
            confirmationToken = tokenEngine.createFromUser(result);
            if (mail && rawUser.email) {
              mail(mails.register, {
                to: rawUser.email,
                token: confirmationToken,
              })
                .then(x => console.log('Mail success'))
                .catch(err => console.error(err));
            }
          }
          return { user: cleanUser(result), token: confirmationToken };
        });
    },
    // Get user by id and update user
    confirm: (db, key) =>
      tokenEngine
        .verify(key)
        .then(({ id, orgId, scopes }) => ({ id, orgId, scopes }))
        .then(({ id }) => {
          if (!id) {
            throw new Error('Error.');
          }
          return Promise.all([
            id,
            db.collection('user').update({ id }, { $set: { confirmed: true } }),
          ]);
        })
        .then(([id]) => db.collection('user').findOne({ id }))
        .then(user => ({
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user),
        })),
    //
    totp: (db, id) => {
      const secret = speakeasy.generateSecret({ length: 20 }).base32;
      let user = null;
      return db
        .collection('user')
        .findOne({ id })
        .then(currentUser => {
          if (!currentUser) {
            throw new Error('No user matched.');
          }
          if (currentUser.totp) {
            return {
              token: tokenEngine.create({ id: currentUser.id, disable: true }),
              enabled: true,
              user: cleanUser(currentUser),
            };
          }
          user = currentUser;
          return qr(user[loginBy], secret, issuer);
        })
        .then(qr => {
          if (typeof qr === 'object') {
            return qr;
          }
          return {
            token: tokenEngine.create({ id: user.id, secret }),
            user: cleanUser(user),
            qr,
          };
        });
    },
    //
    totpConfirm: (db, t, totp) => {
      let secret;
      return tokenEngine
        .verify(t)
        .then(untoken => {
          if (!untoken) {
            throw new Error('TOTP token error');
          }
          const { id, disable } = untoken;
          if (disable) {
            secret = null;
          } else {
            secret = untoken.secret;
            const verified = speakeasy.totp.verify({
              secret,
              encoding: 'base32',
              token: totp,
            });
            if (!verified) {
              throw new Error('TOTP token error');
            }
          }
          return db.collection('user').findOne({ id });
        })
        .then(currentUser => {
          if (!currentUser) {
            throw new Error('No user matched.');
          }
          return db
            .collection('user')
            .update({ id: currentUser.id }, { $set: { totp: secret } });
        })
        .then(user => true);
    },
    forgot: (db, field) =>
      db
        .collection('user')
        .findOne({ [loginBy]: field })
        .then(user => {
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          const requestToken = tokenEngine.createFromUser(user);

          if (mail && user.email) {
            mail(mails.forgot, { to: user.email, token: requestToken })
              .then(x => console.log('Mail success'))
              .catch(err => console.error(err));
          }
          return true;
        }),
    reset: (db, key, pwd) =>
      tokenEngine
        .verify(key)
        .then(({ id, orgId, scopes }) => ({ id, orgId, scopes }))
        .then(({ id }) => {
          if (!id) {
            throw new Error('Error.');
          }
          return db.collection('user').findOne({ id });
        })
        .then(user => {
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          user.totp = null; // Disable TOTP
          return passwordEngine.set(user, pwd);
        })
        .then(user =>
          db
            .collection('user')
            .update(
              { id: user.id },
              { $set: { salt: user.salt, hash: user.hash } },
            ),
        )
        .then(user => ({
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user),
        })),
  };
};
