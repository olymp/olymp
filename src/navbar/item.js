import React from 'react';
import PropTypes from 'prop-types';
import { styled, withRouter } from 'olymp';
import { fade } from 'olymp/ui';

const NavItem = styled(({ theme, inverse, vertically }) => ({
  float: vertically ? 'none' : 'left',
  minWidth: vertically ? '100%' : 'auto',
  padding: theme.space2,
  position: 'relative',
  backgroundColor: !vertically ? 'transparent' : inverse ? fade(theme.color) : fade('#FFFFFF'),
  '> div': {
    display: 'none',
    position: 'absolute',
    top: vertically ? 0 : '100%',
    left: vertically ? '100%' : 0,
  },
  onHover: {
    '> div': {
      display: 'block',
    }
  }
}), ({ className, editable, page, inverse }) => (
  <div className={className}>
    {true || editable ? ( // wenn Inhalt
      <Link to={page.pathName} inverse={inverse}>
        {page.name}
      </Link>
    ) : (
      <Placeholder onClick={() => {}} inverse={inverse}>
        {page.name}
      </Placeholder>
    )}

    {page.children && page.children.length ? page.children.map(child => (
      <NavItem page={child} vertically inverse={inverse} key={child.id} />
    )) : null}
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
  color: inverse ? theme.textColorLight : theme.color,
  cursor: 'pointer',
}), p => <Placeholder {...p} />, p => p);

const Placeholder = styled(({ theme, inverse }) => ({
  color: inverse ? theme.textColorLight : theme.textColor,
}), 'span', ({ inverse, ...p }) => p);
