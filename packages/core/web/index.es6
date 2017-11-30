import 'babel-polyfill';
// React
import React from 'react';
import { render, hydrate } from 'react-dom';
import asyncBootstrapper from 'react-async-bootstrapper';
// Apollo
import ApolloClient from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApolloFetch } from 'apollo-fetch';
import { print } from 'graphql/language/printer';
// Redux
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Olymp
import { UAParser } from 'olymp-utils';
import { createFela } from 'olymp-fela';
import {
  createHistory,
  routerMiddleware,
  routerReducer,
  attachHistory,
} from 'olymp-router';
import { apolloMiddleware } from 'olymp-graphql';
// Local
import createDynamicRedux from '../redux-dynamic';
import { startLoading, stopLoading } from './loader';
import { appReducer, appMiddleware, createServerConnection } from '../redux';
import App from './root';

// window.Perf = require('react-addons-perf');
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
      // window.location.reload(); // Only needed with autoUpdates
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
} else if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

const apolloFetch = createApolloFetch({
  uri: window.GRAPHQL_URL || process.env.GRAPHQL_URL || '/graphql',
  opts: {
    credentials: 'same-origin',
  },
});
apolloFetch.use((request, next) => {
  const token = localStorage.getItem('token');
  if (token && token !== 'null') {
    request.options.headers = {
      ...request.options.headers,
      authorization: token ? `${token}` : null,
    };
  }
  request.options.credentials = 'same-origin';
  startLoading(store.dispatch);
  next();
});
apolloFetch.useAfter((response, next) => {
  stopLoading(store.dispatch);
  next();
});
const link = ApolloLink.from([
  ({ context, ...operation }) => {
    const request = {
      ...operation,
      query: print(operation.query),
    };
    const then = observer => data => {
      if (!store.getState().app.serverConnection) {
        createServerConnection(store.dispatch)(true);
      }
      if (!observer.closed) {
        observer.next(data);
        observer.complete();
      }
    };
    const catchError = observer => error => {
      stopLoading(store.dispatch);
      const status = error.response ? error.response.status : 500;
      if (status === 404) {
        // Not found handler.
      } else if (status === 500) {
        if (store.getState().app.serverConnection) {
          createServerConnection(store.dispatch)(false);
        }
        return new Promise(resolve => {
          setTimeout(resolve, 10000);
        }).then(() =>
          apolloFetch(request)
            .then(then(observer))
            .catch(catchError(observer)),
        );
        // Other errors.
      } else if (!observer.closed) {
        observer.error(error);
      }
    };
    return new Observable(observer => {
      apolloFetch(request)
        .then(then(observer))
        .catch(catchError(observer));
    });
  },
]);

let client,
  mountNode,
  container,
  renderer,
  store,
  ua,
  rehydrateState,
  history,
  dynamicRedux;
function renderApp(App) {
  const props = {
    client,
    mountNode,
    container,
    renderer,
    store,
    dynamicRedux,
    ua,
    rehydrateState,
    history,
  };
  const method = window.INITIAL_DATA ? hydrate : render;
  const app = <App {...props} />;
  asyncBootstrapper(app).then(() => method(app, container));
}
// Get the DOM Element that will host our React application.
container = document.getElementById('app');
mountNode = document.getElementById('css-markup');
ua = new UAParser(window.navigator.userAgent);
renderer = createFela(ua);
history = createHistory();
rehydrateState = window.ASYNC_STATE;
const { apollo, ...reduxInitial } = window.INITIAL_DATA || {};
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true,
}).restore(apollo || {});
client = new ApolloClient({ link, cache, dataIdFromObject: o => o.id });
// Redux stuff
dynamicRedux = createDynamicRedux();
const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
store = createDynamicStore(
  {
    app: appReducer(),
    location: routerReducer(history),
  },
  reduxInitial,
  composeWithDevTools(
    applyMiddleware(dynamicMiddleware),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(apolloMiddleware(client)),
    applyMiddleware(appMiddleware),
  ),
);

attachHistory(history, store);

renderApp(App);

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default;
    renderApp(NextRoot);
  });
}
