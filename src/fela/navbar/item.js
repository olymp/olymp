import React from 'react';
import PropTypes from 'prop-types';
import { styled, NavLink } from 'olymp';
import { fade, shadow, border, textColorDark, textColorLight } from 'olymp-fela';
import Nav from './nav';

const NavItem = styled(({ theme, inverse, vertically }) => ({
  float: vertically ? 'none' : 'left',
  position: 'relative',
  whiteSpace: 'nowrap',
  '> a': {
    color: theme.textColor,
  },
  '> div': {
    backgroundColor: inverse ? fade(theme.color) : '#FFFFFF',
    border: inverse ? 'none' : border(theme),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : (inverse ? 0 : -theme.borderWidth),
    left: vertically ? '100%' : (inverse ? 0 : -theme.borderWidth),
    // borderRadius: theme.borderRadius,
    boxShadow: shadow(),
  },
  onHover: {
    backgroundColor: inverse ? fade('#000000', 10) : '#FFFFFF',
    '> div': {
      display: 'block',
    }
  }
}), ({ className, pathname, name, pages, inverse }) => (
  <div className={className}>
    {pathname ? (
      <Link to={pathname} inverse={inverse}>
        {name}
      </Link>
    ) : (
      <Placeholder onClick={() => {}} inverse={inverse}>
        {name}
      </Placeholder>
    )}

    {pages && pages.length ? (
      <Nav pages={pages} inverse={inverse} vertically />
    ) : null}
  </div>
), p => p);
NavItem.propTypes = {
  /** name  */
  name: PropTypes.string.isRequired,
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
};
NavItem.defaultProps = {
  pathname: undefined,
  pages: [],
  inverse: false,
  vertically: false,
  editable: false,
};
export default NavItem;

const navItemStyles = ({ theme, inverse }) => ({
  color: inverse ? textColorLight(theme.textColorLight) : textColorDark(theme.color),
  display: 'block',
  padding: theme.space3,
});

const Link = styled(({ theme, inverse }) => ({
  ...navItemStyles({ theme, inverse }),
  cursor: 'pointer',
  onHover: {
    color: inverse ? textColorLight(theme.textColorLight, 'SECONDARY') : textColorDark(theme.color, 'SECONDARY'),
  }
}), ({ inverse, ...p }) => <NavLink {...p} />, p => p);

const Placeholder = styled(p => navItemStyles(p), 'span', ({ inverse, ...p }) => p);
