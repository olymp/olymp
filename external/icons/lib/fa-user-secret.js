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

var _ref2 = _react2.default.createElement('path', { d: 'M704 1536l96-448-96-128-128-64zm256 0l128-640-128 64-96 128zm160-1010q-2-4-4-6-10-8-96-8-70 0-167 19-7 2-21 2t-21-2q-97-19-167-19-86 0-96 8-2 2-4 6 2 18 4 27 2 3 7.5 6.5t7.5 10.5q2 4 7.5 20.5t7 20.5 7.5 17 8.5 17 9 14 12 13.5 14 9.5 17.5 8 20.5 4 24.5 2q36 0 59-12.5t32.5-30 14.5-34.5 11.5-29.5 17.5-12.5h12q11 0 17.5 12.5t11.5 29.5 14.5 34.5 32.5 30 59 12.5q13 0 24.5-2t20.5-4 17.5-8 14-9.5 12-13.5 9-14 8.5-17 7.5-17 7-20.5 7.5-20.5q2-7 7.5-10.5t7.5-6.5q2-9 4-27zm416 879q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-61 4.5-118t19-125.5 37.5-123.5 63.5-103.5 93.5-74.5l-90-220h214q-22-64-22-128 0-12 2-32-194-40-194-96 0-57 210-99 17-62 51.5-134t70.5-114q32-37 76-37 30 0 84 31t84 31 84-31 84-31q44 0 76 37 36 42 70.5 114t51.5 134q210 42 210 99 0 56-194 96 7 81-20 160h214l-82 225q63 33 107.5 96.5t65.5 143.5 29 151.5 8 148.5z' });

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
icon.displayName = 'FaUserSecret';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11c2VyLXNlY3JldC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsbTBCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXVzZXItc2VjcmV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03MDQgMTUzNmw5Ni00NDgtOTYtMTI4LTEyOC02NHptMjU2IDBsMTI4LTY0MC0xMjggNjQtOTYgMTI4em0xNjAtMTAxMHEtMi00LTQtNi0xMC04LTk2LTgtNzAgMC0xNjcgMTktNyAyLTIxIDJ0LTIxLTJxLTk3LTE5LTE2Ny0xOS04NiAwLTk2IDgtMiAyLTQgNiAyIDE4IDQgMjcgMiAzIDcuNSA2LjV0Ny41IDEwLjVxMiA0IDcuNSAyMC41dDcgMjAuNSA3LjUgMTcgOC41IDE3IDkgMTQgMTIgMTMuNSAxNCA5LjUgMTcuNSA4IDIwLjUgNCAyNC41IDJxMzYgMCA1OS0xMi41dDMyLjUtMzAgMTQuNS0zNC41IDExLjUtMjkuNSAxNy41LTEyLjVoMTJxMTEgMCAxNy41IDEyLjV0MTEuNSAyOS41IDE0LjUgMzQuNSAzMi41IDMwIDU5IDEyLjVxMTMgMCAyNC41LTJ0MjAuNS00IDE3LjUtOCAxNC05LjUgMTItMTMuNSA5LTE0IDguNS0xNyA3LjUtMTcgNy0yMC41IDcuNS0yMC41cTItNyA3LjUtMTAuNXQ3LjUtNi41cTItOSA0LTI3em00MTYgODc5cTAgMTIxLTczIDE5MHQtMTk0IDY5aC04NzRxLTEyMSAwLTE5NC02OXQtNzMtMTkwcTAtNjEgNC41LTExOHQxOS0xMjUuNSAzNy41LTEyMy41IDYzLjUtMTAzLjUgOTMuNS03NC41bC05MC0yMjBoMjE0cS0yMi02NC0yMi0xMjggMC0xMiAyLTMyLTE5NC00MC0xOTQtOTYgMC01NyAyMTAtOTkgMTctNjIgNTEuNS0xMzR0NzAuNS0xMTRxMzItMzcgNzYtMzcgMzAgMCA4NCAzMXQ4NCAzMSA4NC0zMSA4NC0zMXE0NCAwIDc2IDM3IDM2IDQyIDcwLjUgMTE0dDUxLjUgMTM0cTIxMCA0MiAyMTAgOTkgMCA1Ni0xOTQgOTYgNyA4MS0yMCAxNjBoMjE0bC04MiAyMjVxNjMgMzMgMTA3LjUgOTYuNXQ2NS41IDE0My41IDI5IDE1MS41IDggMTQ4LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVVzZXJTZWNyZXQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
