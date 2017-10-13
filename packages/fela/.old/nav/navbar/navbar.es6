import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';
import Inner from './inner';

const StyledNavbar = createComponent(
  ({ theme, inverse, vertically, full }) => ({
    backgroundColor: inverse && theme.color,
    background: inverse && theme.color,
    borderRadius: !full && theme.borderRadius,
    margin: !full && theme.space2,
    width: full && '100%',
    minWidth: vertically && 200,
    ifMini: {
      margin: theme.space0,
    },
  }),
  ({ className, children }) =>
    <nav className={className}>
      {children}
    </nav>,
  p => Object.keys(p)
);

/**
 * navbar-component
 */
const Navbar = ({
  brand,
  children,
  container,
  inverse,
  vertically,
  ...props
}) =>
  <StyledNavbar>
    <WithContainer container={container}>
      <Inner vertically={vertically}>
        {Children.map(children, child =>
          cloneElement(child, {
            ...props,
            inverse,
            vertically,
            // renderItem,
            // renderNav,
          })
        )}
      </Inner>
    </WithContainer>
  </StyledNavbar>;
Navbar.propTypes = {
  /** node as brand */
  brand: PropTypes.node,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** full size width without margin */
  full: PropTypes.bool,
  /** if navbar should be containered or not */
  container: PropTypes.bool,
};
Navbar.defaultProps = {
  brand: undefined,
  vertically: false,
  inverse: false,
  full: false,
  container: false,
};
export default Navbar;
