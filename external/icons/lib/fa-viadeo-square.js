'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref2 = _react2.default.createElement('path', { d: 'M1178 1041q0-78-28-147-41 25-85 34 22 50 22 114 0 117-77 198.5t-193 81.5-193.5-81.5-77.5-198.5q0-115 78-199.5t193-84.5q53 0 98 19 4-43 27-87-60-21-125-21-154 0-257.5 108.5t-103.5 263.5 103.5 261 257.5 106 257.5-106.5 103.5-260.5zm-178-355q2 24 2 71 0 63-5 123t-20.5 132.5-40.5 130-68.5 106-100.5 70.5q21 3 42 3h10q219-139 219-411 0-116-38-225zm0 0q-4-80-44-171.5t-98-130.5q92 156 142 302zm335-105q0-102-51-174-41 86-124 109-69 19-109 53.5t-40 99.5q0 40 24 77 74-17 140.5-67t95.5-115q-4 52-74.5 111.5t-138.5 97.5q52 52 110 52 51 0 90-37t60-90q17-42 17-117zm329-165v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 1792 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaViadeoSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12aWFkZW8tc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwyckJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZ0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXZpYWRlby1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTExNzggMTA0MXEwLTc4LTI4LTE0Ny00MSAyNS04NSAzNCAyMiA1MCAyMiAxMTQgMCAxMTctNzcgMTk4LjV0LTE5MyA4MS41LTE5My41LTgxLjUtNzcuNS0xOTguNXEwLTExNSA3OC0xOTkuNXQxOTMtODQuNXE1MyAwIDk4IDE5IDQtNDMgMjctODctNjAtMjEtMTI1LTIxLTE1NCAwLTI1Ny41IDEwOC41dC0xMDMuNSAyNjMuNSAxMDMuNSAyNjEgMjU3LjUgMTA2IDI1Ny41LTEwNi41IDEwMy41LTI2MC41em0tMTc4LTM1NXEyIDI0IDIgNzEgMCA2My01IDEyM3QtMjAuNSAxMzIuNS00MC41IDEzMC02OC41IDEwNi0xMDAuNSA3MC41cTIxIDMgNDIgM2gxMHEyMTktMTM5IDIxOS00MTEgMC0xMTYtMzgtMjI1em0wIDBxLTQtODAtNDQtMTcxLjV0LTk4LTEzMC41cTkyIDE1NiAxNDIgMzAyem0zMzUtMTA1cTAtMTAyLTUxLTE3NC00MSA4Ni0xMjQgMTA5LTY5IDE5LTEwOSA1My41dC00MCA5OS41cTAgNDAgMjQgNzcgNzQtMTcgMTQwLjUtNjd0OTUuNS0xMTVxLTQgNTItNzQuNSAxMTEuNXQtMTM4LjUgOTcuNXE1MiA1MiAxMTAgNTIgNTEgMCA5MC0zN3Q2MC05MHExNy00MiAxNy0xMTd6bTMyOS0xNjV2OTYwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTk2MHEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjBxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFWaWFkZW9TcXVhcmUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
