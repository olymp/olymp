import React from 'react';
import App, { plugins } from '__resourceQuery';
import { render, hydrate } from 'react-dom';

import inject from './inject';
import enhance from './root';

const { decorate, bootstrap } = inject(plugins);
const container = document.getElementById('app');

const renderApp = async Component => {
  const app = <Component ua={window.navigator.userAgent} />;
  const method = window.INITIAL_DATA ? hydrate : render;
  bootstrap().then(() => method(app, container));
};

renderApp(decorate(App));

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('__resourceQuery', () => {
    const NextRoot = require('__resourceQuery').default;
    renderApp(decorate(NextRoot));
  });
}
