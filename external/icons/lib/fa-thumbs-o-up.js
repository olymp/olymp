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

var _ref2 = _react2.default.createElement('path', { d: 'M384 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm1152-576q0-51-39-89.5t-89-38.5h-352q0-58 48-159.5t48-160.5q0-98-32-145t-128-47q-26 26-38 85t-30.5 125.5-59.5 109.5q-22 23-77 91-4 5-23 30t-31.5 41-34.5 42.5-40 44-38.5 35.5-40 27-35.5 9h-32v640h32q13 0 31.5 3t33 6.5 38 11 35 11.5 35.5 12.5 29 10.5q211 73 342 73h121q192 0 192-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5q32-1 53.5-47t21.5-81zm128-1q0 89-49 163 9 33 9 69 0 77-38 144 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5h-129q-96 0-189.5-22.5t-216.5-65.5q-116-40-138-40h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h274q36-24 137-155 58-75 107-128 24-25 35.5-85.5t30.5-126.5 62-108q39-37 90-37 84 0 151 32.5t102 101.5 35 186q0 93-48 192h176q104 0 180 76t76 179z' });

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
icon.displayName = 'FaThumbsOUp';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10aHVtYnMtby11cC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsc3hCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXRodW1icy1vLXVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zODQgMTM0NHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTE1Mi01NzZxMC01MS0zOS04OS41dC04OS0zOC41aC0zNTJxMC01OCA0OC0xNTkuNXQ0OC0xNjAuNXEwLTk4LTMyLTE0NXQtMTI4LTQ3cS0yNiAyNi0zOCA4NXQtMzAuNSAxMjUuNS01OS41IDEwOS41cS0yMiAyMy03NyA5MS00IDUtMjMgMzB0LTMxLjUgNDEtMzQuNSA0Mi41LTQwIDQ0LTM4LjUgMzUuNS00MCAyNy0zNS41IDloLTMydjY0MGgzMnExMyAwIDMxLjUgM3QzMyA2LjUgMzggMTEgMzUgMTEuNSAzNS41IDEyLjUgMjkgMTAuNXEyMTEgNzMgMzQyIDczaDEyMXExOTIgMCAxOTItMTY3IDAtMjYtNS01NiAzMC0xNiA0Ny41LTUyLjV0MTcuNS03My41LTE4LTY5cTUzLTUwIDUzLTExOSAwLTI1LTEwLTU1LjV0LTI1LTQ3LjVxMzItMSA1My41LTQ3dDIxLjUtODF6bTEyOC0xcTAgODktNDkgMTYzIDkgMzMgOSA2OSAwIDc3LTM4IDE0NCAzIDIxIDMgNDMgMCAxMDEtNjAgMTc4IDEgMTM5LTg1IDIxOS41dC0yMjcgODAuNWgtMTI5cS05NiAwLTE4OS41LTIyLjV0LTIxNi41LTY1LjVxLTExNi00MC0xMzgtNDBoLTI4OHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNXYtNjQwcTAtNTMgMzcuNS05MC41dDkwLjUtMzcuNWgyNzRxMzYtMjQgMTM3LTE1NSA1OC03NSAxMDctMTI4IDI0LTI1IDM1LjUtODUuNXQzMC41LTEyNi41IDYyLTEwOHEzOS0zNyA5MC0zNyA4NCAwIDE1MSAzMi41dDEwMiAxMDEuNSAzNSAxODZxMCA5My00OCAxOTJoMTc2cTEwNCAwIDE4MCA3NnQ3NiAxNzl6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVRodW1ic09VcCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
