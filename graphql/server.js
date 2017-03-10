var Cache = require('stale-lru-cache');

const bodyparser = require('body-parser');
const createSchema = require('./graphql');
const createMail = require('./mail');

const createGoogleGql = require('./google');
const createMediaGql = require('./media');
const createAuthGql = require('./auth');
const createPagesGql = require('./pages');
const createSitemap = require('./sitemap');
const createTagGql = require('./tags');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

module.exports = (server, options) => {
  let adapter;

  server.use(bodyparser.json());
  if (options.adapter && options.adapter.indexOf('mongodb') === 0) adapter = require('./store-mongo')(options.adapter);
  // if (options.adapter && options.adapter.indexOf('redis') === 0) adapter = require('./store-redis')(options.adapter);
  server.adapter = adapter;

  const Schema = createSchema({ adapter });
  const mail = options.mail ? createMail(options.mail) : null;
  createSitemap(Schema, {});
  createTagGql(Schema, { adapter });
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
    const cache = new Cache({ maxSize: 100, maxAge: 20 });
    const handler = (req, res, next) => {
      if (!adapter.client) {
        return setTimeout(() => handler(req, res, next), 250);
      }

      if (req.session && req.session.userId) {
        req.user = cache.get(req.session.userId);
        if (req.user) {
          return next();
        } else {
          auth.getUser(req.session.userId).then((x) => {
            req.user = x;
            cache.set(req.session.userId, req.user);
            next();
          });
        }
      } else {
        next();
      }
    }
    server.use(handler);
    server.auth = auth;
  }

  if (process.env.NODE_ENV !== 'production') {
    server.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  const { schema, getContext } = Schema.getSchema();
  server.post('/graphql', graphqlExpress(request => ({ schema, context: getContext(request) })));
};
