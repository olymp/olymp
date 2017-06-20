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
  if (process.env.NODE_ENV !== 'production') {
    server.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  const { schema, getContext } = Schema.getSchema();
  server.post(
    '/graphql',
    graphqlExpress(request => ({ schema, context: getContext(request) }))
  );
};
