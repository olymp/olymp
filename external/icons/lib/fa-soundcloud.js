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

var _ref2 = _react2.default.createElement('path', { d: 'M784 1372l16-241-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523 14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23zm296-29l11-211-12-586q0-16-13-24-8-5-16-5t-16 5q-13 8-13 24l-1 6-10 579q0 1 11 236v1q0 10 6 17 9 11 23 11 11 0 20-9 9-7 9-20zm-1045-340l20 128-20 126q-2 9-9 9t-9-9l-17-126 17-128q2-9 9-9t9 9zm86-79l26 207-26 203q-2 9-10 9-9 0-9-10l-23-202 23-207q0-9 9-9 8 0 10 9zm280 453zm-188-491l25 245-25 237q0 11-11 11-10 0-12-11l-21-237 21-245q2-12 12-12 11 0 11 12zm94-7l23 252-23 244q-2 13-14 13-13 0-13-13l-21-244 21-252q0-13 13-13 12 0 14 13zm94 18l21 234-21 246q-2 16-16 16-6 0-10.5-4.5t-4.5-11.5l-20-246 20-234q0-6 4.5-10.5t10.5-4.5q14 0 16 15zm383 475zm-289-621l21 380-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246 18-380q2-18 18-18 7 0 12 5.5t5 12.5zm94-86l19 468-19 244q0 8-5.5 13.5t-13.5 5.5q-18 0-20-19l-16-244 16-468q2-19 20-19 8 0 13.5 5.5t5.5 13.5zm98-40l18 506-18 242q-2 21-22 21-19 0-21-21l-16-242 16-506q0-9 6.5-15.5t14.5-6.5q9 0 15 6.5t7 15.5zm392 742zm-198-746l15 510-15 239q0 10-7.5 17.5t-17.5 7.5-17-7-8-18l-14-239 14-510q0-11 7.5-18t17.5-7 17.5 7 7.5 18zm99 19l14 492-14 236q0 11-8 19t-19 8-19-8-9-19l-12-236 12-492q1-12 9-20t19-8 18.5 8 8.5 20zm212 492l-14 231q0 13-9 22t-22 9-22-9-10-22l-6-114-6-117 12-636v-3q2-15 12-24 9-7 20-7 8 0 15 5 14 8 16 26zm1112-19q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22v-899q0-23 28-33 85-34 181-34 195 0 338 131.5t160 323.5q53-22 110-22 117 0 200 83t83 201z' });

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
icon.displayName = 'FaSoundcloud';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3VuZGNsb3VkLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFb0osd0NBQU0sR0FBRSw0NENBQVIsRzs7QUFEcEosSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3VuZGNsb3VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03ODQgMTM3MmwxNi0yNDEtMTYtNTIzcS0xLTEwLTcuNS0xN3QtMTYuNS03cS05IDAtMTYgN3QtNyAxN2wtMTQgNTIzIDE0IDI0MXExIDEwIDcuNSAxNi41dDE1LjUgNi41cTIyIDAgMjQtMjN6bTI5Ni0yOWwxMS0yMTEtMTItNTg2cTAtMTYtMTMtMjQtOC01LTE2LTV0LTE2IDVxLTEzIDgtMTMgMjRsLTEgNi0xMCA1NzlxMCAxIDExIDIzNnYxcTAgMTAgNiAxNyA5IDExIDIzIDExIDExIDAgMjAtOSA5LTcgOS0yMHptLTEwNDUtMzQwbDIwIDEyOC0yMCAxMjZxLTIgOS05IDl0LTktOWwtMTctMTI2IDE3LTEyOHEyLTkgOS05dDkgOXptODYtNzlsMjYgMjA3LTI2IDIwM3EtMiA5LTEwIDktOSAwLTktMTBsLTIzLTIwMiAyMy0yMDdxMC05IDktOSA4IDAgMTAgOXptMjgwIDQ1M3ptLTE4OC00OTFsMjUgMjQ1LTI1IDIzN3EwIDExLTExIDExLTEwIDAtMTItMTFsLTIxLTIzNyAyMS0yNDVxMi0xMiAxMi0xMiAxMSAwIDExIDEyem05NC03bDIzIDI1Mi0yMyAyNDRxLTIgMTMtMTQgMTMtMTMgMC0xMy0xM2wtMjEtMjQ0IDIxLTI1MnEwLTEzIDEzLTEzIDEyIDAgMTQgMTN6bTk0IDE4bDIxIDIzNC0yMSAyNDZxLTIgMTYtMTYgMTYtNiAwLTEwLjUtNC41dC00LjUtMTEuNWwtMjAtMjQ2IDIwLTIzNHEwLTYgNC41LTEwLjV0MTAuNS00LjVxMTQgMCAxNiAxNXptMzgzIDQ3NXptLTI4OS02MjFsMjEgMzgwLTIxIDI0NnEwIDctNSAxMi41dC0xMiA1LjVxLTE2IDAtMTgtMThsLTE4LTI0NiAxOC0zODBxMi0xOCAxOC0xOCA3IDAgMTIgNS41dDUgMTIuNXptOTQtODZsMTkgNDY4LTE5IDI0NHEwIDgtNS41IDEzLjV0LTEzLjUgNS41cS0xOCAwLTIwLTE5bC0xNi0yNDQgMTYtNDY4cTItMTkgMjAtMTkgOCAwIDEzLjUgNS41dDUuNSAxMy41em05OC00MGwxOCA1MDYtMTggMjQycS0yIDIxLTIyIDIxLTE5IDAtMjEtMjFsLTE2LTI0MiAxNi01MDZxMC05IDYuNS0xNS41dDE0LjUtNi41cTkgMCAxNSA2LjV0NyAxNS41em0zOTIgNzQyem0tMTk4LTc0NmwxNSA1MTAtMTUgMjM5cTAgMTAtNy41IDE3LjV0LTE3LjUgNy41LTE3LTctOC0xOGwtMTQtMjM5IDE0LTUxMHEwLTExIDcuNS0xOHQxNy41LTcgMTcuNSA3IDcuNSAxOHptOTkgMTlsMTQgNDkyLTE0IDIzNnEwIDExLTggMTl0LTE5IDgtMTktOC05LTE5bC0xMi0yMzYgMTItNDkycTEtMTIgOS0yMHQxOS04IDE4LjUgOCA4LjUgMjB6bTIxMiA0OTJsLTE0IDIzMXEwIDEzLTkgMjJ0LTIyIDktMjItOS0xMC0yMmwtNi0xMTQtNi0xMTcgMTItNjM2di0zcTItMTUgMTItMjQgOS03IDIwLTcgOCAwIDE1IDUgMTQgOCAxNiAyNnptMTExMi0xOXEwIDExNy04MyAxOTkuNXQtMjAwIDgyLjVoLTc4NnEtMTMtMi0yMi0xMXQtOS0yMnYtODk5cTAtMjMgMjgtMzMgODUtMzQgMTgxLTM0IDE5NSAwIDMzOCAxMzEuNXQxNjAgMzIzLjVxNTMtMjIgMTEwLTIyIDExNyAwIDIwMCA4M3Q4MyAyMDF6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNvdW5kY2xvdWQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
