import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'olymp';
import { createComponent } from 'react-fela';

const Link = createComponent(
  ({ theme, inverse }) => ({
    cursor: 'pointer',
    onHover: {
      color: inverse ? theme.light : theme.dark,
      textDecoration: `underline solid ${inverse ? theme.light : theme.color}`,
    },
    '&.active': {
      textDecoration: `underline solid ${inverse ? theme.light : theme.color}`,
    },
  }),
  ({ inverse, onClick, ...rest }) =>
    onClick ? <span onClick={onClick} {...rest} /> : <NavLink {...rest} />,
  p => Object.keys(p)
);

const Placeholder = createComponent(
  () => ({
    cursor: 'default',
  }),
  'span',
  ({ inverse, ...p }) => Object.keys(p)
);

const NavbarLink = createComponent(
  ({ theme, inverse }) => ({
    color: inverse ? theme.light2 : theme.dark2,
    display: 'block',
    fontFamily: theme.fontFamily,
    textDecoration: 'none',
    ellipsis: true,
  }),
  ({ to, onClick, ...rest }) =>
    to || onClick
      ? <Link to={to} onClick={onClick} {...rest} />
      : <Placeholder {...rest} />,
  p => Object.keys(p)
);
NavbarLink.displayName = 'Navbar.Link';
NavbarLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};
NavbarLink.defaultProps = {
  to: undefined,
  onClick: undefined,
};
export default NavbarLink;
