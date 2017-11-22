import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ width, right, collapsed }) => ({
    height: '100%',
    '> aside': {
      position: 'fixed',
      top: 0,
      left: !right && 0,
      right: right && 0,
      height: '100%',
      width: width || (collapsed ? 72 : 240),
    },
    '> nav': {
      position: 'fixed',
      width: width || (collapsed ? 72 : 240),
    },
    '> section': {
      marginLeft: width || (collapsed ? 72 : 240),
      transition: 'margin 200ms ease-out',
      height: '100%',
      position: 'relative',
    },
  }),
  ({ children, className, menu, collapsed, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          menu,
          child => (child ? cloneElement(child, { collapsed }) : child),
        )}
      </aside>
      <section>{children}</section>
    </div>
  ),
  p => Object.keys(p),
);
