import 'source-map-support/register';

// React
import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { renderToSheetList } from 'fela-dom';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'; // 👈
import asyncBootstrapper from 'react-async-bootstrapper'; // 👈
// Apollo
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import { ApolloLink, Observable } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
// Redux
import { applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
// Olymp
import { createFela } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import { AmpProvider, UAProvider } from 'olymp-utils';

// Locale
import App from '@app';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';
import { getDataFromTree } from './apollo';

export default ({ isAmp, userAgent, url, schema, context }) => {
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

  const renderer = createFela(userAgent);
  const history = createHistory({ initialEntries: [url] });
  const dynamicRedux = createDynamicRedux();
  const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
  const store = createDynamicStore(
    {
      app: appReducer(),
      location: routerReducer(history),
    },
    compose(
      applyMiddleware(dynamicMiddleware),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(apolloMiddleware(client)),
      applyMiddleware(appMiddleware),
    ),
  );

  const asyncContext = createAsyncContext();
  const reactApp = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <DynamicReduxProvider dynamicRedux={dynamicRedux}>
        <ReduxProvider store={store}>
          <ApolloProvider client={client}>
            <Provider renderer={renderer}>
              <UAProvider ua={userAgent}>
                <AmpProvider amp={isAmp}>
                  <App />
                </AmpProvider>
              </UAProvider>
            </Provider>
          </ApolloProvider>
        </ReduxProvider>
      </DynamicReduxProvider>
    </AsyncComponentProvider>
  );

  Promise.all([getDataFromTree(reactApp), asyncBootstrapper(reactApp)])
    .then(() => {
      const reactAppString = isAmp
        ? renderToStaticMarkup(reactApp)
        : renderToString(reactApp);
      const felaMarkup = renderToSheetList(renderer);
      const asyncState = asyncContext.getState();
      // Generate the html res.
      const state = store.getState();

      const { isMiss } = state.location;
      const isRedirect = state.location.url !== url;
      return {
        ...Helmet.rewind(),
        isMiss,
        isRedirect,
        redirectTo: isRedirect ? encodeURI(state.location.url) : null,
        root: reactAppString,
        fela: felaMarkup,
        asyncState,
        initialState: {
          apollo: cache.data,
          // location: state.location,
        },
      };
    })
    .catch(err => {
      console.error(err);
    });
};
