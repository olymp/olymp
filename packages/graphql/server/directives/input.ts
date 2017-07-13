const { addInput } = require('../utils');

export default {
  name: 'input',
  description: 'Marks a type as a relative.',
  resolveStatic: {
    enter2(node, directive, { ast }) {
      addInput(ast, node);
    },
  },
};
