import React from 'react';
import Loader from './content';

export default Wrapped => props => (
  <Loader height={600} isLoading={props.isLoading}>
    <Wrapped {...props} />
  </Loader>
);
