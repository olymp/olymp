/* @flow */
/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
// This library provides us with the capability to have declerative code
// splitting within our application.
// @see https://github.com/ctrlplusb/code-split-component
import { CodeSplitProvider, rehydrateState } from 'code-split-component';
import BrowserRouter from '@olymp/apollo/router/BrowserRouter';
import ReactHotLoader from './components/ReactHotLoader';
import App from 'app_alias';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

const networkInterface = createBatchingNetworkInterface({
  uri: '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  ssrForceFetchDelay: 100,
  initialState: window.APP_STATE ? { apollo: { data: window.APP_STATE } } : null,
});

function renderApp(TheApp) {
  // Firstly we ensure that we rehydrate any code split state provided to us
  // by the server response. This state typically indicates which bundles/chunks
  // need to be registered for our application to render and the React checksum
  // to match the server response.
  // @see https://github.com/ctrlplusb/code-split-component
  rehydrateState().then(codeSplitState =>
    render(
      <ReactHotLoader>
        <CodeSplitProvider state={codeSplitState}>
          <BrowserRouter>
            <ApolloProvider client={client}>
              <TheApp />
            </ApolloProvider>
          </BrowserRouter>
        </CodeSplitProvider>
      </ReactHotLoader>,
      container
    )
  );
}

// The following is needed so that we can support hot reloading our application.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '../shared/universal/components/App',
    () => renderApp(require('../shared/universal/components/App').default)
  );
  module.hot.accept(
    'app_alias',
    () => renderApp(require('app_alias').default)
  );
  module.hot.accept(
    '@olymp/athena',
    () => renderApp(require('app_alias').default)
  );
  module.hot.accept(
    '@olymp/adonis',
    () => renderApp(require('app_alias').default)
  );
}

renderApp(App);
