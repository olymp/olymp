import { hasDirective } from './tools';
const { parse } = require('graphql/language');
const capitalize = require('lodash/upperFirst');
const lowerFirst = require('lodash/lowerFirst');
const { list, one, write, addInputTypes } = require('../utils');

export default {
  name: 'stamp',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter(node) {
      const type = parse(`
        type ___Model {
          state: DOCUMENT_STATE
        }
      `).definitions[0];
      node.fields = node.fields.concat(type.fields);
    },
  },
  hooks: {
    before: (args, { model, type, returnType }, { ast }) => {
      if (
        type === 'QUERY' &&
        returnType.toString().indexOf('[') === 0 &&
        hasDirective(ast, model, 'state')
      ) {
        const query = args.query || {};
        if (!query.state) {
          query.state = { eq: 'PUBLISHED' };
          args.query = query;
        }
        return args;
      } else if (
        type === 'MUTATION' &&
        args.input &&
        !args.input.state &&
        !args.id
      ) {
        args.input.state = 'DRAFT';
        return args;
      }
    },
  },
};
