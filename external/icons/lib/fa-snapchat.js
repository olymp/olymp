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

var _ref2 = _react2.default.createElement('path', { d: 'M1407 1148q0-22-22-27-67-15-118-59t-80-108q-7-19-7-25 0-15 19.5-26t43-17 43-20.5 19.5-36.5q0-19-18.5-31.5t-38.5-12.5q-12 0-32 8t-31 8q-4 0-12-2 5-95 5-114 0-79-17-114-36-78-103-121.5t-152-43.5q-199 0-275 165-17 35-17 114 0 19 5 114-4 2-14 2-12 0-32-7.5t-30-7.5q-21 0-38.5 12t-17.5 32q0 21 19.5 35.5t43 20.5 43 17 19.5 26q0 6-7 25-64 138-198 167-22 5-22 27 0 46 137 68 2 5 6 26t11.5 30.5 23.5 9.5q12 0 37.5-4.5t39.5-4.5q35 0 67 15t54 32.5 57.5 32.5 76.5 15q43 0 79-15t57.5-32.5 53.5-32.5 67-15q14 0 39.5 4t38.5 4q16 0 23-10t11-30 6-25q137-22 137-68zm257-252q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z' });

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
icon.displayName = 'FaSnapchat';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zbmFwY2hhdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsc3JCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFlBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNuYXBjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNDA3IDExNDhxMC0yMi0yMi0yNy02Ny0xNS0xMTgtNTl0LTgwLTEwOHEtNy0xOS03LTI1IDAtMTUgMTkuNS0yNnQ0My0xNyA0My0yMC41IDE5LjUtMzYuNXEwLTE5LTE4LjUtMzEuNXQtMzguNS0xMi41cS0xMiAwLTMyIDh0LTMxIDhxLTQgMC0xMi0yIDUtOTUgNS0xMTQgMC03OS0xNy0xMTQtMzYtNzgtMTAzLTEyMS41dC0xNTItNDMuNXEtMTk5IDAtMjc1IDE2NS0xNyAzNS0xNyAxMTQgMCAxOSA1IDExNC00IDItMTQgMi0xMiAwLTMyLTcuNXQtMzAtNy41cS0yMSAwLTM4LjUgMTJ0LTE3LjUgMzJxMCAyMSAxOS41IDM1LjV0NDMgMjAuNSA0MyAxNyAxOS41IDI2cTAgNi03IDI1LTY0IDEzOC0xOTggMTY3LTIyIDUtMjIgMjcgMCA0NiAxMzcgNjggMiA1IDYgMjZ0MTEuNSAzMC41IDIzLjUgOS41cTEyIDAgMzcuNS00LjV0MzkuNS00LjVxMzUgMCA2NyAxNXQ1NCAzMi41IDU3LjUgMzIuNSA3Ni41IDE1cTQzIDAgNzktMTV0NTcuNS0zMi41IDUzLjUtMzIuNSA2Ny0xNXExNCAwIDM5LjUgNHQzOC41IDRxMTYgMCAyMy0xMHQxMS0zMCA2LTI1cTEzNy0yMiAxMzctNjh6bTI1Ny0yNTJxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNuYXBjaGF0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
