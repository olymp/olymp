import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar Email\n  ",
    resolvers: {
        Email: new GraphQLScalarType({
            name: 'Email',
            description: 'The email scalar type represents email adress.',
            parseValue: function (value) {
                return value ? value.toLowerCase() : value;
            },
            serialize: function (value) {
                return value ? value.toLowerCase() : value;
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
//# sourceMappingURL=email.js.map