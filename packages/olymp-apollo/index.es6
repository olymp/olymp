import getApollo from 'olymp-apollo/remote';
import getApollo2 from 'olymp-apollo/local';
import { apolloMiddleware } from 'olymp-apollo/redux';
import { ApolloProvider } from 'react-apollo';
import React from 'react';

export const plugin = () => {
  if (typeof window !== 'undefined') {
    const { client } = getApollo({
      url: window.GRAPHQL_URL || process.env.GRAPHQL_URL || '/graphql',
      initialData: window.APOLLO_STATE || {},
    });
    return {
      decorate: App => props => (
        <ApolloProvider client={client}>
          <App {...props} />
        </ApolloProvider>
      ),
    };
  } else {
    const { cache, client } = getApollo2(schema, context);
    return {
      decorate: App => props => (
        <ApolloProvider client={client}>
          <App {...props} />
        </ApolloProvider>
      ),
      template: template => {
        template.body.push(`
          <script type="text/javascript">
            window.APOLLO_STATE = ${serialize(cache.data)}
          </script>
        `);
        return template;
      },
    };
  }
};
