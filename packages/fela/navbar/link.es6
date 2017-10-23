import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'olymp-router';
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
  ({ inverse, onClick, renderItemLink: LinkComponent, ...rest }) =>
    onClick ? (
      <span onClick={onClick} {...rest} />
    ) : (
      <LinkComponent {...rest} />
    ),
  p => Object.keys(p),
);

const Placeholder = createComponent(
  () => ({
    cursor: 'default',
  }),
  'a',
  ({ inverse, ...p }) => Object.keys(p),
);

const NavbarLink = createComponent(
  ({ theme, inverse }) => ({
    color: inverse ? theme.light2 : theme.dark2,
    display: 'block',
    fontFamily: theme.fontFamily,
    textDecoration: 'none',
    ellipsis: true,
    position: 'relative',
  }),
  ({ to, onClick, renderItemLink, ...rest }) =>
    to || onClick ? (
      <Link
        to={to}
        renderItemLink={renderItemLink}
        onClick={onClick}
        {...rest}
      />
    ) : (
      <Placeholder {...rest} />
    ),
  p => Object.keys(p),
);
NavbarLink.displayName = 'Navbar.Link';
NavbarLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};
NavbarLink.defaultProps = {
  to: undefined,
  onClick: undefined,
  renderItemLink: props => <NavLink {...props} />,
};
export default NavbarLink;
