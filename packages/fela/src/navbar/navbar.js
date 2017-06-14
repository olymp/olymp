import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'olymp';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';
import Toggler from './toggler';
import Container from '../container';
import Nav from './nav';
import Item from './item';
import Sub from './sub';

const renderItem = props => <Item {...props} />;
const renderNav = props => <Nav {...props} sub />;
const WithContainer = ({ container, ...rest }) => (container ?
  <Container {...rest} /> :
  <div {...rest} />);

const Navbar = createComponent(({ theme, inverse, vertically, full, fill, container }) => ({
  backgroundColor: inverse && theme.color,
  background: inverse && theme.color,
  borderRadius: !full && theme.borderRadius,
  margin: !full && theme.space2,
  width: full && '100%',
  minWidth: vertically && 200,
  display: vertically ? 'inline-block' : fill && 'flex',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  },
  ifMini: {
    margin: theme.space0,
  },
}), ({ className, brand, logo, children, pages, container, ...props }) => (
  <nav className={className}>
    <WithContainer container={container}>
      {brand ? <Brand {...props} renderItem={renderItem} renderNav={renderNav}>{brand}</Brand> : null}
      {logo ? <Logo vertically={props.vertically}>{logo}</Logo> : null}

      {pages && !!pages.length && (
        <Toggler
          {...props}
          pages={pages}
          renderItem={renderItem}
          renderNav={renderNav}
          hasLogo={!!logo || !!brand}
        >
          <Sub />
        </Toggler>
      )}

      {Children.map(children, child => cloneElement(
        child,
        { ...props, renderItem, renderNav }
      ))}
    </WithContainer>
  </nav>
), p => Object.keys(p));
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
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
  /** nav-items will fill empty space on full length */
  fill: PropTypes.bool,
};
Navbar.defaultProps = {
  brand: undefined,
  logo: undefined,
  vertically: false,
  inverse: false,
  full: false,
  fill: false,
};
export default Navbar;

const Brand = createComponent(({ theme, vertically, inverse }) => ({
  float: `${vertically ? 'none' : 'left'} !important`,
  width: 'auto !important',
  color: inverse ? theme.light : theme.dark,
  // borderRight: inverse && !vertically && border(theme, theme.dark4),
  fontSize: `calc(${theme.fontSize} + 4px)`,
  flex: 'none !important',
  '> a': {
    paddingY: `calc(${theme.space3} - 2px)`,
  },
}), ({ children, pages, ...p }) => <Item pathname="/" {...p} title={children} />, p => Object.keys(p));

const Logo = createComponent(({ vertically }) => ({
  float: vertically ? 'none' : 'left',
}), ({ vertically, ...p }) => <NavLink to="/" {...p} />, p => Object.keys(p));
