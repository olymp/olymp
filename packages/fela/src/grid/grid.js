import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const Grid = createComponent(
  ({ height }) => ({
    height,
    minWidth: '100%',
    marginX: '-0.5rem',
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0,
    },
  }),
  ({ children, size, height, ...rest }) =>
    (<div {...rest}>
      {Children.map(children, child => cloneElement(child, { gridSize: size }))}
    </div>),
  p => Object.keys(p)
);
Grid.propTypes = {
  /** Defines the number of columns of the grid system */
  size: PropTypes.number,
};
Grid.defaultProps = {
  size: 12,
};
export default Grid;
