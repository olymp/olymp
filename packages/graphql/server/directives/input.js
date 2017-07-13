var addInput = require('../utils').addInput;
export default {
    name: 'input',
    description: 'Marks a type as a relative.',
    resolveStatic: {
        enter2: function (node, directive, _a) {
            var ast = _a.ast;
            addInput(ast, node);
        },
    },
};
//# sourceMappingURL=input.js.map