import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';

const Nav = styled(({ fill, vertically, right }) => ({
  float: right ? 'right' : 'none',
  minWidth: vertically ? '100%' : 'auto',
  zIndex: 1,
  display: fill && 'flex',
  onAfter: {
    content: '.',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, pages, children, ...props }) => ((pages && !!pages.length) || children) ? (
  <div className={className}>
    {pages.map(({ children: childPages, ...page }, i) => props.renderItem({
      ...page,
      title: page.name,
      pages: childPages,
      key: page.id || i,
      ...props,
    }))}

    {Children.map(children, child => cloneElement(child, props))}
  </div>
) : null, p => p);
Nav.displayName = 'Navbar.Nav';
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
