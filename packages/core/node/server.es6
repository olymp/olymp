require('dotenv').config();

// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import fs from 'fs';
import jsonfile from 'jsonfile';
import { URL } from 'url';
// Express
import express from 'express';
import compression from 'compression';
import bodyparser from 'body-parser';
import useragent from 'express-useragent';
// React
import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { renderToSheetList } from 'fela-dom';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'; // 👈
import asyncBootstrapper from 'react-async-bootstrapper'; // 👈
// Etc
import fetch from 'isomorphic-fetch';
// import sslRedirect from 'heroku-ssl-redirect';
import { format } from 'date-fns';
// Apollo
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import { ApolloLink, Observable } from 'apollo-link';
import { getDataFromTree } from './apollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
// Redux
import { applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
// Olymp
import { createFela } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';

// Locale
import App from '@app';
import template from '../templates/default';
import botTemplate from '../templates/bot';
import amp from '../templates/amp';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';

// eslint
global.fetch = fetch;

const {
  ORIGINS,
  GRAPHQL_URL,
  IS_SSR,
  GA_TRACKING_ID,
  BUILD_ON,
  NODE_ENV,
} = process.env;

console.log('BUILD ON', BUILD_ON);

const isProd = NODE_ENV === 'production';

// Client assets
const app = express();

app.use(helmet());

const origins = ORIGINS ? ORIGINS.split(',') : [];
if (GRAPHQL_URL && GRAPHQL_URL.indexOf('/') !== 0) {
  origins.push(new URL(GRAPHQL_URL).host);
}

app.enable('trust proxy');
if (isProd && origins.length) {
  app.use((req, res, next) => {
    const origin = req.headers.origin
      ? new URL(req.headers.origin).host
      : req.headers.host;
    if (origins.indexOf(origin) >= 0) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,OPTIONS,PUT,PATCH,DELETE',
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,Content-Type,Authorization,X-HTTP-Method-Override,Accept',
      );
      res.setHeader('Access-Control-Allow-Credentials', true);
    }
    next();
  });
}

app.use(compression());
app.use(useragent.express());

const maxAge = isProd ? '90d' : 0; // 3 months
app.use(express.static(path.resolve(process.cwd(), 'public'), { maxAge }));
app.use(
  express.static(path.resolve(process.cwd(), '.dist', 'web'), { maxAge }),
);
app.use(
  express.static(
    path.resolve(process.cwd(), 'node_modules', 'olymp', 'public'),
    { maxAge },
  ),
);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  req.ua = new UAParser(req.headers['user-agent']);
  req.isBot =
    req.headers['user-agent'].indexOf('Speed Insights') != -1 ||
    /bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(
      req.headers['user-agent'],
    ) ||
    req.query.__bot__ !== undefined;
  if (
    req.subdomains &&
    req.subdomains.length === 1 &&
    req.subdomains[0] === 'amp'
  ) {
    req.isAmp = true;
  } else if (req.query.amp !== undefined) {
    req.isAmp = true;
  }
  next();
});

try {
  const server = require('@root/server');
  if (server.default) {
    server.default(app);
  } else {
    server(app);
  }
} catch (err) {
  console.log(
    'No server.js or server/index.js file found, using default settings',
    err,
  );
}

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
app.get('*', (req, res) => {
  const { isAmp } = req;
  const assets = getAssets();
  const renderTemplate = req.isAmp ? amp : req.isBot ? botTemplate : template;
  if (IS_SSR === false) {
    const html = renderTemplate({
      gaTrackingId: GA_TRACKING_ID,
      scripts: isAmp || !assets.app.js ? [] : [assets.app.js],
      styles: isAmp || !assets.app.css ? [] : [assets.app.css],
      buildOn: BUILD_ON,
    });
    res.send(html);
    return;
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
            req.schema,
            request.query,
            null,
            req,
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
  const renderer = createFela(req.ua);
  const url = decodeURI(req.originalUrl);
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
              <UAProvider ua={req.ua}>
                <AmpProvider amp={req.isAmp}>
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
      const reactAppString = req.isAmp
        ? renderToStaticMarkup(reactApp)
        : renderToString(reactApp);
      const felaMarkup = renderToSheetList(renderer);
      const asyncState = asyncContext.getState();
      // Generate the html res.
      const state = store.getState();
      const html = renderTemplate({
        ...Helmet.rewind(),
        isBot: req.isBot,
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
        res.status(301).setHeader('Location', encodeURI(state.location.url));
        res.end();
        return;
      }
      res.status(state.location.isMiss ? 404 : 200);
      res.send(html);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

export default app;
