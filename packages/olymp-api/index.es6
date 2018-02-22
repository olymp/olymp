import { GraphQLServerLambda } from 'graphql-yoga';
import voyager from './voyager';

const combine = plugins => async props => {
  const contexts = await Promise.all(
    plugins.filter(x => x.context).map(x => x.context(props))
  );
  return contexts.reduce((store, item) => Object.assign(store, item || {}), {});
};

export default ({ typeDefs = '', resolvers = {}, context, plugins = [] }) => {
  let lambda;
  plugins = [{ context, typeDefs, resolvers }, ...plugins];

  try {
    resolvers = plugins
      .filter(x => x.resolvers)
      .reduce((store, item) => Object.assign(store, item.resolvers), {});
    typeDefs = plugins.filter(x => x.typeDefs).reduce(
      (store, item) => `
      ${item.typeDefs}
      ${store}
    `,
      ''
    );
    context = combine(plugins);

    lambda = new GraphQLServerLambda({
      typeDefs,
      resolvers,
      options: {
        endpoint: null,
      },
      context,
    });
  } catch (err) {
    console.error('Error', err);
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
