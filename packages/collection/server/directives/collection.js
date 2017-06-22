import { addQueryInput, addSortInput, addQueries } from '../mongodb';
import {
  addInput,
  addFields,
  addInterfaces,
  getDirectiveValue,
} from 'olymp-graphql/server';

export default {
  name: 'collection',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node, d, { ast, resolvers }) {
      addFields(
        ast,
        node,
        `
        id: String
        name: String
        tags: [String]
        state: DOCUMENT_STATE
        createdAt: DateTime
        updatedAt: DateTime
        createdBy: User @relation
        updatedBy: User @relation
      `
      );
      addInput(ast, node);
      if (getDirectiveValue(node, 'collection', 'name')) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers);
    },
    leave(node) {
      /* resolvers.Query = resolvers.Query || {};
      resolvers.Mutation = resolvers.Mutation || {};
      resolvers[node.name.value] = resolvers[node.name.value] || {};*/
    },
  },
};
