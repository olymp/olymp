/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { parseQuery, stringifyQuery, AmpProvider, BrowserRouter } from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import createFela from '../fela';
import { Provider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';
const init = require('@app').init;

if (process.env.NODE_ENV === 'production') {
  const offline = require('offline-plugin/runtime');
  offline.install({
    onUpdating: () => {
      console.log('SW Event:', 'onUpdating');
    },
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');
      offline.applyUpdate();
    },
    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');
      window.location.reload();
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    }
  });
}
/*// TODO
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
}*/

const networkInterface = createBatchingNetworkInterface({
  uri: process.env.GRAPHQL_URL || '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

let client, mountNode, container, renderer;
function renderApp() {
  return render(
    <AppContainer>
      <BrowserRouter stringifyQuery={stringifyQuery} parseQueryString={parseQuery}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer} mountNode={mountNode}>
            <AmpProvider amp={false}>
              <App />
            </AmpProvider>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </AppContainer>,
    container,
  );
}
function load() {
  // Get the DOM Element that will host our React application.
  container = document.getElementById('app');
  mountNode = document.getElementById('css-markup');
  renderer = createFela();
  client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    ssrForceFetchDelay: 100,
    initialState: window.INITIAL_DATA,
  });
  if (typeof init !== undefined && init) init({ renderer, client });
  return renderApp();
}

// Execute the first render of our app.
if (window.POLYFILLED) load();
else window.GO = load;

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
