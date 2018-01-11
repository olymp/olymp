import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const GridItem = createComponent(
  ({
    gridSize,
    offsetMini,
    offsetSmall,
    offsetMedium,
    offsetLarge,
    offsetHuge,
    mini,
    small,
    medium,
    large,
    huge,
    padding,
    paddingMini,
    paddingSmall,
    paddingMedium,
    paddingLarge,
    paddingHuge,
    height,
    relative,
  }) => ({
    float: 'left',
    padding,
    position: relative ? 'relative' : undefined,
    height,
    width: `${100 / gridSize * (mini || gridSize)}%`,
    marginLeft: `${100 / gridSize * (offsetMini || 0)}%`,
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
        marginLeft: `${100 / gridSize * (offsetSmall || 0)}%`,
      }
      : {},
    ifMedium: {
      display: (medium === 0 || medium === false) && 'none',
      padding: paddingMedium || paddingSmall || paddingMini,
    },
    ifMediumUp: medium
      ? {
        width: `${100 / gridSize * medium}%`,
        marginLeft: `${100 / gridSize * (offsetMedium || 0)}%`,
      }
      : {},
    ifLarge: {
      display: (large === 0 || large === false) && 'none',
      padding: paddingLarge || paddingMedium || paddingSmall || paddingMini,
    },
    ifLargeUp: large
      ? {
        width: `${100 / gridSize * large}%`,
        marginLeft: `${100 / gridSize * (offsetLarge || 0)}%`,
      }
      : {},
    ifHuge: {
      display: (huge === 0 || huge === false) && 'none',
      padding: paddingHuge || paddingLarge || paddingMedium || paddingSmall || paddingMini,
    },
    ifHugeUp: huge
      ? {
        width: `${100 / gridSize * huge}%`,
        marginLeft: `${100 / gridSize * (offsetHuge || 0)}%`,
      }
      : {},
  }),
  'div',
  ({
    gridSize,
    offsetMini,
    offsetSmall,
    offsetMedium,
    offsetLarge,
    offsetHuge,
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
    height,
    relative,
    padding,
    ...p
  }) => Object.keys(p),
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
  /** The items height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
GridItem.defaultProps = {
  gridSize: 12,
  offsetMini: 0,
  offsetSmall: 0,
  offsetMedium: 0,
  offsetLarge: 0,
  offsetHuge: 0,
  mini: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
  huge: undefined,
  height: undefined,
};
GridItem.displayName = 'GridItem';
export default GridItem;
