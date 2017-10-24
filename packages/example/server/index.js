import { MongoClient } from 'mongodb';
import createSchema from 'olymp-graphql/server';

const { MONGODB_URI, NODE_ENV } = process.env;

export default (server) => {
  let db = null;
  MongoClient.connect(MONGODB_URI, (err, d) => {
    if (err) {
      console.error(err);
    }
    db = d;
  });

  const schema = createSchema({});

  server.use((req, res, next) => {
    req.db = db;
    req.schema = schema;
    next();
  });

  schema.apply({
    helloWorld: {
      queries: `
      helloWorld: String
    `,
      resolvers: {
        queries: {
          helloWorld: () => 'Hello World!',
        },
      },
    },
  });

  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }
};
