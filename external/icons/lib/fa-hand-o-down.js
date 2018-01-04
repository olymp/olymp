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

var _ref2 = _react2.default.createElement('path', { d: 'M1536 960q0-84-32-183t-64-194-32-167v-32h-640v32q0 35-12 67.5t-37 62.5-46 50-54 49q-9 8-14 12-81 72-145 112-22 14-68 38-3 1-22.5 10.5t-36 18.5-35.5 20-30.5 21.5-11.5 18.5q0 71 30.5 115.5t97.5 44.5q43 0 84.5-15t68-33 55-33 48.5-15v576q0 50 38.5 89t89.5 39q52 0 90-38t38-90v-331q46 35 103 35 69 0 119-53 32 18 69 18t73.5-17.5 52.5-47.5q24 4 56 4 85 0 126-48.5t41-135.5zm-128-768q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 764q0 142-77.5 230t-217.5 87l-5-1q-76 61-178 61-22 0-43-3-54 30-119 37v169q0 105-76 180.5t-181 75.5q-103 0-179-76t-76-180v-374q-54 22-128 22-121 0-188.5-81.5t-67.5-206.5q0-38 17.5-69.5t49.5-55 63-40.5 72-37 62-33q55-35 129-100 3-2 17-14t21.5-19 21.5-20.5 22.5-24 18-22.5 14-23.5 4.5-21.5v-288q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v288q0 59 59 223 69 190 69 317z' });

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
icon.displayName = 'FaHandODown';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLW8tZG93bi5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsK3lCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWhhbmQtby1kb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNTM2IDk2MHEwLTg0LTMyLTE4M3QtNjQtMTk0LTMyLTE2N3YtMzJoLTY0MHYzMnEwIDM1LTEyIDY3LjV0LTM3IDYyLjUtNDYgNTAtNTQgNDlxLTkgOC0xNCAxMi04MSA3Mi0xNDUgMTEyLTIyIDE0LTY4IDM4LTMgMS0yMi41IDEwLjV0LTM2IDE4LjUtMzUuNSAyMC0zMC41IDIxLjUtMTEuNSAxOC41cTAgNzEgMzAuNSAxMTUuNXQ5Ny41IDQ0LjVxNDMgMCA4NC41LTE1dDY4LTMzIDU1LTMzIDQ4LjUtMTV2NTc2cTAgNTAgMzguNSA4OXQ4OS41IDM5cTUyIDAgOTAtMzh0MzgtOTB2LTMzMXE0NiAzNSAxMDMgMzUgNjkgMCAxMTktNTMgMzIgMTggNjkgMTh0NzMuNS0xNy41IDUyLjUtNDcuNXEyNCA0IDU2IDQgODUgMCAxMjYtNDguNXQ0MS0xMzUuNXptLTEyOC03NjhxMC0yNi0xOS00NXQtNDUtMTktNDUgMTktMTkgNDUgMTkgNDUgNDUgMTkgNDUtMTkgMTktNDV6bTI1NiA3NjRxMCAxNDItNzcuNSAyMzB0LTIxNy41IDg3bC01LTFxLTc2IDYxLTE3OCA2MS0yMiAwLTQzLTMtNTQgMzAtMTE5IDM3djE2OXEwIDEwNS03NiAxODAuNXQtMTgxIDc1LjVxLTEwMyAwLTE3OS03NnQtNzYtMTgwdi0zNzRxLTU0IDIyLTEyOCAyMi0xMjEgMC0xODguNS04MS41dC02Ny41LTIwNi41cTAtMzggMTcuNS02OS41dDQ5LjUtNTUgNjMtNDAuNSA3Mi0zNyA2Mi0zM3E1NS0zNSAxMjktMTAwIDMtMiAxNy0xNHQyMS41LTE5IDIxLjUtMjAuNSAyMi41LTI0IDE4LTIyLjUgMTQtMjMuNSA0LjUtMjEuNXYtMjg4cTAtNTMgMzcuNS05MC41dDkwLjUtMzcuNWg2NDBxNTMgMCA5MC41IDM3LjV0MzcuNSA5MC41djI4OHEwIDU5IDU5IDIyMyA2OSAxOTAgNjkgMzE3elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFIYW5kT0Rvd24nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
