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

var _ref2 = _react2.default.createElement('path', { d: 'M785 1008h207q-14 158-98.5 248.5t-214.5 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-203q-5-64-35.5-99t-81.5-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 40 51.5 66 18q95 0 109-139zm712 0h206q-14 158-98 248.5t-214 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-204q-4-64-35-99t-81-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 39.5 51.5 65.5 18q49 0 76.5-38t33.5-101zm359-119q0-207-15.5-307t-60.5-161q-6-8-13.5-14t-21.5-15-16-11q-86-63-697-63-625 0-710 63-5 4-17.5 11.5t-21 14-14.5 14.5q-45 60-60 159.5t-15 308.5q0 208 15 307.5t60 160.5q6 8 15 15t20.5 14 17.5 12q44 33 239.5 49t470.5 16q610 0 697-65 5-4 17-11t20.5-14 13.5-16q46-60 61-159t15-309zm192-761v1536h-2048v-1536h2048z' });

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
icon.displayName = 'FaCc';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsOHVCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE1BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03ODUgMTAwOGgyMDdxLTE0IDE1OC05OC41IDI0OC41dC0yMTQuNSA5MC41cS0xNjIgMC0yNTQuNS0xMTZ0LTkyLjUtMzE2cTAtMTk0IDkzLTMxMS41dDIzMy0xMTcuNXExNDggMCAyMzIgODd0OTcgMjQ3aC0yMDNxLTUtNjQtMzUuNS05OXQtODEuNS0zNXEtNTcgMC04OC41IDYwLjV0LTMxLjUgMTc3LjVxMCA0OCA1IDg0dDE4IDY5LjUgNDAgNTEuNSA2NiAxOHE5NSAwIDEwOS0xMzl6bTcxMiAwaDIwNnEtMTQgMTU4LTk4IDI0OC41dC0yMTQgOTAuNXEtMTYyIDAtMjU0LjUtMTE2dC05Mi41LTMxNnEwLTE5NCA5My0zMTEuNXQyMzMtMTE3LjVxMTQ4IDAgMjMyIDg3dDk3IDI0N2gtMjA0cS00LTY0LTM1LTk5dC04MS0zNXEtNTcgMC04OC41IDYwLjV0LTMxLjUgMTc3LjVxMCA0OCA1IDg0dDE4IDY5LjUgMzkuNSA1MS41IDY1LjUgMThxNDkgMCA3Ni41LTM4dDMzLjUtMTAxem0zNTktMTE5cTAtMjA3LTE1LjUtMzA3dC02MC41LTE2MXEtNi04LTEzLjUtMTR0LTIxLjUtMTUtMTYtMTFxLTg2LTYzLTY5Ny02My02MjUgMC03MTAgNjMtNSA0LTE3LjUgMTEuNXQtMjEgMTQtMTQuNSAxNC41cS00NSA2MC02MCAxNTkuNXQtMTUgMzA4LjVxMCAyMDggMTUgMzA3LjV0NjAgMTYwLjVxNiA4IDE1IDE1dDIwLjUgMTQgMTcuNSAxMnE0NCAzMyAyMzkuNSA0OXQ0NzAuNSAxNnE2MTAgMCA2OTctNjUgNS00IDE3LTExdDIwLjUtMTQgMTMuNS0xNnE0Ni02MCA2MS0xNTl0MTUtMzA5em0xOTItNzYxdjE1MzZoLTIwNDh2LTE1MzZoMjA0OHpcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNjJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
