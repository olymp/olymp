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
      const { query, mutation, typeDefs, resolvers, tableName, adapter } = schemas[key];
      if (typeDefs) Object.keys(typeDefs).forEach(key => {
        const typeDef = typeDefs[key].replace('type ', `type ${key} `).replace('enum ', `enum ${key} `);
        moduleTypeDefinitions.push(typeDef);
        if (typeDefs[key].indexOf('type ') !== -1) {
          typesArray.push(key);
          let typeInput = typeDefs[key].replace('type ', `input ${key}Input `);
          if (typeInput.indexOf(' implements ') !== -1) {
            typeInput = typeInput.slice(0, typeInput.indexOf(' implements ')) + typeInput.slice(typeInput.indexOf('{'))
          }
          moduleInputDefinitions.push(typeInput);
        }
      });
      if (tableName) {
        moduleQueries.push(`
          ${key}(id: String, slug: String): ${key}
          ${key}List(sort: [String]): [${key}]
        `);
        moduleMutations.push(`
          ${key}(id: String, input: ${key}Input, operationType: OPERATION_TYPE): ${key}
        `);
        moduleResolvers.Query[key] = (source, args, x, { fieldASTs }) => {
          const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
          if (args.slug) {
            return adapter.read(tableName, { filter: { slug: args.slug }, attributes });
          }
          return adapter.read(tableName, Object.assign({}, args, { attributes }));
        };
        moduleResolvers.Query[`${key}List`] = (source, args, x, { fieldASTs }) => {
          const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
          return adapter.list(tableName, Object.assign({}, args, { attributes }));
        };
        moduleResolvers.Mutation[key] = (source, args, x, { fieldASTs }, x2, x3, x4) => {
          const attributes = fieldASTs[0].selectionSet.selections.map(x => x.name.value);
          if (args.operationType && args.operationType === 'REMOVE') {
            return adapter.remove(tableName, Object.assign({}, args));
          }
          if (args.input) {
            args = Object.assign({}, args, args.input);
            delete args.input;
          }
          delete args.operationType;
          return adapter.write(tableName, Object.assign({}, args), { attributes });
        };
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
            .split(`: [${key}]\n`).join(`: [${key}Input]\n`)
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
    /* runQuery: ({ query, variables, operationName }, context) => {
      if (!schema) schema = getFinalSchema();
      if (variables && typeof variables === 'string') variables = JSON.parse(variables);
      const params = {
        schema, query, variables, operationName,
        formatError: err => {
          if (err.originalError) {
            console.error(err.originalError);
          } else {
            console.error(err);
          }
          return err;
        },
        context,
        // rootValue: optionsObject.rootValue,
        // logFunction: (x, y) => console.log(x, y),
        // validationRules: optionsObject.validationRules,
        // formatResponse: optionsObject.formatResponse,
      };

      return runQuery(params);
    },*/
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
