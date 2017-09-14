require('dotenv').config();

import express from 'express';
import compression from 'compression';
import session from 'express-session';
import path from 'path';
import React from 'react';
import fetch from 'isomorphic-fetch';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import template from '../templates/default';
import amp from '../templates/amp';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';
import { GatewayProvider } from 'react-gateway';
import 'source-map-support/register';
import createRedisStore from 'connect-redis';
import fs from 'fs';
import useragent from 'express-useragent';
import sslRedirect from 'heroku-ssl-redirect';
import bodyparser from 'body-parser';
import { applyMiddleware, compose } from 'redux';
import { authMiddleware, authReducer } from 'olymp-auth';
import { createFela, felaReducer } from 'olymp-fela';
import { apolloMiddleware } from 'olymp-graphql';
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
import createDynamicRedux, { DynamicReduxProvider } from '../redux-dynamic';
import { appReducer, appMiddleware } from '../redux';
import App from '@app';

const version = +fs.statSync(__filename).mtime;
console.log('VERSION', version);

const RedisStore = createRedisStore(session);

// import { render, template } from 'rapscallion';

global.fetch = fetch;

const isProd = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT, 10);

// Client assets
const clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
const clientAssets = fs.existsSync(clientAssetsPath)
  ? JSON.parse(fs.readFileSync(clientAssetsPath))
  : null; // eslint-disable-line import/no-dynamic-require
const app = express();
/* app.emitter = new EventEmitter();

// Websocket Server
app.listenWS = (options) => {
  const wss = new WebSocketServer(options);
  wss.on('connection', (socket) => {
    const onPing = (message) => {
      socket.send(JSON.stringify({ type: 'pong', version }));
    };

    const onMessage = (raw) => {
      if (!raw) {
        return;
      }
      if (raw === 'ping') {
        return onPing(raw);
      }
      console.log('WS', raw);
      let json = {};
      try {
        json = JSON.parse(raw);
        if (json) {
          app.emitter.emit('ws', { json, raw, socket });
        }
      } catch (err) {
        console.error('Websocket error', err);
      }
    };
    socket.on('message', onMessage);
  });
  return wss;
};

// app.wss.close();
// ---*/

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

// Compress (gzip) assets in production.
app.use(compression());
app.use(useragent.express());

// Setup the public directory so that we can server static assets.
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

const trust = process.env.TRUST_PROXY !== undefined ? parseInt(process.env.TRUST_PROXY) : 2;
const secure = process.env.COOKIE_SECURE ? `${process.env.COOKIE_SECURE}` === 'true' : isProd;
const domain = process.env.URL ? process.env.URL.split('/')[2] : undefined;

if (isProd) {
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
    proxy: !!trust,
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
  const scripts = req.isAmp
    ? []
    : [isProd ? `${clientAssets.app.js}` : `${process.env.DEV_URL}/app.js`];
  const styles = req.isAmp ? [] : isProd ? [`${clientAssets.app.css}`] : [];

  if (process.env.SSR === false) {
    const html = (req.isAmp ? amp : template)({
      gaTrackingId: process.env.GA_TRACKING_ID,
      scripts,
      styles,
    });
    res.send(html);
    return;
  }

  const client = new ApolloClient({
    networkInterface: {
      query: ({ query, variables, operationName }) =>
        graphql(req.schema, print(query), {}, req, variables, operationName),
    },
    dataIdFromObject: o => o.id,
    ssrMode: true,
  });
  const ua = new UAParser(req.headers['user-agent']);
  const renderer = createFela(ua);
  const history = createHistory({ initialEntries: [req.url] });

  const dynamicRedux = createDynamicRedux();
  const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
  const store = createDynamicStore(
    {
      app: appReducer,
      apollo: client.reducer(),
      location: routerReducer(history),
      auth: authReducer,
      fela: felaReducer,
    },
    compose(
      applyMiddleware(dynamicMiddleware),
      applyMiddleware(client.middleware()),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(apolloMiddleware(client)),
      applyMiddleware(authMiddleware),
      applyMiddleware(appMiddleware),
    ),
  );

  const context = {};
  const reactApp = (
    <DynamicReduxProvider dynamicRedux={dynamicRedux}>
      <ApolloProvider store={store} client={client}>
        <Provider renderer={renderer}>
          <GatewayProvider>
            <UAProvider ua={ua}>
              <AmpProvider amp={req.isAmp}>
                <App />
              </AmpProvider>
            </UAProvider>
          </GatewayProvider>
        </Provider>
      </ApolloProvider>
    </DynamicReduxProvider>
  );

  // return
  return getDataFromTree(reactApp)
    .then(() => {
      const reactAppString = req.isAmp ? renderToStaticMarkup(reactApp) : renderToString(reactApp);
      const cssMarkup = renderer.renderToString();

      // Generate the html res.
      const state = store.getState();
      const html = (req.isAmp ? amp : template)({
        ...Helmet.rewind(),
        root: reactAppString,
        scripts,
        styles,
        cssMarkup,
        initialState: { apollo: client.getInitialState(), fela: state.fela },
        gaTrackingId: process.env.GA_TRACKING_ID,
      });

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the res.
      if (context.url) {
        res.status(301).setHeader('Location', context.url);
        res.end();
        return;
      }

      res.status(context.missed ? 404 : 200);
      res.send(html);
      // responseRenderer.toStream().pipe(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

export default app;
