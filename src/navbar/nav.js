import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import { fade, shadow, border } from 'olymp/ui';
import NavItem from './item';

const Nav = styled(({ theme, inverse, vertically }) => ({
  minWidth: vertically ? '100%' : 'auto',
  zIndex: 1,
  border: inverse ? 'none' : border(theme),
}), ({ className, pages, ...rest }) => (
  <div className={className}>
    {(pages || []).map(({ children, ...page }) =>
      <NavItem {...rest} {...page} pages={children} key={page.id} />
    )}
  </div>
), p => p);
Nav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** aligns nav-items right */
  right: PropTypes.bool,
};
Nav.defaultProps = {
  pages: [],
  vertically: false,
  inverse: false,
  right: false,
};
export default Nav;
