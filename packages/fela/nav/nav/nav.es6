import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const StyledNav = createComponent(
  ({ theme, fill, vertically, isRight }) => ({
    float: isRight ? 'right' : 'left',
    // width: fill && '100%',
    // height: !vertically && '100%',
    minWidth: vertically ? '100%' : 'auto',
    marginLeft: isRight && 'auto',
    // borderTop: vertically && border(theme, theme.dark4),
    ifMini: {
      float: 'none',
      width: '100%',
      borderRight: 0,
      // borderTop: border(theme, theme.dark4),
      clear: 'both',
    },
    ifMediumUp: {
      display: vertically ? 'none' : 'block',
      hasFlex: {
        display: vertically ? 'none' : 'flex',
        flex: fill && '1 1 auto',
        alignItems: 'stretch',
        flexDirection: vertically ? 'column' : 'row',
      },
    },
  }),
  'div',
  p => Object.keys(p)
);

/**
 * navbars consist of one or more navs which can also be nested within each other. Navs can be aligned left (by default) or right.
 */
const Nav = ({ children, isRight, ...props }) =>
  <StyledNav isRight={isRight}>
    {Children.map(children, child =>
      cloneElement(child, {
        ...props,
      })
    )}
  </StyledNav>;
Nav.propTypes = {
  children: PropTypes.node.isRequired,
  /** aligns nav-item right */
  isRight: PropTypes.bool,
};
Nav.defaultProps = {
  isRight: false,
};
export default Nav;
