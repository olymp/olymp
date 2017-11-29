import createSchema from 'olymp-graphql/server';
import createMail from 'olymp-mail/server';
import { authGraphQL, authCache, createAuthEngine } from 'olymp-auth/server';
import { pagesGraphQL } from 'olymp-pages/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { googleGraphQL } from 'olymp-google/server';
import { scrapeGraphQL } from 'olymp-scrape/server';
import auth0 from 'olymp-auth0/server';
import { MongoClient } from 'mongodb';
/* import createSitemap from 'olymp-sitemap/server'; */
import createMonk from 'monk';
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
  const monk = createMonk(MONGODB_URI);
  let db = null;

  MongoClient.connect(MONGODB_URI, (err, d) => {
    if (err) {
      console.error(err);
      if (err.errors) {
        err.errors.forEach(err => console.error(err));
      }
    }
    db = d;
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
    ...get(options, 'modules', {}),
    ...colModules,
  };
  const mail = createMail(POSTMARK_KEY, {
    from: POSTMARK_FROM,
    url: URL,
  });

  const authEngine = createAuthEngine({
    db,
    mail,
    secret: AUTH_SECRET,
    app: APP,
  });

  const algolia = ALGOLIA
    ? algoliasearch(ALGOLIA.split('@')[1], ALGOLIA.split('@')[0])
    : null;

  // const responseCache = createResponseCache();
  let cachedApp = null;

  server.use((req, res, next) => {
    req.db = db;
    req.mail = mail;
    req.monk = monk;
    req.schema = schema.getSchema();
    req.authEngine = authEngine;
    req.app = cachedApp;
    req.algolia = algolia;
    /* // req.responseCache = responseCache;
    if (
      req.body &&
      req.body.query &&
      typeof req.body.query === 'string' &&
      req.body.query.indexOf('mutation ') === 0
    ) {
      console.log('reset cache');
      responseCache.clear();
    } */
    next();
  });
  server.use(authCache(authEngine));

  modules.auth = authGraphQL({
    attributes: `${options.auth.attributes || ''} _appIds:[String]`,
    getQueries: queries => ({
      ...queries,
      verify: async (root, args, context) => {
        const user = await queries.verify(root, args, context);
        if (!user) {
          return user;
        }
        if (user._appIds && user._appIds.indexOf(APP) !== -1) {
          return user;
        }
        throw new Error('No permission');
      },
      invitationList: (source, args, { user, monk }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        return monk.collection('invitation').find({ _appIds: APP });
      },
      userList: (source, args, { user, monk }) => {
        if (!user || !user.isAdmin) {
          throw new Error('No permission');
        }
        return monk.collection('user').find({ _appIds: APP });
      },
      user: (source, args, { user, monk }) => {
        if (user && user.isAdmin) {
        } else if (user && user.id === args.id) {
        } else {
          throw new Error('No permission');
        }
        return monk.collection('user').findOne({ id: args.id, _appIds: APP });
      },
    }),
    getMutations: mutations => ({
      ...mutations,
      login: async (root, args, context) => {
        const user = await mutations.login(root, args, context);
        if (user._appIds && user._appIds.indexOf(APP) !== -1) {
          return user;
        }
        throw new Error('No permission');
      },
    }),
  });
  modules.pages = pagesGraphQL();
  modules.cloudinary = cloudinaryGraphQL(CLOUDINARY_URI);
  modules.scrape = scrapeGraphQL();
  modules.google = googleGraphQL(
    GOOGLE_MAPS_KEY,
    GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY,
  );
  /*
  createSitemap(schema, options.sitemap);
  googleGraphQL(schema, GM_KEY, options.google);
  pagesGraphQL(schema, options.pages);
  cloudinaryGraphQL(schema, CLOUDINARY_URI, options.cloudinary);

  if (options.schemas) {
    options.schemas({ schema, mail, authEngine, server, monk });
  }

  let cachedApp = null;
  // Add GraphQL API
  server.post('/graphql', (req, res, next) => {
    if (cachedApp) {
      return schema.express(req, res, next);
    }
    monk
      .collection('apps')
      .findOne({ id: APP })
      .then((app) => {
        if (!app) {
          throw new Error('App not found');
        }
        cachedApp = app;
        // attach schemata
        // schema.addSchema();
        schema.express(req, res, next);
      })
      .catch(err => next(err));
  }); */
  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }

  monk
    .collection('app')
    .findOne({ id: APP })
    .then(app => {
      if (!app) {
        throw new Error('App not found');
      }
      cachedApp = app;
      schema.apply(modules);
    });

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
