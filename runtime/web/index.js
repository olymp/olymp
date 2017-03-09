/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { parseQuery, stringifyQuery } from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';

if (process.env.NODE_ENV === 'production') {
  if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
} else {
  console.warn('web/index.js removes serviceworkers temporarily');
}

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
  initialState: window.__APP_STATE__,
});

const renderer = createRenderer({ selectorPrefix: '_' });
const mountNode = document.getElementById('css-markup');

function renderApp() {
  render(
    <AppContainer>
      <BrowserRouter stringifyQuery={stringifyQuery} parseQueryString={parseQuery}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer} mountNode={mountNode}>
            <App />
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </AppContainer>,
    container,
  );
}

// Execute the first render of our app.
renderApp();

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
