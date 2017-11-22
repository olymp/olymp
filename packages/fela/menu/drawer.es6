import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme, width = 312, right, open, inverted }) => ({
    height: '100%',
    '> aside': {
      position: 'fixed',
      top: 0,
      left: !right && 0,
      right: right && 0,
      marginLeft: !right && (!open ? -width : 0),
      marginRight: right && (!open ? -width : 0),
      height: '100%',
      width,
      zIndex: 2,
      boxShadow: theme.boxShadow,
      transition: 'margin 200ms ease-out',
      background: theme.light,
    },
    '> div': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: inverted ? theme.light2 : theme.dark3,
      zIndex: 1,
      opacity: !open ? 0 : 1,
      transition: 'opacity 200ms ease-out',
      pointerEvents: !open && 'none',
    },
  }),
  ({ className, children, menu, open, onClose, width = 312, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          children,
          child => (child ? cloneElement(child, { width }) : child),
        )}
      </aside>
      <div onClick={onClose} />
    </div>
  ),
  ({ inverted, ...p }) => Object.keys(p),
);
