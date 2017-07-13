import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar Slug\n  ",
    resolvers: {
        Slug: new GraphQLScalarType({
            name: 'Slug',
            description: 'The Slug scalar type represents the url after domain part.',
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
//# sourceMappingURL=slug.js.map