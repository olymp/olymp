import {
  addInput,
  addFields,
  addInterfaces,
  getDirectiveValue,
} from 'olymp-graphql/server';
import { addQueryInput, addSortInput, addQueries } from '../mongodb';

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
          # @label("Hinzugefügt am")
          createdAt: DateTime
          # @label("Geändert am")
          updatedAt: DateTime
          # @label("Hinzugefügt von")
          createdBy: User @relation
          # @label("Geändert von")
          updatedBy: User @relation
        `,
      );
      const name = getDirectiveValue(node, 'collection', 'name');
      if (name) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers, name);
    },
    enter2(node, d, { ast, resolvers }) {
      addInput(ast, node);
      const name = getDirectiveValue(node, 'collection', 'name');
      if (name) {
        addInterfaces(ast, node, 'CollectionInterface');
      }
      addQueryInput(ast, node);
      addSortInput(ast, node);
      addQueries(ast, node, resolvers, name);
    },
  },
};
