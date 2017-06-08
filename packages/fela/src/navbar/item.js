import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade } from 'olymp-fela';
import { Link, Placeholder } from './link';

const NavItem = createComponent(({ fill, inverse, vertically, right }) => ({
  float: !vertically && 'left',
  position: 'relative',
  flex: fill && '1 1',
  textAlign: fill ? 'center' : right && vertically && 'right',
  onHover: {
    backgroundColor: inverse && fade('#000000', 10),
    '> div': {
      display: 'block',
    },
  },
  ifMini: {
    float: 'none',
    display: 'block',
    width: '100%',
  },
}), ({ className, pathname, children, title, fill, pages, ...props }) => (
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

    {pages && !!pages.length && props.renderNav({ ...props, pages, sub: true })}

    {Children.map(children, child => cloneElement(child, { ...props, sub: true }))}
  </div>
), p => Object.keys(p));
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
  /** title/label */
  title: PropTypes.string.isRequired,
  /** path for react-router or undefined for placeholder */
  pathname: PropTypes.string,
  /** submenu is mega dropdown menu */
  mega: PropTypes.bool,
};
NavItem.defaultProps = {
  pathname: undefined,
  mega: false,
};
export default NavItem;
