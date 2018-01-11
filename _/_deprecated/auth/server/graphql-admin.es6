import shortID from 'shortid';
import mails from './mails';

export default ({ attributes = '', schema = '' } = {}) => ({
  name: 'auth-admin',
  queries: `
    invitationList: [Invitation]
    invitation(id: String): Invitation
    userList: [User]
    user(id: String): User
  `,
  mutations: `
    user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User
    invitation(email: String!, name: String, scope: Json): Invitation
  `,
  resolvers: {
    queries: {
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
    },
    mutations: {
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
  `,
});
