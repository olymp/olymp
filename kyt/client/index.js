/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-v4-decode-uri';
import { parse, stringify } from '../query-string';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import App from '@app';

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

function renderApp() {
  // We use the code-split-component library to provide us with code splitting
  // within our application.  This library supports server rendered applications,
  // but for server rendered applications it requires that we rehydrate any
  // code split modules that may have been rendered for a request.  We use
  // the provided helper and then pass the result to the CodeSplitProvider
  // instance which takes care of the rest for us.  This is really important
  // to do as it will ensure that our React checksum for the client will match
  // the content returned by the server.
  // @see https://github.com/ctrlplusb/code-split-component
  render(
    <BrowserRouter stringifyQuery={stringify} parseQueryString={parse}>
      <ApolloProvider client={client}>
        <Provider renderer={renderer} mountNode={mountNode}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>,
    container,
  );
}

// Execute the first render of our app.
renderApp();

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
