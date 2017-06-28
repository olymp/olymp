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
        createdBy: (source, args, { monk }) =>
          monk.collection('user').findOne({ id: source.createdById }),
      },
      queries: {
        fileStack: (source, args, { monk }) =>
          monk.collection('file').findOne({ id: args.id }),
        fileStackList: (source, { tags }, { monk }) =>
          monk.collection('file').findOne({ tags }),
      },
      mutations: {
        fileStack: (source, { id, input }, { monk, user }) => {
          if (!id) {
            id = shortId.generate();
          }
          let item;
          return fetch(
            `https://www.filestackapi.com/api/file/${input.handle}/metadata?width=true&height=true`
          )
            .then(response => response.json())
            .then((json) => {
              item = transform({ id, ...input, ...json }, user);
              return monk
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
