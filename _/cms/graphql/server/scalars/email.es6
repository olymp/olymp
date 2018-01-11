import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

export default {
  schema: `
    scalar Email
  `,
  resolvers: {
    Email: new GraphQLScalarType({
      name: 'Email',
      description: 'The email scalar type represents email adress.',
      parseValue(value) {
        return value ? value.toLowerCase() : value;
      },
      serialize(value) {
        return value ? value.toLowerCase() : value;
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
