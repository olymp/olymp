import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar Url\n  ",
    resolvers: {
        Url: new GraphQLScalarType({
            name: 'Url',
            description: 'The website scalar type represents website url.',
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
//# sourceMappingURL=url.js.map