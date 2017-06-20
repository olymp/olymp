import createSchema from 'olymp-graphql';
import createMail from 'olymp-mail/server';
import { googleGraphQL } from 'olymp-google/server';
import { cloudinaryGraphQL } from 'olymp-cloudinary/server';
import { filestackGraphQL } from 'olymp-filestack/server';
import { authGraphQL, authCache, createAuth } from 'olymp-auth/server';
import { tagsGraphQL } from 'olymp-collection/server';
import { pagesGraphQL } from 'olymp-pages/server';
import createSitemap from 'olymp-sitemap';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import expressMongoDb from 'express-mongo-db';
import monk from 'monk';

export default (server, options) => {
  const db = monk(process.env.MONGODB_URI);

  const Schema = createSchema();
  const mail = createMail(process.env.POSTMARK_KEY, options.mail);

  createSitemap(Schema, options.sitemap);
  tagsGraphQL(Schema, options.tags);
  googleGraphQL(Schema, process.env.GM_KEY, options.google);
  pagesGraphQL(Schema, options.pages);
  cloudinaryGraphQL(Schema, process.env.CLOUDINARY_URI, options.cloudinary);
  if (process.env.FILESTACK_KEY) {
    filestackGraphQL(Schema, process.env.FILESTACK_KEY, options.filestack);
  }
  if (options.auth) {
    if (typeof options.auth === 'string') {
      options.auth = { secret: options.auth };
    }
    const auth = createAuth({ db, mail, ...options.auth });
    authGraphQL(Schema, { auth });
    server.use(authCache(auth));
  }

  if (options.schemas) {
    if (typeof options.schemas === 'function') {
      options.schemas({ schema: Schema, mail });
    } else if (Array.isArray(options.schemas)) {
      options.schemas.forEach(s => s(Schema, { db, mail }));
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    server.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  const { schema, getContext } = Schema.getSchema();
  server.post('/graphql', server.schema.express);

  server.post(
    '/graphql',
    graphqlExpress(request => ({ schema, context: getContext(request) }))
  );
};

/* if (mail) mail({ to: 'bkniffler@me.com', subject: 'Hello!', markdown: `
Hallo
## kopo [Anmelden](http://google.de)
[Anmelden](http://google.de)
` }).then(x => x.json()).then(x => console.log(x)).catch(err => console.error(err));*/
