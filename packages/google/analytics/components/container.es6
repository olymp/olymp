import React from 'react';
import { Container } from 'olymp-ui';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> div:first-of-type': {
      marginBottom: theme.space2,
    },
  }),
  'div',
  []
);

export const FlexContainer = createComponent(
  () => ({
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
    },
    '> div': {
      flex: '1 1 auto',
      height: 'auto !important',
      overflow: 'auto',
    },
  }),
  p => <Container {...p} />,
  p => Object.keys(p)
);
