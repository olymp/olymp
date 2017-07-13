import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar DateTime\n  ",
    resolvers: {
        DateTime: new GraphQLScalarType({
            name: 'DateTime',
            description: 'DateType as Integer',
            parseValue: function (value) {
                return parseInt(value, 10);
            },
            serialize: function (value) {
                return value;
            },
            parseLiteral: function (ast) {
                if (ast.kind !== Kind.INT) {
                    throw new GraphQLError("Query error: Can only parse INT got a: " + ast.kind + ".", [ast]);
                }
                return ast.value;
            },
        }),
    },
};
//# sourceMappingURL=date-time.js.map