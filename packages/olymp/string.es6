// eslint-ignore
// Node
import path from 'path';
import jsonfile from 'jsonfile';
// React
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { renderToSheetList } from 'fela-dom';
import Helmet from 'react-helmet';
// Etc
import fetch from 'isomorphic-fetch';
// Apollo
import { getDataFromTree } from 'react-apollo';
// Redux
import { applyMiddleware, compose } from 'redux';
// Olymp
import createDynamicRedux from 'olymp-redux';
import getApollo from 'olymp-apollo/local';
import App, { plugins } from '__app__';

// Locale
import template from './templates/default';
import amp from './templates/amp';
import enhance from './root';

// eslint
global.fetch = fetch;

const { IS_SSR, GA_TRACKING_ID, BUILD_ON, NODE_ENV } = process.env;

const isProd = NODE_ENV === 'production';

let $assets;
const getAssets = () => {
  if (!$assets || !isProd) {
    $assets =
      jsonfile.readFileSync(
        path.resolve(__dirname, '..', 'web', 'assets.json')
      ) || {};
  }
  return $assets;
};

// Setup server side routing.
export default (
  originalUrl,
  { isAmp, isBot, schema, query, ua, ssr, js = [], css = [], ...context }
) => {
  // const assets = getAssets();
  const assets = {
    app: {
      js: 'app.js',
    },
  };
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
  const url = decodeURI(originalUrl);
  const history = createHistory({ initialEntries: [url] });
  const dynamicRedux = createDynamicRedux();
  const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
  const store = createDynamicStore(
    {
      // app: appReducer(),
      location: routerReducer(history),
    },
    compose(
      applyMiddleware(dynamicMiddleware),
      applyMiddleware(routerMiddleware(history))
      // applyMiddleware(apolloMiddleware(client)),
      // applyMiddleware(appMiddleware),
    )
  );

  const props = {
    dynamicRedux,
    store,
    renderer,
    client,
    ua,
    isAmp,
  };
  const Root = enhance(App);
  const reactApp = <Root {...props} />;

  return Promise.all([getDataFromTree(reactApp)])
    .then(() => {
      const reactAppString = isAmp
        ? renderToStaticMarkup(reactApp)
        : renderToString(reactApp);
      // Generate the html res.
      const state = store.getState();
      const html = renderTemplate({
        ...Helmet.rewind(),
        isAmp,
        isBot,
        root: reactAppString,
        buildOn: BUILD_ON,
        scripts: isAmp ? js : [...js, assets.app.js].filter(x => x),
        styles: isAmp ? css : [...css, assets.app.css].filter(x => x),
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