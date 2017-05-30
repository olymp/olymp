import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, styled } from 'olymp';
import { gradient } from 'olymp-fela';
import Toggler from './toggler';
import Nav from './nav';
import NavItem from './item';

const Navbar = styled(({ theme, inverse, vertically, full }) => ({
  backgroundColor: inverse ? theme.color : 'transparent',
  background: inverse ? gradient(theme.color) : 'none',
  borderRadius: full ? 0 : theme.borderRadius,
  margin: full ? theme.space0 : theme.space2,
  width: full ? '100%' : 'auto',
  minWidth: vertically ? 200 : 'auto',
  display: vertically ? 'inline-block' : 'block',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, brand, logo, vertically, inverse, children, ...rest }) => (
  <nav className={className}>
    {brand ? <Brand inverse={inverse} vertically={vertically}>{brand}</Brand> : null}
    {logo ? <Logo vertically={vertically}>{logo}</Logo> : null}
    <Toggler onClick={() => {}} />
    <Nav {...rest} inverse={inverse} vertically={vertically} />
    {children}
  </nav>
), p => p);
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** node as brand, light styled */
  brand: PropTypes.node,
  /** node as logo without styles */
  logo: PropTypes.node,
  /** if true, nav-items will fill the whole width */
  fill: PropTypes.bool,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** full size width without margin */
  full: PropTypes.bool,
  /** right aligned nav-items */
  right: PropTypes.bool,
};
Navbar.defaultProps = {
  pages: [],
  brand: undefined,
  fill: false,
  vertically: false,
  inverse: false,
  full: false,
  right: false,
};
export default Navbar;

const Brand = styled(({ theme, vertically, inverse }) => ({
  float: vertically ? 'none' : 'left',
  color: inverse ? theme.light : theme.dark,
  fontSize: `calc(${theme.fontSize} + 4px)`,
  '> a': {
    paddingY: `calc(${theme.space3} - 2px)`,
  },
}), p => <NavItem pathname="/" {...p} />, p => p);

const Logo = styled(({ vertically }) => ({
  float: vertically ? 'none' : 'left',
}), ({ vertically, ...p }) => <NavLink to="/" {...p} />, p => p);
