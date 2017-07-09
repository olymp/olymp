import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade, border } from 'olymp-fela';
import Sub from './sub';
import Mega from './mega';

const Nav = createComponent(
  ({ theme, inverse, vertically, right, sub }) =>
    sub && {
      backgroundColor: inverse ? fade(theme.color, 85) : '#FFFFFF',
      border: border(theme, inverse ? theme.color : theme.dark4),
      display: 'none',
      position: 'absolute',
      top: !vertically ? '100%' : -theme.borderWidth,
      left: !right && (vertically ? '100%' : 0),
      right: right && (!vertically ? 0 : '100%'),
      zIndex: 10,
      '> div': {
        textAlign: 'left',
      },
      ifMini: {
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        fontSize: theme.fontSizeSmall,
        backgroundColor: inverse && theme.dark5,
        border: 'none',
      },
    },
  ({ mega, sub, vertically, children, ...props }) =>
    mega && mega({ mega, sub, vertically, children, ...props })
      ? <Mega {...props} />
      : <Sub {...props} vertically={sub || vertically}>
        {children}
      </Sub>,
  p => Object.keys(p)
);
Nav.displayName = 'Navbar.Nav';
Nav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      pathname: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  /** aligns nav-items right */
  right: PropTypes.bool,
};
Nav.defaultProps = {
  pages: [],
  right: false,
};
export default Nav;
