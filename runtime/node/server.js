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
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import App from '@app';
import template, { amp } from './template';
import { parseQuery, AmpProvider } from 'olymp';
import 'source-map-support/register';
import createRedisStore from 'connect-redis';
import fs from 'fs';
import useragent from 'express-useragent';
import monolithic from 'fela-monolithic'
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

const RedisStore = createRedisStore(session);

// import { render, template } from 'rapscallion';

global.fetch = fetch;
env(path.resolve(process.cwd(), '.env'), { raise: false });

const isProd = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT, 10);
const devPort = parseInt(process.env.DEV_PORT, 10);

const clientAssetsPath = path.resolve(__dirname, '..', 'web', 'assets.json');
const clientAssets = fs.existsSync(clientAssetsPath) ? JSON.parse(fs.readFileSync(clientAssetsPath)) : null; // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());
app.use(useragent.express());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(express.static(path.resolve(process.cwd(), 'build', 'web')));
app.use(express.static(path.resolve(process.cwd(), 'node_modules', 'olymp', 'public')));

app.use((req, res, next) => {
  console.log(req.query.amp)
  if (req.subdomains && req.subdomains.length === 1 && req.subdomains[0] === 'amp') {
    req.isAmp = true;
  } else if (req.query.amp !== undefined) {
    req.isAmp = true;
  } next();
});
// if (process.env.NODE_ENV === 'production') app.set('trust proxy', 2);
app.use(session({
  store: process.env.REDIS_URL ? new RedisStore({ url: process.env.REDIS_URL }) : undefined,
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
  const renderer = createRenderer({
    selectorPrefix: 'o',
    plugins: [ extend(), unit(), fallbackValue(), removeUndefined(), prefixer(), namedMediaQuery({
      onWide: '@media (min-width: 1200px)',
      onDesktop: '@media (min-width: 992px)',
      onTablet: '@media (min-width: 768px)',
      onPhone: '@media (min-width: 480px)',
      onMini: '@media (min-width: 320px)',
    }), friendlyPseudoClass(), customProperty({
      size: size => ({
        width: size + 'px',
        height: size + 'px'
      })
    }) ],
    enhancers: [ monolithic() ]
  });
  const context = { };

  // Create our React application and render it into a string.
  const [pathname, search] = decodeURI(request.url).split('?');
  const reactApp = (
    <StaticRouter location={{ pathname, search, query: parseQuery(search) }} context={context}>
      <ApolloProvider client={client}>
        <Provider renderer={renderer}>
          <AmpProvider amp={request.isAmp}>
            <App />
          </AmpProvider>
        </Provider>
      </ApolloProvider>
    </StaticRouter>
  );

  return getDataFromTree(reactApp).then(() => {
    // const reactAppString = render(reactApp);
    const reactAppString = request.isAmp ? renderToStaticMarkup(reactApp) : renderToString(reactApp);
    const cssMarkup = renderer.renderToString();

    // Generate the html response.
    const html = (request.isAmp ? amp : template)({
      root: reactAppString,
      jsBundle: isProd ? `/${clientAssets.main.js}` : `http://localhost:${devPort}/main.js`,
      cssBundle: isProd ? `/${clientAssets.main.css}` : undefined,
      cssMarkup,
      helmet: Helmet.rewind(),
      initialState: { [client.reduxRootKey]: client.getInitialState() },
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
