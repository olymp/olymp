import * as defaultDirectives from './directives';
import { buildSchema } from './utils';
import { scalarTypes, scalarResolvers } from './scalars';
import { graphqlExpress } from 'graphql-server-express';
import { get } from 'lodash';

export default (options) => {
  const modules = {};
  const directives = {
    ...defaultDirectives,
    ...get(options, 'directives', {}),
  };
  const db = get(options, 'db');

  const getFinalSchema = () => {
    const moduleQueries = ['hello: String'];
    const moduleTypeDefinitions = [];
    const moduleMutations = ['hello: String'];
    const moduleResolvers = {
      queries: { hello: () => 'World23423!' },
      mutations: { hello: () => 'World2!' },
      ...scalarResolvers,
    };

    Object.keys(modules).forEach((schemaName) => {
      const { query, mutation, resolvers = {}, schema } = modules[schemaName];
      if (schema) {
        moduleTypeDefinitions.push(schema);
      }
      if (query) {
        moduleQueries.push(query);
      }
      if (mutation) {
        moduleMutations.push(mutation);
      }
      Object.keys(resolvers).forEach((name) => {
        if (name === 'Query') {
          Object.keys(resolvers.Query).forEach((key) => {
            moduleResolvers.Query[key] = resolvers.Query[key];
          });
        } else if (name === 'Mutation') {
          Object.keys(resolvers.Mutation).forEach((key) => {
            moduleResolvers.Mutation[key] = resolvers.Mutation[key];
          });
        } else {
          console.log(moduleResolvers, resolvers, name);
          moduleResolvers[name] = resolvers[name];
        }
      });
    });

    moduleTypeDefinitions.map(x => console.log(x));
    console.log('-----');
    console.log(scalarTypes);
    const { schema, ast } = buildSchema({
      schemas: [
        ...moduleTypeDefinitions,
        scalarTypes,
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
      ],
      resolvers: moduleResolvers,
      directives,
    });
    const context = {
      schema,
      resolvers: moduleResolvers,
      db,
      ast,
    };
    return { schema, context };
  };
  return {
    express: graphqlExpress((req) => {
      try {
        const { schema, context } = getFinalSchema();
        return { schema, context: { ...req, ...context } };
      } catch (err) {
        console.error(err);
      }
    }),
    getSchema: () => getFinalSchema(),
    addSchema: (args) => {
      modules[args.name] = args;
      return modules[args.name];
    },
  };
};
