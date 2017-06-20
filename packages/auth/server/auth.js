import mails from './mails';
import createPasswordEngine from './utils/password-engine';
import createTokenEngine from './utils/token-engine';
import speakeasy from 'speakeasy';

const qr = (email, x, issuer) => new Promise((yay, nay) => {
  require('qrcode').toString(`otpauth://totp/${email}?secret=${x}&issuer=${issuer || 'Olymp'}`, { type: 'svg' }, (err, data) => err ? nay(err) : yay(data));
});
const cleanUser = (user) => {
  const cleaned = Object.assign({}, user);
  delete cleaned.hash;
  delete cleanUser.salt;
  return cleaned;
};

export default ({ adapter, passwordEngine, secret, tokenEngine, mail, issuer }) => {
  if (!passwordEngine) passwordEngine = createPasswordEngine({ });
  if (!tokenEngine) tokenEngine = createTokenEngine({ secret });
  return {
    passwordEngine,
    tokenEngine,
    checkTokenValue: (key, k) => {
      return tokenEngine.verify(key).then(c => c[k]);
    },
    checkToken: (key) => {
      return tokenEngine.readUser(key).then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    },
    getUser: id => adapter.read('user', { id }).then(cleanUser),
    login: (email, pw, totp) => {
      const filter = { email };
      let user = null;
      return adapter.read('user', { filter }).then((usr) => {
        user = usr;
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        return passwordEngine.match(user, pw);
      }).then((isValid) => {
        if (!isValid) throw new Error('Wrong password.');
        // TOTP
        if (user.totp && !totp) {
          throw new Error('Please provide a totp token');
        } else if (user.totp) {
          const verified = speakeasy.totp.verify({ secret: user.totp, encoding: 'base32', token: totp });
          if (!verified) throw new Error('TOTP token error');
        }
        // END TOTP
        return { token: tokenEngine.createFromUser(user), user: cleanUser(user) };
      });
    },
    verify: (key) => {
      // TODO remove!
      if (!key) return {};
      return tokenEngine.readUser(key).then(({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      }).then((user) => {
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        const newToken = tokenEngine.createFromUser(user);
        return { token: newToken, user: cleanUser(user) };
      });
    },
    // Get user by email/realm and post new user
    register: (rawUser, pwd, key) => {
      const filter = { email: rawUser.email };
      rawUser.confirmed = !!key;
      if (!pwd || pwd.length < 6) throw new Error('Password too short');
      const init = key ? tokenEngine.verify(key) : Promise.resolve(filter);
      return init.then(({ email }) => {
        if (email !== rawUser.email) throw new Error('Unexpected E-Mail address');
        return Promise.all([
          adapter.read('user', { filter }),
          passwordEngine.set(rawUser, pwd),
        ]);
      }).then(([currentUser, user]) => {
        if (currentUser) throw new Error('USER_ALREADY_EXISTS Error.');
        return adapter.write('user', user);
      }).then((result) => {
        let confirmationToken;
        if (!result.confirmed) {
          confirmationToken = tokenEngine.createFromUser(result);
          console.log('CONFIRM', confirmationToken);
          if (mail) mail(mails.register({ email: rawUser.email, token: confirmationToken }))
            .then(x => console.log('Mail success')).catch(err => console.error(err));
        }
        return { user: cleanUser(result), token: confirmationToken };
      });
    },
    // Get user by id and update user
    confirm: (key) => {
      return tokenEngine.readUser(key).then((({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      })).then((currentUser) => {
        if (!currentUser) throw new Error('No user matched.');
        currentUser.confirmed = true;
        return adapter.write('user', currentUser);
      }).then((user) => {
        return { token: tokenEngine.createFromUser(user), user: cleanUser(user) };
      });
    },
    //
    totp: (id) => {
      const secret = speakeasy.generateSecret({ length: 20 }).base32;
      let user = null;
      return adapter.read('user', { id }).then((currentUser) => {
        if (!currentUser) throw new Error('No user matched.');
        if (currentUser.totp) {
          return { token: tokenEngine.create({ id: currentUser.id, disable: true }), enabled: true, user: cleanUser(currentUser) };
        }
        user = currentUser;
        return qr(user.email, secret, issuer);
      }).then((qr) => {
        if (typeof qr === 'object') return qr;
        return { token: tokenEngine.create({ id: user.id, secret }), user: cleanUser(user), qr };
      });
    },
    //
    totpConfirm: (t, totp) => {
      let secret;
      return tokenEngine.verify(t).then((untoken) => {
        if (!untoken) throw new Error('TOTP token error');
        const { id, disable } = untoken;
        if (disable) {
          secret = null;
        } else {
          secret = untoken.secret;
          var verified = speakeasy.totp.verify({ secret, encoding: 'base32', token: totp });
          if (!verified) throw new Error('TOTP token error');
        }
        return adapter.read('user', { id });
      }).then((currentUser) => {
        if (!currentUser) throw new Error('No user matched.');
        currentUser.totp = secret;
        return adapter.write('user', currentUser);
      }).then((user) => {
        return true;
      });
    },
    forgot: (email) => {
      return adapter.read('user', { filter: { email } }).then((user) => {
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        const requestToken = tokenEngine.createFromUser(user);
        console.log('FORGOT', requestToken);

        if (mail) mail(mails.forgot({ email: user.email, token: requestToken }))
          .then(x => console.log('Mail success')).catch(err => console.error(err));
        return true;
      });
    },
    reset: (key, pwd) => {
      return tokenEngine.readUser(key).then((({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      })).then((user) => {
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        user.totp = null; // Disable TOTP
        return passwordEngine.set(user, pwd);
      }).then(user => adapter.write('user', user))
        .then(user => ({ token: tokenEngine.createFromUser(user), user: cleanUser(user) }));
    },
  };
};
