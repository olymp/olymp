import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar Color\n  ",
    resolvers: {
        Color: new GraphQLScalarType({
            name: 'Color',
            description: 'The Color scalar type represents color in "red" or "#FFF" or "#FFFFFF" format.',
            parseValue: function (value) {
                return value;
            },
            serialize: function (value) {
                return value;
            },
            parseLiteral: function (ast) {
                if (ast.kind !== Kind.STRING) {
                    throw new GraphQLError("Query error: Can only parse STRING got a: " + ast.kind + ".", [ast]);
                }
                return ast.value;
            },
        }),
    },
};
//# sourceMappingURL=color.js.map