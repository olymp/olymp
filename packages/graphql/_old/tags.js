import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'tags',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node) {
      const type = parse(`
        type ___Model {
          tags: [String]
        }
      `).definitions[0];
      node.fields = node.fields.concat(type.fields);
    },
  },
};
