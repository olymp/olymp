/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { parseQuery, stringifyQuery, AmpProvider } from 'olymp';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import App from '@app';
import { AppContainer } from 'react-hot-loader';
import monolithic from 'fela-monolithic';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

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
}

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

const networkInterface = createBatchingNetworkInterface({
  uri: process.env.GRAPHQL_URL || '/graphql',
  batchInterval: 5,
  opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  ssrForceFetchDelay: 100,
  initialState: window.__APP_STATE__,
});

const renderer = createRenderer({
  selectorPrefix: 'o',
  plugins: [ unit(), fallbackValue(), removeUndefined(), prefixer(), namedMediaQuery({
    // From
    fromWide: '@media (min-width: 1200px)',
    fromDesktop: '@media (min-width: 992px)',
    fromTablet: '@media (min-width: 768px)',
    fromPhone: '@media (min-width: 480px)',
    // To
    toDesktop: '@media (max-width: 1199px)',
    toTablet: '@media (max-width: 991px)',
    toPhone: '@media (max-width: 767px)',
    toMini: '@media (max-width: 479px)',
    // On
    onWide: '@media (min-width: 1200px)',
    onDesktop: '@media (max-width: 1199px, min-width: 992)',
    onTablet: '@media (max-width: 991px, min-width: 768)',
    onPhone: '@media (max-width: 767px, min-width: 480)',
    onMini: '@media (max-width: 479px)',
  }), friendlyPseudoClass(), customProperty({
    size: size => ({
      width: size + 'px',
      height: size + 'px'
    })
  }) ],
  enhancers: [ monolithic() ]
});
const mountNode = document.getElementById('css-markup');

function renderApp() {
  render(
    <AppContainer>
      <BrowserRouter stringifyQuery={stringifyQuery} parseQueryString={parseQuery}>
        <ApolloProvider client={client}>
          <Provider renderer={renderer} mountNode={mountNode}>
            <AmpProvider amp={false}>
              <App />
            </AmpProvider>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </AppContainer>,
    container,
  );
}

// Execute the first render of our app.
renderApp();

if (module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('@app');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '@app',
    () => renderApp(require('@app').default),
  );
}
