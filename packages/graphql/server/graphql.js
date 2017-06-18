import directives from './directives';
const { buildSchema } = require('./utils');
const { defaultScalars, defaultTypes } = require('./defaults');

export default ({ adapter } = {}) => {
  let _schemas = {};

  const getFinalSchema = () => {
    let moduleQueries = ['hello: String'];
    let moduleTypeDefinitions = [];
    let moduleHooks = { before: [], after: [] };
    let moduleMutations = ['hello: String'];
    let moduleResolvers = {
      Query: { hello: () => 'World23423!' },
      Mutation: { hello: () => 'World2!' },
    };

    Object.keys(_schemas).forEach(schemaName => {
      const { query, mutation, resolvers, schema, hooks } = _schemas[
        schemaName
      ];
      if (schema) moduleTypeDefinitions.push(schema);
      if (query) moduleQueries.push(query);
      if (mutation) moduleMutations.push(mutation);
      if (hooks && hooks.before) moduleHooks.before.push(hooks.before);
      if (hooks && hooks.after) moduleHooks.after.push(hooks.after);
      Object.keys(resolvers || {}).forEach(name => {
        if (name === 'Query')
          Object.keys(resolvers.Query).forEach(key => {
            moduleResolvers.Query[key] = resolvers.Query[key];
          });
        else if (name === 'Mutation')
          Object.keys(resolvers.Mutation).forEach(key => {
            moduleResolvers.Mutation[key] = resolvers.Mutation[key];
          });
        else moduleResolvers[name] = resolvers[name];
      });
    });

    const { schema, ast } = buildSchema(
      moduleTypeDefinitions.concat([
        defaultTypes,
        `
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
    Object.keys(defaultScalars).forEach(key =>
      Object.assign(schema.getType(key), defaultScalars[key])
    );
    const getContext = ctx => {
      const context = Object.assign(
        { schema, resolvers: moduleResolvers, adapter, ast },
        ctx
      );
      context.beforeHook = getHook(moduleHooks.before, context);
      context.afterHook = getHook(moduleHooks.after, context);
      return context;
    };
    return { schema, getContext };
  };
  return {
    getSchema: () => getFinalSchema(),
    addSchema: args => {
      if (_schemas[args.name]) return _schemas[args.name];
      _schemas[args.name] = args;
      return _schemas[args.name];
    },
  };
};

const getHook = (hooks, context) => {
  return (args, info) => {
    let promise = Promise.resolve(args);
    let currentArgs;
    let error;
    hooks.forEach(hook => {
      promise = promise.then(newArgs => {
        if (newArgs) currentArgs = newArgs;
        return hook(currentArgs, info, context);
      });
    });
    return promise.then(newArgs => {
      if (error) throw error;
      return newArgs || currentArgs;
    });
  };
};
