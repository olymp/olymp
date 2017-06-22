import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';

const timeRange = {
  name: 'TimeRange',
  description: 'TimeRange scalar type',
  parseValue: value => value,
  serialize: value => value,
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
        return ast.value;
      case Kind.LIST:
        return ast.values.map(timeRange.parseLiteral);
      default:
        return null;
    }
  },
};

export default {
  schema: `
    scalar TimeRange
  `,
  resolvers: {
    TimeRange: new GraphQLScalarType(timeRange),
  },
};
