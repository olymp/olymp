/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import {
  parseQuery,
  stringifyQuery,
  AmpProvider,
  routerQueryMiddleware,
} from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import createFela from '../fela';
import { Provider as FelaProvider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';

// Redux stuff
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push,
} from 'react-router-redux';
// End Redux stuff

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
    },
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

let client, mountNode, container, renderer, store, history;
function renderApp() {
  return render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history}>
          <FelaProvider renderer={renderer} mountNode={mountNode}>
            <AmpProvider amp={false}>
              <App />
            </AmpProvider>
          </FelaProvider>
        </ConnectedRouter>
      </ApolloProvider>
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
    // initialState: window.INITIAL_DATA,
  });
  // Redux stuff
  history = createHistory();
  store = createStore(
    combineReducers({
      apollo: client.reducer(),
      router: routerReducer,
    }),
    window.INITIAL_DATA || {},
    compose(
      applyMiddleware(routerQueryMiddleware),
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
  // End Redux stuff

  if (typeof init !== undefined && init) init({ renderer, client, store });
  return renderApp();
}

// Execute the first render of our app.
if (window.POLYFILLED) load();
else window.GO = load;

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('@app', () => renderApp(require('@app').default));
}
