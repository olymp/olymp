import React from 'react';
import { NavLink } from 'olymp';
import { createComponent } from 'react-fela';

const navItemStyles = ({ theme, inverse }) => ({
  color: inverse ? theme.light2 : theme.dark2,
  display: 'block',
  padding: theme.space3,
  fontFamily: theme.fontFamily,
  textDecoration: 'none',
  ellipsis: true,
});

export const Link = createComponent(
  ({ theme, inverse }) => ({
    ...navItemStyles({ theme, inverse }),
    cursor: 'pointer',
    onHover: {
      color: inverse ? theme.light : theme.dark,
    },
  }),
  ({ inverse, ...p }) => <NavLink {...p} />,
  p => Object.keys(p)
);

export const Placeholder = createComponent(
  p => navItemStyles(p),
  'span',
  ({ inverse, ...p }) => Object.keys(p)
);
