import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar PhoneNumber\n  ",
    resolvers: {
        PhoneNumber: new GraphQLScalarType({
            name: 'PhoneNumber',
            description: 'The phone scalar type represents phone-number.',
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
//# sourceMappingURL=phone-number.js.map