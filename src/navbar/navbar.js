import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, styled } from 'olymp';
import { gradient } from 'olymp/ui';
import Toggler from './toggler';
import Nav from './nav';

const Navbar = styled(({ theme, inverse, vertically }) => ({
  backgroundColor: inverse ? theme.color : 'transparent',
  background: inverse ? gradient(theme.color) : 'none',
  borderRadius: theme.borderRadius,
  margin: theme.space2,
  width: vertically ? 200 : '100%',
  onAfter: {
    content: '.',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, brand, vertically, ...rest }) => (
  <nav className={className}>
    {brand ? <Brand vertically={vertically}>{brand}</Brand> : null}

    <Toggler onClick={() => {}} />

    <Nav {...rest} vertically={vertically} />
  </nav>
), p => p);
Navbar.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** react element as brand/logo */
  brand: PropTypes.element,
  /** if true, navbar will fill the whole width */
  fill: PropTypes.bool,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
};
Navbar.defaultProps = {
  pages: [],
  brand: undefined,
  fill: false,
  vertically: false,
  inverse: false,
};
export default Navbar;

const Brand = styled(({ theme, vertically }) => ({
  float: vertically ? 'none' : 'left',
  color: theme.color,
}), ({ className, children }) => (
  <NavLink to="/" className={className}>{children}</NavLink>
), p => p);
