import { parse } from 'graphql/language';
export default function (ast, node, argsToAdd) {
    var args = node.arguments || node;
    var type = parse("\n    type Query {\n      func(" + argsToAdd + "): Boolean\n    }\n  ").definitions[0].fields[0];
    type.arguments.forEach(function (field) { return args.push(field); });
};
//# sourceMappingURL=add-arguments.js.map