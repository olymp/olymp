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

var _ref2 = _react2.default.createElement('path', { d: 'M1975 990h-138q14-37 66-179l3-9q4-10 10-26t9-26l12 55zm-1444-65l-58-295q-11-54-75-54h-268l-2 13q311 79 403 336zm179-349l-162 438-17-89q-26-70-85-129.5t-131-88.5l135 510h175l261-641h-176zm139 642h166l104-642h-166zm768-626q-69-27-149-27-123 0-201 59t-79 153q-1 102 145 174 48 23 67 41t19 39q0 30-30 46t-69 16q-86 0-156-33l-22-11-23 144q74 34 185 34 130 1 208.5-59t80.5-160q0-106-140-174-49-25-71-42t-22-38q0-22 24.5-38.5t70.5-16.5q70-1 124 24l15 8zm425-16h-128q-65 0-87 54l-246 588h174l35-96h212q5 22 20 96h154zm262-320v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCcVisa';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy12aXNhLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFb0osd0NBQU0sR0FBRSxxbUJBQVIsRzs7QUFEcEosSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYy12aXNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOTc1IDk5MGgtMTM4cTE0LTM3IDY2LTE3OWwzLTlxNC0xMCAxMC0yNnQ5LTI2bDEyIDU1em0tMTQ0NC02NWwtNTgtMjk1cS0xMS01NC03NS01NGgtMjY4bC0yIDEzcTMxMSA3OSA0MDMgMzM2em0xNzktMzQ5bC0xNjIgNDM4LTE3LTg5cS0yNi03MC04NS0xMjkuNXQtMTMxLTg4LjVsMTM1IDUxMGgxNzVsMjYxLTY0MWgtMTc2em0xMzkgNjQyaDE2NmwxMDQtNjQyaC0xNjZ6bTc2OC02MjZxLTY5LTI3LTE0OS0yNy0xMjMgMC0yMDEgNTl0LTc5IDE1M3EtMSAxMDIgMTQ1IDE3NCA0OCAyMyA2NyA0MXQxOSAzOXEwIDMwLTMwIDQ2dC02OSAxNnEtODYgMC0xNTYtMzNsLTIyLTExLTIzIDE0NHE3NCAzNCAxODUgMzQgMTMwIDEgMjA4LjUtNTl0ODAuNS0xNjBxMC0xMDYtMTQwLTE3NC00OS0yNS03MS00MnQtMjItMzhxMC0yMiAyNC41LTM4LjV0NzAuNS0xNi41cTcwLTEgMTI0IDI0bDE1IDh6bTQyNS0xNmgtMTI4cS02NSAwLTg3IDU0bC0yNDYgNTg4aDE3NGwzNS05NmgyMTJxNSAyMiAyMCA5NmgxNTR6bTI2Mi0zMjB2MTI4MHEwIDUyLTM4IDkwdC05MCAzOGgtMjA0OHEtNTIgMC05MC0zOHQtMzgtOTB2LTEyODBxMC01MiAzOC05MHQ5MC0zOGgyMDQ4cTUyIDAgOTAgMzh0MzggOTB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNjVmlzYSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
