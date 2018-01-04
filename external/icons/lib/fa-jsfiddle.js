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

var _ref2 = _react2.default.createElement('path', { d: 'M1800 772q111 46 179.5 145.5t68.5 221.5q0 164-118 280.5t-285 116.5q-4 0-11.5-.5t-10.5-.5h-1217q-170-10-288-125.5t-118-280.5q0-110 55-203t147-147q-12-39-12-82 0-115 82-196t199-81q95 0 172 58 75-154 222.5-248t326.5-94q166 0 306 80.5t221.5 218.5 81.5 301q0 6-.5 18t-.5 18zm-1332 266q0 122 84 193t208 71q137 0 240-99-16-20-47.5-56.5t-43.5-50.5q-67 65-144 65-55 0-93.5-33.5t-38.5-87.5q0-53 38.5-87t91.5-34q44 0 84.5 21t73 55 65 75 69 82 77 75 97 55 121.5 21q121 0 204.5-71.5t83.5-190.5q0-121-84-192t-207-71q-143 0-241 97l93 108q66-64 142-64 52 0 92 33t40 84q0 57-37 91.5t-94 34.5q-43 0-82.5-21t-72-55-65.5-75-69.5-82-77.5-75-96.5-55-118.5-21q-122 0-207 70.5t-85 189.5z' });

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
icon.displayName = 'FaJsfiddle';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1qc2ZpZGRsZS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUseXBCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFlBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWpzZmlkZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xODAwIDc3MnExMTEgNDYgMTc5LjUgMTQ1LjV0NjguNSAyMjEuNXEwIDE2NC0xMTggMjgwLjV0LTI4NSAxMTYuNXEtNCAwLTExLjUtLjV0LTEwLjUtLjVoLTEyMTdxLTE3MC0xMC0yODgtMTI1LjV0LTExOC0yODAuNXEwLTExMCA1NS0yMDN0MTQ3LTE0N3EtMTItMzktMTItODIgMC0xMTUgODItMTk2dDE5OS04MXE5NSAwIDE3MiA1OCA3NS0xNTQgMjIyLjUtMjQ4dDMyNi41LTk0cTE2NiAwIDMwNiA4MC41dDIyMS41IDIxOC41IDgxLjUgMzAxcTAgNi0uNSAxOHQtLjUgMTh6bS0xMzMyIDI2NnEwIDEyMiA4NCAxOTN0MjA4IDcxcTEzNyAwIDI0MC05OS0xNi0yMC00Ny41LTU2LjV0LTQzLjUtNTAuNXEtNjcgNjUtMTQ0IDY1LTU1IDAtOTMuNS0zMy41dC0zOC41LTg3LjVxMC01MyAzOC41LTg3dDkxLjUtMzRxNDQgMCA4NC41IDIxdDczIDU1IDY1IDc1IDY5IDgyIDc3IDc1IDk3IDU1IDEyMS41IDIxcTEyMSAwIDIwNC41LTcxLjV0ODMuNS0xOTAuNXEwLTEyMS04NC0xOTJ0LTIwNy03MXEtMTQzIDAtMjQxIDk3bDkzIDEwOHE2Ni02NCAxNDItNjQgNTIgMCA5MiAzM3Q0MCA4NHEwIDU3LTM3IDkxLjV0LTk0IDM0LjVxLTQzIDAtODIuNS0yMXQtNzItNTUtNjUuNS03NS02OS41LTgyLTc3LjUtNzUtOTYuNS01NS0xMTguNS0yMXEtMTIyIDAtMjA3IDcwLjV0LTg1IDE4OS41elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSnNmaWRkbGUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
