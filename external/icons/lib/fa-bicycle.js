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

var _ref2 = _react2.default.createElement('path', { d: 'M762 1152h-314q-40 0-57.5-35t6.5-67l188-251q-65-31-137-31-132 0-226 94t-94 226 94 226 226 94q115 0 203-72.5t111-183.5zm-186-128h186q-18-85-75-148zm480 0l288-384h-480l-99 132q105 103 126 252h165zm1120 64q0-132-94-226t-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94 226-94 94-226zm128 0q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-97 39.5-183.5t109.5-149.5l-65-98-353 469q-18 26-51 26h-197q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q114 0 215 55l137-183h-224q-26 0-45-19t-19-45 19-45 45-19h384v128h435l-85-128h-222q-26 0-45-19t-19-45 19-45 45-19h256q33 0 53 28l267 400q91-44 192-44 185 0 316.5 131.5t131.5 316.5z' });

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
icon.displayName = 'FaBicycle';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaWN5Y2xlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFb0osd0NBQU0sR0FBRSwwdEJBQVIsRzs7QUFEcEosSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixXQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaWN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03NjIgMTE1MmgtMzE0cS00MCAwLTU3LjUtMzV0Ni41LTY3bDE4OC0yNTFxLTY1LTMxLTEzNy0zMS0xMzIgMC0yMjYgOTR0LTk0IDIyNiA5NCAyMjYgMjI2IDk0cTExNSAwIDIwMy03Mi41dDExMS0xODMuNXptLTE4Ni0xMjhoMTg2cS0xOC04NS03NS0xNDh6bTQ4MCAwbDI4OC0zODRoLTQ4MGwtOTkgMTMycTEwNSAxMDMgMTI2IDI1MmgxNjV6bTExMjAgNjRxMC0xMzItOTQtMjI2dC0yMjYtOTRxLTYwIDAtMTIxIDI0bDE3NCAyNjBxMTUgMjMgMTAgNDl0LTI3IDQwcS0xNSAxMS0zNiAxMS0zNSAwLTUzLTI5bC0xNzQtMjYwcS05MyA5NS05MyAyMjUgMCAxMzIgOTQgMjI2dDIyNiA5NCAyMjYtOTQgOTQtMjI2em0xMjggMHEwIDE4NS0xMzEuNSAzMTYuNXQtMzE2LjUgMTMxLjUtMzE2LjUtMTMxLjUtMTMxLjUtMzE2LjVxMC05NyAzOS41LTE4My41dDEwOS41LTE0OS41bC02NS05OC0zNTMgNDY5cS0xOCAyNi01MSAyNmgtMTk3cS0yMyAxNjQtMTQ5IDI3NHQtMjk0IDExMHEtMTg1IDAtMzE2LjUtMTMxLjV0LTEzMS41LTMxNi41IDEzMS41LTMxNi41IDMxNi41LTEzMS41cTExNCAwIDIxNSA1NWwxMzctMTgzaC0yMjRxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1IDQ1LTE5aDM4NHYxMjhoNDM1bC04NS0xMjhoLTIyMnEtMjYgMC00NS0xOXQtMTktNDUgMTktNDUgNDUtMTloMjU2cTMzIDAgNTMgMjhsMjY3IDQwMHE5MS00NCAxOTItNDQgMTg1IDAgMzE2LjUgMTMxLjV0MTMxLjUgMzE2LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUJpY3ljbGUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
