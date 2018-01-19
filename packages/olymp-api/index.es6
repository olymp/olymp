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
    context: props => {
      console.log(1);
      return {};
      return Promise.all([
        Promise.resolve(
          (typeof context === 'function' ? context(props) : context) || {}
        ),
        connectToDatabase(mongoUri),
      ]).then(([ctx, db]) => {
        console.log(2);
        return {
          ...ctx,
          db,
        };
      });
    },
  });

  return {
    server: (event, context, callback) => {
      console.log(3);
      context.callbackWaitsForEmptyEventLoop = false;
      if (!context.headers) {
        context.headers = {};
      }
      // context.headers['Access-Control-Allow-Credentials'] = true;
      lambda.graphqlHandler(event, context, (...args) => {
        console.log(args);
        callback(...args);
      });
    },
    playground: lambda.playgroundHandler,
  };
};
