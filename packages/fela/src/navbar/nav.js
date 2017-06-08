import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { fade, border } from 'olymp-fela';
import Sub from './sub';
import Mega from './mega';

const Nav = createComponent(
  ({ theme, inverse, vertically, right, sub }) => (sub && {
    backgroundColor: inverse ? fade(theme.color) : '#FFFFFF',
    border: !inverse && border(theme),
    display: 'none',
    position: 'absolute',
    top: !vertically ? '100%' : -theme.borderWidth,
    left: !right && (vertically ? '100%' : -theme.borderWidth),
    right: right && (!vertically ? 0 : '100%'),
    boxShadow: theme.boxShadow,
    zIndex: 1,
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
      boxShadow: inverse ? theme.innerShadow : 'none',
      border: 'none',
    },
  }),
  ({ mega, sub, vertically, children, ...props }) => (mega ? (
    <Mega {...props} />
  ) : (
    <Sub {...props} vertically={sub || vertically}>{children}</Sub>
  )),
  p => Object.keys(p)
);
Nav.displayName = 'Navbar.Nav';
Nav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** aligns nav-items right */
  right: PropTypes.bool,
};
Nav.defaultProps = {
  pages: [],
  right: false,
};
export default Nav;
