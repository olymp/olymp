import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({
    theme,
    width = 240,
    right,
    left = 0,
    top,
    collapsed,
    pusher,
    zIndex,
  }) => ({
    height: '100%',
    '> aside': {
      position: 'fixed',
      top: top || 0,
      left: !right && left,
      right: right && 0,
      height: '100%',
      bottom: 0,
      width: collapsed ? 72 : width,
      boxShadow: !pusher && !collapsed ? theme.boxShadow : undefined,
      zIndex: zIndex || 1,
    },
    '> section': {
      marginLeft: !pusher || collapsed ? 72 : width,
      transition: 'margin 200ms ease-out',
      height: '100%',
      position: 'relative',
    },
  }),
  ({ children, className, menu, collapsed, width = 240, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          menu,
          child => (child ? cloneElement(child, { collapsed, width }) : child),
        )}
      </aside>
      <section>{children}</section>
    </div>
  ),
  ({ pusher, top, left, right, zIndex, ...p }) => Object.keys(p),
);
