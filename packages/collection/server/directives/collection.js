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
          # @label("Schlagworte")
          tags: [String]
          # @label("Status")
          state: DOCUMENT_STATE
          createdAt: DateTime
          updatedAt: DateTime
          createdBy: User @relation
          updatedBy: User @relation
        `
      );
      if (getDirectiveValue(node, 'collection', 'name')) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers);
    },
    enter2(node, d, { ast, resolvers }) {
      addInput(ast, node);
      if (getDirectiveValue(node, 'collection', 'name')) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers);
    },
  },
};
