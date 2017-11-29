import React, { Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, onClick, disabled }) => ({
    width: 22,
    height: 22,
    borderRadius: '50%',
    position: 'relative',
    cursor: onClick && !disabled ? 'pointer' : undefined,
    opacity: disabled ? 0.67 : 1,
    '> *': {
      center: true,
    },
    onHover: {
      backgroundColor: onClick && !disabled ? theme.dark5 : undefined,
    },
  }),
  ({ className, children, onClick, disabled, ...p }) => (
    <div className={className} onClick={disabled ? () => {} : onClick}>
      {Children.map(
        children,
        child => (child ? cloneElement(child, { size: 14, ...p }) : child),
      )}
    </div>
  ),
  p => Object.keys(p),
);
