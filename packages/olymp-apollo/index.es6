import React from 'react';
import { ApolloProvider } from 'react-apollo';
import getApollo from './remote';
import getApollo2 from './local';
import enhance from './redux';

export const APOLLO_MUTATE = 'APOLLO_MUTATE';
export const APOLLO_QUERY = 'APOLLO_QUERY';

export const ACTION_SUFFIX_PENDING = '_PENDING';
export const ACTION_SUFFIX_RESOLVED = '_RESOLVED';
export const ACTION_SUFFIX_REJECTED = '_REJECTED';

export const pending = action => `${action}${ACTION_SUFFIX_PENDING}`;
export const rejected = action => `${action}${ACTION_SUFFIX_REJECTED}`;
export const resolved = action => `${action}${ACTION_SUFFIX_RESOLVED}`;

export const plugin = ({ loader = {} } = {}) => {
  if (typeof window !== 'undefined') {
    console.log(loader);
    const { client } = getApollo({
      loader,
      url: window.GRAPHQL_URL || process.env.GRAPHQL_URL || '/graphql',
      initialData: window.APOLLO_STATE || {},
      tokenKey: 'access_token',
    });
    return {
      decorate: App => {
        App = enhance({ loader })(App);
        return props => (
          <ApolloProvider client={client}>
            <App {...props} />
          </ApolloProvider>
        );
      },
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
