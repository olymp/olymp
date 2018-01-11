import { GraphQLServerLambda } from 'graphql-yoga';
import { findOne, find, updateOne, connectionString } from './db';

export default ({ mongoUri, typeDefs, resolvers }) => {
  const typeDefs = schema;
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
