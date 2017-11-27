import React from 'react';
import { Container } from 'olymp-fela';
import { createComponent } from 'react-fela';

export default createComponent(
  () => ({
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
    },
    '> div': {
      flex: '1 1 0%',
      height: 'auto !important',
      overflow: 'auto',
    },
  }),
  p => <Container {...p} />,
  p => Object.keys(p),
);
