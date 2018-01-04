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

var _ref2 = _react2.default.createElement('path', { d: 'M832 1000v-192q-181 16-384 117v185q205-96 384-110zm0-418v-197q-172 8-384 126v189q215-111 384-118zm832 463v-184q-235 116-384 71v-224q-20-6-39-15-5-3-33-17t-34.5-17-31.5-15-34.5-15.5-32.5-13-36-12.5-35-8.5-39.5-7.5-39.5-4-44-2q-23 0-49 3v222h19q102 0 192.5 29t197.5 82q19 9 39 15v188q42 17 91 17 120 0 293-92zm0-427v-189q-169 91-306 91-45 0-78-8v196q148 42 384-90zm-1344-362q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm1472 64v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z' });

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
icon.displayName = 'FaFlagCheckered';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1mbGFnLWNoZWNrZXJlZC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsd3lCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGlCQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1mbGFnLWNoZWNrZXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODMyIDEwMDB2LTE5MnEtMTgxIDE2LTM4NCAxMTd2MTg1cTIwNS05NiAzODQtMTEwem0wLTQxOHYtMTk3cS0xNzIgOC0zODQgMTI2djE4OXEyMTUtMTExIDM4NC0xMTh6bTgzMiA0NjN2LTE4NHEtMjM1IDExNi0zODQgNzF2LTIyNHEtMjAtNi0zOS0xNS01LTMtMzMtMTd0LTM0LjUtMTctMzEuNS0xNS0zNC41LTE1LjUtMzIuNS0xMy0zNi0xMi41LTM1LTguNS0zOS41LTcuNS0zOS41LTQtNDQtMnEtMjMgMC00OSAzdjIyMmgxOXExMDIgMCAxOTIuNSAyOXQxOTcuNSA4MnExOSA5IDM5IDE1djE4OHE0MiAxNyA5MSAxNyAxMjAgMCAyOTMtOTJ6bTAtNDI3di0xODlxLTE2OSA5MS0zMDYgOTEtNDUgMC03OC04djE5NnExNDggNDIgMzg0LTkwem0tMTM0NC0zNjJxMCAzNS0xNy41IDY0dC00Ni41IDQ2djEyNjZxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0xMjY2cS0yOS0xNy00Ni41LTQ2dC0xNy41LTY0cTAtNTMgMzcuNS05MC41dDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0xNDcyIDY0djc2M3EwIDM5LTM1IDU3LTEwIDUtMTcgOS0yMTggMTE2LTM2OSAxMTYtODggMC0xNTgtMzVsLTI4LTE0cS02NC0zMy05OS00OHQtOTEtMjktMTE0LTE0cS0xMDIgMC0yMzUuNSA0NHQtMjI4LjUgMTAycS0xNSA5LTMzIDktMTYgMC0zMi04LTMyLTE5LTMyLTU2di03NDJxMC0zNSAzMS01NSAzNS0yMSA3OC41LTQyLjV0MTE0LTUyIDE1Mi41LTQ5LjUgMTU1LTE5cTExMiAwIDIwOSAzMXQyMDkgODZxMzggMTkgODkgMTkgMTIyIDAgMzEwLTExMiAyMi0xMiAzMS0xNyAzMS0xNiA2MiAyIDMxIDIwIDMxIDU1elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFGbGFnQ2hlY2tlcmVkJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
