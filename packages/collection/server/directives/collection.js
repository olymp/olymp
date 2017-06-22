import { addQueryInput, addSortInput, addQueries } from '../mongodb';
import { addInput, addFields } from 'olymp-graphql/server';

export default {
  name: 'collection',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node, d, { ast }) {
      addFields(
        ast,
        node,
        `
        id: String
        tags: [String]
        state: DOCUMENT_STATE
        createdAt: DateTime
        updatedAt: DateTime
        createdBy: User @relation
        updatedBy: User @relation
      `
      );
      addInput(ast, node);
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node);
    },
    leave(node) {
      /* resolvers.Query = resolvers.Query || {};
      resolvers.Mutation = resolvers.Mutation || {};
      resolvers[node.name.value] = resolvers[node.name.value] || {};*/
    },
  },
};
