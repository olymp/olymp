import React from 'react';
import { AmpProvider, UAProvider } from 'olymp-utils';
import { ApolloProvider } from 'react-apollo';
import { Provider as FelaProvider } from 'react-fela';
import { GatewayProvider } from 'react-gateway';
import { AppContainer } from 'react-hot-loader';
import App from '@app';

function getNextMountNode() {
  const node = document.getElementById('css-markup');
  const parent = node.parentNode;
  if (!node || !parent) {
    throw new Error('missing stylesheet node for Fela');
  }
  const nextNode = document.createElement('style');
  nextNode.id = 'css-markup';
  parent.replaceChild(nextNode, node);
  return nextNode;
}

export default ({ client, renderer, store, ua, history }) => (
  <AppContainer>
    <ApolloProvider store={store} client={client}>
      <FelaProvider renderer={renderer} mountNode={getNextMountNode()}>
        <GatewayProvider>
          <UAProvider ua={ua}>
            <AmpProvider amp={false}>
              <App />
            </AmpProvider>
          </UAProvider>
        </GatewayProvider>
      </FelaProvider>
    </ApolloProvider>
  </AppContainer>
);
