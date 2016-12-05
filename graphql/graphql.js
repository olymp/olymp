const { makeExecutableSchema } = require('graphql-tools');
const { Kind } = require('graphql/language');
const gql = require('graphql-tag');
const GraphQLScalarType = require('graphql').GraphQLScalarType
const GraphQLError = require('graphql/error').GraphQLError

if (typeof global !== 'undefined') global['gql'] = gql;

const defaultScalars = {
  Json: {
    description:
      'The `JSON` scalar type represents JSON values as specified by ' +
      '[ECMA-404](http://www.ecma-international.org/' +
      'publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize: value => value,
    parseValue: value => value,
    parseLiteral: ast => {
      switch (ast.kind) {
        case Kind.STRING:
        case Kind.BOOLEAN:
          return ast.value;
        case Kind.INT:
        case Kind.FLOAT:
          return parseFloat(ast.value);
        case Kind.OBJECT: {
          const value = Object.create(null);
          ast.fields.forEach(field => {
            value[field.name.value] = defaultScalars.Json.parseLiteral(field.value);
          });

          return value;
        }
        case Kind.LIST:
          return ast.values.map(defaultScalars.Json.parseLiteral);
        default:
          return null;
      }
    },
  },
  TimeRange: {
    description: 'TimeRange scalar type',
    parseValue: value => value,
    serialize: value => value,
    parseLiteral: ast => {
      switch (ast.kind) {
        case Kind.STRING:
          return ast.value;
        case Kind.LIST:
          return ast.values.map(defaultScalars.TimeRange.parseLiteral);
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
      return parseInt(value);
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
      return parseInt(value);
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
const defaultInterfaces = {
  collectionInterface: `
    interface CollectionInterface {
      id: String
      name: String
      tags: [String]
      state: DOCUMENT_STATE
      createdAt: DateTime
      createdBy: user
      updatedAt: DateTime
      updatedBy: user
    }
  `
};
const defaultTypes = {
  OPERATION_TYPE: `
    enum {
      PATCH
      REMOVE
      REPLACE
    }
  `,
  DOCUMENT_STATE: `
    enum {
      PUBLISHED
      DRAFT
      ARCHIVED
      REMOVED
    }
  `,
  dateRange: `
    type {
      from: Date
      to: Date
      duration: Int
    }
  `,
};

module.exports = ({ scalars = {}, types = {}, interfaces = {} } = {}) => {

  scalars = Object.assign({}, defaultScalars, scalars);
  types = Object.assign({}, defaultTypes, types);
  interfaces = Object.assign({}, defaultInterfaces, interfaces);
  let schemas = {};
  let schema = null;

  const getFinalSchema = () => {
    let moduleQueries = [`hello: String`];
    let typesArray = [];
    let moduleTypeDefinitions = [];
    let moduleInputDefinitions = [];
    Object.keys(types).forEach(key => {
      const typeDef = types[key].replace('type ', `type ${key} `).replace('enum ', `enum ${key} `);
      moduleTypeDefinitions.push(typeDef);
      if (types[key].indexOf('type ') !== -1) {
        typesArray.push(key);
        let typeInput = types[key].replace('type ', `input ${key}Input `);
        if (typeInput.indexOf(' implements ') !== -1) {
          typeInput = typeInput.slice(0, typeInput.indexOf(' implements ')) + typeInput.slice(typeInput.indexOf('{'))
        }
        moduleInputDefinitions.push(typeInput);
      }
    });
    let moduleTypeInputs = Object.keys(types).map(key => types[key]);
    let moduleMutations = [`hello: String`];
    let moduleResolvers = { Query: { hello: () => 'World!' }, Mutation: { hello: () => 'World!' } };

    Object.keys(schemas).map(key => {
      const { query, mutation, typeDefs, resolvers, auto } = schemas[key];
      if (typeDefs) Object.keys(typeDefs).forEach(key => {
        const typeDef = typeDefs[key].replace('type ', `type ${key} `).replace('enum ', `enum ${key} `);
        moduleTypeDefinitions.push(typeDef);
        if (typeDefs[key].indexOf('type ') !== -1) {
          typesArray.push(key);
          let typeInput = typeDefs[key].replace('type ', `input ${key}Input `);
          if (typeInput.indexOf(' implements ') !== -1) {
            typeInput = typeInput.slice(0, typeInput.indexOf(' implements ')) + typeInput.slice(typeInput.indexOf('{'));
          }
          moduleInputDefinitions.push(typeInput);
        }
      });
      if (auto && auto.adapter && auto.adapter.graphql) {
        auto.adapter.graphql(Object.assign({}, auto, { moduleQueries, moduleResolvers, moduleMutations, key }));
      }
      if (query) moduleQueries.push(query);
      if (mutation) moduleMutations.push(mutation);
      if (resolvers && resolvers.Query) Object.keys(resolvers.Query).forEach(key => moduleResolvers.Query[key] = resolvers.Query[key]);
      if (resolvers && resolvers.Mutation) Object.keys(resolvers.Mutation).forEach(key => moduleResolvers.Mutation[key] = resolvers.Mutation[key]);
    });

    moduleInputDefinitions = moduleInputDefinitions.map(def => {
      typesArray.forEach(key => {
        def = def.split(`: ${key} `).join(`: ${key}Input `)
            .split(`: [${key}] `).join(`: [${key}Input] `)
            .split(`: ${key}\n`).join(`: ${key}Input\n`)
            .split(`: [${key}]\n`).join(`: [${key}Input]\n`);
      });
      return def;
    });

    const schema = makeExecutableSchema({
      typeDefs: Object.keys(scalars).map(key => `scalar ${key}`)
        .concat(Object.keys(interfaces).map(key => interfaces[key]).filter(x => x))
        .concat(moduleInputDefinitions.filter(x => x))
        .concat(moduleTypeDefinitions.filter(x => x))
        .concat(Object.keys(schemas).map(key => schemas[key].type).filter(x => x))
        .concat([`
          type Query {
            ${moduleQueries.join('\n')}
          }
          type Mutation {
            ${moduleMutations.join('\n')}
          }
          schema {
            query: Query
            mutation: Mutation
          }
        `,
        ]),
      resolvers: moduleResolvers,
      allowUndefinedInResolve: true,
      resolverValidationOptions: {
        requireResolversForArgs: false,
        requireResolversForNonScalar: false,
      },
    });
    Object.keys(scalars).forEach(key => Object.assign(schema.getType(key), scalars[key]));
    return schema;
  };
  return {
    getSchema: () => getFinalSchema(),
    addSchema: args => {
      if (schemas[args.name]) return schemas[args.name];
      schemas[args.name] = args;
      return schemas[args.name];
    },
    addType: (name, def) => {
      types[name] = def;
    },
    addInterface: (name, def) => {
      interfaces[name] = def;
    },
    addScalar: (name, def) => {
      scalars[name] = def;
    },
  }
}
