import { Kind } from 'graphql/language';
import { GraphQLScalarType, GraphQLError } from 'graphql';

const assertErr = require('assert-err');

export default {
  schema: `
    scalar RealDate
  `,
  resolvers: {
    RealDate: new GraphQLScalarType({
      name: 'RealDate',
      /**
   * Serialize date value into string
   * @param  {Date} value date value
   * @return {String} date as string
   */
      serialize(value) {
        assertErr(
          value instanceof Date,
          TypeError,
          'Field error: value is not an instance of Date',
        );
        assertErr(!isNaN(value.getTime()), TypeError, 'Field error: value is an invalid Date');
        return value.toJSON();
      },
      /**
   * Parse value into date
   * @param  {*} value serialized date value
   * @return {Date} date value
   */
      parseValue(value) {
        const date = new Date(value);
        assertErr(!isNaN(date.getTime()), TypeError, 'Field error: value is an invalid Date');
        return date;
      },
      /**
   * Parse ast literal to date
   * @param  {Object} ast graphql ast
   * @return {Date} date value
   */
      parseLiteral(ast) {
        assertErr(
          ast.kind === Kind.STRING,
          GraphQLError,
          `Query error: Can only parse strings to dates but got a: ${ast.kind}`,
          [ast],
        );

        const result = new Date(ast.value);
        assertErr(!isNaN(result.getTime()), GraphQLError, 'Query error: Invalid date', [ast]);
        assertErr(
          ast.value === result.toJSON(),
          GraphQLError,
          'Query error: Invalid date format, only accepts: YYYY-MM-DDTHH:MM:SS.SSSZ',
          [ast],
        );

        return result;
      },
    }),
  },
};
