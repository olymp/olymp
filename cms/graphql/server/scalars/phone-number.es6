import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: `
    scalar PhoneNumber
  `,
  resolvers: {
    PhoneNumber: new GraphQLScalarType({
      name: 'PhoneNumber',
      description: 'The phone scalar type represents phone-number.',
      parseValue(value) {
        return value;
      },
      serialize(value) {
        return value;
      },
      parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
          throw new GraphQLError(
            `Query error: Can only parse STRING got a: ${ast.kind}.`,
            [ast]
          );
        }
        return ast.value;
      },
    }),
  },
};
