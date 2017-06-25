/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { parseQuery, stringifyQuery, AmpProvider } from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import createFela from '../fela';
import { Provider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';

const networkInterface = createBatchingNetworkInterface({
  uri:
    process.env.GRAPHQL_URL ||
      (process.env.URL && `${process.env.URL}/graphql`) ||
      '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

let client,
  mountNode,
  container,
  renderer;
function renderApp() {
  return render(
    <AppContainer>
      <HashRouter stringifyQuery={stringifyQuery} parseQueryString={parseQuery}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer} mountNode={mountNode}>
            <AmpProvider amp={false}>
              <App />
            </AmpProvider>
          </Provider>
        </ApolloProvider>
      </HashRouter>
    </AppContainer>,
    container
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
  });
  return renderApp();
}

// Execute the first render of our app.
load();

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('@app', () => renderApp(require('@app').default));
}
