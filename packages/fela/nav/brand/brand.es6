import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import Container from './container';
import Placeholder from './placeholder';

const StyledBrand = createComponent(
  ({ theme, vertically }) => ({
    position: 'relative',
    fontSize: `calc(${theme.fontSize} + 4px)`,
    whiteSpace: 'nowrap',
    float: vertically ? 'none' : 'left',
  }),
  ({ className, children }) =>
    <div className={className}>
      {children}
    </div>,
  p => Object.keys(p)
);

/**
 * navbar-brand-component
 */
const Brand = ({ children, ...props }) =>
  <StyledBrand {...props}>
    <Container {...props}>
      {children}
    </Container>
    <Placeholder>
      {children}
    </Placeholder>
  </StyledBrand>;
Brand.propTypes = {
  children: PropTypes.node.isRequired,
  /** brand text-color. white if colored is set true */
  colored: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
Brand.defaultProps = {
  colored: undefined,
};
export default Brand;
