import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default (uri, { initialState, ssrForceFetchDelay, shouldBatch, ...opts }) => {
  const networkInterface = createNetworkInterface({ opts, uri });
  return new ApolloClient({
    shouldBatch,
    dataIdFromObject: x => x.id,
    ssrForceFetchDelay,
    networkInterface,
    initialState,
  });
};
