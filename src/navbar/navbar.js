import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, styled } from 'olymp';
import { gradient } from 'olymp/ui';
import Toggler from './toggler';
import Nav from './nav';
import NavItem from './item';

const Navbar = styled(({ theme, inverse }) => ({
  backgroundColor: inverse ? theme.color : 'transparent',
  background: inverse ? gradient(theme.color) : 'none',
  borderRadius: theme.borderRadius,
  margin: theme.space2,
}), ({ className, brand, pages, vertically, inverse, ...rest }) => (
  <nav className={className}>
    {brand ? <Brand vertically={vertically}>{brand}</Brand> : null}

    <Toggler onClick={() => {}} />

    <Nav inverse={inverse} vertically={vertically} >
      {(pages || []).map(page =>
        <NavItem {...rest} page={page} vertically={vertically} inverse={inverse} key={page.id} />
      )}
    </Nav>
  </nav>
), p => p);
Navbar.propTypes = {
  /**  */
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
