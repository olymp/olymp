import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

const getColor = (theme, color) => {
  if (color === true) {
    return theme.color;
  } else if (typeof color === 'string') {
    return theme[color] || color;
  }
  return theme.inverted ? theme.light : theme.dark;
};

export default createComponent(
  ({
    theme,
    color,
    width = 312,
    right,
    left,
    open,
    inverted,
    collapsed = true,
    dim = true,
  }) => ({
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: dim && (inverted ? theme.light2 : theme.dark3),
    zIndex: 6,
    opacity: !open ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    pointerEvents: !open || dim === false ? 'none' : undefined,
    '> aside': {
      pointerEvents: 'initial',
      position: 'fixed',
      top: 0,
      extend:
        right !== undefined
          ? {
              backgroundColor: 'blue',
              right: (right !== true && right) || 0,
              justifyContent: 'flex-end',
              transform: open ? null : 'translateX(100%)',
            }
          : {
              backgroundColor: 'blue',
              left: (left !== true && left) || 0,
              transform: open ? null : 'translateX(-100%)',
            },
      height: '100%',
      minWidth: width,
      zIndex: 7,
      boxShadow: !collapsed ? theme.boxShadow : undefined,
      transition: 'transform 200ms ease-out',
      backgroundColor: getColor(theme, color),
      display: 'flex',
    },
  }),
  ({
    className,
    children,
    menu,
    open,
    onClose,
    width = 312,
    onClick,
    ...rest
  }) => (
    <div className={className} onClick={onClose}>
      <aside
        {...rest}
        onClick={e => {
          e.stopPropagation();
          if (onClick) onClick(e);
        }}
      >
        {Children.map(
          children,
          child => (child ? cloneElement(child, { width }) : child),
        )}
      </aside>
    </div>
  ),
  ({ inverted, width, right, top, left, collapsed, dim, ...p }) =>
    Object.keys(p),
);
