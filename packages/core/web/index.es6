import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { UAParser } from 'olymp-utils';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { createFela, felaReducer } from 'olymp-fela';
import Proxy from './proxy';

// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// Redux stuff
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// End Redux stuff

// React router
import { createHistory, routerMiddleware, routerReducer } from 'olymp-router';
//

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
  uri: process.env.GRAPHQL_URL || (process.env.URL && `${process.env.URL}/graphql`) || '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

networkInterface.use([
  {
    applyBatchMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      const token = localStorage.getItem('token');
      if (token && token !== 'null') {
        req.options.headers.authorization = token ? `${token}` : null;
      }
      next();
    },
  },
]);
networkInterface.useAfter([
  {
    applyBatchAfterware(res, next) {
      // console.log(res.responses);
      const error =
        res.responses &&
        res.responses.filter(
          x => x.errors && x.errors.filter(x => x.message === 'LOGIN_REQUIRED').length,
        ).length;
      if (error) {
        return history.push({
          search: '?login',
        });
      }
      next();
    },
  },
]);

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
  ua,
  rehydrateState,
  history,
  asyncContext;
function renderApp(App) {
  const props = {
    client,
    mountNode,
    container,
    renderer,
    store,
    ua,
    rehydrateState,
    history,
    asyncContext,
  };
  const app = <App {...props} />;
  asyncBootstrapper(app).then(() => render(app, container));
}

function load() {
  // Get the DOM Element that will host our React application.
  container = document.getElementById('app');
  mountNode = document.getElementById('css-markup');
  ua = new UAParser(window.navigator.userAgent);
  renderer = createFela(ua);
  history = createHistory();
  client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
    ssrForceFetchDelay: 100,
    // initialState: window.INITIAL_DATA,
  });
  // Redux stuff
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    combineReducers({
      apollo: client.reducer(),
      location: routerReducer(history),
      fela: felaReducer,
    }),
    window.INITIAL_DATA || {},
    compose(
      applyMiddleware(client.middleware()),
      applyMiddleware(routerMiddleware(history))
    )
  );
  // End Redux stuff
  rehydrateState = window.ASYNC_STATE;
  asyncContext = createAsyncContext();

  return renderApp(Proxy);
}

// Execute the first render of our app.
if (window.POLYFILLED) {
  load();
} else {
  window.GO = load;
}

if (module.hot) {
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(() => {
    renderApp(require('./proxy').default);
  });
}
