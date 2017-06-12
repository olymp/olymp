import React from 'react';
import { createComponent } from 'olymp-fela';
import { Button as AntButton } from 'antd';

const Button = createComponent(({ theme }) => ({
  display: 'block!important',
  // boxShadow: theme.boxShadow,
  paddingTop: 1,
  backgroundColor: theme.light,
  color: theme.dark2,
}), p => <AntButton size="large" {...p} />, p => Object.keys(p));

export default Button;
