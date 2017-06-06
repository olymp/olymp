import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';

const Grid = styled(() => ({
  minWidth: '100%',
  onAfter: {
    content: '""',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ children, size, ...rest }) => (
  <div {...rest}>
    {Children.map(children, child => cloneElement(
      child,
      { gridSize: size }
    ))}
  </div>
), p => p);
Grid.propTypes = {
  /** Defines the number of columns of the grid system */
  size: PropTypes.number,
};
Grid.defaultProps = {
  size: 12,
};
export default Grid;
