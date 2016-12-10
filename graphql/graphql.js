import { buildSchema } from './utils';
import { defaultScalars, defaultTypes } from './defaults';
import directives from './directives';

// import gql from 'graphql-tag';
// if (typeof global !== 'undefined') global['gql'] = gql;
module.exports = ({ adapter } = {}) => {
  let _schemas = {};

  const getFinalSchema = () => {
    let moduleQueries = ['hello: String'];
    let moduleTypeDefinitions = [];
    let moduleMutations = ['hello: String'];
    let moduleResolvers = { Query: { hello: () => 'World!' }, Mutation: { hello: () => 'World!' } };

    Object.keys(_schemas).forEach((schemaName) => {
      if (schemaName.toLowerCase() !== 'page' && schemaName.toLowerCase() !== 'user') return;
      const { query, mutation, resolvers, schema } = _schemas[schemaName];
      if (schema) moduleTypeDefinitions.push(schema);
      if (query) moduleQueries.push(query);
      if (mutation) moduleMutations.push(mutation);
      Object.keys(resolvers || {}).forEach((name) => {
        if (name === 'Query') Object.keys(resolvers.Query).forEach((key) => { moduleResolvers.Query[key] = resolvers.Query[key]; });
        else if (name === 'Mutation') Object.keys(resolvers.Mutation).forEach((key) => { moduleResolvers.Mutation[key] = resolvers.Mutation[key]; });
        else moduleResolvers[name] = resolvers[name];
      });
    });

    const schema = buildSchema(
      moduleTypeDefinitions.concat([
        defaultTypes, `
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
      moduleResolvers,
      directives({ adapter, resolvers: moduleResolvers })
    );
    Object.keys(defaultScalars).forEach(key => Object.assign(schema.getType(key), defaultScalars[key]));
    return schema;
  };
  return {
    getSchema: () => getFinalSchema(),
    addSchema: (args) => {
      if (_schemas[args.name]) return _schemas[args.name];
      _schemas[args.name] = args;
      return _schemas[args.name];
    },
  };
};

