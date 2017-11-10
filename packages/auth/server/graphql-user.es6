import shortID from 'shortid';

export default ({ attributes = '', schema = '', User = {} } = {}) => ({
  name: 'auth-user',
  queries: `
    user(id: String): User
    totp: TokenAndQR
  `,
  mutations: `
    totpConfirm(token: String, totp: String): Boolean
    logout: Boolean
    user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User
  `,
  resolvers: {
    User: {
      ...User,
    },
    queries: {
      user: (source, args, { user, db }) => {
        if (user && user.isAdmin) {
        } else if (user && user.id === args.id) {
        } else {
          throw new Error('No permission');
        }
        return db.collection('user').findOne({ id: args.id });
      },
      totp: (source, args, { session, authEngine, db }) =>
        authEngine.totp(db, session.userId).then(x => x),
    },
    mutations: {
      totpConfirm: (source, { token, totp }, { authEngine, db }) =>
        authEngine.totpConfirm(db, token, totp).then(x => x),
      logout: (source, args, { session }) => {
        if (session) {
          delete session.token;
        } // eslint-disable-line no-param-reassign
        return true;
      },
      user: (source, { id, input, type }, { user, db }) => {
        if (user && user.isAdmin) {
        } else if (user && user.id === id) {
        } else {
          throw new Error('No permission');
        }
        // eslint-disable-line no-shadow
        if (type && type === 'REMOVE') {
          return db
            .collection('user')
            .remove({ id })
            .then(x => ({ id }));
        }
        input.id = id || shortID.generate();
        if (id) {
          return db
            .collection('user')
            .update({ id }, { $set: input }, { upsert: true })
            .then(x => input);
        }
        return db
          .collection('user')
          .insert(input)
          .then(x => input);
      },
    },
  },
  schema: `
    type TokenAndQR {
      enabled: Boolean
      token: String
      qr: String
    }
  `,
});
