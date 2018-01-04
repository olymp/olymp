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

var _ref2 = _react2.default.createElement('path', { d: 'M1728 886q0 166-60 314l-20 49-185 33q-22 83-90.5 136.5t-156.5 53.5v32q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23v32q71 0 130 35.5t93 95.5l68-12q29-95 29-193 0-148-88-279t-236.5-209-315.5-78-315.5 78-236.5 209-88 279q0 98 29 193l68 12q34-60 93-95.5t130-35.5v-32q0-14 9-23t23-9h64q14 0 23 9t9 23v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-32q-88 0-156.5-53.5t-90.5-136.5l-185-33-20-49q-60-148-60-314 0-151 67-291t179-242.5 266-163.5 320-61 320 61 266 163.5 179 242.5 67 291z' });

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
icon.displayName = 'FaHeadphones';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oZWFkcGhvbmVzLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx5ZkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1oZWFkcGhvbmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNzI4IDg4NnEwIDE2Ni02MCAzMTRsLTIwIDQ5LTE4NSAzM3EtMjIgODMtOTAuNSAxMzYuNXQtMTU2LjUgNTMuNXYzMnEwIDE0LTkgMjN0LTIzIDloLTY0cS0xNCAwLTIzLTl0LTktMjN2LTU3NnEwLTE0IDktMjN0MjMtOWg2NHExNCAwIDIzIDl0OSAyM3YzMnE3MSAwIDEzMCAzNS41dDkzIDk1LjVsNjgtMTJxMjktOTUgMjktMTkzIDAtMTQ4LTg4LTI3OXQtMjM2LjUtMjA5LTMxNS41LTc4LTMxNS41IDc4LTIzNi41IDIwOS04OCAyNzlxMCA5OCAyOSAxOTNsNjggMTJxMzQtNjAgOTMtOTUuNXQxMzAtMzUuNXYtMzJxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN2NTc2cTAgMTQtOSAyM3QtMjMgOWgtNjRxLTE0IDAtMjMtOXQtOS0yM3YtMzJxLTg4IDAtMTU2LjUtNTMuNXQtOTAuNS0xMzYuNWwtMTg1LTMzLTIwLTQ5cS02MC0xNDgtNjAtMzE0IDAtMTUxIDY3LTI5MXQxNzktMjQyLjUgMjY2LTE2My41IDMyMC02MSAzMjAgNjEgMjY2IDE2My41IDE3OSAyNDIuNSA2NyAyOTF6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUhlYWRwaG9uZXMnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
