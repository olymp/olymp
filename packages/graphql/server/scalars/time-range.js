import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql';

const timeRange = {
  name: 'TimeRange',
  description: 'TimeRange scalar type',
  serialize: (value) => {
    if (value && !Array.isArray(value)) {
      return Object.keys(value).map(x => value[x]);
    }
    return value;
  },
  parseValue: (value) => {
    if (value && !Array.isArray(value)) {
      return Object.keys(value).map(x => value[x]);
    }
    return value;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.INT:
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
