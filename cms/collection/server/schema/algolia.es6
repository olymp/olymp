import { get, isArray } from 'lodash';
import { createTypeFetcher } from 'olymp-graphql/server';

const fetchType = createTypeFetcher((node, name) => get(node, 'kind') === 'ObjectTypeDefinition' && get(node, 'name.value') === name);

export default {
  name: 'algolia',
  queries: `
    algolia(text: String!): Algolia
  `,
  onAfter: ({ keys, value, context, resolverAST, ast }) => {
    if (!context || !context.algolia) return;
    if (keys[0] === 'RootMutation' && value) {
      const typeName = get(resolverAST, 'returnType.name');
      const type = fetchType(ast, typeName);
      const directive = get(type, 'directives', []).find(d => get(d, 'name.value') === 'collection');
      if (type && directive) {
        const index = context.algolia.initIndex(context.app.id);
        const asArray = isArray(value) ? value : [value];
        index.deleteObjects(asArray.filter(x => x.state !== 'PUBLISHED').map(x => x.id), (err) => {
          console.log('OK', err);
        });
        index.addObjects(asArray.filter(x => x.state === 'PUBLISHED').map(x => ({ ...x, objectID: x.id })), (err) => {
          console.log('OK', err);
        });
      }
    }
  },
  resolvers: {
    queries: {
      algolia: (source, { text }, { app, algolia }) => {
        const index = algolia.initIndex(app.id);
        return new Promise((resolve, reject) => {
          index.search(text, (err, content) => {
            if (err) {
              reject(err);
              return;
            }
            content.id = text;
            resolve(content);
          });
        });
      },
    },
  },
  schema: `
    type Algolia {
      id: String
      nbHits: Int
      page: Int
      nbPages: Int
      hitsPerPage: Int
      processingTimeMS: Int
      exhaustiveNbHits: Boolean
      query: String,
      params: String
      hits: [AlgoliaHit]
    }
    type AlgoliaHit {
      id: String
      image: Image
      _type: String
      name: String
      tags: [String]
      state: DOCUMENT_STATE
      createdAt: DateTime
      createdBy: User
      updatedAt: DateTime
      updatedBy: User
    }
  `,
};
