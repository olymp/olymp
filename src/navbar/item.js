import React from 'react';
import PropTypes from 'prop-types';
import { styled, withRouter, NavLink } from 'olymp';
import { fade, shadow } from 'olymp/ui';
import Nav from './nav';

const NavItem = styled(({ theme, inverse, vertically }) => ({
  float: vertically ? 'none' : 'left',
  padding: theme.space3,
  position: 'relative',
  whiteSpace: 'nowrap',
  '> div': {
    display: 'none',
    position: 'absolute',
    top: vertically ? 0 : '100%',
    left: vertically ? '100%' : 0,
    // borderRadius: theme.borderRadius,
    boxShadow: shadow(),
  },
  onHover: {
    backgroundColor: inverse ? fade('#000000', 10) : '#FFFFFF',
    '> div': {
      display: 'block',
    }
  }
}), ({ className, vertically, editable, page, inverse }) => (
  <div className={className}>
    {true || editable ? ( // wenn Inhalt
      <Link to={page.pathname} inverse={inverse}>
        {page.name}
      </Link>
    ) : (
      <Placeholder onClick={() => {}} inverse={inverse}>
        {page.name}
      </Placeholder>
    )}

    {page.children && page.children.length ? (
      <Nav inverse={inverse} vertically>
        {page.children.map(child => (
          <NavItem page={child} vertically inverse={inverse} key={child.id} />
        ))}
      </Nav>
    ) : null}
  </div>
), p => p);
NavItem.propTypes = {
  /**  */
  page: PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** */
  editable: PropTypes.bool,
};
NavItem.defaultProps = {
  inverse: false,
  vertically: false,
  editable: false,
};
export default withRouter(NavItem);

const Link = styled(({ theme, inverse }) => ({
  color: inverse ? theme.textColorLight : theme.textColorDark,
  cursor: 'pointer',
  display: 'block',
  onHover: {
    color: inverse ? theme.textColorLight : theme.color,
  }
}), ({ inverse, ...p }) => <NavLink {...p} />, p => p);

const Placeholder = styled(({ theme, inverse }) => ({
  // color: inverse ? theme.textColorLight : theme.color,
  display: 'block',
}), 'span', ({ inverse, ...p }) => p);
