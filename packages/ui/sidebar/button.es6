import React from 'react';
import { createComponent } from 'olymp-fela';
import { Button as AntButton } from 'antd';

const Button = createComponent(
  ({ theme }) => ({
    paddingTop: 1,
    backgroundColor: theme.dark5,
    borderWidth: 0,
    color: theme.dark3,
    onHover: {
      borderWidth: 1,
    },
    onActive: {
      borderWidth: 1,
    },
    onFocus: {
      borderWidth: 1,
    },
    '> *': {
      marginTop: 1,
    },
  }),
  p => <AntButton size="large" {...p} />,
  p => Object.keys(p),
);

export default Button;
