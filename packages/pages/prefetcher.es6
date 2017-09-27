import React from 'react';
import { withApollo } from 'react-apollo';
import { prefetchPage } from './gql';

export default withApollo(({ client, id, ...props }) => (
  <div {...props} onMouseEnter={id ? () => prefetchPage(client, id) : undefined} />
));
