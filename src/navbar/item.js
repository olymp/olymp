import React from 'react';
import PropTypes from 'prop-types';
import { styled, withRouter } from 'olymp';
import { fade, darken, border } from 'olymp/ui';

const NavItem = styled(({ theme, inverse, vertically }) => {
  const bgColor = inverse ? theme.color : 'transparent';

  return {
    float: vertically ? 'none' : 'left',
    // minWidth: vertically ? '100%' : 'auto',
    padding: theme.space3,
    position: 'relative',
    whiteSpace: 'nowrap',
    // backgroundColor: 'red',
    '> div': {
      backgroundColor: fade(bgColor),
      display: 'none',
      position: 'absolute',
      top: vertically ? -theme.borderWidth : '100%',
      left: vertically ? '100%' : 0,
      border: border(theme),
    },
    onHover: {
      // backgroundColor: fade('#000000', 10),
      '> div': {
        display: 'block',
      }
    }
  };
}, ({ className, vertically, editable, page, inverse }) => (
  <div className={className}>
    {true || editable ? ( // wenn Inhalt
      <Link to={page.pathName} inverse={inverse}>
        {page.name}

        {vertically && page.children && page.children.length ? <Icon inverse={inverse} /> : null}
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
  color: inverse ? theme.textColorLight : theme.color,
}), 'span', ({ inverse, ...p }) => p);

const Icon = styled(({ theme, inverse }) => ({
  fill: inverse ? theme.textColorLight : theme.color,
  size: theme.fontSize,
  marginLeft: theme.space3,
  borderRadius: '50%',
}), ({ className }) => (
  <svg className={className} viewBox="0 0 1792 1792">
    <path d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
  </svg>
), p => p);
