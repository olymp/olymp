import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { UAParser } from 'olymp-utils';
import ApolloClient from 'apollo-client';
import ApolloLink from 'apollo-link';
import SetContextLink from 'apollo-link-set-context';
import Link from 'apollo-link-http';
import InMemoryCache from 'apollo-cache-inmemory';
import { createFela, felaReducer } from 'olymp-fela';
import { applyMiddleware } from 'redux';
import { createHistory, routerMiddleware, routerReducer, attachHistory } from 'olymp-router';
import { apolloMiddleware } from 'olymp-graphql';
import { authMiddleware, authReducer } from 'olymp-auth';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const setContext = context => ({
  ...context,
  headers: {
    ...context.headers,
    authorization: localStorage.getItem('token'),
  },
});

const link = ApolloLink.from([
  new SetContextLink(setContext),
  new Link({
    uri: process.env.GRAPHQL_URL || (process.env.URL && `${process.env.URL}graphql`) || '/graphql',
    opts: {
      credentials: 'same-origin',
    },
  }),
]);

/* networkInterface.use([
  {
    applyBatchMiddleware(req, next) {
      startLoading(store.dispatch);
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
      stopLoading(store.dispatch);
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
]);*/

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
  window.INITIAL_DATA || {},
);
client = new ApolloClient({ link, cache });
// Redux stuff
dynamicRedux = createDynamicRedux();
const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
store = createDynamicStore(
  {
    app: appReducer,
    apollo: client.reducer(),
    location: routerReducer(history),
    auth: authReducer,
    fela: felaReducer,
  },
  composeWithDevTools(
    applyMiddleware(dynamicMiddleware),
    applyMiddleware(client.middleware()),
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
