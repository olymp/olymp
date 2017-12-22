import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const Grid = createComponent(
  ({ theme, height, marginX }) => ({
    height,
    minWidth: '100%',
    marginX: marginX || `-${theme.space2}`,
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0,
    },
  }),
  ({ children, size, height, marginX, padding, ...rest }) => (
    <div {...rest}>
      {Children.map(children, child => (child ? cloneElement(child, { gridSize: size }) : child))}
    </div>
  ),
  p => Object.keys(p),
);
Grid.propTypes = {
  /** Defines the number of columns of the grid system */
  size: PropTypes.number,
};
Grid.defaultProps = {
  size: 12,
};
Grid.displayName = 'Grid';

export default Grid;
