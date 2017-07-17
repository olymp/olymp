import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: `
    scalar Markdown
  `,
  resolvers: {
    Markdown: new GraphQLScalarType({
      name: 'Markdown',
      description:
        'The Markdown scalar type represents text in markdown language.',
      parseValue(value) {
        return value ? `${value}` : null;
      },
      serialize(value) {
        return value ? `${value}` : null;
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
          return ast.value ? `${ast.value}` : null;
        } return null;
      },
    }),
  },
};
