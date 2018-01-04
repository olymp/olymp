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

var _ref2 = _react2.default.createElement('path', { d: 'M270 806q-8-19-8-52 0-20 11-49t24-45q-1-22 7.5-53t22.5-43q0-139 92.5-288.5t217.5-209.5q139-66 324-66 133 0 266 55 49 21 90 48t71 56 55 68 42 74 32.5 84.5 25.5 89.5 22 98l1 5q55 83 55 150 0 14-9 40t-9 38q0 1 1.5 3.5t3.5 5 2 3.5q77 114 120.5 214.5t43.5 208.5q0 43-19.5 100t-55.5 57q-9 0-19.5-7.5t-19-17.5-19-26-16-26.5-13.5-26-9-17.5q-1-1-3-1l-5 4q-59 154-132 223 20 20 61.5 38.5t69 41.5 35.5 65q-2 4-4 16t-7 18q-64 97-302 97-53 0-110.5-9t-98-20-104.5-30q-15-5-23-7-14-4-46-4.5t-40-1.5q-41 45-127.5 65t-168.5 20q-35 0-69-1.5t-93-9-101-20.5-74.5-40-32.5-64q0-40 10-59.5t41-48.5q11-2 40.5-13t49.5-12q4 0 14-2 2-2 2-4l-2-3q-48-11-108-105.5t-73-156.5l-5-3q-4 0-12 20-18 41-54.5 74.5t-77.5 37.5h-1q-4 0-6-4.5t-5-5.5q-23-54-23-100 0-275 252-466z' });

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
icon.displayName = 'FaQq';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1xcS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsbXVCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE1BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXFxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNzAgODA2cS04LTE5LTgtNTIgMC0yMCAxMS00OXQyNC00NXEtMS0yMiA3LjUtNTN0MjIuNS00M3EwLTEzOSA5Mi41LTI4OC41dDIxNy41LTIwOS41cTEzOS02NiAzMjQtNjYgMTMzIDAgMjY2IDU1IDQ5IDIxIDkwIDQ4dDcxIDU2IDU1IDY4IDQyIDc0IDMyLjUgODQuNSAyNS41IDg5LjUgMjIgOThsMSA1cTU1IDgzIDU1IDE1MCAwIDE0LTkgNDB0LTkgMzhxMCAxIDEuNSAzLjV0My41IDUgMiAzLjVxNzcgMTE0IDEyMC41IDIxNC41dDQzLjUgMjA4LjVxMCA0My0xOS41IDEwMHQtNTUuNSA1N3EtOSAwLTE5LjUtNy41dC0xOS0xNy41LTE5LTI2LTE2LTI2LjUtMTMuNS0yNi05LTE3LjVxLTEtMS0zLTFsLTUgNHEtNTkgMTU0LTEzMiAyMjMgMjAgMjAgNjEuNSAzOC41dDY5IDQxLjUgMzUuNSA2NXEtMiA0LTQgMTZ0LTcgMThxLTY0IDk3LTMwMiA5Ny01MyAwLTExMC41LTl0LTk4LTIwLTEwNC41LTMwcS0xNS01LTIzLTctMTQtNC00Ni00LjV0LTQwLTEuNXEtNDEgNDUtMTI3LjUgNjV0LTE2OC41IDIwcS0zNSAwLTY5LTEuNXQtOTMtOS0xMDEtMjAuNS03NC41LTQwLTMyLjUtNjRxMC00MCAxMC01OS41dDQxLTQ4LjVxMTEtMiA0MC41LTEzdDQ5LjUtMTJxNCAwIDE0LTIgMi0yIDItNGwtMi0zcS00OC0xMS0xMDgtMTA1LjV0LTczLTE1Ni41bC01LTNxLTQgMC0xMiAyMC0xOCA0MS01NC41IDc0LjV0LTc3LjUgMzcuNWgtMXEtNCAwLTYtNC41dC01LTUuNXEtMjMtNTQtMjMtMTAwIDAtMjc1IDI1Mi00NjZ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVFxJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
