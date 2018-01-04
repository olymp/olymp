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

var _ref2 = _react2.default.createElement('path', { d: 'M994 515q0 27-13 94-11 50-31.5 150t-30.5 150q-2 11-4.5 12.5t-13.5 2.5q-20 2-31 2-58 0-84-49.5t-26-113.5q0-88 35-174t103-124q28-14 51-14 28 0 36.5 16.5t8.5 47.5zm486 424q0-14-39-75.5t-52-66.5q-21-8-34-8-91 0-226 77l-2-2q3-22 27.5-135t24.5-178q0-233-242-233-24 0-68 6-94 17-168.5 89.5t-111.5 166.5-37 189q0 146 80.5 225t227.5 79q25 0 25 3t-1 5q-4 34-26 117-14 52-51.5 101t-82.5 49q-42 0-42-47 0-24 10.5-47.5t25-39.5 29.5-28.5 26-20 11-8.5q0-3-7-10-24-22-58.5-36.5t-65.5-14.5q-35 0-63.5 34t-41 75-12.5 75q0 88 51.5 142t138.5 54q82 0 155-53t117.5-126 65.5-153q6-22 15.5-66.5t14.5-66.5q3-12 14-18 118-60 227-60 48 0 127 18 1 1 4 1 5 0 9.5-4.5t4.5-8.5zm184-523v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaGlide';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1nbGlkZS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsc3hCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWdsaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk05OTQgNTE1cTAgMjctMTMgOTQtMTEgNTAtMzEuNSAxNTB0LTMwLjUgMTUwcS0yIDExLTQuNSAxMi41dC0xMy41IDIuNXEtMjAgMi0zMSAyLTU4IDAtODQtNDkuNXQtMjYtMTEzLjVxMC04OCAzNS0xNzR0MTAzLTEyNHEyOC0xNCA1MS0xNCAyOCAwIDM2LjUgMTYuNXQ4LjUgNDcuNXptNDg2IDQyNHEwLTE0LTM5LTc1LjV0LTUyLTY2LjVxLTIxLTgtMzQtOC05MSAwLTIyNiA3N2wtMi0ycTMtMjIgMjcuNS0xMzV0MjQuNS0xNzhxMC0yMzMtMjQyLTIzMy0yNCAwLTY4IDYtOTQgMTctMTY4LjUgODkuNXQtMTExLjUgMTY2LjUtMzcgMTg5cTAgMTQ2IDgwLjUgMjI1dDIyNy41IDc5cTI1IDAgMjUgM3QtMSA1cS00IDM0LTI2IDExNy0xNCA1Mi01MS41IDEwMXQtODIuNSA0OXEtNDIgMC00Mi00NyAwLTI0IDEwLjUtNDcuNXQyNS0zOS41IDI5LjUtMjguNSAyNi0yMCAxMS04LjVxMC0zLTctMTAtMjQtMjItNTguNS0zNi41dC02NS41LTE0LjVxLTM1IDAtNjMuNSAzNHQtNDEgNzUtMTIuNSA3NXEwIDg4IDUxLjUgMTQydDEzOC41IDU0cTgyIDAgMTU1LTUzdDExNy41LTEyNiA2NS41LTE1M3E2LTIyIDE1LjUtNjYuNXQxNC41LTY2LjVxMy0xMiAxNC0xOCAxMTgtNjAgMjI3LTYwIDQ4IDAgMTI3IDE4IDEgMSA0IDEgNSAwIDkuNS00LjV0NC41LTguNXptMTg0LTUyM3Y5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di05NjBxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDk2MHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUdsaWRlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
