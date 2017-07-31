import React from 'react';
import { Spin } from 'antd';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme, loading }) =>
    loading && {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      backgroundColor: theme.dark3,
      '> div': {
        center: true,
      },
    },
  ({ className, loading, ...p }) =>
    <div className={className}>
      {loading && <Spin />}
    </div>,
  ['loading']
);
