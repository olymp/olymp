import React from 'react';
import { createComponent, Container, Grid } from 'olymp-fela';

export default createComponent(() => ({
  display: 'flex',
  ifSmallDown: {
    flexDirection: 'column',
  }
}), p => (
  <Container>
    <Grid size={3} {...p} />
  </Container>
), p => Object.keys(p));
