const mails = require('./mails');
const speakeasy = require('speakeasy');
const qr = (email, x, issuer) => new Promise((yay, nay) => {
  require('qrcode').toString(`otpauth://totp/${email}?secret=${x}&issuer=${issuer || 'Olymp'}`, { type: 'svg' }, (err, data) => err ? nay(err) : yay(data));
});
const cleanUser = (user) => {
  const cleaned = Object.assign({}, user);
  delete cleaned.hash;
  delete cleanUser.salt;
  return cleaned;
};

module.exports = ({ adapter, password, token, mail, issuer }) => {
  return {
    checkTokenValue: (key, k) => {
      return token.verify(key).then(c => c[k]);
    },
    checkToken: (key) => {
      return token.readUser(key).then(() => {
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
        return password.match(user, pw);
      }).then((isValid) => {
        if (!isValid) throw new Error('Wrong password.');
        // TOTP
        if (user.totp && !totp) {
          throw new Error(`Please provide a totp token`);
        } else if (user.totp) {
          var verified = speakeasy.totp.verify({ secret: user.totp,  encoding: 'base32', token: totp });
          if (!verified) throw new Error('TOTP token error');
        }
        // END TOTP
        return { token: token.createFromUser(user), user: cleanUser(user) };
      });
    },
    verify: (key) => {
      // TODO remove!
      if (!key) return {};
      return token.readUser(key).then(({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      }).then((user) => {
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        const newToken = token.createFromUser(user);
        return { token: newToken, user: cleanUser(user) };
      });
    },
    // Get user by email/realm and post new user
    register: (rawUser, pwd, key) => {
      const filter = { email: rawUser.email };
      rawUser.confirmed = false;
      if (!pwd || pwd.length < 6) throw new Error('Password too short');
      return token.verify(key).then(({ email }) => {
        if (email !== rawUser.email) throw new Error('Unexpected E-Mail address');
        return Promise.all([
          adapter.read('user', { filter }),
          password.set(rawUser, pwd),
        ]);
      }).then(([currentUser, user]) => {
        if (currentUser) throw new Error('USER_ALREADY_EXISTS Error.');
        return adapter.write('user', user);
      }).then((result) => {
        const confirmationToken = token.createFromUser(result);
        console.log('CONFIRM', confirmationToken);
        if (mail) mail(mails.register({ email: rawUser.email, token: confirmationToken }))
          .then(x => console.log('Mail success')).catch(err => console.error(err));
        return { token: confirmationToken, user: cleanUser(result) };
      });
    },
    // Get user by id and update user
    confirm: (key) => {
      return token.readUser(key).then((({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      })).then((currentUser) => {
        if (!currentUser) throw new Error('No user matched.');
        currentUser.confirmed = true;
        return adapter.write('user', currentUser);
      }).then((user) => {
        return { token: token.createFromUser(user), user: cleanUser(user) };
      });
    },
    //
    totp: (id) => {
      const secret = speakeasy.generateSecret({ length: 20 }).base32;
      let user = null;
      return adapter.read('user', { id }).then((currentUser) => {
        if (!currentUser) throw new Error('No user matched.');
        if (currentUser.totp) {
          return { token: token.create({ id: currentUser.id, disable: true }), enabled: true, user: cleanUser(currentUser) };
        }
        user = currentUser;
        return qr(user.email, secret, issuer);
      }).then((qr) => {
        if (typeof qr === 'object') return qr;
        return { token: token.create({ id: user.id, secret }), user: cleanUser(user), qr };
      });
    },
    //
    totpConfirm: (t, totp) => {
      let secret;
      return token.verify(t).then((untoken) => {
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
        const requestToken = token.createFromUser(user);
        console.log('FORGOT', requestToken);

        if (mail) mail(mails.forgot({ email: user.email, token: requestToken }))
          .then(x => console.log('Mail success')).catch(err => console.error(err));
        return true;
      });
    },
    reset: (key, pwd) => {
      return token.readUser(key).then((({ id }) => {
        if (!id) throw new Error('Error.');
        return adapter.read('user', { id });
      })).then((user) => {
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        return password.set(user, pwd);
      }).then(user => adapter.write('user', user))
        .then(user => ({ token: token.createFromUser(user), user: cleanUser(user) }));
    },
  };
};
