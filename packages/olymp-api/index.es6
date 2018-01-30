import { GraphQLServerLambda } from 'graphql-yoga';
import { connectionString, connectToDatabase, updateOne, findOne, find } from './db';
import voyager from './voyager';
export * from './db';

export default ({ mongoUri, typeDefs = '', resolvers = {}, context }) => {
  let lambda;
  try {
    lambda = new GraphQLServerLambda({
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
            updateOne,
            findOne,
            find,
            db,
          };
        });
      },
    });
  } catch(err) {
    console.error(err);
    lambda = new GraphQLServerLambda({
      typeDefs: '',
      resolvers: {},
      options: {
        endpoint: null,
      },
    });
  }
  return {
    server: (event, context, callback) => {
      context.callbackWaitsForEmptyEventLoop = false;
      if (!context.headers) {
        context.headers = {};
      }
      context.headers['Access-Control-Allow-Credentials'] = true;
      lambda.graphqlHandler(event, context, callback);
    },
    playground: lambda.playgroundHandler,
    voyager: voyager({}),
  };
};
