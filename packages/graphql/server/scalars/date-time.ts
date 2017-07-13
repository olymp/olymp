import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: `
    scalar DateTime
  `,
  resolvers: {
    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      description: 'DateType as Integer',
      parseValue(value) {
        return parseInt(value, 10);
      },
      serialize(value) {
        return value;
      },
      parseLiteral(ast) {
        if (ast.kind !== Kind.INT) {
          throw new GraphQLError(
            `Query error: Can only parse INT got a: ${ast.kind}.`,
            [ast]
          );
        }
        return ast.value;
      },
    }),
  },
};
