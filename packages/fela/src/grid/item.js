import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const GridItem = createComponent(({ gridSize, mini, small, medium, large, huge }) => ({
  float: 'left',
  width: `${100 / gridSize * (mini || gridSize)}%`,
  // marginLeft: `${100 / gridSize * offset}%`,
  ifMini: mini === 0 || mini === false ? { display: 'none' } : {},
  ifSmall: small === 0 || small === false ? { display: 'none' } : {},
  ifSmallUp: small ? {
    width: `${100 / gridSize * small}%`,
  } : {},
  ifMedium: medium === 0 || medium === false ? { display: 'none' } : {},
  ifMediumUp: medium ? {
    width: `${100 / gridSize * medium}%`,
  } : {},
  ifLarge: large === 0 || large === false ? { display: 'none' } : {},
  ifLargeUp: large ? {
    width: `${100 / gridSize * large}%`,
  } : {},
  ifHuge: huge === 0 || huge === false ? { display: 'none' } : {},
  ifHugeUp: huge ? {
    width: `${100 / gridSize * huge}%`,
  } : {},
}), 'div', ({ gridSize, offset, mini, small, medium, large, huge, ...p }) => Object.keys(p));
GridItem.propTypes = {
  /** The size relative to the grid container */
  gridSize: PropTypes.number,
  /** The column size for mini and up */
  mini: PropTypes.number,
  /** The column size for small and up */
  small: PropTypes.number,
  /** The column size for medium and up */
  medium: PropTypes.number,
  /** The column size for large and up */
  large: PropTypes.number,
  /** The column size for huge and up */
  huge: PropTypes.number,
};
GridItem.defaultProps = {
  gridSize: 12,
  mini: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
  huge: undefined,
};
export default GridItem;
