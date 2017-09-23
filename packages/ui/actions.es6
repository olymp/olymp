import React from 'react';
import { createComponent } from 'olymp-fela';
import Portal from 'olymp-fela/portal';

export default createComponent(
  ({ theme, color }) => ({
    position: 'fixed',
    top: 5,
    right: 5,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '> *': {
      margin: 5,
    },
  }),
  ({ className, children, ...props }) => (
    <Portal>
      <span className={className}>{children}</span>
    </Portal>
  ),
  ({ color, ...p }) => Object.keys(p),
);
