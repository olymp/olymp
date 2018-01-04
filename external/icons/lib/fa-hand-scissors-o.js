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

var _ref2 = _react2.default.createElement('path', { d: 'M1073 1664h-177q-163 0-226-141-23-49-23-102v-5q-62-30-98.5-88.5t-36.5-127.5q0-38 5-48h-261q-106 0-181-75t-75-181 75-181 181-75h113l-44-17q-74-28-119.5-93.5t-45.5-145.5q0-106 75-181t181-75q46 0 91 17l628 239h401q106 0 181 75t75 181v668q0 88-54 157.5t-140 90.5l-339 85q-92 23-186 23zm-49-711l-155 71-163 74q-30 14-48 41.5t-18 60.5q0 46 33 79t79 33q26 0 46-10l338-154q-49-10-80.5-50t-31.5-90v-55zm320 311q0-46-33-79t-79-33q-26 0-46 10l-290 132q-28 13-37 17t-30.5 17-29.5 23.5-16 29-8 40.5q0 50 31.5 82t81.5 32q20 0 38-9l352-160q30-14 48-41.5t18-60.5zm-232-752l-650-248q-24-8-46-8-53 0-90.5 37.5t-37.5 90.5q0 40 22.5 73t59.5 47l526 200v64h-640q-53 0-90.5 37.5t-37.5 90.5 37.5 90.5 90.5 37.5h535l233-106v-198q0-63 46-106l111-102h-69zm-39 1024q82 0 155-19l339-85q43-11 70-45.5t27-78.5v-668q0-53-37.5-90.5t-90.5-37.5h-308l-136 126q-36 33-36 82v296q0 46 33 77t79 31 79-35 33-81v-208h32v208q0 70-57 114 52 8 86.5 48.5t34.5 93.5q0 42-23 78t-61 53l-310 141h91z' });

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
icon.displayName = 'FaHandScissorsO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXNjaXNzb3JzLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHU3QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixpQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtaGFuZC1zY2lzc29ycy1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMDczIDE2NjRoLTE3N3EtMTYzIDAtMjI2LTE0MS0yMy00OS0yMy0xMDJ2LTVxLTYyLTMwLTk4LjUtODguNXQtMzYuNS0xMjcuNXEwLTM4IDUtNDhoLTI2MXEtMTA2IDAtMTgxLTc1dC03NS0xODEgNzUtMTgxIDE4MS03NWgxMTNsLTQ0LTE3cS03NC0yOC0xMTkuNS05My41dC00NS41LTE0NS41cTAtMTA2IDc1LTE4MXQxODEtNzVxNDYgMCA5MSAxN2w2MjggMjM5aDQwMXExMDYgMCAxODEgNzV0NzUgMTgxdjY2OHEwIDg4LTU0IDE1Ny41dC0xNDAgOTAuNWwtMzM5IDg1cS05MiAyMy0xODYgMjN6bS00OS03MTFsLTE1NSA3MS0xNjMgNzRxLTMwIDE0LTQ4IDQxLjV0LTE4IDYwLjVxMCA0NiAzMyA3OXQ3OSAzM3EyNiAwIDQ2LTEwbDMzOC0xNTRxLTQ5LTEwLTgwLjUtNTB0LTMxLjUtOTB2LTU1em0zMjAgMzExcTAtNDYtMzMtNzl0LTc5LTMzcS0yNiAwLTQ2IDEwbC0yOTAgMTMycS0yOCAxMy0zNyAxN3QtMzAuNSAxNy0yOS41IDIzLjUtMTYgMjktOCA0MC41cTAgNTAgMzEuNSA4MnQ4MS41IDMycTIwIDAgMzgtOWwzNTItMTYwcTMwLTE0IDQ4LTQxLjV0MTgtNjAuNXptLTIzMi03NTJsLTY1MC0yNDhxLTI0LTgtNDYtOC01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41cTAgNDAgMjIuNSA3M3Q1OS41IDQ3bDUyNiAyMDB2NjRoLTY0MHEtNTMgMC05MC41IDM3LjV0LTM3LjUgOTAuNSAzNy41IDkwLjUgOTAuNSAzNy41aDUzNWwyMzMtMTA2di0xOThxMC02MyA0Ni0xMDZsMTExLTEwMmgtNjl6bS0zOSAxMDI0cTgyIDAgMTU1LTE5bDMzOS04NXE0My0xMSA3MC00NS41dDI3LTc4LjV2LTY2OHEwLTUzLTM3LjUtOTAuNXQtOTAuNS0zNy41aC0zMDhsLTEzNiAxMjZxLTM2IDMzLTM2IDgydjI5NnEwIDQ2IDMzIDc3dDc5IDMxIDc5LTM1IDMzLTgxdi0yMDhoMzJ2MjA4cTAgNzAtNTcgMTE0IDUyIDggODYuNSA0OC41dDM0LjUgOTMuNXEwIDQyLTIzIDc4dC02MSA1M2wtMzEwIDE0MWg5MXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZFNjaXNzb3JzTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
