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

var _ref2 = _react2.default.createElement('path', { d: 'M1560 1052q0-173-234-239-35-10-53-16.5t-38-25-29-46.5q0-2-2-8.5t-3-12-1-7.5q0-36 24.5-59.5t60.5-23.5q54 0 71 15h-1q20 15 39 51l93-71q-39-54-49-64-33-29-67.5-39t-85.5-10q-80 0-142 57.5t-62 137.5q0 7 2 23 16 96 64.5 140t148.5 73q29 8 49 15.5t45 21.5 38.5 34.5 13.5 46.5v5q1 58-40.5 93t-100.5 35q-97 0-167-144-23-47-51.5-121.5t-48-125.5-54-110.5-74-95.5-103.5-60.5-147-24.5q-101 0-192 56t-144 148-50 192v1q4 108 50.5 199t133.5 147.5 196 56.5q186 0 279-110 20-27 31-51l-60-109q-42 80-99 116t-146 36q-115 0-191-87t-76-204q0-105 82-189t186-84q112 0 170 53.5t104 172.5q8 21 25.5 68.5t28.5 76.5 31.5 74.5 38.5 74 45.5 62.5 55.5 53.5 66 33 80 13.5q107 0 183-69.5t76-174.5zm104-636v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaLastfmSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sYXN0Zm0tc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx1eUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZ0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWxhc3RmbS1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1NjAgMTA1MnEwLTE3My0yMzQtMjM5LTM1LTEwLTUzLTE2LjV0LTM4LTI1LTI5LTQ2LjVxMC0yLTItOC41dC0zLTEyLTEtNy41cTAtMzYgMjQuNS01OS41dDYwLjUtMjMuNXE1NCAwIDcxIDE1aC0xcTIwIDE1IDM5IDUxbDkzLTcxcS0zOS01NC00OS02NC0zMy0yOS02Ny41LTM5dC04NS41LTEwcS04MCAwLTE0MiA1Ny41dC02MiAxMzcuNXEwIDcgMiAyMyAxNiA5NiA2NC41IDE0MHQxNDguNSA3M3EyOSA4IDQ5IDE1LjV0NDUgMjEuNSAzOC41IDM0LjUgMTMuNSA0Ni41djVxMSA1OC00MC41IDkzdC0xMDAuNSAzNXEtOTcgMC0xNjctMTQ0LTIzLTQ3LTUxLjUtMTIxLjV0LTQ4LTEyNS41LTU0LTExMC41LTc0LTk1LjUtMTAzLjUtNjAuNS0xNDctMjQuNXEtMTAxIDAtMTkyIDU2dC0xNDQgMTQ4LTUwIDE5MnYxcTQgMTA4IDUwLjUgMTk5dDEzMy41IDE0Ny41IDE5NiA1Ni41cTE4NiAwIDI3OS0xMTAgMjAtMjcgMzEtNTFsLTYwLTEwOXEtNDIgODAtOTkgMTE2dC0xNDYgMzZxLTExNSAwLTE5MS04N3QtNzYtMjA0cTAtMTA1IDgyLTE4OXQxODYtODRxMTEyIDAgMTcwIDUzLjV0MTA0IDE3Mi41cTggMjEgMjUuNSA2OC41dDI4LjUgNzYuNSAzMS41IDc0LjUgMzguNSA3NCA0NS41IDYyLjUgNTUuNSA1My41IDY2IDMzIDgwIDEzLjVxMTA3IDAgMTgzLTY5LjV0NzYtMTc0LjV6bTEwNC02MzZ2OTYwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTk2MHEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjBxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFMYXN0Zm1TcXVhcmUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
