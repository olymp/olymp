import React from 'react';
import App from '@app';
import { AmpProvider, UAProvider } from 'olymp-utils';
import { ApolloProvider } from 'react-apollo';
import { AsyncComponentProvider } from 'react-async-component';
import { Provider as FelaProvider } from 'react-fela';
import { GatewayProvider } from 'react-gateway';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'olymp-router';

export default ({
  mountNode,
  container,
  renderer,
  store,
  ua,
  client,
  rehydrateState,
  history,
  asyncContext,
}) =>
  <AsyncComponentProvider
    rehydrateState={rehydrateState}
    asyncContext={asyncContext}
  >
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <Router store={store} history={history}>
          <FelaProvider renderer={renderer} mountNode={mountNode}>
            <GatewayProvider>
              <UAProvider ua={ua}>
                <AmpProvider amp={false}>
                  <App />
                </AmpProvider>
              </UAProvider>
            </GatewayProvider>
          </FelaProvider>
        </Router>
      </ApolloProvider>
    </AppContainer>
  </AsyncComponentProvider>;
