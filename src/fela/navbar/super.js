import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import NavItem from './item';

const SuperNav = styled(({ theme, inverse, vertically, right }) => ({
  float: right ? 'right' : 'none',
  minWidth: vertically ? '100%' : 'auto',
  zIndex: 1,
  onAfter: {
    content: '.',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, pages, ...rest }) => (
  <div className={className}>
    {(pages || []).map(({ children, ...page }) =>
      <NavItem {...rest} {...page} pages={children} key={page.id} />
    )}
  </div>
), p => p);
SuperNav.propTypes = {
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
SuperNav.defaultProps = {
  pages: [],
  inverse: false,
};
export default SuperNav;
