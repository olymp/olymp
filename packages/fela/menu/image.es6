import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, large, extra }) => ({
    width: !extra ? 54 : 40,
    minWidth: !extra ? 54 : 40,
    maxWidth: !extra ? 54 : 40,
    textAlign: extra && 'right',
    display: extra && theme.collapsed && 'none',
    ellipsis: true,
    '> *': {
      display: 'block',
      margin: '0 auto',
    },
    '> svg': {
      size: large ? 32 : !extra ? 20 : 14,
    },
    '> img': {
      size: large ? 40 : !extra ? 32 : 20,
      borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, ...p }) => Object.keys(p),
);
