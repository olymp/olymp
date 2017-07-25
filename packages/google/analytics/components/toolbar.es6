import React from 'react';
import { createComponent, border } from 'olymp-fela';

export default createComponent(
  ({ theme }) => ({
    hasFlex: {
      display: 'flex',
      flex: 'none !important',
      '> ul': {
        flex: '1 1 75%',
      },
      '> .ant-btn': {
        flexBasis: '50%',
      },
      '> .ant-input-search': {
        flexBasis: '25%',
      },
      '> .ant-radio-group': {
        flexBasis: '25%',
      },
    },
    '> *:not(:first-child)': {
      marginLeft: theme.space2,
    },
    ':first-of-type': {
      paddingBottom: theme.space2,
      marginBottom: theme.space2,
      borderBottom: border(theme),
    },
    ':last-of-type': {
      paddingTop: theme.space2,
      marginTop: theme.space2,
      borderTop: border(theme),
    },
  }),
  ({ className, children }) =>
    <div className={className}>
      {children}
    </div>,
  p => Object.keys(p)
);
