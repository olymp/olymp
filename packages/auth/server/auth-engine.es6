import mails from './mails';
import createPasswordEngine from './utils/password-engine';
import createTokenEngine from './utils/token-engine';
import speakeasy from 'speakeasy';
import shortId from 'shortid';

const qr = (email, x, issuer) =>
  new Promise((yay, nay) => {
    require('qrcode').toString(
      `otpauth://totp/${email}?secret=${x}&issuer=${issuer || 'Olymp'}`,
      { type: 'svg' },
      (err, data) => (err ? nay(err) : yay(data))
    );
  });
const cleanUser = (user) => {
  const cleaned = Object.assign({}, user);
  delete cleaned.hash;
  delete cleanUser.salt;
  return cleaned;
};

export default ({ monk, secret, mail, issuer }) => {
  const passwordEngine = createPasswordEngine({});
  const tokenEngine = createTokenEngine({ secret });
  const collection = monk.collection('user');
  return {
    passwordEngine,
    tokenEngine,
    checkTokenValue: (key, k) => tokenEngine.verify(key).then(c => c[k]),
    checkToken: key =>
      tokenEngine.readUser(key).then(() => true).catch(() => false),
    getUser: id => collection.findOne({ id }).then(cleanUser),
    login: (email, pw, totp) => {
      let user = null;
      return collection
        .findOne({ email })
        .then((usr) => {
          user = usr;
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          return passwordEngine.match(user, pw);
        })
        .then((isValid) => {
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
            token: tokenEngine.createFromUser(user),
            user: cleanUser(user),
          };
        });
    },
    verify: (key) => {
      // TODO remove!
      if (!key) {
        return {};
      }
      return tokenEngine
        .readUser(key)
        .then(({ id }) => {
          if (!id) {
            throw new Error('Error.');
          }
          return collection.findOne({ id });
        })
        .then((user) => {
          if (!user) {
            throw new Error('No user matched.');
          }
          if (user.confirmed === false) {
            throw new Error('User not confirmed.');
          }
          const newToken = tokenEngine.createFromUser(user);
          return { token: newToken, user: cleanUser(user) };
        });
    },
    // Get user by email/realm and post new user
    register: (rawUser, pwd, key) => {
      const filter = { email: rawUser.email };
      rawUser.confirmed = !!key;
      rawUser.id = shortId.generate();
      if (!pwd || pwd.length < 6) {
        throw new Error('Password too short');
      }
      const init = key ? tokenEngine.verify(key) : Promise.resolve(filter);
      return init
        .then(({ email }) => {
          if (email !== rawUser.email) {
            throw new Error('Unexpected E-Mail address');
          }
          return Promise.all([
            collection.findOne(filter),
            passwordEngine.set(rawUser, pwd),
          ]);
        })
        .then(([currentUser, user]) => {
          if (currentUser) {
            throw new Error('USER_ALREADY_EXISTS Error.');
          }
          return collection.insert(user);
        })
        .then((result) => {
          let confirmationToken;
          if (!result.confirmed) {
            confirmationToken = tokenEngine.createFromUser(result);
            if (mail) {
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
    confirm: key =>
      tokenEngine
        .readUser(key)
        .then(({ id }) => {
          if (!id) {
            throw new Error('Error.');
          }
          return Promise.all([
            id,
            collection.update({ id }, { $set: { confirmed: true } }),
          ]);
        })
        .then(([id]) => collection.findOne({ id }))
        .then(user => ({
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user),
        })),
    //
    totp: (id) => {
      const secret = speakeasy.generateSecret({ length: 20 }).base32;
      let user = null;
      return monk
        .read('user', { id })
        .then((currentUser) => {
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
          return qr(user.email, secret, issuer);
        })
        .then((qr) => {
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
    totpConfirm: (t, totp) => {
      let secret;
      return tokenEngine
        .verify(t)
        .then((untoken) => {
          if (!untoken) {
            throw new Error('TOTP token error');
          }
          const { id, disable } = untoken;
          if (disable) {
            secret = null;
          } else {
            secret = untoken.secret;
            var verified = speakeasy.totp.verify({
              secret,
              encoding: 'base32',
              token: totp,
            });
            if (!verified) {
              throw new Error('TOTP token error');
            }
          }
          return monk.read('user', { id });
        })
        .then((currentUser) => {
          if (!currentUser) {
            throw new Error('No user matched.');
          }
          return collection.update(
            { id: currentUser.id },
            { $set: { totp: secret } }
          );
        })
        .then(user => true);
    },
    forgot: email =>
      collection.findOne({ email }).then((user) => {
        if (!user) {
          throw new Error('No user matched.');
        }
        if (user.confirmed === false) {
          throw new Error('User not confirmed.');
        }
        const requestToken = tokenEngine.createFromUser(user);

        if (mail) {
          mail(mails.forgot, { to: user.email, token: requestToken })
            .then(x => console.log('Mail success'))
            .catch(err => console.error(err));
        }
        return true;
      }),
    reset: (key, pwd) =>
      tokenEngine
        .readUser(key)
        .then(({ id }) => {
          if (!id) {
            throw new Error('Error.');
          }
          return collection.findOne({ id });
        })
        .then((user) => {
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
          collection.update(
            { id: user.id },
            { $set: { salt: user.salt, hash: user.hash } }
          )
        )
        .then(user => ({
          token: tokenEngine.createFromUser(user),
          user: cleanUser(user),
        })),
  };
};
