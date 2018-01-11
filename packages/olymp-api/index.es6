import { GraphQLServerLambda } from 'graphql-yoga';
import { connectionString } from './db';
export * from './db';

export default ({ mongoUri, typeDefs = '', resolvers = {}, context }) => {
  connectionString(mongoUri);

  const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    options: {
      endpoint: null,
    },
    context,
  });

  return {
    server: (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler,
  };
};
