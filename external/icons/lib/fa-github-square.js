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

var _ref2 = _react2.default.createElement('path', { d: 'M647 1200q4-6-3-13-9-7-14-2-4 6 3 13 9 7 14 2zm-28-41q-5-7-12-4-6 4 0 12 7 8 12 5 6-4 0-13zm-41-40q2-4-5-8-7-2-8 2-3 5 4 8 8 2 9-2zm21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zm86 75q2-7-9-11-9-3-13 4-2 7 9 11 9 3 13-4zm42 3q0-8-12-8-10 0-10 8t11 8 11-8zm39-7q-2-7-13-5t-9 9q2 8 12 6t10-10zm642-317q0-212-150-362t-362-150-362 150-150 362q0 167 98 300.5t252 185.5q18 3 26.5-5t8.5-20q0-52-1-95-6 1-15.5 2.5t-35.5 2-48-4-43.5-20-29.5-41.5q-23-59-57-74-2-1-4.5-3.5l-8-8-7-9.5 4-7.5 19.5-3.5q6 0 15 2t30 15.5 33 35.5q16 28 37.5 42t43.5 14 38-3.5 30-9.5q7-47 33-69-49-6-86-18.5t-73-39-55.5-76-19.5-119.5q0-79 53-137-24-62 5-136 19-6 54.5 7.5t60.5 29.5l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26 57-9q29 74 5 136 53 58 53 137 0 57-14 100.5t-35.5 70-53.5 44.5-62.5 26-68.5 12q35 31 35 95 0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zm256-480v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaGithubSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXRodWItc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxzK0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZ0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWdpdGh1Yi1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTY0NyAxMjAwcTQtNi0zLTEzLTktNy0xNC0yLTQgNiAzIDEzIDkgNyAxNCAyem0tMjgtNDFxLTUtNy0xMi00LTYgNCAwIDEyIDcgOCAxMiA1IDYtNCAwLTEzem0tNDEtNDBxMi00LTUtOC03LTItOCAyLTMgNSA0IDggOCAyIDktMnptMjEgMjNxMi0xIDEuNS00LjV0LTMuNS01LjVxLTYtNy0xMC0zdDEgMTFxNiA2IDExIDJ6bTg2IDc1cTItNy05LTExLTktMy0xMyA0LTIgNyA5IDExIDkgMyAxMy00em00MiAzcTAtOC0xMi04LTEwIDAtMTAgOHQxMSA4IDExLTh6bTM5LTdxLTItNy0xMy01dC05IDlxMiA4IDEyIDZ0MTAtMTB6bTY0Mi0zMTdxMC0yMTItMTUwLTM2MnQtMzYyLTE1MC0zNjIgMTUwLTE1MCAzNjJxMCAxNjcgOTggMzAwLjV0MjUyIDE4NS41cTE4IDMgMjYuNS01dDguNS0yMHEwLTUyLTEtOTUtNiAxLTE1LjUgMi41dC0zNS41IDItNDgtNC00My41LTIwLTI5LjUtNDEuNXEtMjMtNTktNTctNzQtMi0xLTQuNS0zLjVsLTgtOC03LTkuNSA0LTcuNSAxOS41LTMuNXE2IDAgMTUgMnQzMCAxNS41IDMzIDM1LjVxMTYgMjggMzcuNSA0MnQ0My41IDE0IDM4LTMuNSAzMC05LjVxNy00NyAzMy02OS00OS02LTg2LTE4LjV0LTczLTM5LTU1LjUtNzYtMTkuNS0xMTkuNXEwLTc5IDUzLTEzNy0yNC02MiA1LTEzNiAxOS02IDU0LjUgNy41dDYwLjUgMjkuNWwyNiAxNnE1OC0xNyAxMjgtMTd0MTI4IDE3cTExLTcgMjguNS0xOHQ1NS41LTI2IDU3LTlxMjkgNzQgNSAxMzYgNTMgNTggNTMgMTM3IDAgNTctMTQgMTAwLjV0LTM1LjUgNzAtNTMuNSA0NC41LTYyLjUgMjYtNjguNSAxMnEzNSAzMSAzNSA5NSAwIDQwLS41IDg5dC0uNSA1MXEwIDEyIDguNSAyMHQyNi41IDVxMTU0LTUyIDI1Mi0xODUuNXQ5OC0zMDAuNXptMjU2LTQ4MHY5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di05NjBxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDk2MHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUdpdGh1YlNxdWFyZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
