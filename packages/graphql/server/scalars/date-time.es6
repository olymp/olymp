import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

const assertErr = require('assert-err');

export default {
  schema: `
    scalar DateTime
  `,
  resolvers: {
    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      description: 'DateType as Integer',
      serialize(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          value = new Date(value);
        }
        assertErr(
          value instanceof Date,
          TypeError,
          'Field error: value is not an instance of Date',
        );
        assertErr(!isNaN(value.getTime()), TypeError, 'Field error: value is an invalid Date');
        return +value;
      },
      parseValue(value) {
        const date = new Date(value);
        assertErr(!isNaN(date.getTime()), TypeError, 'Field error: value is an invalid Date');
        return date;
      },
      parseLiteral(ast) {
        if (ast.kind !== Kind.INT) {
          throw new GraphQLError(`Query error: Can only parse INT got a: ${ast.kind}.`, [ast]);
        }
        const result = new Date(ast.value);
        assertErr(!isNaN(result.getTime()), GraphQLError, 'Query error: Invalid date', [ast]);
        assertErr(ast.value === result.toJSON(), GraphQLError, 'Query error: Invalid date format', [
          ast,
        ]);
        return ast.value;
      },
    }),
  },
};
