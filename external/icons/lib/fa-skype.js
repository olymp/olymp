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

var _ref2 = _react2.default.createElement('path', { d: 'M1301 1063q0-50-19.5-91.5t-48.5-68.5-73-49-82.5-34-87.5-23l-104-24q-30-7-44-10.5t-35-11.5-30-16-16.5-21-7.5-30q0-77 144-77 43 0 77 12t54 28.5 38 33.5 40 29 48 12q47 0 75.5-32t28.5-77q0-55-56-99.5t-142-67.5-182-23q-68 0-132 15.5t-119.5 47-89 87-33.5 128.5q0 61 19 106.5t56 75.5 80 48.5 103 32.5l146 36q90 22 112 36 32 20 32 60 0 39-40 64.5t-105 25.5q-51 0-91.5-16t-65-38.5-45.5-45-46-38.5-54-16q-50 0-75.5 30t-25.5 75q0 92 122 157.5t291 65.5q73 0 140-18.5t122.5-53.5 88.5-93.5 33-131.5zm363 217q0 159-112.5 271.5t-271.5 112.5q-130 0-234-80-77 16-150 16-143 0-273.5-55.5t-225-150-150-225-55.5-273.5q0-73 16-150-80-104-80-234 0-159 112.5-271.5t271.5-112.5q130 0 234 80 77-16 150-16 143 0 273.5 55.5t225 150 150 225 55.5 273.5q0 73-16 150 80 104 80 234z' });

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
icon.displayName = 'FaSkype';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1za3lwZS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsK3VCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNreXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMzAxIDEwNjNxMC01MC0xOS41LTkxLjV0LTQ4LjUtNjguNS03My00OS04Mi41LTM0LTg3LjUtMjNsLTEwNC0yNHEtMzAtNy00NC0xMC41dC0zNS0xMS41LTMwLTE2LTE2LjUtMjEtNy41LTMwcTAtNzcgMTQ0LTc3IDQzIDAgNzcgMTJ0NTQgMjguNSAzOCAzMy41IDQwIDI5IDQ4IDEycTQ3IDAgNzUuNS0zMnQyOC41LTc3cTAtNTUtNTYtOTkuNXQtMTQyLTY3LjUtMTgyLTIzcS02OCAwLTEzMiAxNS41dC0xMTkuNSA0Ny04OSA4Ny0zMy41IDEyOC41cTAgNjEgMTkgMTA2LjV0NTYgNzUuNSA4MCA0OC41IDEwMyAzMi41bDE0NiAzNnE5MCAyMiAxMTIgMzYgMzIgMjAgMzIgNjAgMCAzOS00MCA2NC41dC0xMDUgMjUuNXEtNTEgMC05MS41LTE2dC02NS0zOC41LTQ1LjUtNDUtNDYtMzguNS01NC0xNnEtNTAgMC03NS41IDMwdC0yNS41IDc1cTAgOTIgMTIyIDE1Ny41dDI5MSA2NS41cTczIDAgMTQwLTE4LjV0MTIyLjUtNTMuNSA4OC41LTkzLjUgMzMtMTMxLjV6bTM2MyAyMTdxMCAxNTktMTEyLjUgMjcxLjV0LTI3MS41IDExMi41cS0xMzAgMC0yMzQtODAtNzcgMTYtMTUwIDE2LTE0MyAwLTI3My41LTU1LjV0LTIyNS0xNTAtMTUwLTIyNS01NS41LTI3My41cTAtNzMgMTYtMTUwLTgwLTEwNC04MC0yMzQgMC0xNTkgMTEyLjUtMjcxLjV0MjcxLjUtMTEyLjVxMTMwIDAgMjM0IDgwIDc3LTE2IDE1MC0xNiAxNDMgMCAyNzMuNSA1NS41dDIyNSAxNTAgMTUwIDIyNSA1NS41IDI3My41cTAgNzMtMTYgMTUwIDgwIDEwNCA4MCAyMzR6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNreXBlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
