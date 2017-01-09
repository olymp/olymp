const { Kind } = require('graphql/language');
const GraphQLError = require('graphql/error').GraphQLError;

exports.defaultScalars = {
  Json: {
    description: 'The JSON scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/ publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize: value => value,
    parseValue: value => value,
    parseLiteral: (ast) => {
      switch (ast.kind) {
        case Kind.STRING:
        case Kind.BOOLEAN:
          return ast.value;
        case Kind.INT:
        case Kind.FLOAT:
          return parseFloat(ast.value);
        case Kind.OBJECT: {
          const value = Object.create(null);
          ast.fields.forEach((field) => {
            value[field.name.value] = exports.defaultScalars.Json.parseLiteral(field.value);
          });

          return value;
        }
        case Kind.LIST:
          return ast.values.map(exports.defaultScalars.Json.parseLiteral);
        default:
          return null;
      }
    },
  },
  TimeRange: {
    description: 'TimeRange scalar type',
    parseValue: value => value,
    serialize: value => value,
    parseLiteral: (ast) => {
      switch (ast.kind) {
        case Kind.STRING:
          return ast.value;
        case Kind.LIST:
          return ast.values.map(exports.defaultScalars.TimeRange.parseLiteral);
        default:
          return null;
      }
    },
  },
  Color: {
    description: 'The Color scalar type represents color in "red" or "#FFF" or "#FFFFFF" format.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  Markdown: {
    description: 'The Markdown scalar type represents text in markdown language.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  Email: {
    description: 'The email scalar type represents email adress.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  PhoneNumber: {
    description: 'The phone scalar type represents phone-number.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  Website: {
    description: 'The website scalar type represents website url.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  Slug: {
    description: 'The Slug scalar type represents the url after domain part.',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query error: Can only parse STRING got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  Date: {
    description: 'DateType as Integer (without time)',
    parseValue(value) {
      return parseInt(value, 10);
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError(`Query error: Can only parse INT got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
  DateTime: {
    description: 'DateType as Integer',
    parseValue(value) {
      return parseInt(value, 10);
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.INT) {
        throw new GraphQLError(`Query error: Can only parse INT got a: ${ast.kind}.`, [ast]);
      }
      return ast.value;
    },
  },
};
exports.defaultTypes = `
  ${Object.keys(exports.defaultScalars).map(key => `scalar ${key}`).join('\n')}
  interface CollectionInterface {
    id: String
    name: String
    tags: [String]
    state: DOCUMENT_STATE
    createdAt: DateTime
    createdBy: User
    updatedAt: DateTime
    updatedBy: User
  }
  enum OPERATION_TYPE {
    PATCH
    REMOVE
    REPLACE
  }
  enum DOCUMENT_STATE {
    PUBLISHED
    DRAFT
    ARCHIVED
    REMOVED
  }
  enum SORT_DIRECTION {
    ASC,
    DESC
  }
  type dateRange {
    from: Date
    to: Date
    duration: Int
  }
`;
