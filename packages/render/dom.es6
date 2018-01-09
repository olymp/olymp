import 'babel-polyfill';
// React
import React from 'react';
import { render, hydrate } from 'react-dom';
import asyncBootstrapper from 'react-async-bootstrapper';
// Redux
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Olymp
import { createFela } from 'olymp-fela';

import {
  createHistory,
  routerReducer,
  routerMiddleware,
  attachHistory
} from 'olymp-router';
import getApollo from 'olymp-apollo/remote';
import { apolloMiddleware } from 'olymp-apollo/redux';
// Local
import createDynamicRedux from 'olymp-redux';
import Root from './root';

// Get the DOM Element that will host our React application.
const container = document.getElementById('app');
const mountNode = document.getElementById('css-markup');
const ua = window.navigator.userAgent;
const renderer = createFela();
const history = createHistory();
const asyncState = window.ASYNC_STATE;
// Redux stuff
const dynamicRedux = createDynamicRedux();
const { dynamicMiddleware, createDynamicStore } = dynamicRedux;
const { client } = getApollo({
  url: window.GRAPHQL_URL || process.env.GRAPHQL_URL || '/graphql',
  initialData: window.INITIAL_DATA || {}
});
const store = createDynamicStore(
  {
    location: routerReducer(history)
  },
  {}, // initialData
  composeWithDevTools(
    applyMiddleware(dynamicMiddleware),
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(apolloMiddleware(client))
  )
);
attachHistory(history, store);

function renderApp(App) {
  const props = {
    client,
    mountNode,
    container,
    renderer,
    store,
    dynamicRedux,
    ua,
    asyncState,
    history
  };
  const app = <App {...props} />;
  const method = window.INITIAL_DATA ? hydrate : render;
  asyncBootstrapper(app).then(() => method(app, container));
}

renderApp(Root);

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default;
    renderApp(NextRoot);
  });
}
