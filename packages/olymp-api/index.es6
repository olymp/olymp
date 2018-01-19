import { GraphQLServerLambda } from 'graphql-yoga';
import { connectionString, connectToDatabase } from './db';
export * from './db';

export default ({ mongoUri, typeDefs = '', resolvers = {}, context }) => {
  const lambda = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    options: {
      endpoint: null,
    },
    context: async props => {
      return Promise.all([
        Promise.resolve(
          (typeof context === 'function' ? context(props) : context) || {}
        ),
        connectToDatabase(mongoUri),
      ]).then(([ctx, db]) => {
        return {
          ...ctx,
          db,
        };
      });
    },
  });

  return {
    server: async (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      if (!context.headers) {
        context.headers = {};
      }
      // context.headers['Access-Control-Allow-Credentials'] = true;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler,
  };
};
