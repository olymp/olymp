import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { NavLink } from 'olymp-router';

const Brand = createComponent(
  ({ theme, inverse }) => ({
    color: inverse ? theme.light : theme.dark,
    centerY: true,
    paddingX: theme.space3,
    paddingY: theme.space2,
    '> *': {
      marginX: `-${theme.space3}`,
    },
    onHover: {
      color: inverse ? theme.light2 : theme.dark2,
    },
  }),
  ({ children, ...p }) =>
    <NavLink to="/" {...p}>
      {children}
    </NavLink>,
  ({ inverse, vertically, ...p }) => Object.keys(p)
);

const Inner = createComponent(
  ({ theme }) => ({
    visibility: 'hidden',
    paddingX: theme.space3,
    '> *': {
      marginX: `-${theme.space3}`,
    },
  }),
  'div',
  ['className']
);

const NavbarBrand = createComponent(
  ({ theme, vertically }) => ({
    position: 'relative',
    fontSize: `calc(${theme.fontSize} + 4px)`,
    whiteSpace: 'nowrap',
    float: vertically ? 'none' : 'left',
  }),
  ({ className, children, ...props }) =>
    <div className={className}>
      <Brand {...props}>
        {children}
      </Brand>
      <Inner>
        {children}
      </Inner>
    </div>,
  p => Object.keys(p)
);
NavbarBrand.displayName = 'Navbar.Brand';
NavbarBrand.propTypes = {
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
};
NavbarBrand.defaultProps = {
  inverse: false,
};
export default NavbarBrand;
