import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, large, extra }) => {
    const width = (theme.collapsed && (large ? 54 : 40)) || (!extra ? 54 : 40);

    return {
      width,
      minWidth: width,
      textAlign: extra && 'right',
      display: extra && theme.collapsed && 'none',
      ellipsis: true,
      '> *': {
        display: 'block',
        margin: '0 auto',
      },
      '& svg': {
        size: large ? 36 : !extra ? 20 : 14,
      },
      '& img': {
        size: large ? 40 : !extra ? 32 : 20,
        borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
      },
    };
  },
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, ...p }) => Object.keys(p),
);
