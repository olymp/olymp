import React from 'react';
import { createComponent, Grid, border } from 'olymp-fela';

export default createComponent(
  ({ theme, bottom }) => ({
    flex: 'none !important',
    paddingBottom: !bottom && theme.space2,
    marginBottom: !bottom && theme.space2,
    borderBottom: !bottom && border(theme),
    paddingTop: bottom && theme.space2,
    marginTop: bottom && theme.space2,
    borderTop: bottom && border(theme),
    '> div': {
      '> *': {
        width: '100%',
      },
      '> .ant-radio-group': {
        hasFlex: {
          display: 'flex',
          '> label': {
            flexGrow: 1,
            textAlign: 'center',
          },
        },
      },
    },
    '> *:not(:first-child)': {
      paddingLeft: theme.space2,
    },
  }),
  ({ bottom, ...p }) => <Grid {...p} />,
  p => Object.keys(p)
);
