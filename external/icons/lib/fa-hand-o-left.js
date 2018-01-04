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

var _ref2 = _react2.default.createElement('path', { d: 'M1376 1408h32v-640h-32q-35 0-67.5-12t-62.5-37-50-46-49-54q-8-9-12-14-72-81-112-145-14-22-38-68-1-3-10.5-22.5t-18.5-36-20-35.5-21.5-30.5-18.5-11.5q-71 0-115.5 30.5t-44.5 97.5q0 43 15 84.5t33 68 33 55 15 48.5h-576q-50 0-89 38.5t-39 89.5q0 52 38 90t90 38h331q-15 17-25 47.5t-10 55.5q0 69 53 119-18 32-18 69t17.5 73.5 47.5 52.5q-4 24-4 56 0 85 48.5 126t135.5 41q84 0 183-32t194-64 167-32zm288-64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-576v640q0 53-37.5 90.5t-90.5 37.5h-288q-59 0-223 59-190 69-317 69-142 0-230-77.5t-87-217.5l1-5q-61-76-61-178 0-22 3-43-33-57-37-119h-169q-105 0-180.5-76t-75.5-181q0-103 76-179t180-76h374q-22-60-22-128 0-122 81.5-189t206.5-67q38 0 69.5 17.5t55 49.5 40.5 63 37 72 33 62q35 55 100 129 2 3 14 17t19 21.5 20.5 21.5 24 22.5 22.5 18 23.5 14 21.5 4.5h288q53 0 90.5 37.5t37.5 90.5z' });

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
icon.displayName = 'FaHandOLeft';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLW8tbGVmdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUseXpCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWhhbmQtby1sZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMzc2IDE0MDhoMzJ2LTY0MGgtMzJxLTM1IDAtNjcuNS0xMnQtNjIuNS0zNy01MC00Ni00OS01NHEtOC05LTEyLTE0LTcyLTgxLTExMi0xNDUtMTQtMjItMzgtNjgtMS0zLTEwLjUtMjIuNXQtMTguNS0zNi0yMC0zNS41LTIxLjUtMzAuNS0xOC41LTExLjVxLTcxIDAtMTE1LjUgMzAuNXQtNDQuNSA5Ny41cTAgNDMgMTUgODQuNXQzMyA2OCAzMyA1NSAxNSA0OC41aC01NzZxLTUwIDAtODkgMzguNXQtMzkgODkuNXEwIDUyIDM4IDkwdDkwIDM4aDMzMXEtMTUgMTctMjUgNDcuNXQtMTAgNTUuNXEwIDY5IDUzIDExOS0xOCAzMi0xOCA2OXQxNy41IDczLjUgNDcuNSA1Mi41cS00IDI0LTQgNTYgMCA4NSA0OC41IDEyNnQxMzUuNSA0MXE4NCAwIDE4My0zMnQxOTQtNjQgMTY3LTMyem0yODgtNjRxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTEyOC01NzZ2NjQwcTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjVoLTI4OHEtNTkgMC0yMjMgNTktMTkwIDY5LTMxNyA2OS0xNDIgMC0yMzAtNzcuNXQtODctMjE3LjVsMS01cS02MS03Ni02MS0xNzggMC0yMiAzLTQzLTMzLTU3LTM3LTExOWgtMTY5cS0xMDUgMC0xODAuNS03NnQtNzUuNS0xODFxMC0xMDMgNzYtMTc5dDE4MC03NmgzNzRxLTIyLTYwLTIyLTEyOCAwLTEyMiA4MS41LTE4OXQyMDYuNS02N3EzOCAwIDY5LjUgMTcuNXQ1NSA0OS41IDQwLjUgNjMgMzcgNzIgMzMgNjJxMzUgNTUgMTAwIDEyOSAyIDMgMTQgMTd0MTkgMjEuNSAyMC41IDIxLjUgMjQgMjIuNSAyMi41IDE4IDIzLjUgMTQgMjEuNSA0LjVoMjg4cTUzIDAgOTAuNSAzNy41dDM3LjUgOTAuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZE9MZWZ0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
