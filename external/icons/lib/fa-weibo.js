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

var _ref2 = _react2.default.createElement('path', { d: 'M675 1284q21-34 11-69t-45-50q-34-14-73-1t-60 46q-22 34-13 68.5t43 50.5 74.5 2.5 62.5-47.5zm94-121q8-13 3.5-26.5t-17.5-18.5q-14-5-28.5.5t-21.5 18.5q-17 31 13 45 14 5 29-.5t22-18.5zm174 107q-45 102-158 150t-224 12q-107-34-147.5-126.5t6.5-187.5q47-93 151.5-139t210.5-19q111 29 158.5 119.5t2.5 190.5zm312-160q-9-96-89-170t-208.5-109-274.5-21q-223 23-369.5 141.5t-132.5 264.5q9 96 89 170t208.5 109 274.5 21q223-23 369.5-141.5t132.5-264.5zm308 4q0 68-37 139.5t-109 137-168.5 117.5-226 83-270.5 31-275-33.5-240.5-93-171.5-151-65-199.5q0-115 69.5-245t197.5-258q169-169 341.5-236t246.5 7q65 64 20 209-4 14-1 20t10 7 14.5-.5 13.5-3.5l6-2q139-59 246-59t153 61q45 63 0 178-2 13-4.5 20t4.5 12.5 12 7.5 17 6q57 18 103 47t80 81.5 34 116.5zm-74-624q42 47 54.5 108.5t-6.5 117.5q-8 23-29.5 34t-44.5 4q-23-8-34-29.5t-4-44.5q20-63-24-111t-107-35q-24 5-45-8t-25-37q-5-24 8-44.5t37-25.5q60-13 119 5.5t101 65.5zm181-163q87 96 112.5 222.5t-13.5 241.5q-9 27-34 40t-52 4-40-34-5-52q28-82 10-172t-80-158q-62-69-148-95.5t-173-8.5q-28 6-52-9.5t-30-43.5 9.5-51.5 43.5-29.5q123-26 244 11.5t208 134.5z' });

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
icon.displayName = 'FaWeibo';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS13ZWliby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsK2lDQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXdlaWJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02NzUgMTI4NHEyMS0zNCAxMS02OXQtNDUtNTBxLTM0LTE0LTczLTF0LTYwIDQ2cS0yMiAzNC0xMyA2OC41dDQzIDUwLjUgNzQuNSAyLjUgNjIuNS00Ny41em05NC0xMjFxOC0xMyAzLjUtMjYuNXQtMTcuNS0xOC41cS0xNC01LTI4LjUuNXQtMjEuNSAxOC41cS0xNyAzMSAxMyA0NSAxNCA1IDI5LS41dDIyLTE4LjV6bTE3NCAxMDdxLTQ1IDEwMi0xNTggMTUwdC0yMjQgMTJxLTEwNy0zNC0xNDcuNS0xMjYuNXQ2LjUtMTg3LjVxNDctOTMgMTUxLjUtMTM5dDIxMC41LTE5cTExMSAyOSAxNTguNSAxMTkuNXQyLjUgMTkwLjV6bTMxMi0xNjBxLTktOTYtODktMTcwdC0yMDguNS0xMDktMjc0LjUtMjFxLTIyMyAyMy0zNjkuNSAxNDEuNXQtMTMyLjUgMjY0LjVxOSA5NiA4OSAxNzB0MjA4LjUgMTA5IDI3NC41IDIxcTIyMy0yMyAzNjkuNS0xNDEuNXQxMzIuNS0yNjQuNXptMzA4IDRxMCA2OC0zNyAxMzkuNXQtMTA5IDEzNy0xNjguNSAxMTcuNS0yMjYgODMtMjcwLjUgMzEtMjc1LTMzLjUtMjQwLjUtOTMtMTcxLjUtMTUxLTY1LTE5OS41cTAtMTE1IDY5LjUtMjQ1dDE5Ny41LTI1OHExNjktMTY5IDM0MS41LTIzNnQyNDYuNSA3cTY1IDY0IDIwIDIwOS00IDE0LTEgMjB0MTAgNyAxNC41LS41IDEzLjUtMy41bDYtMnExMzktNTkgMjQ2LTU5dDE1MyA2MXE0NSA2MyAwIDE3OC0yIDEzLTQuNSAyMHQ0LjUgMTIuNSAxMiA3LjUgMTcgNnE1NyAxOCAxMDMgNDd0ODAgODEuNSAzNCAxMTYuNXptLTc0LTYyNHE0MiA0NyA1NC41IDEwOC41dC02LjUgMTE3LjVxLTggMjMtMjkuNSAzNHQtNDQuNSA0cS0yMy04LTM0LTI5LjV0LTQtNDQuNXEyMC02My0yNC0xMTF0LTEwNy0zNXEtMjQgNS00NS04dC0yNS0zN3EtNS0yNCA4LTQ0LjV0MzctMjUuNXE2MC0xMyAxMTkgNS41dDEwMSA2NS41em0xODEtMTYzcTg3IDk2IDExMi41IDIyMi41dC0xMy41IDI0MS41cS05IDI3LTM0IDQwdC01MiA0LTQwLTM0LTUtNTJxMjgtODIgMTAtMTcydC04MC0xNThxLTYyLTY5LTE0OC05NS41dC0xNzMtOC41cS0yOCA2LTUyLTkuNXQtMzAtNDMuNSA5LjUtNTEuNSA0My41LTI5LjVxMTIzLTI2IDI0NCAxMS41dDIwOCAxMzQuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhV2VpYm8nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
