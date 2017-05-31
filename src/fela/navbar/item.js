import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import { fade, shadow, border } from 'olymp-fela';
import { Link, Placeholder } from './link';
import Nav from './nav';
import Super from './super';

const NavItem = styled(({ theme, inverse, vertically }) => ({
  float: vertically ? 'none' : 'left',
  position: 'relative',
  whiteSpace: 'nowrap',
  '> div': {
    backgroundColor: inverse ? fade(theme.color) : '#FFFFFF',
    border: inverse ? 'none' : border(theme),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : (inverse ? 0 : -theme.borderWidth),
    left: vertically ? '100%' : (inverse ? 0 : -theme.borderWidth),
    boxShadow: shadow(),
  },
  onHover: {
    backgroundColor: inverse ? fade('#000000', 10) : '#FFFFFF',
    '> div': {
      display: 'block',
    }
  }
}), ({ className, pathname, children, pages, inverse, superSub }) => (
  <div className={className}>
    {pathname ? (
      <Link to={pathname} inverse={inverse}>
        {children}
      </Link>
    ) : (
      <Placeholder onClick={() => {}} inverse={inverse}>
        {children}
      </Placeholder>
    )}

    {!pages || !pages.length ? null : (superSub ? (
      <Super pages={pages} inverse={inverse} />
    ) : (
      <Nav pages={pages} inverse={inverse} vertically />
    ))}
  </div>
), p => p);
NavItem.propTypes = {
  /** path for react-router or undefined for placeholder */
  pathname: PropTypes.string,
  /** Array of page-objects for submenu */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** */
  editable: PropTypes.bool,
  /** */
  superSub: PropTypes.bool,
};
NavItem.defaultProps = {
  pathname: undefined,
  pages: [],
  inverse: false,
  vertically: false,
  editable: false,
  superSub: false,
};
export default NavItem;
