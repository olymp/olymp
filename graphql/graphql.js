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
    let moduleHooks = { before: [], after: [] };
    let moduleMutations = ['hello: String'];
    let moduleResolvers = { Query: { hello: () => 'World!' }, Mutation: { hello: () => 'World!' } };

    Object.keys(_schemas).forEach((schemaName) => {
      const { query, mutation, resolvers, schema, hooks } = _schemas[schemaName];
      if (schema) moduleTypeDefinitions.push(schema);
      if (query) moduleQueries.push(query);
      if (mutation) moduleMutations.push(mutation);
      if (hooks && hooks.before) moduleHooks.before.push(hooks.before);
      if (hooks && hooks.after) moduleHooks.after.push(hooks.after);
      Object.keys(resolvers || {}).forEach((name) => {
        if (name === 'Query') Object.keys(resolvers.Query).forEach((key) => { moduleResolvers.Query[key] = resolvers.Query[key]; });
        else if (name === 'Mutation') Object.keys(resolvers.Mutation).forEach((key) => { moduleResolvers.Mutation[key] = resolvers.Mutation[key]; });
        else moduleResolvers[name] = resolvers[name];
      });
    });

    const { schema, ast } = buildSchema(
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
      directives({ adapter, resolvers: moduleResolvers }),
      moduleHooks
    );
    Object.keys(defaultScalars).forEach(key => Object.assign(schema.getType(key), defaultScalars[key]));
    const getContext = (ctx) => {
      const context = Object.assign({ schema, resolvers: moduleResolvers, adapter, ast }, ctx);
      context.beforeQuery = getHook(moduleHooks.before, false, context);
      context.afterQuery = getHook(moduleHooks.after, false, context);
      context.beforeMutation = getHook(moduleHooks.before, true, context);
      context.afterMutation = getHook(moduleHooks.after, true, context);
      return context;
    };
    return { schema, getContext };
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

const getHook = (hooks, mutation, context) => {
  return (model, args) => {
    let promise = Promise.resolve(args);
    let currentArgs;
    let error;
    hooks.forEach((hook) => {
      promise = promise.then((newArgs) => {
        if (newArgs) currentArgs = newArgs;
        return hook(model, mutation, currentArgs, context);
      });
    });
    return promise.then((newArgs) => {
      if (error) throw error;
      return newArgs || currentArgs;
    });
  };
};
