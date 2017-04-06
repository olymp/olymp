import express from 'express';
import compression from 'compression';
import session from 'express-session';
import path from 'path';
import React from 'react';
import env from 'node-env-file';
import fetch from 'isomorphic-fetch';
import { StaticRouter } from 'react-router-dom';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import helmet from 'helmet';
import App from '@app';
import template, { amp } from './template';
import { parseQuery, AmpProvider, routerQueryMiddleware } from 'olymp';
import 'source-map-support/register';
import createRedisStore from 'connect-redis';
import { GatewayProvider } from 'react-gateway';
import fs from 'fs';
import useragent from 'express-useragent';
import createFela from '../fela';
const init = require('@app').init;
const bodyparser = require('body-parser');

// Redux stuff
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// End Redux stuff

const RedisStore = createRedisStore(session);

// import { render, template } from 'rapscallion';

global.fetch = fetch;
env(path.resolve(process.cwd(), '.env'), { raise: false });

const isProd = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT, 10);
const devPort = parseInt(process.env.DEV_PORT, 10);

// Client assets
const clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
const clientAssets = fs.existsSync(clientAssetsPath) ? JSON.parse(fs.readFileSync(clientAssetsPath)) : null; // eslint-disable-line import/no-dynamic-require
const app = express();
app.use(helmet());

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());
app.use(useragent.express());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(express.static(path.resolve(process.cwd(), 'build', 'web')));
app.use(express.static(path.resolve(process.cwd(), 'node_modules', 'olymp', 'public')));
app.use(bodyparser.json());

app.use((req, res, next) => {
  if (req.subdomains && req.subdomains.length === 1 && req.subdomains[0] === 'amp') {
    req.isAmp = true;
  } else if (req.query.amp !== undefined) {
    req.isAmp = true;
  } next();
});

if (isProd) app.set('trust proxy', 2);
app.use(session({
  store: process.env.REDIS_URL ? new RedisStore({ url: process.env.REDIS_URL, logErrors: true }) : undefined,
  resave: false,
  saveUninitialized: true,
  proxy: isProd,
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  cookie: {
    secure: isProd,
    maxAge: 60000000,
  },
}));

try {
  const server = require('@root/server');
  if (server.default) {
    server.default(app);
  } else server(app);
} catch (err) { console.log('No server.js or server/index.js file found, using default settings', err); }

let style;
// Setup server side routing.
app.get('*', (request, response) => {
  const networkInterface = createNetworkInterface({
    uri: `http://localhost:${port}/graphql`,
    opts: {
      credentials: 'same-origin',
      headers: request.headers,
    },
  });
  const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    ssrMode: true,
  });
  const renderer = createFela();
  const context = {};

  const [pathname, search] = decodeURI(request.url).split('?');
  const staticRouter = new StaticRouter();
  staticRouter.props = { location: { pathname, search }, context, basename: '' };
  const history = staticRouter.render().props.history;
  history.location.query = parseQuery(history.location.search);
  const store = createStore(
    combineReducers({
      apollo: client.reducer(),
      router: routerReducer
    }),
    {},
    compose(
      applyMiddleware(routerQueryMiddleware),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(client.middleware()),
    )
  );

  const asyncContext = createAsyncContext()

  // Create our React application and render it into a string.
  if (typeof init !== undefined && init) init({ renderer, client, store });
  const reactApp = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history}>
          <Provider renderer={renderer}>
            <GatewayProvider>
              <AmpProvider amp={request.isAmp}>
                <App />
              </AmpProvider>
            </GatewayProvider>
          </Provider>
        </ConnectedRouter>
      </ApolloProvider>
    </AsyncComponentProvider>
  );

  return asyncBootstrapper(reactApp).then(() => getDataFromTree(reactApp)).then(() => {
    const reactAppString = request.isAmp ? renderToStaticMarkup(reactApp) : renderToString(reactApp);
    const scripts = request.isAmp ? [] : [isProd ? `${clientAssets.main.js}` : `http://localhost:${devPort}/main.js`];
    const styles = request.isAmp ? [] : (isProd ? [`${clientAssets.main.css}`] : []);
    const cssMarkup = renderer.renderToString();
    const asyncState = asyncContext.getState();

    // Generate the html response.
    const html = (request.isAmp ? amp : template)({
      root: reactAppString,
      scripts,
      styles,
      cssMarkup,
      helmet: Helmet.rewind(),
      initialState: { apollo: client.getInitialState() },
      asyncState,
      gaTrackingId: process.env.GA_TRACKING_ID,
    });

    // Check if the render result contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (context.url) {
      response.status(301).setHeader('Location', context.url);
      response.end();
      return;
    }

    response.status(context.missed ? 404 : 200);
    response.send(html);
    // responseRenderer.toStream().pipe(response);
  }).catch((err) => {
    console.error(err);
    response
      .status(500)
      .send(err);
  });
});

export default app;
