/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { AmpProvider, UAProvider, UAParser } from 'olymp-utils';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { createFela } from 'olymp-fela';
import { Provider as FelaProvider } from 'react-fela';
import { GatewayProvider } from 'react-gateway';
import App from '@app';
import { AppContainer } from 'react-hot-loader';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// Redux stuff
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'olymp-router';
import createHistory from 'history/createFlexHistory';
// End Redux stuff

const init = require('@app').init;
// window.Perf = require('react-addons-perf');
if (process.env.NODE_ENV === 'production' && !process.env.IS_ELECTRON) {
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
      // window.location.reload(); // Only needed with autoUpdates
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
} else {
  // const { whyDidYouUpdate } = require('why-did-you-update');
  // whyDidYouUpdate(React);
}
/* // TODO
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
  uri:
  process.env.GRAPHQL_URL ||
  (process.env.URL && `${process.env.URL}/graphql`) ||
  '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

/* if (process.env.GRAPHQL_SUB) {
  const wsClient = new SubscriptionClient(process.env.GRAPHQL_SUB, {
    reconnect: true
  });
  networkInterface = addGraphQLSubscriptions(
    networkInterface,
    wsClient
  );
}*/

let client,
  mountNode,
  container,
  renderer,
  store,
  history,
  ua,
  rehydrateState,
  asyncContext;
function renderApp() {
  const app = (
    <AsyncComponentProvider
      rehydrateState={rehydrateState}
      asyncContext={asyncContext}
    >
      <AppContainer>
        <ApolloProvider store={store} client={client}>
          <BrowserRouter history={history}>
            <FelaProvider renderer={renderer} mountNode={mountNode}>
              <GatewayProvider>
                <UAProvider ua={ua}>
                  <AmpProvider amp={false}>
                    <App />
                  </AmpProvider>
                </UAProvider>
              </GatewayProvider>
            </FelaProvider>
          </BrowserRouter>
        </ApolloProvider>
      </AppContainer>
    </AsyncComponentProvider>
  );
  asyncBootstrapper(app).then(() => render(app, container));
}
function load() {
  // Get the DOM Element that will host our React application.
  container = document.getElementById('app');
  mountNode = document.getElementById('css-markup');
  ua = new UAParser(window.navigator.userAgent);
  renderer = createFela(ua);
  client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    ssrForceFetchDelay: 100,
    // initialState: window.INITIAL_DATA,
  });
  // Redux stuff
  history = createHistory();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    combineReducers({
      apollo: client.reducer(),
    }),
    window.INITIAL_DATA || {},
    composeEnhancers(applyMiddleware(client.middleware()))
  );
  // End Redux stuff
  rehydrateState = window.ASYNC_STATE;
  asyncContext = createAsyncContext();

  if (typeof init !== undefined && init) {
    init({ renderer, client, store });
  }

  const browser = ua.getBrowser();
  if (browser.name === 'IE' && parseInt(browser.major, 10) < 11) {
    console.log('dsad');
    return;
  }

  console.log('test2');
  return renderApp();
}

// Execute the first render of our app.
if (window.POLYFILLED) {
  load();
} else {
  window.GO = load;
}

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('@app', () => renderApp(require('@app').default));
}