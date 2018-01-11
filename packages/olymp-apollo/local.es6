import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import { ApolloLink, Observable } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

export default (schema, context) => {
  const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
    addTypename: true,
  });
  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
      operation => {
        const request = {
          ...operation,
          query: print(operation.query),
        };
        return new Observable(observer => {
          graphql(
            schema,
            request.query,
            null,
            context,
            request.variables,
            request.operationName,
          )
            .then(data => {
              if (!observer.closed) {
                observer.next(data);
                observer.complete();
              }
            })
            .catch(error => {
              if (!observer.closed) {
                observer.error(error);
              }
            });
        });
      },
    ]),
  });
  const decorate = WrappedComponent => props => (
    <ApolloProvider>
      <WrappedComponent {...props} />
    </ApolloProvider>
  );
  return {
    client,
    cache,
    decorate,
    initialState: (state) => ({
      ...state,
      apollo: cache.data,
    })
  };
}
