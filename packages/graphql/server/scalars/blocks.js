import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';
var blocks = {
    name: 'Blocks',
    description: 'The JSON scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/ publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize: function (value) { return value; },
    parseValue: function (value) { return value; },
    parseLiteral: function (ast) {
        switch (ast.kind) {
            case Kind.STRING:
            case Kind.BOOLEAN:
                return ast.value;
            case Kind.INT:
            case Kind.FLOAT:
                return parseFloat(ast.value);
            case Kind.OBJECT: {
                var value_1 = Object.create(null);
                ast.fields.forEach(function (field) {
                    value_1[field.name.value] = blocks.parseLiteral(field.value);
                });
                return value_1;
            }
            case Kind.LIST:
                return ast.values.map(blocks.parseLiteral);
            default:
                return null;
        }
    },
};
export default {
    schema: "\n    scalar Blocks\n  ",
    resolvers: {
        Blocks: new GraphQLScalarType(blocks),
    },
};
//# sourceMappingURL=blocks.js.map