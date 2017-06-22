import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'crud',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter2(node, directive, { ast, resolvers }) {
      // Add InputType
      addInputTypes(ast, node.name.value);

      // Find Query object in AST
      const Query = ast.definitions.find(
        x => x.name && x.name.value === 'Query'
      );
      const Mutation = ast.definitions.find(
        x => x.name && x.name.value === 'Mutation'
      );
      if (Query && Mutation) {
        // Get name of decorated type
        const name = node.name.value;
        const lower = lowerFirst(node.name.value);

        // Create all type of queries and mutations
        const definitions = parse(`
          type Query {
            ${lower}List(query: ${name}Query, sort: ${name}Sort, limit: Int, skip: Int): [${name}]
            ${lower}(id: String, query: ${name}Query, sort: ${name}Sort): ${name}
          }
          type Mutation {
            ${lower}(id: String, type: MUTATION_TYPE, input: ${name}Input): ${name}
          }
        `).definitions;

        // Iterate over queries
        definitions[0].fields.forEach((field) => {
          // Add to AST
          Query.fields.push(field);
          // Create resolvers for queries
          const isList = field.type.kind === 'ListType';
          resolvers.Query[field.name.value] = isList ? list(name) : one(name);
        });
        // Iterate over mutations
        definitions[1].fields.forEach((field) => {
          // Add to AST
          Mutation.fields.push(field);
          // Create resolvers for mutations
          resolvers.Mutation[field.name.value] = write(name);
        });
      }
    },
  },
};
