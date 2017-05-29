import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import { fade } from 'olymp/ui';

const Nav = styled(({ theme, inverse, vertically }) => ({
  backgroundColor: inverse ? fade(theme.color) : '#FFFFFF',
  minWidth: vertically ? '100%' : 'auto',
}), ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
), p => p);
Nav.propTypes = {
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
};
Nav.defaultProps = {
  vertically: false,
  inverse: false,
};
export default Nav;
