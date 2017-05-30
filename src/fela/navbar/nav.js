import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import NavItem from './item';

const Nav = styled(({ theme, fill, vertically, right }) => ({
  float: right ? 'right' : 'none',
  minWidth: vertically ? '100%' : 'auto',
  zIndex: 1,
  display: fill ? 'flex' : 'block',
  '> div': fill ? {
    flex: '1 1',
    textAlign: 'center',
  } : {},
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
      <NavItem {...rest} {...page} pages={children} key={page.id}>{page.name}</NavItem>
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
  /** if true, navbar will fill the whole width */
  fill: PropTypes.bool,
};
Nav.defaultProps = {
  pages: [],
  vertically: false,
  inverse: false,
  right: false,
  fill: false,
};
export default Nav;
