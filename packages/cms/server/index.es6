import createSchema from 'olymp-graphql/server';
import createMail from 'olymp-mail/server';
import { pagesGraphQL } from 'olymp-pages/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { googleGraphQL } from 'olymp-google/server';
import { scrapeGraphQL } from 'olymp-scrape/server';
import auth0 from 'olymp-auth0/server';
import { MongoClient } from 'mongodb';
/* import createSitemap from 'olymp-sitemap/server'; */
import { modules as colModules, directives } from 'olymp-collection/server';
import { get } from 'lodash';
import algoliasearch from 'algoliasearch';

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
  GOOGLE_PRIVATE_KEY,
} = process.env;

export default (server, options) => {
  server.db = null;

  console.log(MONGODB_URI);
  new MongoClient(MONGODB_URI).connect((err, mongo) => {
    if (err) {
      console.error(err);
      if (err.errors) {
        err.errors.forEach(err => console.error(err));
      }
    }
    console.log(MONGODB_URI.split('/').pop());
    server.db = mongo.db(MONGODB_URI.split('/').pop());
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
          helloWorld: () => 'Hello World!',
        },
      },
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
      `,
    },
    ...get(options, 'modules', {}),
    ...colModules,
  };
  const mail = createMail(POSTMARK_KEY, {
    from: POSTMARK_FROM,
    url: URL,
  });

  const algolia = ALGOLIA
    ? algoliasearch(ALGOLIA.split('@')[1], ALGOLIA.split('@')[0])
    : null;

  // const responseCache = createResponseCache();
  const cachedApp = null;

  server.getSchema = schema.getSchema;
  server.getDB = () => server.db;
  server.use((req, res, next) => {
    req.db = server.db;
    req.mail = mail;
    req.schema = schema.getSchema();
    req.app = cachedApp;
    req.algolia = algolia;
    next();
  });

  modules.pages = pagesGraphQL();
  modules.cloudinary = cloudinaryGraphQL(CLOUDINARY_URI);
  modules.scrape = scrapeGraphQL();
  modules.google = googleGraphQL(
    GOOGLE_MAPS_KEY,
    GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY,
  );
  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }

  schema.apply(modules);
  /* server.db
    .collection('app')
    .findOne({ id: APP })
    .then(app => {
      if (!app) {
        throw new Error('App not found');
      }
      cachedApp = app;

    }); */

  /*
  const shortId = require('shortid');
  const index = algolia.initIndex(app.id);
  monk.collection('item').find({ _appId: app.id, state: 'PUBLISHED' }).then((items) => {
    items.forEach((item) => {
      item.objectID = item.id;
    });
    index.addObjects(items, (err) => {
      console.log('OK', err);
    });
  });

  monk.collection('item').find({ _type: 'einrichtung' }).then((items) => {
    // monk.collection('item').find({ _type: 'termin' }).then((items) => {
    items.forEach((item) => {
      item.color = item.farbe;
      delete item.farbe;
      item.description = item.willkommen;
      delete item.willkommen;
      delete item._id;
      monk.collection('item').insert({ ...item, _type: 'org' });
    });
  }); */
  /* // monk.collection('item').remove({ _type: 'article' });
  */
  /* monk.collection('item').find({ _type: 'termin' }).then((items) => {
      // monk.collection('item').find({ _type: 'termin' }).then((items) => {
      items.forEach((item) => {
          item.extract = item.extrakt;
          delete item.extrakt;
          item.image = item.bild;
          delete item.image;
          delete item._id;
          item.id = shortId.generate();
          if (item.art && item.art.indexOf('V') === 0) {
              monk.collection('item').insert({ ...item, _type: 'event' });
          } else {
              monk.collection('item').insert({ ...item, _type: 'news' });
          }
      });
  }); */
  /* monk.collection('item').find({ _type: 'termin' }).then((items) => {
    items.forEach((item) => {
      item.extract = item.extract;
      delete item.extract;
      item.image = item.image;
      delete item.image;
      if (item.type && item.type.indexOf('V') === 0) {
        monk.collection('item').update({ ...item, _type: 'event' });
      } else if (item.type && item.type.indexOf('V') === 0) {
        monk.collection('item').update({ ...item, _type: 'news' });
      }
    });
  });

  */
  /* monk.collection('page').find({}).then((items) => {
    items.forEach((item) => {
      monk.collection('item').insert({ ...item, _type: 'page', _appId: 'gzk' });
    });
  });
  monk.collection('file').find({}).then((items) => {
    items.forEach((item) => {
      monk.collection('item').insert({ ...item, _type: 'file', _appId: 'gzk' });
    });
  }); */
};

/* if (mail) mail({ to: 'bkniffler@me.com', subject: 'Hello!', markdown: `
Hallo
## kopo [Anmelden](http://google.de)
[Anmelden](http://google.de)
` }).then(x => x.json()).then(x => console.log(x)).catch(err => console.error(err)); */

/*
import { filestackGraphQL } from 'olymp-filestack/server';

if (FILESTACK_KEY) {
  filestackGraphQL(schema, FILESTACK_KEY, options.filestack);
}
*/
