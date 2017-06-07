import React, { Component } from 'react';
import { styled } from 'olymp';
import { Badge as AntBadge } from 'antd';

export const Badge = styled(({ theme, color }) => ({
  '> .ant-badge-status-default': {
    backgroundColor: color || theme.color,
  },
}), AntBadge, ({ color, ...p }) => p);
Badge.defaultProps = {
  status: 'default',
};
