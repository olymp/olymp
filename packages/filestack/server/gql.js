import fetch from 'isomorphic-fetch';
import shortId from 'shortid';

const transform = (image, user) => ({ ...image, createdById: user.id });

export default (schema, { adapter } = {}) => {
  schema.addSchema({
    name: 'fileStack',
    query: `
      fileStack(id: String): FileStack
      fileStackList(tags: [String]): [FileStack]
    `,
    mutation: `
      fileStack(id: String, input: FileStackInput): FileStack
    `,
    resolvers: {
      FileStack: {
        createdBy: source =>
          adapter.db.collection('user').findOne({ id: source.createdById }),
      },
      Query: {
        fileStack: (source, args) =>
          adapter.db.collection('file').findOne({ id: args.id }),
        fileStackList: (source, { tags }) =>
          adapter.db.collection('file').findOne({ tags }),
      },
      Mutation: {
        fileStack: (source, { id, input }, context) => {
          if (!id) { id = shortId.generate(); }
          let item;
          return fetch(
            `https://www.filestackapi.com/api/file/${input.handle}/metadata?width=true&height=true`
          )
            .then(response => response.json())
            .then((json) => {
              item = transform({ id, ...input, ...json }, context.user);
              return adapter.db
                .collection('file')
                .updateOne({ id }, item, { upsert: true });
            })
            .then(() => item);
        },
      },
    },
    schema: `
      type FileStack @input {
        id: String
        handle: String
        name: String
        type: String
        crop: [Int]
        width: Int
        height: Int
        bytes: Int
        tags: [String]
        caption: String
        source: String
        state: DOCUMENT_STATE
        createdAt: String
        createdById: String
        createdBy: User
      }
    `,
  });
};
