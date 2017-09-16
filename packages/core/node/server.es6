require('dotenv').config();

// eslint-ignore
import 'source-map-support/register';

// Node
import path from 'path';
import fs from 'fs';
// Express
import express from 'express';
import compression from 'compression';
import session from 'express-session';
import bodyparser from 'body-parser';
import createRedisStore from 'connect-redis';
import useragent from 'express-useragent';
// React
import React from 'react';
import InMemoryCache from 'apollo-cache-inmemory';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
// Etc
import fetch from 'isomorphic-fetch';
import sslRedirect from 'heroku-ssl-redirect';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
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
import { authMiddleware, authReducer } from 'olymp-auth';
import { createFela, felaReducer } from 'olymp-fela';
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

const version = +fs.statSync(__filename).mtime;
console.log('VERSION', version);

const RedisStore = createRedisStore(session);

const isProd = process.env.NODE_ENV === 'production';
const isDeployed = `${process.env.YARN_PRODUCTION}` === 'true';

// Client assets
const clientStatsPath = path.resolve(__dirname, '..', 'web', 'stats.json');
const clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
const clientStats = fs.existsSync(clientStatsPath)
  ? JSON.parse(fs.readFileSync(clientStatsPath))
  : null; // eslint-disable-line import/no-dynamic-require
const clientAssets = fs.existsSync(clientAssetsPath)
  ? JSON.parse(fs.readFileSync(clientAssetsPath))
  : null; // eslint-disable-line import/no-dynamic-require
const app = express();

app.use(helmet());
if (
  process.env.NODE_ENV === 'production' &&
  process.env.URL &&
  process.env.URL.indexOf('https:') === 0
) {
  app.use(sslRedirect());
  /* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });*/
}

app.use(compression());
app.use(useragent.express());

app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(express.static(path.resolve(process.cwd(), '.dist', 'web')));
app.use(express.static(path.resolve(process.cwd(), 'node_modules', 'olymp', 'public')));
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

const trust = isDeployed ? 2 : null;
const secure = isDeployed;
const domain = process.env.URL ? process.env.URL.split('/')[2] : undefined;

if (isDeployed) {
  app.set('trust proxy', trust);
}
app.use(
  session({
    store: process.env.REDIS_URL
      ? new RedisStore({ url: process.env.REDIS_URL, logErrors: true })
      : undefined,
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    proxy: isDeployed,
    domain,
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    cookie: {
      secure,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  }),
);

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
      app: appReducer,
      location: routerReducer(history),
      auth: authReducer,
      fela: felaReducer,
    },
    { auth: { user: req.user } },
    compose(
      applyMiddleware(dynamicMiddleware),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(apolloMiddleware(client)),
      applyMiddleware(authMiddleware),
      applyMiddleware(appMiddleware),
    ),
  );

  const reactApp = (
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
  );

  getDataFromTree(reactApp)
    .then(() => {
      const reactAppString = req.isAmp ? renderToStaticMarkup(reactApp) : renderToString(reactApp);
      const cssMarkup = renderer.renderToString();

      let scripts = [];
      let styles = [];
      let cssHash = [];
      if (clientStats) {
        const chunkNames = flushChunkNames();
        const r = flushChunks(clientStats, {
          chunkNames,
          before: ['bootstrap'],
          after: ['app'],
        });
        scripts = (r.scripts || []).map(x => `${clientStats.publicPath}${x}`);
        styles = (r.stylesheets || []).map(x => `${clientStats.publicPath}${x}`);
        cssHash = r.cssHash;
      } else {
        scripts = isAmp
          ? []
          : [isProd ? `${clientAssets.app.js}` : `${process.env.DEV_URL}/app.js`];
        styles = isAmp ? [] : isProd ? [`${clientAssets.app.css}`] : [];
      }

      // Generate the html res.
      const state = store.getState();
      const html = (req.isAmp ? amp : template)({
        ...Helmet.rewind(),
        root: reactAppString,
        scripts,
        styles,
        cssMarkup,
        cssHash,
        initialState: {
          apollo: cache.data,
          fela: state.fela,
          auth: state.auth,
          location: state.location,
        },
        gaTrackingId: process.env.GA_TRACKING_ID,
      });

      console.log('MATCH?', state.location.url, req.originalUrl, 'Is miss', state.location.isMiss);
      if (state.location.url !== req.originalUrl) {
        res.status(301).setHeader('Location', state.location.url);
        res.end();
        return;
      }

      res.status(state.location.isMiss ? 404 : 200);
      res.send(html);
      // responseRenderer.toStream().pipe(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

export default app;
