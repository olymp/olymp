import { GraphQLServerLambda } from 'graphql-yoga';
import { connectionString, connectToDatabase } from './db';
export * from './db';

export default ({ mongoUri, typeDefs = '', resolvers = {}, context }) => {
  const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    options: {
      // endpoint: null,
    },
    context: async () => {
      const ctx =
        (typeof context === 'function'
          ? await context({ event, context: lambdaContext })
          : context) || {};
      return {
        ...ctx,
        db: await connectToDatabase(mongoUri),
      };
    },
  });

  return {
    server: async (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler,
  };
};
