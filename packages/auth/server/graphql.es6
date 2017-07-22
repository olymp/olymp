import mails from './mails';
import shortID from 'shortid';
import { get } from 'lodash';

export default ({ attributes = '' } = {}) => ({
  name: 'user',
  queries: `
      checkTokenMail(token: String): String
      checkToken(token: String): Boolean
      verify(token: String): User
      invitationList: [Invitation]
      invitation(id: String): Invitation
      userList: [User]
      user(id: String): User
      totp: TokenAndQR
    `,
  mutations: `
      totpConfirm(token: String, totp: String): Boolean
      confirm(token: String): User
      forgot(email: Email): Boolean
      register(input: UserInput, password: String, token: String): User
      reset(token: String, password: String): User
      login(email: Email, password: String, totp: String, useToken: Boolean): User
      logout: Boolean
      user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User
      invitation(id: String, input: InvitationInput, type: USER_MUTATION_TYPE): Invitation
    `,
  resolvers: {
    queries: {
      checkTokenMail: (source, args, { authEngine }) =>
        authEngine.checkTokenValue(args.token, 'email'),
      checkToken: (source, args, { authEngine }) =>
        authEngine.checkToken(args.token),
      verify: (source, { token }, { authEngine, session }) => {
        return token
          ? authEngine.verify(token).then(({ user, token }) => {
              user.token = token;
              return user;
            })
          : get(session, 'userId')
            ? authEngine.getUser(get(session, 'userId'))
            : null;
      },
      // verify: (source, args) => auth.verify(args.token),
      invitationList: (source, args, { user, monk }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        return monk.collection('invitation').find({});
      },
      invitation: (source, args, { user, monk }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        return monk.collection('invitation').findOne({ id: args.id });
      },
      userList: (source, args, { user, monk }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        return monk.collection('user').find({});
      },
      user: (source, args, { user, monk }) => {
        if (user && user.isAdmin) {
        } else if (user && user.id === args.id) {
        } else {
          throw new Error('No permission');
        }
        return monk.collection('user').findOne({ id: args.id });
      },
      totp: (source, args, { session, authEngine }) =>
        authEngine.totp(session.userId).then(x => x),
    },
    mutations: {
      register: (source, args, { authEngine }) =>
        authEngine
          .register(args.input, args.password, args.token)
          .then(x => x.user),
      forgot: (source, args, { authEngine }) => authEngine.forgot(args.email),
      reset: (source, args, { authEngine }) =>
        authEngine.reset(args.token, args.password).then(({ user }) => user),
      totpConfirm: (source, args, { authEngine }) =>
        authEngine.totpConfirm(args.token, args.totp).then(x => x),
      login: (
        source,
        { email, password, totp, useToken },
        { session, authEngine }
      ) =>
        authEngine.login(email, password, totp).then(({ user, token }) => {
          if (useToken) {
            user.token = token;
          } else {
            session.userId = user.id; // eslint-disable-line no-param-reassign
          }
          return user;
        }),
      logout: (source, args, { session }) => {
        delete session.userId; // eslint-disable-line no-param-reassign
        return true;
      },
      confirm: (source, args, { authEngine }) =>
        authEngine.confirm(args.token).then(({ user }) => user),
      user: (source, { id, input, type }, { user, monk }) => {
        if (user && user.isAdmin) {
        } else if (user && user.id === id) {
        } else {
          throw new Error('No permission');
        }
        // eslint-disable-line no-shadow
        if (type && type === 'REMOVE') {
          return monk.collection('user').remove({ id }).then(x => ({ id }));
        }
        input.id = id || shortID.generate();
        if (id) {
          return monk
            .collection('user')
            .update({ id }, input, { upsert: true })
            .then(x => input);
        }
        return monk.collection('user').insert(input).then(x => input);
      },
      invitation: (source, args, { user, monk, mail, authEngine }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        const collection = monk.collection('invitation');
        // eslint-disable-line no-shadow
        if (args.type && args.type === 'REMOVE') {
          return monk.remove('invitation', Object.assign({}, args));
        } else if (args.input) {
          args = Object.assign({}, args, args.input); // eslint-disable-line no-param-reassign
          delete args.input; // eslint-disable-line no-param-reassign
        }
        delete args.type; // eslint-disable-line no-param-reassign
        args.expiry = +new Date();
        args.token = authEngine.tokenEngine.create({ email: args.email });
        return monk.collection('invitation').insert(args).then(u => {
          console.log('INVITE', u.token, u);
          if (mail) {
            mail(mails.invite, {
              to: u.email,
              token: u.token,
              name: u.name,
            })
              .then(x => console.log('Mail success', x.ok))
              .catch(err => console.error(err));
          }
          return u;
        });
        // if (args.id) return collection.updateOne({ id: args.id }, { $set: args });
        // else return collection.insertOne(args);
      },
    },
  },
  schema: `
    enum USER_MUTATION_TYPE {
      UPDATE
      REPLACE
      REMOVE
      INSERT
    }
    type Invitation @input {
      id: String
      email: Email
      token: String
      expiry: DateTime
      name: String
    }
    type User @input {
      isAdmin: Boolean
      id: String
      email: Email
      token: String
      name: String
      ${attributes}
    }
    type UserAndToken {
      user: User
      token: String
    }
    type TokenAndQR {
      enabled: Boolean
      token: String
      qr: String
    }
  `,
});

/* setTimeout(() => {
    if (!db) {
      return;
    }
    const collection = monk.collection('user');
    collection
      .findOne({})
      .then((one) => {
        if (one) {
          return;
        }
        auth
          .register(
            { email: 'admin@olymp-athena.com', name: 'Administrator' },
            'admin12'
          )
          .then(({ token }) => {
            auth.confirm(token);
          });
      })
      .catch(err => console.log(err));
  }, 5000);*/
