import React from 'react';
import Loader from './content';

export default Wrapped => props => (
  <Loader height={600} isLoading>
    <Wrapped {...props} />
  </Loader>
);
