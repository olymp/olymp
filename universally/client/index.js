/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { withAsyncComponents } from 'react-async-component';
import { parse, stringify } from '../shared/query-string';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

import 'universally/client/polyfills';

import ReactHotLoader from 'universally/client/components/ReactHotLoader';
import DemoApp from '@app';

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

const networkInterface = createBatchingNetworkInterface({
  uri: process.env.GRAPHQL_URL || '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  ssrForceFetchDelay: 100,
  initialState: window.__APP_STATE__ ? { apollo: { data: window.__APP_STATE__ } } : null,
});

const renderer = createRenderer();
const mountNode = document.getElementById('css-markup');

function renderApp(TheApp) {
  const app = (
    <ReactHotLoader>
      <BrowserRouter stringifyQuery={stringify} parseQueryString={parse}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer} mountNode={mountNode}>
            <TheApp />
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </ReactHotLoader>
  );

  // We use the react-async-component in order to support super easy code splitting
  // within our application.  It's important to use this helper
  // @see https://github.com/ctrlplusb/react-async-component
  withAsyncComponents(app).then(({ appWithAsyncComponents }) =>
    render(appWithAsyncComponents, container),
  );
}

// Execute the first render of our app.
renderApp(DemoApp);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('universally/client/registerServiceWorker');

// The following is needed so that we can support hot reloading our application.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
