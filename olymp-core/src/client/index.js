/* @flow */
/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-v4-decode-uri';
import { CodeSplitProvider, rehydrateState } from 'code-split-component';
import ReactHotLoader from './components/ReactHotLoader';
import DemoApp from '_app_';
import { parse, stringify } from 'olymp/query-string';
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
  // We use the code-split-component library to provide us with code splitting
  // within our application.  This library supports server rendered applications,
  // but for server rendered applications it requires that we rehydrate any
  // code split modules that may have been rendered for a request.  We use
  // the provided helper and then pass the result to the CodeSplitProvider
  // instance which takes care of the rest for us.  This is really important
  // to do as it will ensure that our React checksum for the client will match
  // the content returned by the server.
  // @see https://github.com/ctrlplusb/code-split-component
  rehydrateState().then(codeSplitState =>
    render(
      <ReactHotLoader>
        <CodeSplitProvider state={codeSplitState}>
          <BrowserRouter stringifyQuery={stringify} parseQueryString={parse}>
            <ApolloProvider client={client}>
              <TheApp />
            </ApolloProvider>
          </BrowserRouter>
        </CodeSplitProvider>
      </ReactHotLoader>,
      container,
    ),
  );
}

// The following is needed so that we can support hot reloading our application.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '_app_',
    () => renderApp(require('_app_').default),
  );
}

// Execute the first render of our app.
renderApp(DemoApp);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');
