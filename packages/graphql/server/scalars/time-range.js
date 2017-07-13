import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';
var timeRange = {
    name: 'TimeRange',
    description: 'TimeRange scalar type',
    serialize: function (value) {
        if (value && !Array.isArray(value)) {
            return Object.keys(value).map(function (x) { return value[x]; });
        }
        return value;
    },
    parseValue: function (value) {
        if (value && !Array.isArray(value)) {
            return Object.keys(value).map(function (x) { return value[x]; });
        }
        return value;
    },
    parseLiteral: function (ast) {
        switch (ast.kind) {
            case Kind.INT:
                return ast.value;
            case Kind.LIST:
                return ast.values.map(timeRange.parseLiteral);
            default:
                return null;
        }
    },
};
export default {
    schema: "\n    scalar TimeRange\n  ",
    resolvers: {
        TimeRange: new GraphQLScalarType(timeRange),
    },
};
//# sourceMappingURL=time-range.js.map