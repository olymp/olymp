import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { NavLink, styled } from 'olymp';
import { gradient } from 'olymp-fela';
import Toggler from './toggler';
import Nav from './nav';
import Item from './item';
import Sub from './sub';

const renderItem = props => <Item {...props} />;
const renderSub = props => <Sub {...props} sub />;

const Navbar = styled(({ theme, inverse, vertically, full }) => ({
  backgroundColor: inverse && theme.color,
  background: inverse && gradient(theme.color),
  borderRadius: full ? 0 : theme.borderRadius,
  margin: full ? theme.space0 : theme.space2,
  width: full && '100%',
  minWidth: vertically && 200,
  display: vertically && 'inline-block',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  },
}), ({ className, brand, logo, children, ...props }) => (
  <nav className={className}>
    {brand ? <Brand {...props} renderItem={renderItem} renderSub={renderSub}>{brand}</Brand> : null}
    {logo ? <Logo vertically={props.vertically}>{logo}</Logo> : null}

    <Toggler onClick={() => {}} />

    <Nav
      {...props}
      renderItem={renderItem}
      renderSub={renderSub}
    />

    {Children.map(children, child => cloneElement(
      child,
      { ...props, renderItem, renderSub }
    ))}
  </nav>
), p => p);
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** node as brand, light styled */
  brand: PropTypes.node,
  /** node as logo without styles */
  logo: PropTypes.node,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** full size width without margin */
  full: PropTypes.bool,
};
Navbar.defaultProps = {
  pages: [],
  brand: undefined,
  vertically: false,
  inverse: false,
  full: false,
};
export default Navbar;

const Brand = styled(({ theme, vertically, inverse }) => ({
  float: vertically ? 'none' : 'left',
  color: inverse ? theme.light : theme.dark,
  fontSize: `calc(${theme.fontSize} + 4px)`,
  '> a': {
    paddingY: `calc(${theme.space3} - 2px)`,
  },
}), ({ children, pages, ...p }) => <Item pathname="/" {...p} title={children} />, p => p);

const Logo = styled(({ vertically }) => ({
  float: vertically ? 'none' : 'left',
}), ({ vertically, ...p }) => <NavLink to="/" {...p} />, p => p);
