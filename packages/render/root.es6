import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext } from 'recompose';
import { ApolloProvider } from 'react-apollo';
import { Provider as FelaProvider } from 'react-fela';
import { Provider as ReduxProvider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { AsyncComponentProvider } from 'react-async-component';
import App from '@app';
import { DynamicReduxProvider } from 'olymp-redux';
import UAParser from 'ua-parser-js';

const enhance = compose(
  withContext({
    amp: PropTypes.bool,
    ua: PropTypes.object,
  }, ({ isAmp, ua }) => ({
    amp: !!isAmp,
    ua: ua && typeof ua === 'string' ? new UAParser(ua) : ua,
  }))
)
export default enhance(({
  client,
  renderer,
  store,
  dynamicRedux,
  asyncState,
  asyncContext,
}) => (
  <AsyncComponentProvider rehydrateState={asyncState} asyncContext={asyncContext}>
    <AppContainer warnings={false}>
      <DynamicReduxProvider dynamicRedux={dynamicRedux}>
        <ReduxProvider store={store}>
          <ApolloProvider client={client}>
            <FelaProvider renderer={renderer}>
              <App />
            </FelaProvider>
          </ApolloProvider>
        </ReduxProvider>
      </DynamicReduxProvider>
    </AppContainer>
  </AsyncComponentProvider>
));
