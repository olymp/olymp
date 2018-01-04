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

var _ref2 = _react2.default.createElement('path', { d: 'M1600 416q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-31 182-166 312t-318 156q-210 29-384.5-80t-241.5-300q-117-6-221-57.5t-177.5-133-113.5-192.5-32-230q9-135 78-252t182-191.5 248-89.5q118-14 227.5 19t198.5 103l255-254h-134q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q59 74 93 169 182 9 328 124l255-254h-134q-14 0-23-9t-9-23v-64zm-512 416q0-20-4-58-162 25-271 150t-109 292q0 20 4 58 162-25 271-150t109-292zm-896 0q0 168 111 294t276 149q-3-29-3-59 0-210 135-369.5t338-196.5q-53-120-163.5-193t-245.5-73q-185 0-316.5 131.5t-131.5 316.5zm960 832q185 0 316.5-131.5t131.5-316.5q0-168-111-294t-276-149q3 28 3 59 0 210-135 369.5t-338 196.5q53 120 163.5 193t245.5 73z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaMarsDouble';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1tYXJzLWRvdWJsZS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsK3hCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLW1hcnMtZG91YmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNjAwIDQxNnEwLTE0IDktMjN0MjMtOWgyODhxMjYgMCA0NSAxOXQxOSA0NXYyODhxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0xMzRsLTI1NCAyNTVxNzYgOTUgMTA3LjUgMjE0dDkuNSAyNDdxLTMxIDE4Mi0xNjYgMzEydC0zMTggMTU2cS0yMTAgMjktMzg0LjUtODB0LTI0MS41LTMwMHEtMTE3LTYtMjIxLTU3LjV0LTE3Ny41LTEzMy0xMTMuNS0xOTIuNS0zMi0yMzBxOS0xMzUgNzgtMjUydDE4Mi0xOTEuNSAyNDgtODkuNXExMTgtMTQgMjI3LjUgMTl0MTk4LjUgMTAzbDI1NS0yNTRoLTEzNHEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgyODhxMjYgMCA0NSAxOXQxOSA0NXYyODhxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0xMzRsLTI1NCAyNTVxNTkgNzQgOTMgMTY5IDE4MiA5IDMyOCAxMjRsMjU1LTI1NGgtMTM0cS0xNCAwLTIzLTl0LTktMjN2LTY0em0tNTEyIDQxNnEwLTIwLTQtNTgtMTYyIDI1LTI3MSAxNTB0LTEwOSAyOTJxMCAyMCA0IDU4IDE2Mi0yNSAyNzEtMTUwdDEwOS0yOTJ6bS04OTYgMHEwIDE2OCAxMTEgMjk0dDI3NiAxNDlxLTMtMjktMy01OSAwLTIxMCAxMzUtMzY5LjV0MzM4LTE5Ni41cS01My0xMjAtMTYzLjUtMTkzdC0yNDUuNS03M3EtMTg1IDAtMzE2LjUgMTMxLjV0LTEzMS41IDMxNi41em05NjAgODMycTE4NSAwIDMxNi41LTEzMS41dDEzMS41LTMxNi41cTAtMTY4LTExMS0yOTR0LTI3Ni0xNDlxMyAyOCAzIDU5IDAgMjEwLTEzNSAzNjkuNXQtMzM4IDE5Ni41cTUzIDEyMCAxNjMuNSAxOTN0MjQ1LjUgNzN6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFNYXJzRG91YmxlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
