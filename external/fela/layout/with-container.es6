import React from 'react';
import Container from '../container';

export default ({ container, ...rest }) =>
  container ? <Container {...rest} /> : <div {...rest} />;
