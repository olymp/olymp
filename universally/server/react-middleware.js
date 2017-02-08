
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { withAsyncComponents } from 'react-async-component';
import Helmet from 'react-helmet';

import getConfig from '../../../config/get';
import DemoApp from '../../../shared/components/DemoApp';

import ServerHTML from './ServerHTML';

/**
 * React application middleware, supports server side rendering.
 */
function reactApplicationMiddleware(request, response) {
  // We should have had a nonce provided to us.  See the server/index.js for
  // more information on what this is.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = response.locals.nonce;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (getConfig('disableSSR')) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('==> Handling react route without SSR');
    }
    // SSR is disabled so we will just return an empty html page and will
    // rely on the client to initialize and render the react application.
    const html = renderToStaticMarkup(<ServerHTML nonce={nonce} />);
    response.status(200).send(html);
    return;
  }

  // First create a context for <ServerRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = createServerRenderContext();

  // Create our React application.
  const app = (
    <ServerRouter location={request.url} context={reactRouterContext}>
      <DemoApp />
    </ServerRouter>
  );

  // Wrap our app with react-async-component helper so that our async components
  // will be resolved and rendered with the response.
  withAsyncComponents(app).then(({ appWithAsyncComponents, state, STATE_IDENTIFIER }) => {
    // Render the app to a string.
    const reactAppString = renderToString(appWithAsyncComponents);

    // Generate the html response.
    const html = renderToStaticMarkup(
      <ServerHTML
        reactAppString={reactAppString}
        nonce={nonce}
        helmet={Helmet.rewind()}
        asyncComponents={{ state, STATE_IDENTIFIER }}
      />,
    );

    // Get the render result from the server render context.
    const renderResult = reactRouterContext.getResult();

    // Check if the render result contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (renderResult.redirect) {
      response.status(301).setHeader('Location', renderResult.redirect.pathname);
      response.end();
      return;
    }

    response
      .status(
        renderResult.missed
          // If the renderResult contains a "missed" match then we set a 404 code.
          // Our App component will handle the rendering of an Error404 view.
          ? 404
          // Otherwise everything is all good and we send a 200 OK status.
          : 200,
      )
      .send(`<!DOCTYPE html>${html}`);
  });
}

export default reactApplicationMiddleware;


/*import React from 'react';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { CodeSplitProvider, createRenderContext } from 'code-split-component';
import Helmet from 'react-helmet';
import generateHTML from './generateHTML';
import DemoApp from '@app';
import config from 'universally/config';
import fetch from 'node-fetch';
import { parse, stringify } from '../shared/query-string';
import { ApolloProvider } from 'react-apollo';
import { renderToStringWithData } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

global.fetch = fetch;
function reactApplicationMiddleware(request, response) {
  // We should have had a nonce provided to us.  See the server/index.js for
  // more information on what this is.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = response.locals.nonce;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (config.disableSSR) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('==> Handling react route without SSR');
    }
    // SSR is disabled so we will just return an empty html page and will
    // rely on the client to initialize and render the react application.
    const html = generateHTML({
      // Nonce which allows us to safely declare inline scripts.
      nonce,
    });
    response.status(200).send(html);
    return;
  }

  const port = process.env.PORT || config.port;

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

  // First create a context for <ServerRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = createServerRenderContext();

  // We also create a context for our <CodeSplitProvider> which will allow us
  // to query which chunks/modules were used during the render process.
  const codeSplitContext = createRenderContext();

  // Create our React application and render it into a string.
  const reactApp = (
    <CodeSplitProvider context={codeSplitContext}>
      <ServerRouter stringifyQuery={stringify} parseQueryString={parse} location={decodeURI(request.url)} context={reactRouterContext}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer}>
            <DemoApp />
          </Provider>
        </ApolloProvider>
      </ServerRouter>
    </CodeSplitProvider>
  );

  renderToStringWithData(reactApp).then((reactAppString) => {
    const cssMarkup = renderer.renderToString();
  // Generate the html response.
    const html = generateHTML({
    // Provide the full app react element.
      reactAppString,
      initialState: client.store.getState().apollo.data,
    // Nonce which allows us to safely declare inline scripts.
      nonce,
      cssMarkup,
    // Running this gets all the helmet properties (e.g. headers/scripts/title etc)
    // that need to be included within our html.  It's based on the rendered app.
    // @see https://github.com/nfl/react-helmet
      helmet: Helmet.rewind(),
    // We provide our code split state so that it can be included within the
    // html, and then the client bundle can use this data to know which chunks/
    // modules need to be rehydrated prior to the application being rendered.
      codeSplitState: codeSplitContext.getState(),
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

    response
    .status(
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
}

export default (reactApplicationMiddleware);*/
