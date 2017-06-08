import createSchema from './graphql';
import Cache from 'stale-lru-cache';
import createMail from 'olymp-mail/server';
import { googleGraphQL } from 'olymp-google/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { filestackGraphQL } from 'olymp-filestack/server';
import { authGraphQL } from 'olymp-auth/server';
import { tagsGraphQL } from 'olymp-cms/server';
import { pagesGraphQL } from 'olymp-pages/server';
import createSitemap from 'olymp-sitemap';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

export default (server, options) => {
  let adapter;

  if (options.adapter && options.adapter.indexOf('mongodb') === 0) adapter = require('./store-mongo')(options.adapter);
  // if (options.adapter && options.adapter.indexOf('redis') === 0) adapter = require('./store-redis')(options.adapter);
  server.adapter = adapter;

  const Schema = createSchema({ adapter });
  const mail = options.mail && process.env.POSTMARK_KEY ? createMail(options.mail) : null;
  /*if (mail) mail({ to: 'bkniffler@me.com', subject: 'Hello!', markdown: `
Hallo
## kopo [Anmelden](http://google.de)
[Anmelden](http://google.de)
` }).then(x => x.json()).then(x => console.log(x)).catch(err => console.error(err));*/
  createSitemap(Schema, {});
  tagsGraphQL(Schema, { adapter });
  if (options.google) googleGraphQL(Schema, typeof options.google === 'object' ? options.google : {});
  if (options.pages) pagesGraphQL(Schema, typeof options.pages === 'object' ? Object.assign({ adapter }, options.pages) : { adapter });
  if (options.media) cloudinaryGraphQL(Schema, typeof options.media === 'object' ? Object.assign({ adapter }, options.media) : { uri: options.media });
  if (process.env.FILESTACK_KEY) filestackGraphQL(Schema, { adapter });
  if (options.auth) {
    if (typeof options.auth === 'string') options.auth = { secret: options.auth };
    const { auth } = authGraphQL(Schema, Object.assign({ adapter, mail }, options.auth));
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
    };
    server.use(handler);
    server.auth = auth;
  }
  if (options.schemas) {
    if (typeof options.schemas === 'function') {
      options.schemas({ schema: Schema, adapter, mail });
    } else if (Array.isArray(options.schemas)) {
      options.schemas.forEach(s => s(Schema, { adapter, mail }));
    }
  }


  if (process.env.NODE_ENV !== 'production') {
    server.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  const { schema, getContext } = Schema.getSchema();
  server.post('/graphql', graphqlExpress(request => ({ schema, context: getContext(request) })));
};
