import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql/error';
import { GraphQLScalarType } from 'graphql';

const assertErr = require('assert-err');
const fns = require('date-fns');

export default {
  schema: `
    scalar Date
  `,
  resolvers: {
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'DateType as Integer (without time)',
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
        return +fns.startOfDay(value);
      },
      parseValue(value) {
        const date = new Date(value);
        assertErr(!isNaN(date.getTime()), TypeError, 'Field error: value is an invalid Date');
        return +fns.startOfDay(date);
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
        return fns.startOfDay(ast.value);
      },
    }),
  },
};
