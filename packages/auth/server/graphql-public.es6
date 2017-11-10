export default ({ attributes = '', schema = '', User = {} } = {}) => ({
  name: 'auth-public',
  queries: `
    checkTokenMail(token: String): String
    checkToken(token: String): Boolean
    verify: User
  `,
  mutations: `
    forgot(email: Email): Boolean
    register(input: UserInput, password: String, token: String): User
    reset(token: String, password: String): User
    login(email: Email, password: String, totp: String): User
  `,
  resolvers: {
    queries: {
      checkTokenMail: (source, args, { authEngine }) =>
        authEngine.checkTokenValue(args.token, 'email'),
      checkToken: (source, args, { authEngine }) =>
        authEngine.checkToken(args.token),
      verify: (source, x, { user }) => user,
    },
    mutations: {
      register: (source, { password, token, input }, { authEngine, db }) =>
        authEngine
          .register(db, { ...input, confirmed: true }, password, token)
          .then(x => x.user),
      forgot: (source, args, { authEngine, db }) =>
        authEngine.forgot(db, args.email),
      reset: (source, args, { authEngine, db }) =>
        authEngine
          .reset(db, args.token, args.password)
          .then(({ user }) => user),
      login: (source, { email, password, totp }, { authEngine, db, session }) =>
        authEngine.login(db, email, password, totp).then(({ user, token }) => {
          if (session) {
            session.token = token;
          }
          user.token = token;
          return user;
        }),
    },
  },
  schema: `
    enum USER_MUTATION_TYPE {
      UPDATE
      REPLACE
      REMOVE
      INSERT
    }
    type User @input {
      isAdmin: Boolean
      id: String
      email: Email
      token: String
      name: String
      ${attributes}
    }
    ${schema}
  `,
});
