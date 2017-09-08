import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';
import Inner from './inner';

const StyledNavbar = createComponent(
  ({ theme, colored, vertically, full }) => ({
    background: colored === true ? theme.color : colored,
    backgroundColor: colored === true ? theme.color : colored,
    borderRadius: !full && theme.borderRadius,
    margin: !full && theme.space2,
    width: full && '100%',
    minWidth: vertically && 200,
    ifMini: {
      margin: theme.space0,
    },
  }),
  'nav',
  p => Object.keys(p)
);

/**
 * navbar-component
 */
const Navbar = ({ children, container, colored, vertically, full, ...props }) =>
  <StyledNavbar colored={colored} vertically={vertically} full={full}>
    <WithContainer container={container}>
      <Inner vertically={vertically}>
        {Children.map(children, child =>
          cloneElement(child, {
            ...props,
            colored,
            vertically,
          })
        )}
      </Inner>
    </WithContainer>
  </StyledNavbar>;
Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** navbar background-color. primary-color if colored is set true */
  colored: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** full size width without margin */
  full: PropTypes.bool,
  /** if navbar should be containered or not */
  container: PropTypes.bool,
};
Navbar.defaultProps = {
  vertically: false,
  colored: undefined,
  full: false,
  container: false,
};
export default Navbar;
