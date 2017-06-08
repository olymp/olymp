import React from 'react';
import { styled } from 'olymp';
import { Container, Grid } from 'olymp-fela';

export default styled(() => ({
  display: 'flex',
  ifSmallDown: {
    flexDirection: 'column',
  }
}), p => (
  <Container>
    <Grid size={3} {...p} />
  </Container>
), p => p);
