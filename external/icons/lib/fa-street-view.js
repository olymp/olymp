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

var _ref2 = _react2.default.createElement('path', { d: 'M1536 1536q0 63-61.5 113.5t-164 81-225 46-253.5 15.5-253.5-15.5-225-46-164-81-61.5-113.5q0-49 33-88.5t91-66.5 118-44.5 131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5-48.5 23.5-27.5 19.5-8.5 12q3 11 27 26.5t73 33 114 32.5 160.5 25 201.5 10 201.5-10 160.5-25 114-33 73-33.5 27-27.5q-1-4-8.5-11t-27.5-19-48.5-23.5-76.5-25-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5 91 66.5 33 88.5zm-384-896v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45v-384q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5zm-96-384q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z' });

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
icon.displayName = 'FaStreetView';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zdHJlZXQtdmlldy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsOHNCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXN0cmVldC12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNTM2IDE1MzZxMCA2My02MS41IDExMy41dC0xNjQgODEtMjI1IDQ2LTI1My41IDE1LjUtMjUzLjUtMTUuNS0yMjUtNDYtMTY0LTgxLTYxLjUtMTEzLjVxMC00OSAzMy04OC41dDkxLTY2LjUgMTE4LTQ0LjUgMTMxLTI5LjVxMjYtNSA0OCAxMC41dDI2IDQxLjVxNSAyNi0xMC41IDQ4dC00MS41IDI2cS01OCAxMC0xMDYgMjMuNXQtNzYuNSAyNS41LTQ4LjUgMjMuNS0yNy41IDE5LjUtOC41IDEycTMgMTEgMjcgMjYuNXQ3MyAzMyAxMTQgMzIuNSAxNjAuNSAyNSAyMDEuNSAxMCAyMDEuNS0xMCAxNjAuNS0yNSAxMTQtMzMgNzMtMzMuNSAyNy0yNy41cS0xLTQtOC41LTExdC0yNy41LTE5LTQ4LjUtMjMuNS03Ni41LTI1LTEwNi0yMy41cS0yNi00LTQxLjUtMjZ0LTEwLjUtNDhxNC0yNiAyNi00MS41dDQ4LTEwLjVxNzEgMTIgMTMxIDI5LjV0MTE4IDQ0LjUgOTEgNjYuNSAzMyA4OC41em0tMzg0LTg5NnYzODRxMCAyNi0xOSA0NXQtNDUgMTloLTY0djM4NHEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0aC02NHEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjVoMzg0cTUzIDAgOTAuNSAzNy41dDM3LjUgOTAuNXptLTk2LTM4NHEwIDkzLTY1LjUgMTU4LjV0LTE1OC41IDY1LjUtMTU4LjUtNjUuNS02NS41LTE1OC41IDY1LjUtMTU4LjUgMTU4LjUtNjUuNSAxNTguNSA2NS41IDY1LjUgMTU4LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVN0cmVldFZpZXcnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
