import 'babel-polyfill';
import React from 'react';
import { render, hydrate } from 'react-dom';
import App, { plugins } from '__app__';

import injectPlugins from './plugins';
import enhance from './root';

const container = document.getElementById('app');
const ua = window.navigator.userAgent;

const { decorate, bootstrap } = injectPlugins(plugins);

const renderApp = async Component => {
  const props = {
    client,
    mountNode,
    container,
    renderer,
    store,
    dynamicRedux,
    ua,
    history,
  };
  const app = <Component {...props} />;
  const method = window.INITIAL_DATA ? hydrate : render;

  bootstrap().then(() => method(app, container));
};

renderApp(decorate(App));

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('__app__', () => {
    const NextRoot = require('__app__').default;
    renderApp(decorate(NextRoot));
  });
}
