'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GridItem = (0, _reactFela.createComponent)(function (_ref) {
  var gridSize = _ref.gridSize,
      offsetMini = _ref.offsetMini,
      offsetSmall = _ref.offsetSmall,
      offsetMedium = _ref.offsetMedium,
      offsetLarge = _ref.offsetLarge,
      offsetHuge = _ref.offsetHuge,
      mini = _ref.mini,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      huge = _ref.huge,
      padding = _ref.padding,
      paddingMini = _ref.paddingMini,
      paddingSmall = _ref.paddingSmall,
      paddingMedium = _ref.paddingMedium,
      paddingLarge = _ref.paddingLarge,
      paddingHuge = _ref.paddingHuge,
      height = _ref.height,
      relative = _ref.relative;
  return {
    float: 'left',
    padding: padding,
    position: relative ? 'relative' : undefined,
    height: height,
    width: 100 / gridSize * (mini || gridSize) + '%',
    marginLeft: 100 / gridSize * (offsetMini || 0) + '%',
    ifMini: {
      display: (mini === 0 || mini === false) && 'none',
      padding: paddingMini
    },
    ifSmall: {
      display: (small === 0 || small === false) && 'none',
      padding: paddingSmall || paddingMini
    },
    ifSmallUp: small ? {
      width: 100 / gridSize * small + '%',
      marginLeft: 100 / gridSize * (offsetSmall || 0) + '%'
    } : {},
    ifMedium: {
      display: (medium === 0 || medium === false) && 'none',
      padding: paddingMedium || paddingSmall || paddingMini
    },
    ifMediumUp: medium ? {
      width: 100 / gridSize * medium + '%',
      marginLeft: 100 / gridSize * (offsetMedium || 0) + '%'
    } : {},
    ifLarge: {
      display: (large === 0 || large === false) && 'none',
      padding: paddingLarge || paddingMedium || paddingSmall || paddingMini
    },
    ifLargeUp: large ? {
      width: 100 / gridSize * large + '%',
      marginLeft: 100 / gridSize * (offsetLarge || 0) + '%'
    } : {},
    ifHuge: {
      display: (huge === 0 || huge === false) && 'none',
      padding: paddingHuge || paddingLarge || paddingMedium || paddingSmall || paddingMini
    },
    ifHugeUp: huge ? {
      width: 100 / gridSize * huge + '%',
      marginLeft: 100 / gridSize * (offsetHuge || 0) + '%'
    } : {}
  };
}, 'div', function (_ref2) {
  var gridSize = _ref2.gridSize,
      offsetMini = _ref2.offsetMini,
      offsetSmall = _ref2.offsetSmall,
      offsetMedium = _ref2.offsetMedium,
      offsetLarge = _ref2.offsetLarge,
      offsetHuge = _ref2.offsetHuge,
      mini = _ref2.mini,
      small = _ref2.small,
      medium = _ref2.medium,
      large = _ref2.large,
      huge = _ref2.huge,
      paddingMini = _ref2.paddingMini,
      paddingSmall = _ref2.paddingSmall,
      paddingMedium = _ref2.paddingMedium,
      paddingLarge = _ref2.paddingLarge,
      paddingHuge = _ref2.paddingHuge,
      height = _ref2.height,
      relative = _ref2.relative,
      padding = _ref2.padding,
      p = _objectWithoutProperties(_ref2, ['gridSize', 'offsetMini', 'offsetSmall', 'offsetMedium', 'offsetLarge', 'offsetHuge', 'mini', 'small', 'medium', 'large', 'huge', 'paddingMini', 'paddingSmall', 'paddingMedium', 'paddingLarge', 'paddingHuge', 'height', 'relative', 'padding']);

  return Object.keys(p);
});
GridItem.propTypes = {
  /** The size relative to the grid container */
  gridSize: _propTypes2.default.number,
  /** The column size for mini and up */
  mini: _propTypes2.default.number,
  /** The column size for small and up */
  small: _propTypes2.default.number,
  /** The column size for medium and up */
  medium: _propTypes2.default.number,
  /** The column size for large and up */
  large: _propTypes2.default.number,
  /** The column size for huge and up */
  huge: _propTypes2.default.number,
  /** The items height */
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
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
  height: undefined
};
GridItem.displayName = 'GridItem';
exports.default = GridItem;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvZ3JpZC9pdGVtLmVzNiJdLCJuYW1lcyI6WyJHcmlkSXRlbSIsImdyaWRTaXplIiwib2Zmc2V0TWluaSIsIm9mZnNldFNtYWxsIiwib2Zmc2V0TWVkaXVtIiwib2Zmc2V0TGFyZ2UiLCJvZmZzZXRIdWdlIiwibWluaSIsInNtYWxsIiwibWVkaXVtIiwibGFyZ2UiLCJodWdlIiwicGFkZGluZyIsInBhZGRpbmdNaW5pIiwicGFkZGluZ1NtYWxsIiwicGFkZGluZ01lZGl1bSIsInBhZGRpbmdMYXJnZSIsInBhZGRpbmdIdWdlIiwiaGVpZ2h0IiwicmVsYXRpdmUiLCJmbG9hdCIsInBvc2l0aW9uIiwidW5kZWZpbmVkIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiaWZNaW5pIiwiZGlzcGxheSIsImlmU21hbGwiLCJpZlNtYWxsVXAiLCJpZk1lZGl1bSIsImlmTWVkaXVtVXAiLCJpZkxhcmdlIiwiaWZMYXJnZVVwIiwiaWZIdWdlIiwiaWZIdWdlVXAiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInByb3BUeXBlcyIsIm51bWJlciIsIm9uZU9mVHlwZSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLGdDQUNmO0FBQUEsTUFDRUMsUUFERixRQUNFQSxRQURGO0FBQUEsTUFFRUMsVUFGRixRQUVFQSxVQUZGO0FBQUEsTUFHRUMsV0FIRixRQUdFQSxXQUhGO0FBQUEsTUFJRUMsWUFKRixRQUlFQSxZQUpGO0FBQUEsTUFLRUMsV0FMRixRQUtFQSxXQUxGO0FBQUEsTUFNRUMsVUFORixRQU1FQSxVQU5GO0FBQUEsTUFPRUMsSUFQRixRQU9FQSxJQVBGO0FBQUEsTUFRRUMsS0FSRixRQVFFQSxLQVJGO0FBQUEsTUFTRUMsTUFURixRQVNFQSxNQVRGO0FBQUEsTUFVRUMsS0FWRixRQVVFQSxLQVZGO0FBQUEsTUFXRUMsSUFYRixRQVdFQSxJ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QXhCO0FBY0F0QixTQUFTMkMsV0FBVCxHQUF1QixVQUF2QjtrQkFDZTNDLFEiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9ncmlkL2l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IEdyaWRJdGVtID0gY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIGdyaWRTaXplLFxuICAgIG9mZnNldE1pbmksXG4gICAgb2Zmc2V0U21hbGwsXG4gICAgb2Zmc2V0TWVkaXVtLFxuICAgIG9mZnNldExhcmdlLFxuICAgIG9mZnNldEh1Z2UsXG4gICAgbWluaSxcbiAgICBzbWFsbCxcbiAgICBtZWRpdW0sXG4gICAgbGFyZ2UsXG4gICAgaHVnZSxcbiAgICBwYWRkaW5nLFxuICAgIHBhZGRpbmdNaW5pLFxuICAgIHBhZGRpbmdTbWFsbCxcbiAgICBwYWRkaW5nTWVkaXVtLFxuICAgIHBhZGRpbmdMYXJnZSxcbiAgICBwYWRkaW5nSHVnZSxcbiAgICBoZWlnaHQsXG4gICAgcmVsYXRpdmUsXG4gIH0pID0+ICh7XG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBwYWRkaW5nLFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA/ICdyZWxhdGl2ZScgOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoOiBgJHsxMDAgLyBncmlkU2l6ZSAqIChtaW5pIHx8IGdyaWRTaXplKX0lYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHsxMDAgLyBncmlkU2l6ZSAqIChvZmZzZXRNaW5pIHx8IDApfSVgLFxuICAgIGlmTWluaToge1xuICAgICAgZGlzcGxheTogKG1pbmkgPT09IDAgfHwgbWluaSA9PT0gZmFsc2UpICYmICdub25lJyxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdNaW5pLFxuICAgIH0sXG4gICAgaWZTbWFsbDoge1xuICAgICAgZGlzcGxheTogKHNtYWxsID09PSAwIHx8IHNtYWxsID09PSBmYWxzZSkgJiYgJ25vbmUnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ1NtYWxsIHx8IHBhZGRpbmdNaW5pLFxuICAgIH0sXG4gICAgaWZTbWFsbFVwOiBzbWFsbFxuICAgICAgPyB7XG4gICAgICAgIHdpZHRoOiBgJHsxMDAgLyBncmlkU2l6ZSAqIHNtYWxsfSVgLFxuICAgICAgICBtYXJnaW5MZWZ0OiBgJHsxMDAgLyBncmlkU2l6ZSAqIChvZmZzZXRTbWFsbCB8fCAwKX0lYCxcbiAgICAgIH1cbiAgICAgIDoge30sXG4gICAgaWZNZWRpdW06IHtcbiAgICAgIGRpc3BsYXk6IChtZWRpdW0gPT09IDAgfHwgbWVkaXVtID09PSBmYWxzZSkgJiYgJ25vbmUnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ01lZGl1bSB8fCBwYWRkaW5nU21hbGwgfHwgcGFkZGluZ01pbmksXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiBtZWRpdW1cbiAgICAgID8ge1xuICAgICAgICB3aWR0aDogYCR7MTAwIC8gZ3JpZFNpemUgKiBtZWRpdW19JWAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGAkezEwMCAvIGdyaWRTaXplICogKG9mZnNldE1lZGl1bSB8fCAwKX0lYCxcbiAgICAgIH1cbiAgICAgIDoge30sXG4gICAgaWZMYXJnZToge1xuICAgICAgZGlzcGxheTogKGxhcmdlID09PSAwIHx8IGxhcmdlID09PSBmYWxzZSkgJiYgJ25vbmUnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ0xhcmdlIHx8IHBhZGRpbmdNZWRpdW0gfHwgcGFkZGluZ1NtYWxsIHx8IHBhZGRpbmdNaW5pLFxuICAgIH0sXG4gICAgaWZMYXJnZVVwOiBsYXJnZVxuICAgICAgPyB7XG4gICAgICAgIHdpZHRoOiBgJHsxMDAgLyBncmlkU2l6ZSAqIGxhcmdlfSVgLFxuICAgICAgICBtYXJnaW5MZWZ0OiBgJHsxMDAgLyBncmlkU2l6ZSAqIChvZmZzZXRMYXJnZSB8fCAwKX0lYCxcbiAgICAgIH1cbiAgICAgIDoge30sXG4gICAgaWZIdWdlOiB7XG4gICAgICBkaXNwbGF5OiAoaHVnZSA9PT0gMCB8fCBodWdlID09PSBmYWxzZSkgJiYgJ25vbmUnLFxuICAgICAgcGFkZGluZzogcGFkZGluZ0h1Z2UgfHwgcGFkZGluZ0xhcmdlIHx8IHBhZGRpbmdNZWRpdW0gfHwgcGFkZGluZ1NtYWxsIHx8IHBhZGRpbmdNaW5pLFxuICAgIH0sXG4gICAgaWZIdWdlVXA6IGh1Z2VcbiAgICAgID8ge1xuICAgICAgICB3aWR0aDogYCR7MTAwIC8gZ3JpZFNpemUgKiBodWdlfSVgLFxuICAgICAgICBtYXJnaW5MZWZ0OiBgJHsxMDAgLyBncmlkU2l6ZSAqIChvZmZzZXRIdWdlIHx8IDApfSVgLFxuICAgICAgfVxuICAgICAgOiB7fSxcbiAgfSksXG4gICdkaXYnLFxuICAoe1xuICAgIGdyaWRTaXplLFxuICAgIG9mZnNldE1pbmksXG4gICAgb2Zmc2V0U21hbGwsXG4gICAgb2Zmc2V0TWVkaXVtLFxuICAgIG9mZnNldExhcmdlLFxuICAgIG9mZnNldEh1Z2UsXG4gICAgbWluaSxcbiAgICBzbWFsbCxcbiAgICBtZWRpdW0sXG4gICAgbGFyZ2UsXG4gICAgaHVnZSxcbiAgICBwYWRkaW5nTWluaSxcbiAgICBwYWRkaW5nU21hbGwsXG4gICAgcGFkZGluZ01lZGl1bSxcbiAgICBwYWRkaW5nTGFyZ2UsXG4gICAgcGFkZGluZ0h1Z2UsXG4gICAgaGVpZ2h0LFxuICAgIHJlbGF0aXZlLFxuICAgIHBhZGRpbmcsXG4gICAgLi4ucFxuICB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5HcmlkSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBUaGUgc2l6ZSByZWxhdGl2ZSB0byB0aGUgZ3JpZCBjb250YWluZXIgKi9cbiAgZ3JpZFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgY29sdW1uIHNpemUgZm9yIG1pbmkgYW5kIHVwICovXG4gIG1pbmk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgY29sdW1uIHNpemUgZm9yIHNtYWxsIGFuZCB1cCAqL1xuICBzbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBjb2x1bW4gc2l6ZSBmb3IgbWVkaXVtIGFuZCB1cCAqL1xuICBtZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgY29sdW1uIHNpemUgZm9yIGxhcmdlIGFuZCB1cCAqL1xuICBsYXJnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBjb2x1bW4gc2l6ZSBmb3IgaHVnZSBhbmQgdXAgKi9cbiAgaHVnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBpdGVtcyBoZWlnaHQgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuR3JpZEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBncmlkU2l6ZTogMTIsXG4gIG9mZnNldE1pbmk6IDAsXG4gIG9mZnNldFNtYWxsOiAwLFxuICBvZmZzZXRNZWRpdW06IDAsXG4gIG9mZnNldExhcmdlOiAwLFxuICBvZmZzZXRIdWdlOiAwLFxuICBtaW5pOiB1bmRlZmluZWQsXG4gIHNtYWxsOiB1bmRlZmluZWQsXG4gIG1lZGl1bTogdW5kZWZpbmVkLFxuICBsYXJnZTogdW5kZWZpbmVkLFxuICBodWdlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxufTtcbkdyaWRJdGVtLmRpc3BsYXlOYW1lID0gJ0dyaWRJdGVtJztcbmV4cG9ydCBkZWZhdWx0IEdyaWRJdGVtO1xuIl19
