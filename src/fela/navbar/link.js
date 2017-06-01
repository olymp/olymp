import React from 'react';
import { styled, NavLink } from 'olymp';

const navItemStyles = ({ theme, inverse }) => ({
  color: inverse ? theme.light2 : theme.dark2,
  display: 'block',
  padding: theme.space3,
  fontFamily: theme.fontFamily,
  textDecoration: 'none',
  overflow: 'ellipsis',
});

export const Link = styled(({ theme, inverse }) => ({
  ...navItemStyles({ theme, inverse }),
  cursor: 'pointer',
  onHover: {
    color: inverse ? theme.light : theme.dark,
  }
}), ({ inverse, ...p }) => <NavLink {...p} />, p => p);

export const Placeholder = styled(p => navItemStyles(p), 'span', ({ inverse, ...p }) => p);
