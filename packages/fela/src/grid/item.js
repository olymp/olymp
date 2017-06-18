import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const GridItem = createComponent(
  ({
    gridSize,
    mini,
    small,
    medium,
    large,
    huge,
    paddingMini,
    paddingSmall,
    paddingMedium,
    paddingLarge,
    paddingHuge,
  }) => ({
    float: 'left',
    width: `${100 / gridSize * (mini || gridSize)}%`,
    ifMini: {
      display: (mini === 0 || mini === false) && 'none',
      padding: paddingMini,
    },
    ifSmall: {
      display: (small === 0 || small === false) && 'none',
      padding: paddingSmall || paddingMini,
    },
    ifSmallUp: small
      ? {
        width: `${100 / gridSize * small}%`,
      }
      : {},
    ifMedium: {
      display: (medium === 0 || medium === false) && 'none',
      padding: paddingMedium || paddingSmall || paddingMini,
    },
    ifMediumUp: medium
      ? {
        width: `${100 / gridSize * medium}%`,
      }
      : {},
    ifLarge: {
      display: (large === 0 || large === false) && 'none',
      padding: paddingLarge || paddingMedium || paddingSmall || paddingMini,
    },
    ifLargeUp: large
      ? {
        width: `${100 / gridSize * large}%`,
      }
      : {},
    ifHuge: {
      display: (huge === 0 || huge === false) && 'none',
      padding:
        paddingHuge ||
          paddingLarge ||
          paddingMedium ||
          paddingSmall ||
          paddingMini,
    },
    ifHugeUp: huge
      ? {
        width: `${100 / gridSize * huge}%`,
      }
      : {},
  }),
  'div',
  ({
    gridSize,
    offset,
    mini,
    small,
    medium,
    large,
    huge,
    paddingMini,
    paddingSmall,
    paddingMedium,
    paddingLarge,
    paddingHuge,
    ...p
  }) => Object.keys(p)
);
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
