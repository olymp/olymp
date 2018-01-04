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

var _ref2 = _react2.default.createElement('path', { d: 'M2301 1036q12 103-22 198.5t-99 163.5-158.5 106-196.5 31q-161-11-279.5-125t-134.5-274q-12-111 27.5-210.5t118.5-170.5l-71-107q-96 80-151 194t-55 244q0 27-18.5 46.5t-45.5 19.5h-325q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q76 0 152 27l24-45q-123-110-304-110h-64q-26 0-45-19t-19-45 19-45 45-19h128q78 0 145 13.5t116.5 38.5 71.5 39.5 51 36.5h627l-85-128h-222q-30 0-49-22.5t-14-52.5q4-23 23-38t43-15h253q33 0 53 28l70 105 114-114q19-19 46-19h101q26 0 45 19t19 45v128q0 26-19 45t-45 19h-179l115 172q131-63 275-36 143 26 244 134.5t118 253.5zm-1853 372q115 0 203-72.5t111-183.5h-314q-35 0-55-31-18-32-1-63l147-277q-47-13-91-13-132 0-226 94t-94 226 94 226 226 94zm1408 0q132 0 226-94t94-226-94-226-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94z' });

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
icon.displayName = 'FaMotorcycle';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1tb3RvcmN5Y2xlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFb0osd0NBQU0sR0FBRSwyMEJBQVIsRzs7QUFEcEosSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1tb3RvcmN5Y2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yMzAxIDEwMzZxMTIgMTAzLTIyIDE5OC41dC05OSAxNjMuNS0xNTguNSAxMDYtMTk2LjUgMzFxLTE2MS0xMS0yNzkuNS0xMjV0LTEzNC41LTI3NHEtMTItMTExIDI3LjUtMjEwLjV0MTE4LjUtMTcwLjVsLTcxLTEwN3EtOTYgODAtMTUxIDE5NHQtNTUgMjQ0cTAgMjctMTguNSA0Ni41dC00NS41IDE5LjVoLTMyNXEtMjMgMTY0LTE0OSAyNzR0LTI5NCAxMTBxLTE4NSAwLTMxNi41LTEzMS41dC0xMzEuNS0zMTYuNSAxMzEuNS0zMTYuNSAzMTYuNS0xMzEuNXE3NiAwIDE1MiAyN2wyNC00NXEtMTIzLTExMC0zMDQtMTEwaC02NHEtMjYgMC00NS0xOXQtMTktNDUgMTktNDUgNDUtMTloMTI4cTc4IDAgMTQ1IDEzLjV0MTE2LjUgMzguNSA3MS41IDM5LjUgNTEgMzYuNWg2MjdsLTg1LTEyOGgtMjIycS0zMCAwLTQ5LTIyLjV0LTE0LTUyLjVxNC0yMyAyMy0zOHQ0My0xNWgyNTNxMzMgMCA1MyAyOGw3MCAxMDUgMTE0LTExNHExOS0xOSA0Ni0xOWgxMDFxMjYgMCA0NSAxOXQxOSA0NXYxMjhxMCAyNi0xOSA0NXQtNDUgMTloLTE3OWwxMTUgMTcycTEzMS02MyAyNzUtMzYgMTQzIDI2IDI0NCAxMzQuNXQxMTggMjUzLjV6bS0xODUzIDM3MnExMTUgMCAyMDMtNzIuNXQxMTEtMTgzLjVoLTMxNHEtMzUgMC01NS0zMS0xOC0zMi0xLTYzbDE0Ny0yNzdxLTQ3LTEzLTkxLTEzLTEzMiAwLTIyNiA5NHQtOTQgMjI2IDk0IDIyNiAyMjYgOTR6bTE0MDggMHExMzIgMCAyMjYtOTR0OTQtMjI2LTk0LTIyNi0yMjYtOTRxLTYwIDAtMTIxIDI0bDE3NCAyNjBxMTUgMjMgMTAgNDl0LTI3IDQwcS0xNSAxMS0zNiAxMS0zNSAwLTUzLTI5bC0xNzQtMjYwcS05MyA5NS05MyAyMjUgMCAxMzIgOTQgMjI2dDIyNiA5NHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhTW90b3JjeWNsZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
