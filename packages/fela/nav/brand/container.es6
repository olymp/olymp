import React from 'react';
import { createComponent } from 'react-fela';
import { NavLink } from 'olymp-router';
import tinycolor from 'tinycolor2';

export default createComponent(
  ({ theme, colored }) => ({
    color:
      colored && tinycolor(colored || theme.color).isDark()
        ? theme.light
        : theme.dark,
    centerY: true,
    paddingX: theme.space3,
    paddingY: theme.space2,
    '> *': {
      marginX: `-${theme.space3}`,
      display: 'block',
    },
    onHover: {
      color:
        colored && tinycolor(colored || theme.color).isDark()
          ? theme.light2
          : theme.dark2,
    },
  }),
  ({ children, ...p }) =>
    <NavLink to="/" {...p}>
      {children}
    </NavLink>,
  ({ colored, vertically, ...p }) => Object.keys(p)
);
