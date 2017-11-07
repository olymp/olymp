import shortID from 'shortid';
import mails from './mails';

export default (
  { attributes = '', schema = '', getQueries, getMutations, User = {} } = {},
) => {
  let queries = {
    checkTokenMail: (source, args, { authEngine }) =>
      authEngine.checkTokenValue(args.token, 'email'),
    checkToken: (source, args, { authEngine }) =>
      authEngine.checkToken(args.token),
    verify: (source, x, { user }) => user,
    // verify: (source, args) => auth.verify(args.token),
    invitationList: (source, args, { user, db }) => {
      if (!user || !user.isAdmin) {
        throw new Error('No permission');
      }
      return db
        .collection('invitation')
        .find({})
        .toArray();
    },
    invitation: (source, args, { user, db }) => {
      if (!user || !user.isAdmin) {
        throw new Error('No permission');
      }
      return db.collection('invitation').findOne({ id: args.id });
    },
    userList: (source, args, { user, db }) => {
      console.log(user);
      if (!user || !user.isAdmin) {
        throw new Error('No permission');
      }
      return db
        .collection('user')
        .find({})
        .toArray();
    },
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
  };
  if (getQueries) {
    queries = getQueries(queries);
  }
  let mutations = {
    register: (source, { password, token, input }, { authEngine, db }) =>
      authEngine
        .register(db, { ...input, confirmed: true }, password, token)
        .then(x => x.user),
    forgot: (source, args, { authEngine, db }) =>
      authEngine.forgot(db, args.email),
    reset: (source, args, { authEngine, db }) =>
      authEngine.reset(db, args.token, args.password).then(({ user }) => user),
    totpConfirm: (source, args, { authEngine, db }) =>
      authEngine.totpConfirm(db, args.token, args.totp).then(x => x),
    login: (source, { email, password, totp }, { authEngine, db, session }) =>
      authEngine.login(db, email, password, totp).then(({ user, token }) => {
        if (session) {
          session.token = token;
        }
        user.token = token;
        return user;
      }),
    logout: (source, args, { session }) => {
      if (session) {
        delete session.token;
      } // eslint-disable-line no-param-reassign
      return true;
    },
    user: (source, { id, input, type }, { user, db }) => {
      console.log(user);
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
    invitation: (
      source,
      { email, name, scope },
      { user, db, mail, authEngine },
    ) => {
      if (!user || !user.isAdmin) {
        if (process.env.NODE_ENV === 'production') {
          throw new Error('No permission');
        }
      }
      // eslint-disable-line no-shadow
      const token = authEngine.tokenEngine.create(
        scope ? { email, scope } : { email },
      );
      return db
        .collection('invitation')
        .insertOne({
          email,
          name,
          scope,
          token,
          createdAt: new Date(),
          createdBy: user ? user.id : undefined,
          id: shortID.generate(),
        })
        .then(({ ops }) => {
          const doc = ops[0];
          if (mail) {
            mail(mails.invite, {
              to: doc.email,
              token: doc.token,
              name: doc.name,
            })
              .then(x => console.log('Mail success', x.ok))
              .catch(err => console.error(err));
          }
          return doc;
        });
      // if (args.id) return collection.updateOne({ id: args.id }, { $set: args });
      // else return collection.insertOne(args);
    },
  };
  if (getMutations) {
    mutations = getMutations(mutations);
  }
  return {
    name: 'user',
    queries: `
      checkTokenMail(token: String): String
      checkToken(token: String): Boolean
      verify: User
      invitationList: [Invitation]
      invitation(id: String): Invitation
      userList: [User]
      user(id: String): User
      totp: TokenAndQR
    `,
    mutations: `
      totpConfirm(token: String, totp: String): Boolean
      forgot(email: Email): Boolean
      register(input: UserInput, password: String, token: String): User
      reset(token: String, password: String): User
      login(email: Email, password: String, totp: String): User
      logout: Boolean
      user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User
      invitation(email: String!, name: String, scope: Json): Invitation
    `,
    resolvers: {
      User: {
        ...User,
      },
      queries,
      mutations,
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
      ${schema}
    `,
  };
};
