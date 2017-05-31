import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import { fade } from 'olymp-fela';
import { Link, Placeholder } from './link';

const NavItem = styled(({ fill, inverse, vertically }) => ({
  float: !vertically && 'left',
  position: 'relative',
  whiteSpace: 'nowrap',
  flex: fill && '1 1',
  textAlign: fill && 'center',
  onHover: {
    backgroundColor: inverse ? fade('#000000', 10) : '#FFFFFF',
    '> div': {
      display: 'block',
    }
  }
}), ({ className, pathname, children, title, fill, ...props }) => (
  <div className={className}>
    {pathname ? (
      <Link to={pathname} inverse={props.inverse}>
        {title}
      </Link>
    ) : (
      <Placeholder onClick={() => {}} inverse={props.inverse}>
        {title}
      </Placeholder>
    )}

    {props.renderSub({ ...props, sub: true })}

    {Children.map(children, child => cloneElement(child, { ...props, sub: true }))}
  </div>
), p => p);
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** path for react-router or undefined for placeholder */
  pathname: PropTypes.string,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
};
NavItem.defaultProps = {
  pages: [],
  pathname: undefined,
  inverse: false,
};
export default NavItem;
