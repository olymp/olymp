import { GraphQLServerLambda } from 'graphql-yoga';
import { connectionString } from './db';
export * from './db';

export default ({ mongoUri, typeDefs = '', resolvers = {} }) => {
  connectionString(mongoUri);

  const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    options: {
      endpoint: null,
    },
  });

  return {
    server: (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler,
  };
};
