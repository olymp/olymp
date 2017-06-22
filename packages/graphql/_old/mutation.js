import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'mutate',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter2(node, directive, { ast }) {
      const type = node.type;
      const collectionName = type.name.value;

      const field = parse(`
        type Mutation {
          func(id: String, input: ${capitalize(
            type.name.value
          )}Input, operationType: OPERATION_TYPE, type: MUTATION_TYPE): ${type
        .name.value}
        }
      `).definitions[0].fields[0];

      node.arguments = node.arguments.concat(field.arguments);
      resolvers.Mutation[node.name.value] = write(
        collectionName,
        node.name.value
      );
    },
  },
};
