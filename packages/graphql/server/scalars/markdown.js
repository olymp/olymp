import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';
export default {
    schema: "\n    scalar Markdown\n  ",
    resolvers: {
        Markdown: new GraphQLScalarType({
            name: 'Markdown',
            description: 'The Markdown scalar type represents text in markdown language.',
            parseValue: function (value) {
                return value ? "" + value : null;
            },
            serialize: function (value) {
                return value ? "" + value : null;
            },
            parseLiteral: function (ast) {
                if (ast.kind === Kind.STRING) {
                    return ast.value ? "" + ast.value : null;
                }
                return null;
            },
        }),
    },
};
//# sourceMappingURL=markdown.js.map