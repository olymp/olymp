const getAuth = require('./auth');
const getToken = require('./utils/token');
const getPassword = require('./utils/password');
const mails = require('./mails');

const defaultHook = (source, args, context) => {
  if (!context.user) throw new Error('Must be authenticated');
  return Promise.resolve(args);
};

module.exports = (schema, { adapter, secret, mail, attributes = '', Query, Mutation } = {}) => {
  const token = getToken({ secret });
  const password = getPassword({ });
  const auth = getAuth({ adapter, password, token, mail, confirm: false });

  // checkToken(token: String): Boolean
  schema.addSchema({
    name: 'user',
    query: `
      checkTokenMail(token: String): String
      checkToken(token: String): Boolean
      verify: User
      invitationList: [Invitation]
      invitation(id: String): Invitation
      userList: [User]
      user(id: String): User
      totp: TokenAndQR
    `,
    mutation: `
      totpConfirm(token: String, totp: String): Boolean
      confirm(token: String): User
      forgot(email: Email): Boolean
      register(input: UserInput, password: String, token: String): User
      reset(token: String, password: String): User
      login(email: Email, password: String, totp: String): User
      logout: Boolean
      user(id: String, input: UserInput, operationType: OPERATION_TYPE): User
      invitation(id: String, input: InvitationInput, operationType: OPERATION_TYPE): Invitation
    `,
    resolvers: {
      Query: {
        checkTokenMail: (source, args) => auth.checkTokenValue(args.token, 'email'),
        checkToken: (source, args) => auth.checkToken(args.token),
        verify: (source, args, context) => context.session && context.session.userId && auth.getUser(context.session.userId),
        // verify: (source, args) => auth.verify(args.token),
        invitationList: (source, args, context) => {
          const hook = Query && Query.userList ? Query.userList : defaultHook;
          return hook(source, Object.assign({}, args), context).then(item => adapter.list('invitation', item));
        },
        invitation: (source, args, context) => {
          const hook = Query && Query.user ? Query.user : defaultHook;
          return hook(source, Object.assign({}, args), context).then(item => adapter.read('invitation', item));
        },
        userList: (source, args, context) => {
          if (!context.user || !context.user.isAdmin) throw new Error('No permission');
          const hook = Query && Query.userList ? Query.userList : defaultHook;
          return hook(source, Object.assign({}, args), context).then(item => adapter.list('user', item));
        },
        user: (source, args, context) => {
          if (context.user && context.user.isAdmin) {
          } else if (context.user && context.user.id === args.id) {
          } else throw new Error('No permission');
          const hook = Query && Query.user ? Query.user : defaultHook;
          return hook(source, Object.assign({}, args), context).then(item => adapter.read('user', item));
        },
        totp: (source, args, context) => auth.totp(context.session.userId).then((x) => {
          return x;
        }),
      },
      Mutation: {
        register: (source, args) => {
          return auth.register(args.input, args.password, args.token).then(x => x.user);
        },
        forgot: (source, args) => {
          return auth.forgot(args.email);
        },
        reset: (source, args) => {
          return auth.reset(args.token, args.password).then(({ user }) => user);
        },
        totpConfirm: (source, args, context) => auth.totpConfirm(args.token, args.totp).then((x) => {
          return x;
        }),
        login: (source, args, context) => auth.login(args.email, args.password, args.totp).then((userAndToken) => {
          context.session.userId = userAndToken.user.id; // eslint-disable-line no-param-reassign
          return userAndToken.user;
        }),
        logout: (source, args, context) => {
          delete context.session.userId; // eslint-disable-line no-param-reassign
          return true;
        },
        confirm: (source, args) => {
          return auth.confirm(args.token).then(({ user }) => user);
        },
        user: (source, args, context) => {
          if (context.user && context.user.isAdmin) {
          } else if (context.user && context.user.id === args.id) {
          } else throw new Error('No permission');
          const collection = adapter.db.collection('user');
          const hook = Mutation && Mutation.user ? Mutation.user : defaultHook;
          return hook(source, Object.assign({}, args), context).then((args) => { // eslint-disable-line no-shadow
            if (args.operationType && args.operationType === 'REMOVE') {
              return adapter.remove('user', Object.assign({}, args));
            } else if (args.input) {
              const id = args.id;
              args = Object.assign({}, args, args.input); // eslint-disable-line no-param-reassign
              delete args.input; // eslint-disable-line no-param-reassign
              args.id = id;
            }
            delete args.operationType; // eslint-disable-line no-param-reassign
            delete args.isAdmin;
            console.log('ARGS', args);
            return adapter.write('user', Object.assign({}, args));
            // if (args.id) return collection.updateOne({ id: args.id }, { $set: args });
            // else return collection.insertOne(args);
          });
        },
        invitation: (source, args, context) => {
          if (!context.user || !context.user.isAdmin) throw new Error('No permission');
          const collection = adapter.db.collection('invitation');
          const hook = Mutation && Mutation.invitation ? Mutation.invitation : defaultHook;
          return hook(source, Object.assign({}, args), context).then((args) => { // eslint-disable-line no-shadow
            if (args.operationType && args.operationType === 'REMOVE') {
              return adapter.remove('invitation', Object.assign({}, args));
            } else if (args.input) {
              args = Object.assign({}, args, args.input); // eslint-disable-line no-param-reassign
              delete args.input; // eslint-disable-line no-param-reassign
            }
            delete args.operationType; // eslint-disable-line no-param-reassign
            console.log('ARGS', args);
            args.expiry = +new Date();
            args.token = token.create({ email: args.email });
            return adapter.write('invitation', Object.assign({}, args)).then(u => {
              console.log('INVITE', u.token, u);
              if (mail) mail(mails.invite({ email: u.email, token: u.token, name: u.name }))
                .then(x => console.log('Mail success', x.ok)).catch(err => console.error(err));
              return u;
            });
            // if (args.id) return collection.updateOne({ id: args.id }, { $set: args });
            // else return collection.insertOne(args);
          });
        },
      },
    },
    schema: `
      type Invitation @input {
        id: String
        email: Email
        token: String
        expiry: DateTime
        name: String
      }
      type User {
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
  setTimeout(() => {
    if (!adapter.client) return;
    const collection = adapter.client.collection('user');
    collection.findOne({ }).then((one) => {
      if (one) return;
      auth.register({ email: 'admin@olymp-cms.com', name: 'Administrator' }, 'admin').then(({ token }) => {
        auth.confirm(token);
      });
    }).catch(err => console.log(err));
  }, 5000);
  return { auth };
};
