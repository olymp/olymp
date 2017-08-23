import React, { Component } from 'react';
import { Badge as AntBadge } from 'antd';
import { createComponent } from 'olymp-fela';

export const Badge = createComponent(
  ({ theme, color }) => ({
    '> .ant-badge-status-default': {
      backgroundColor: color || theme.color,
    },
    '> .ant-badge-status-text': {
      marginLeft: 4,
    },
  }),
  AntBadge,
  ({ color, ...p }) => Object.keys(p),
);
Badge.defaultProps = {
  status: 'default',
};
