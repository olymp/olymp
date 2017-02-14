import express from 'express';
import compression from 'compression';
import session from 'express-session';
import path from 'path';
import React from 'react';
import template from './template';
import env from 'node-env-file';
import fetch from 'isomorphic-fetch';
import { ServerRouter, createServerRenderContext } from 'react-router-v4-decode-uri';
import { ApolloProvider } from 'react-apollo';
import { renderToStringWithData } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import Helmet from 'react-helmet';
import App from '@app';
import { parse, stringify } from '../query-string';
import 'source-map-support/register';

global.fetch = fetch;
env(path.resolve(process.cwd(), '.env'));

const port = parseInt(KYT.SERVER_PORT, 10);
const launchAPI = () => {
  app.useSession = (url, getArgs) => {
    app.set('trust proxy', 2);
    if (!getArgs) {
      getArgs = url;
      url = null;
    }
    const args = getArgs(session);
    if (url) app.use(url, session(args));
    else app.use(session(args));
  };
  try {
    const server = require('@root/server');
    if (server.default) {
      server.default(app);
    } else {
      server(app);
    }
  } catch (err) { console.log('No server.js or server/index.js file found, using default settings', err); }
}

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.resolve(process.cwd(), 'public')));
app.use(express.static(path.resolve(process.cwd(), 'build', 'public')));

launchAPI();

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
  const renderer = createRenderer();
  const reactRouterContext = createServerRenderContext();

  // Create our React application and render it into a string.
  const reactApp = (
    <ServerRouter stringifyQuery={stringify} parseQueryString={parse} location={decodeURI(request.url)} context={reactRouterContext}>
      <ApolloProvider client={client}>
        <Provider renderer={renderer}>
          <App />
        </Provider>
      </ApolloProvider>
    </ServerRouter>
  );

  renderToStringWithData(reactApp).then((reactAppString) => {
    const cssMarkup = renderer.renderToString();
    // Generate the html response.
    const html = template({
      root: reactAppString,
      jsBundle: clientAssets.main.js,
      cssBundle: clientAssets.main.css,
      cssMarkup,
      helmet: Helmet.rewind(),
      initialState: client.store.getState().apollo.data,
    });

    // Get the render result from the server render context.
    const renderResult = reactRouterContext.getResult();

    // Check if the render result contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (renderResult.redirect) {
      response.status(301).setHeader('Location', renderResult.redirect.pathname);
      response.end();
      return;
    }

    response.status(
      renderResult.missed
        // If the renderResult contains a "missed" match then we set a 404 code.
        // Our App component will handle the rendering of an Error404 view.
        ? 404
        // Otherwise everything is all good and we send a 200 OK status.
        : 200,
    )
    .send(html);
  }).catch((err) => {
    response
      .status(500)
      .send(err);
  });
});

app.listen(port);
