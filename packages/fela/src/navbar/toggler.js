import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

const Toggler = createComponent(
  ({ hasLogo }) => ({
    width: '100%',
    ifMini: {
      '> div': {
        display: 'none',
        clear: hasLogo && 'both',
      },
      onHover: {
        '> div': {
          display: 'block',
        },
      },
      onAfter: {
        content: '""',
        clear: 'both',
        display: 'block',
        visibility: 'hidden',
        height: 0,
      },
    },
  }),
  ({ className, children, ...props }) =>
    (<div className={className}>
      <Button {...props} open />

      {Children.map(children, child => cloneElement(child, props))}
    </div>),
  p => Object.keys(p)
);
export default Toggler;

const Button = createComponent(
  ({ theme, open, inverse, size = 20 }) => ({
    float: 'right',
    padding: theme.space2,
    margin: theme.space1,
    ifSmallUp: {
      display: 'none',
    },

    width: Math.round(size * 1.3),
    height: size,
    position: 'relative',
    transform: 'rotate(0deg)',
    transition: '.5s ease-in-out',
    cursor: 'pointer',
    '> span': {
      display: 'block',
      position: 'absolute',
      height: Math.round(size / 6),
      borderRadius: Math.round(size / 6),
      width: '100%',
      background: inverse ? theme.light : theme.color,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      ':nth-child(1)': {
        top: open ? Math.round(size / 3) : 0,
        width: open && '0%',
        left: open && '50%',
      },
      ':nth-child(2)': {
        top: Math.round(size / 3),
        transform: open && 'rotate(45deg)',
      },
      ':nth-child(3)': {
        top: Math.round(size / 3),
        transform: open && 'rotate(-45deg)',
      },
      ':nth-child(4)': {
        top: open ? Math.round(size / 3) : Math.round(size / 3) * 2,
        width: open && '0%',
        left: open && '50%',
      },
    },
  }),
  ({ className }) =>
    (<div className={className}>
      <span />
      <span />
      <span />
      <span />
    </div>),
  p => Object.keys(p)
);
