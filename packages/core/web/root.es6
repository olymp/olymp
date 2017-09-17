import React from 'react';
import { AmpProvider, UAProvider } from 'olymp-utils';
import { ApolloProvider } from 'react-apollo';
import { Provider as FelaProvider } from 'react-fela';
import { Provider as ReduxProvider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from '@app';
import { DynamicReduxProvider } from '../redux-dynamic';

export default ({ client, renderer, store, ua, dynamicRedux }) => (
  <AppContainer>
    <DynamicReduxProvider dynamicRedux={dynamicRedux}>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <FelaProvider renderer={renderer}>
            <UAProvider ua={ua}>
              <AmpProvider amp={false}>
                <App />
              </AmpProvider>
            </UAProvider>
          </FelaProvider>
        </ApolloProvider>
      </ReduxProvider>
    </DynamicReduxProvider>
  </AppContainer>
);
