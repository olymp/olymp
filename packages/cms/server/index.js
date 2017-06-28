import createSchema from 'olymp-graphql/server';
import createMail from 'olymp-mail/server';
import { authGraphQL, authCache, createAuthEngine } from 'olymp-auth/server';
import { pagesGraphQL } from 'olymp-pages/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
/* import createSitemap from 'olymp-sitemap/server';
import { googleGraphQL } from 'olymp-google/server';*/
import createMonk from 'monk';
import { modules as colModules, directives } from 'olymp-collection/server';
import { get } from 'lodash';

const {
  APP,
  MONGODB_URI,
  POSTMARK_KEY,
  GM_KEY,
  CLOUDINARY_URI,
  // FILESTACK_KEY,
  AUTH_SECRET,
  NODE_ENV,
} = process.env;

export default (server, options) => {
  const monk = createMonk(MONGODB_URI);

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
  const mail = createMail(POSTMARK_KEY, options.mail);

  const authEngine = createAuthEngine({ monk, mail, secret: AUTH_SECRET });
  server.use(authCache(authEngine));

  let cachedApp = null;
  server.use((req, res, next) => {
    req.mail = mail;
    req.monk = monk;
    req.schema = schema;
    req.authEngine = authEngine;
    req.app = cachedApp;
    next();
  });

  modules.auth = authGraphQL(options.auth);
  modules.pages = pagesGraphQL();
  modules.cloudinary = cloudinaryGraphQL(CLOUDINARY_URI);
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
  });*/
  server.post('/graphql', schema.express);
  if (NODE_ENV !== 'production') {
    server.get('/graphql', schema.graphi);
  }

  monk.collection('app').findOne({ id: APP }).then((app) => {
    if (!app) {
      throw new Error('App not found');
    }
    cachedApp = app;
    schema.apply(modules);
  });

  /* monk.collection('page').find({}).then((items) => {
    items.forEach((item) => {
      monk.collection('item').insert({ ...item, _type: 'page', _appId: 'gzk' });
    });
  });
  monk.collection('file').find({}).then((items) => {
    items.forEach((item) => {
      monk.collection('item').insert({ ...item, _type: 'file', _appId: 'gzk' });
    });
  });*/
};

/* if (mail) mail({ to: 'bkniffler@me.com', subject: 'Hello!', markdown: `
Hallo
## kopo [Anmelden](http://google.de)
[Anmelden](http://google.de)
` }).then(x => x.json()).then(x => console.log(x)).catch(err => console.error(err));*/

/*
import { filestackGraphQL } from 'olymp-filestack/server';

if (FILESTACK_KEY) {
  filestackGraphQL(schema, FILESTACK_KEY, options.filestack);
}
*/
