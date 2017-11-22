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
      width: collapsed ? 72 : width,
    },
    '> nav': {
      position: 'fixed',
      width: collapsed ? 72 : width,
    },
    '> section': {
      marginLeft: collapsed ? 72 : width,
      transition: 'margin 200ms ease-out',
      height: '100%',
      position: 'relative',
    },
  }),
  ({ children, menu, collapsed, width, ...rest }) => (
    <aside {...rest}>
      {Children.map(
        menu,
        child => (child ? cloneElement(child, { collapsed, width }) : child),
      )}
    </aside>
  ),
  p => Object.keys(p),
);
