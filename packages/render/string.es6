// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import jsonfile from 'jsonfile';
// React
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { renderToSheetList } from 'fela-dom';
import Helmet from 'react-helmet';
import { createAsyncContext } from 'react-async-component'; // 👈
import asyncBootstrapper from 'react-async-bootstrapper'; // 👈
// Etc
import fetch from 'isomorphic-fetch';
// import sslRedirect from 'heroku-ssl-redirect';
// Apollo
import { getDataFromTree } from 'react-apollo';
// Redux
import { applyMiddleware, compose } from 'redux';
// Olymp
import { createFela } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import createDynamicRedux from 'olymp-redux';
import getApollo from 'olymp-apollo/local';

// Locale
import template from '../templates/default';
import amp from '../templates/amp';
import { appReducer, appMiddleware } from '../redux';
import Root from './root';

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
export default (originalUrl, { isAmp, isBot, schema, query, ua, ssr, js = [], css = [], ...context }) => {
  const assets = getAssets();
  const renderTemplate = isAmp ? amp : template;
  if (IS_SSR === false && !ssr) {
    const html = renderTemplate({
      gaTrackingId: GA_TRACKING_ID,
      scripts: isAmp || !assets.app.js ? js : [...js, assets.app.js],
      styles: isAmp || !assets.app.css ? css : [...css, assets.app.css],
      buildOn: BUILD_ON,
    });
    return Promise.resolve({ status: 200, result: html });
  }

  const { cache, client } = getApollo(schema, context);
  const renderer = createFela();
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
  const props = {
    asyncContext,
    dynamicRedux,
    store,
    renderer,
    client,
    ua,
    isAmp
  };
  const reactApp = (
    <Root {...props} />
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
      const html = renderTemplate({
        ...Helmet.rewind(),
        isAmp,
        isBot,
        root: reactAppString,
        buildOn: BUILD_ON,
        fela: felaMarkup,
        scripts: isAmp ? js : [...js, assets.app.js].filter(x => x),
        styles: isAmp ? css : [...css, assets.app.css].filter(x => x),
        asyncState,
        initialState: {
          apollo: cache.data,
          // location: state.location,
        },
        gaTrackingId: GA_TRACKING_ID,
      });
      if (state.location.url !== url) {
        return { status: 'REDIRECT', result: encodeURI(state.location.url) };
      }
      return { status: state.location.isMiss ? 'MISS' : 'OK', result: html };
    })
    .catch(err => ({ status: 'ERROR', result: err.message }));
};
