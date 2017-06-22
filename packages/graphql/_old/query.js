import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'query',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter2(node, directive, { ast }) {
      const isList = node.type.kind === 'ListType';
      const type = isList ? node.type.type : node.type;
      const collectionName = type.name.value;
      addInputTypes(collectionName, ast);

      const field = isList
        ? parse(`
        type Query {
          func(query: ${collectionName}Query, sort: ${collectionName}Sort, limit: Int, skip: Int): [${collectionName}]
        }
      `).definitions[0].fields[0]
        : parse(`
        type Query {
          func(id: String, query: ${collectionName}Query): ${collectionName}
        }
      `).definitions[0].fields[0];

      node.arguments = node.arguments.concat(field.arguments);
      resolvers.Query[node.name.value] = isList
        ? list(collectionName)
        : one(collectionName);
    },
  },
};
