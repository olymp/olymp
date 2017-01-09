
require('dotenv').config();

const bodyparser = require('body-parser');
const createSchema = require('./graphql');
const createMail = require('./mail');

const createGoogleGql = require('./google');
const createMediaGql = require('./media');
const createAuthGql = require('./auth');
const createPagesGql = require('./pages');
const createSitemap = require('./sitemap');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

module.exports = (server, options) => {
  let adapter;

  server.use(bodyparser.json());
  if (options.adapter && options.adapter.indexOf('mongodb') === 0) adapter = require('./store-mongo')(options.adapter);
  // if (options.adapter && options.adapter.indexOf('redis') === 0) adapter = require('./store-redis')(options.adapter);
  server.adapter = adapter;

  if (options.sessions && adapter) {
    server.useSession('/graphql', session => ({
      store: adapter.createSessionStore(session),
      resave: false,
      saveUninitialized: false,
      secret: options.sessions.secret || options.sessions,
      cookie: {
        secure: 'auto',
        maxAge: 60000000,
      },
    }));
  }

  const Schema = createSchema({ adapter });
  const mail = options.mail ? createMail(options.mail) : null;
  createSitemap(Schema, {});
  if (options.google) createGoogleGql(Schema, typeof options.google === 'object' ? options.google : {});
  if (options.pages) createPagesGql(Schema, typeof options.pages === 'object' ? Object.assign({ adapter }, options.pages) : { adapter });
  if (options.media) createMediaGql(Schema, typeof options.media === 'object' ? Object.assign({ adapter }, options.media) : { uri: options.media });
  if (options.schemas) {
    if (typeof options.schemas === 'function') {
      options.schemas({ schema: Schema, adapter });
    } else if (Array.isArray(options.schemas)) {
      options.schemas.forEach(s => s(Schema, { adapter }));
    }
  }

  if (options.auth) {
    if (typeof options.auth === 'string') options.auth = { secret: options.auth };
    const { auth } = createAuthGql(Schema, Object.assign({ adapter, mail }, options.auth));
    server.all('/graphql', (req, res, next) => {
      if (req.session && req.session.userId) {
        auth.getUser(req.session.userId).then(x => {
          req.user = x;
          next();
        });
      } else {
        next();
      }
    });
    server.auth = auth;
  }

  if (process.env.NODE_ENV !== 'production') {
    server.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  const { schema, getContext } = Schema.getSchema();
  server.post('/graphql', graphqlExpress(request => ({ schema, context: getContext(request) })));
};
