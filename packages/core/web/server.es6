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
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
// Redux
import { applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
// Olymp
import { createFela } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import { AmpProvider, UAProvider } from 'olymp-utils';
import fetch from 'isomorphic-fetch';

// Locale
import App from '@app';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';

global.fetch = fetch;

export default ({ isAmp, userAgent, url, graphqlUrl }) => {
  const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
    addTypename: true,
  });
  const client = new ApolloClient({
    cache,
    link: new HttpLink({ uri: graphqlUrl }),
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

  return Promise.all([getDataFromTree(reactApp), asyncBootstrapper(reactApp)])
    .then(() => {
      const reactAppString = isAmp
        ? renderToStaticMarkup(reactApp)
        : renderToString(reactApp);
      const felaMarkup = renderToSheetList(renderer);
      const asyncState = asyncContext.getState();
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
    });
};
