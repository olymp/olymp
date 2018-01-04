'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Grid = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      height = _ref.height,
      marginX = _ref.marginX;
  return {
    height: height,
    minWidth: '100%',
    marginX: marginX || '-' + theme.space2,
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0
    }
  };
}, function (_ref2) {
  var children = _ref2.children,
      size = _ref2.size,
      height = _ref2.height,
      marginX = _ref2.marginX,
      padding = _ref2.padding,
      rest = _objectWithoutProperties(_ref2, ['children', 'size', 'height', 'marginX', 'padding']);

  return _react2.default.createElement(
    'div',
    rest,
    _react.Children.map(children, function (child) {
      return child ? (0, _react.cloneElement)(child, { gridSize: size }) : child;
    })
  );
}, function (p) {
  return Object.keys(p);
});
Grid.propTypes = {
  /** Defines the number of columns of the grid system */
  size: _propTypes2.default.number
};
Grid.defaultProps = {
  size: 12
};
Grid.displayName = 'Grid';

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvZ3JpZC9ncmlkLmVzNiJdLCJuYW1lcyI6WyJHcmlkIiwidGhlbWUiLCJoZWlnaHQiLCJtYXJnaW5YIiwibWluV2lkdGgiLCJzcGFjZTIiLCJvbkFmdGVyIiwiY29udGVudCIsImNsZWFyIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJjaGlsZHJlbiIsInNpemUiLCJwYWRkaW5nIiwicmVzdCIsIm1hcCIsImNoaWxkIiwiZ3JpZFNpemUiLCJPYmplY3QiLCJrZXlzIiwicCIsInByb3BUeXBlcyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0NBQ1g7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxNQUFrQkMsT0FBbEIsUUFBa0JBLE9BQWxCO0FBQUEsU0FBaUM7QUFDL0JELGtCQUQrQjtBQUUvQkUsY0FBVSxNQUZxQjtBQUcvQkQsYUFBU0EsaUJBQWVGLE1BQU1JLE1BSEM7QUFJL0JDLGFBQVM7QUFDUEMsZUFBUyxJQURGO0FBRVBDLGFBQU8sTUFGQTtBQUdQQyxlQUFTLE9BSEY7QUFJUEMsa0JBQVksUUFKTDtBQUtQUixjQUFRO0FBTEQ7QUFKc0IsR0FBakM7QUFBQSxDQURXLEVBYVg7QUFBQSxNQUFHUyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSxNQUFtQlYsTUFBbkIsU0FBbUJBLE1BQW5CO0FBQUEsTUFBMkJDLE9BQTNCLFNBQTJCQSxPQUEzQjtBQUFBLE1BQW9DVSxPQUFwQyxTQUFvQ0EsT0FBcEM7QUFBQSxNQUFnREMsSUFBaEQ7O0FBQUEsU0FDRTtBQUFBO0FBQVNBLFFBQVQ7QUFDRyxvQkFBU0MsR0FBVCxDQUFhSixRQUFiLEVBQXVCO0FBQUEsYUFBVUssUUFBUSx5QkFBYUEsS0FBYixFQUFvQixFQUFFQyxVQUFVTCxJQUFaLEVBQXBCLENBQVIsR0FBa0RJLEtBQTVEO0FBQUEsS0FBdkI7QUFESCxHQURGO0FBQUEsQ0FiVyxFQWtCWDtBQUFBLFNBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FsQlcsQ0FBYjtBQW9CQXBCLEtBQUtxQixTQUFMLEdBQWlCO0FBQ2Y7QUFDQVQsUUFBTSxvQkFBVVU7QUFGRCxDQUFqQjtBQUlBdEIsS0FBS3VCLFlBQUwsR0FBb0I7QUFDbEJYLFFBQU07QUFEWSxDQUFwQjtBQUdBWixLQUFLd0IsV0FBTCxHQUFtQixNQUFuQjs7a0JBRWV4QixJIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvZ3JpZC9ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IEdyaWQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBoZWlnaHQsIG1hcmdpblggfSkgPT4gKHtcbiAgICBoZWlnaHQsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5YOiBtYXJnaW5YIHx8IGAtJHt0aGVtZS5zcGFjZTJ9YCxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjaGlsZHJlbiwgc2l6ZSwgaGVpZ2h0LCBtYXJnaW5YLCBwYWRkaW5nLCAuLi5yZXN0IH0pID0+IChcbiAgICA8ZGl2IHsuLi5yZXN0fT5cbiAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IChjaGlsZCA/IGNsb25lRWxlbWVudChjaGlsZCwgeyBncmlkU2l6ZTogc2l6ZSB9KSA6IGNoaWxkKSl9XG4gICAgPC9kaXY+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBvZiB0aGUgZ3JpZCBzeXN0ZW0gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5HcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMTIsXG59O1xuR3JpZC5kaXNwbGF5TmFtZSA9ICdHcmlkJztcblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ==
