import createSchema from 'olymp-graphql/server';
import createMail from 'olymp-mail/server';
import { pagesGraphQL } from 'olymp-pages/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { googleGraphQL } from 'olymp-google/server';
import { scrapeGraphQL } from 'olymp-scrape/server';
import auth0 from 'olymp-auth/server';
import { MongoClient } from 'mongodb';
/* import createSitemap from 'olymp-sitemap/server'; */
import { modules as colModules, directives } from 'olymp-collection/server';
import { get } from 'lodash';
import algoliasearch from 'algoliasearch';

const querystring = require('querystring');

const parser = require('url');

const {
  APP,
  URL,
  MONGODB_URI,
  ALGOLIA,
  POSTMARK_KEY,
  POSTMARK_FROM,
  CLOUDINARY_URI,
  // FILESTACK_KEY,
  AUTH_SECRET,
  NODE_ENV,
  GOOGLE_MAPS_KEY,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY
} = process.env;

export default (server, options) => {
  let db = null;

  const x1 = MONGODB_URI.split('?')[0];
  const x2 = MONGODB_URI.split('?')[1] || '';
  const op2 = querystring.parse(x2);
  new MongoClient(x1, {
    ...op2,
    ssl: !!op2.ssl
  }).connect((err, mongo) => {
    if (err) {
      console.error(err);
      if (err.errors) {
        err.errors.forEach(err => console.error(err));
      }
    }
    db = mongo.db(x1.split('/').pop());
  });

  auth0(server);

  const schema = createSchema({ directives });
  const modules = {
    helloWorld: {
      queries: `
      helloWorld: String
    `,
      resolvers: {
        queries: {
          helloWorld: () => 'Hello World!'
        }
      }
    },
    user: {
      schema: `
        type User {
          isAdmin: Boolean
          id: String
          email: Email
          token: String
          name: String
        }
      `
    },
    ...get(options, 'modules', {}),
    ...colModules
  };
  const mail = createMail(POSTMARK_KEY, {
    from: POSTMARK_FROM,
    url: URL
  });

  const algolia = ALGOLIA
    ? algoliasearch(ALGOLIA.split('@')[1], ALGOLIA.split('@')[0])
    : null;

  // const responseCache = createResponseCache();
  const cachedApp = null;

  server.getSchema = schema.getSchema;
  server.getDB = () => db;
  server.use((req, res, next) => {
    req.db = db;
    req.mail = mail;
    req.schema = schema.getSchema();
    req.app = APP ? { id: APP } : null;
    req.algolia = algolia;
    next();
  });

  modules.pages = pagesGraphQL();
  modules.cloudinary = cloudinaryGraphQL(CLOUDINARY_URI);
  modules.scrape = scrapeGraphQL();
  modules.google = googleGraphQL(
    GOOGLE_MAPS_KEY,
    GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY
  );
  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }
  schema.apply(modules);
};
