// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import jsonfile from 'jsonfile';
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
// Etc
import fetch from 'isomorphic-fetch';
// import sslRedirect from 'heroku-ssl-redirect';
// Apollo
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import { ApolloLink, Observable } from 'apollo-link';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
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
import App from '@root/app';
import template from '../templates/default';
import botTemplate from '../templates/bot';
import amp from '../templates/amp';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';

// eslint
global.fetch = fetch;

const {
  IS_SSR,
  GA_TRACKING_ID,
  BUILD_ON,
  NODE_ENV,
} = process.env;


const isProd = NODE_ENV === 'production';

let $assets;
const getAssets = () => {
  if (!$assets || !isProd) {
    $assets =
      jsonfile.readFileSync(
        path.resolve(__dirname, '..', 'web', 'assets.json'),
      ) || {};
  }
  return $assets;
};

// Setup server side routing.
export default (originalUrl, { isAmp, isBot, schema, query, ua, ssr, ...context }) => {
  const assets = getAssets();
  const renderTemplate = isAmp ? amp : isBot ? botTemplate : template;
  if (IS_SSR === false && !ssr) {
    const html = renderTemplate({
      gaTrackingId: GA_TRACKING_ID,
      scripts: isAmp || !assets.app.js ? [] : [assets.app.js],
      styles: isAmp || !assets.app.css ? [] : [assets.app.css],
      buildOn: BUILD_ON,
    });
    return Promise.resolve({ status: 200, result: html });
  }

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
  const renderer = createFela(ua);
  const url = decodeURI(originalUrl);
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
              <UAProvider ua={ua}>
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
      // Generate the html res.
      const state = store.getState();
      console.log(originalUrl, reactAppString);
      const html = renderTemplate({
        ...Helmet.rewind(),
        isBot,
        root: reactAppString,
        buildOn: BUILD_ON,
        fela: felaMarkup,
        scripts: isAmp ? [] : [assets.app.js].filter(x => x),
        styles: isAmp ? [] : [assets.app.css].filter(x => x),
        asyncState,
        initialState: {
          apollo: cache.data,
          // location: state.location,
        },
        gaTrackingId: GA_TRACKING_ID,
      });
      if (state.location.url !== url) {
        return { status: 301, result: encodeURI(state.location.url) };
      }
      return { status: state.location.isMiss ? 404 : 200, result: html };
    })
    .catch(err => ({ status: 500, result: err.message }));
};
