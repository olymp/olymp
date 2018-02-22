import { GraphQLScalarType } from 'graphql';
import { ObjectID } from 'mongodb';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // ast value is always in string format
    }
    return null;
  },
});
