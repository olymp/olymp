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
    left = 0,
    open,
    inverted,
    collapsed = true,
  }) => ({
    height: '100%',
    '> aside': {
      position: 'fixed',
      top: 0,
      left: !right && left,
      right: right && 0,
      marginLeft: !right && (!open ? -width : 0),
      marginRight: right && (!open ? -width : 0),
      height: '100%',
      minWidth: width,
      zIndex: 7,
      boxShadow: !collapsed ? theme.boxShadow : undefined,
      transition: 'margin 200ms ease-out',
      backgroundColor: getColor(theme, color),
      display: 'flex',
      justifyContent: right && 'flex-end',
    },
    '> div': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: inverted ? theme.light2 : theme.dark3,
      zIndex: 6,
      opacity: !open ? 0 : 1,
      transition: 'opacity 200ms ease-out',
      pointerEvents: !open && 'none',
    },
  }),
  ({
    className,
    children,
    menu,
    open,
    onClose,
    width = 312,
    dim = true,
    ...rest
  }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          children,
          child => (child ? cloneElement(child, { width }) : child),
        )}
      </aside>
      {dim && <div onClick={onClose} />}
    </div>
  ),
  ({ inverted, width, right, top, left, collapsed, ...p }) => Object.keys(p),
);
