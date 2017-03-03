const { registerMail, forgotMail } = require('./mails');

const cleanUser = (user) => {
  const cleaned = Object.assign({}, user);
  delete cleaned.hash;
  delete cleanUser.salt;
  return cleaned;
};

module.exports = ({ adapter, password, token, mail }) => {
  return {
    checkToken: (key) => {
      return token.readUser(key).then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    },
    getUser: id => adapter.read('user', { id }).then(cleanUser),
    login: (email, pw) => {
      const filter = { email };
      let user = null;
      return adapter.read('user', { filter }).then((usr) => {
        user = usr;
        if (!user) throw new Error('No user matched.');
        if (user.confirmed === false) throw new Error('User not confirmed.');
        return password.match(user, pw);
      }).then((isValid) => {
        if (!isValid) throw new Error('Wrong password.');
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
        const newToken = token.createFromUser(user);
        return { token: newToken, user: cleanUser(user) };
      });
    },
    // Get user by email/realm and post new user
    register: (rawUser, pwd) => {
      const filter = { email: rawUser.email };
      rawUser.confirmed = false;
      return Promise.all([
        adapter.read('user', { filter }),
        password.set(rawUser, pwd),
      ]).then(([currentUser, user]) => {
        if (currentUser) throw new Error('USER_ALREADY_EXISTS Error.');
        return adapter.write('user', user);
      }).then((result) => {
        const confirmationToken = token.create(result.id);
        if (mail) registerMail(mail, { email: rawUser.email, token: confirmationToken })
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
        currentUser.confirmed = true;
        return adapter.write('user', currentUser);
      }).then((user) => {
        if (!user) throw new Error('No user matched.');
        return { token: token.createFromUser(user), user: cleanUser(user) };
      });
    },
    forgot: (email) => {
      return adapter.read('user', { filter: { email } }).then((user) => {
        if (!user) throw new Error('No user matched.');
        const requestToken = token.create(user.id);
        if (mail) forgotMail(mail, { email: user.email, token: requestToken })
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
        return password.set(user, pwd);
      }).then(user => adapter.write('user', user))
        .then(user => cleanUser(user));
    },
  };
};
