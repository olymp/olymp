/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { parseQuery, stringifyQuery, AmpProvider } from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import createFela from '../fela';
import { Provider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';

// TODO
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
// function load() {
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
// return renderApp();
renderApp();
// }

// Execute the first render of our app.
// if (window.POLYFILLED) load();
// else window.GO = load;

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
