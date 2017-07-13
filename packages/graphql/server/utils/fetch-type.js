import { visit, BREAK } from 'graphql/language';
export default function (condition) { return function (ast) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var currentNode;
    visit(ast, {
        enter: function (node) {
            if (condition.apply(void 0, [node].concat(args))) {
                currentNode = node;
                return BREAK;
            }
            return undefined;
        },
    });
    return currentNode;
}; };
//# sourceMappingURL=fetch-type.js.map