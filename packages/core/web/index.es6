import 'babel-polyfill';
// React
import React from 'react';
import { render } from 'react-dom';
// Apollo
import ApolloClient from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import InMemoryCache from 'apollo-cache-inmemory';
import { createApolloFetch } from 'apollo-fetch';
import { print } from 'graphql/language/printer';
// Redux
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Olymp
import { UAParser } from 'olymp-utils';
import { createFela, felaReducer } from 'olymp-fela';
import { createHistory, routerMiddleware, routerReducer, attachHistory } from 'olymp-router';
import { apolloMiddleware } from 'olymp-graphql';
import { authMiddleware, authReducer } from 'olymp-auth';
// Local
import { get } from 'lodash';
import createDynamicRedux from '../redux-dynamic';
import { startLoading, stopLoading } from './loader';
import { appReducer, appMiddleware } from '../redux';
import App from './root';

// window.Perf = require('react-addons-perf');
// TODO
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
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

const apolloFetch = createApolloFetch({
  uri: process.env.GRAPHQL_URL || (process.env.URL && `${process.env.URL}graphql`) || '/graphql',
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
    return new Observable((observer) => {
      apolloFetch(request)
        .then((data) => {
          if (!observer.closed) {
            observer.next(data);
            observer.complete();
          }
        })
        .catch((error) => {
          if (!observer.closed) {
            observer.error(error);
          }
        });
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
  dynamicRedux,
  asyncContext;
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
    asyncContext,
  };
  render(<App {...props} />, container);
  // asyncBootstrapper(app).then(() => render(app, container));
}
// Get the DOM Element that will host our React application.
container = document.getElementById('app');
mountNode = document.getElementById('css-markup');
ua = new UAParser(window.navigator.userAgent);
renderer = createFela(ua);
history = createHistory();
const cache = new InMemoryCache({ dataIdFromObject: o => o.id, addTypename: true }).restore(
  get(window.INITIAL_DATA, 'apollo', {}),
);
client = new ApolloClient({ link, cache });
// Redux stuff
dynamicRedux = createDynamicRedux();
const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
store = createDynamicStore(
  {
    app: appReducer,
    location: routerReducer(history),
    auth: authReducer,
    fela: felaReducer,
  },
  {
    auth: get(window.INITIAL_DATA, 'auth', {}),
    fela: get(window.INITIAL_DATA, 'fela', {}),
  },
  composeWithDevTools(
    applyMiddleware(dynamicMiddleware),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(apolloMiddleware(client)),
    applyMiddleware(authMiddleware),
    applyMiddleware(appMiddleware),
  ),
);

attachHistory(history, store);
// End Redux stuff
// rehydrateState = window.ASYNC_STATE;
// asyncContext = createAsyncContext();

renderApp(App);

if (module.hot && typeof module.hot.accept === 'function') {
  // Any changes to our App will cause a hotload re-render.
  // module.hot.accept('./root', () => {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default;
    renderApp(NextRoot);
  });
}
