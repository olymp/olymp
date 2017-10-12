require('dotenv').config();

// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import fs from 'fs';
import { URL } from 'url';
// Express
import express from 'express';
import compression from 'compression';
import bodyparser from 'body-parser';
import useragent from 'express-useragent';

// React
import React from 'react';
import InMemoryCache from 'apollo-cache-inmemory';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { renderToMarkup } from 'fela-dom';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
// Etc
import fetch from 'isomorphic-fetch';
import sslRedirect from 'heroku-ssl-redirect';
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
import { authMiddleware, authReducer } from 'olymp-auth';
import { createFela } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';

// Locale
import App from '@app';
import template from '../templates/default';
import amp from '../templates/amp';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';

// eslint
global.fetch = fetch;

console.log('BUILD ON', process.env.BUILD_ON);

const isProd = process.env.NODE_ENV === 'production';

// Client assets
const clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
const clientAssets = fs.existsSync(clientAssetsPath)
  ? JSON.parse(fs.readFileSync(clientAssetsPath))
  : {}; // eslint-disable-line import/no-dynamic-require
const app = express();

app.use(helmet());

if (
  process.env.NODE_ENV === 'production' &&
  process.env.URL &&
  process.env.URL.indexOf('https:') === 0
) {
  app.use(sslRedirect());
}

if (isProd) {
  const urls = [];
  if (process.env.URL) {
    urls.push(new URL(process.env.URL).origin);
  }
  if (process.env.GRAPHQL_URL) {
    urls.push(new URL(process.env.GRAPHQL_URL).origin);
  }
  if (process.env.ORIGINS) {
    urls.push(process.env.ORIGINS);
  }
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (urls.indexOf(origin) >= 0) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,Content-Type,Authorization,X-HTTP-Method-Override,Accept',
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
}

app.use(compression());
app.use(useragent.express());

const maxAge = 1000 * 60 * 1 * 30 * 3; // 1 month
app.use(express.static(path.resolve(process.cwd(), 'public'), { maxAge }));
app.use(express.static(path.resolve(process.cwd(), '.dist', 'web'), { maxAge }));
app.use(express.static(path.resolve(process.cwd(), 'node_modules', 'olymp', 'public'), { maxAge }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  if (req.subdomains && req.subdomains.length === 1 && req.subdomains[0] === 'amp') {
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
  console.log('No server.js or server/index.js file found, using default settings', err);
}

// Setup server side routing.
app.get('*', (req, res) => {
  const isAmp = req.isAmp;
  if (process.env.SSR === false) {
    const html = (req.isAmp ? amp : template)({
      gaTrackingId: process.env.GA_TRACKING_ID,
      scripts: isAmp ? [] : [isProd ? `${clientAssets.app.js}` : `${process.env.DEV_URL}/app.js`],
      styles: isAmp ? [] : isProd ? [`${clientAssets.app.css}`] : [],
      buildOn: process.env.BUILD_ON,
    });
    res.send(html);
    return;
  }

  const cache = new InMemoryCache({ dataIdFromObject: o => o.id, addTypename: true });
  const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
      (operation) => {
        const request = {
          ...operation,
          query: print(operation.query),
        };
        return new Observable((observer) => {
          graphql(
            req.schema.getSchema(),
            request.query,
            null,
            req,
            request.variables,
            request.operationName,
          )
            .then((data) => {
              if (!observer.closed) {
                observer.next(data);
                observer.complete();
              }
            })
            .catch((error) => {
              if (!observer.closed) {
                observer.error(error);
              }
            });
        });
      },
    ]),
  });
  const ua = new UAParser(req.headers['user-agent']);
  const renderer = createFela(ua);
  const history = createHistory({ initialEntries: [req.originalUrl] });
  const dynamicRedux = createDynamicRedux();
  const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
  const store = createDynamicStore(
    {
      app: appReducer(),
      location: routerReducer(history),
      // auth: authReducer({ user: req.user }),
      auth: authReducer(),
    },
    compose(
      applyMiddleware(dynamicMiddleware),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(apolloMiddleware(client)),
      applyMiddleware(authMiddleware),
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
      const reactAppString = req.isAmp ? renderToStaticMarkup(reactApp) : renderToString(reactApp);
      const felaMarkup = renderToMarkup(renderer);
      const asyncState = asyncContext.getState();

      const scripts = req.isAmp
        ? []
        : isProd ? [`${clientAssets.app.js}`] : [`${process.env.DEV_URL}/app.js`];
      const styles = req.isAmp ? [] : isProd ? [`${clientAssets.app.css}`] : [];
      // Generate the html res.
      const state = store.getState();
      const html = (req.isAmp ? amp : template)({
        ...Helmet.rewind(),
        root: reactAppString,
        buildOn: process.env.BUILD_ON,
        fela: felaMarkup,
        scripts,
        styles,
        asyncState,
        initialState: {
          apollo: cache.data,
          // auth: state.auth,
          // location: state.location,
        },
        gaTrackingId: process.env.GA_TRACKING_ID,
      });
      if (state.location.url !== req.originalUrl) {
        res.status(301).setHeader('Location', state.location.url);
        res.end();
        return;
      }
      res.status(state.location.isMiss ? 404 : 200);
      res.send(html);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

export default app;
