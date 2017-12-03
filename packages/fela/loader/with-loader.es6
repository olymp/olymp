import React from 'react';
import Loader from './content';

export default Wrapped => props => (
  <Loader isLoading={props.isLoading}>
    <Wrapped {...props} />
  </Loader>
);
