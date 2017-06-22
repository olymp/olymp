import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'mongodb',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node) {
      const type = parse(`
        type ___Model {
          id: String
        }
      `).definitions[0];
      node.fields = node.fields.concat(type.fields);
    },
  },
};
