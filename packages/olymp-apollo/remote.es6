import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

export default ({ url, initialData, loader, tokenKey }) => {
  const link = createHttpLink({ uri: url });
  const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
    addTypename: true,
  }).restore(initialData || {});
  const client = new ApolloClient({ link, cache, dataIdFromObject: o => o.id });
  if (tokenKey) {
    link.use((request, next) => {
      const token = localStorage.getItem(tokenKey);
      if (token && token !== 'null') {
        request.options.headers = {
          ...request.options.headers,
          authorization: token ? `${token}` : null,
        };
      }
      request.options.credentials = 'same-origin';
      next();
    });
  }
  if (loader) {
    link.use((request, next) => {
      loader.start();
      next();
    });
    link.useAfter((response, next) => {
      loader.stop();
      next();
    });
  }
  return { cache, client };
  /* const apolloFetch = createApolloFetch({
    uri: url,
    opts: {
      credentials: 'same-origin',
    },
  });
  const link = ApolloLink.from([
    ({ context, ...operation }) => {
      const request = {
        ...operation,
        query: print(operation.query),
      };
      const then = observer => data => {
        if (!store.getState().app.serverConnection) {
          createServerConnection(store.dispatch)(true);
        }
        if (!observer.closed) {
          observer.next(data);
          observer.complete();
        }
      };
      const catchError = observer => error => {
        stopLoading(store.dispatch);
        const status = error.response ? error.response.status : 500;
        if (status === 404) {
          // Not found handler.
        } else if (status === 500) {
          if (store.getState().app.serverConnection) {
            createServerConnection(store.dispatch)(false);
          }
          return new Promise(resolve => {
            setTimeout(resolve, 10000);
          }).then(() =>
            apolloFetch(request)
              .then(then(observer))
              .catch(catchError(observer)),
          );
          // Other errors.
        } else if (!observer.closed) {
          observer.error(error);
        }
      };
      return new Observable(observer => {
        apolloFetch(request)
          .then(then(observer))
          .catch(catchError(observer));
      });
    },
  ]);
  const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
    addTypename: true,
  }).restore(initialData || {});
  const client = new ApolloClient({ link, cache, dataIdFromObject: o => o.id });
  return { cache, client }; */
};