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

var _ref2 = _react2.default.createElement('path', { d: 'M503 1271l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z' });

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
icon.displayName = 'FaChainBroken';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jaGFpbi1icm9rZW4uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHcyQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1jaGFpbi1icm9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTUwMyAxMjcxbC0yNTYgMjU2cS0xMSA5LTIzIDl0LTIzLTlxLTktMTAtOS0yM3Q5LTIzbDI1Ni0yNTZxMTAtOSAyMy05dDIzIDlxOSAxMCA5IDIzdC05IDIzem0xNjkgNDF2MzIwcTAgMTQtOSAyM3QtMjMgOS0yMy05LTktMjN2LTMyMHEwLTE0IDktMjN0MjMtOSAyMyA5IDkgMjN6bS0yMjQtMjI0cTAgMTQtOSAyM3QtMjMgOWgtMzIwcS0xNCAwLTIzLTl0LTktMjMgOS0yMyAyMy05aDMyMHExNCAwIDIzIDl0OSAyM3ptMTI2NCAxMjhxMCAxMjAtODUgMjAzbC0xNDcgMTQ2cS04MyA4My0yMDMgODMtMTIxIDAtMjA0LTg1bC0zMzQtMzM1cS0yMS0yMS00Mi01NmwyMzktMTggMjczIDI3NHEyNyAyNyA2OCAyNy41dDY4LTI2LjVsMTQ3LTE0NnEyOC0yOCAyOC02NyAwLTQwLTI4LTY4bC0yNzQtMjc1IDE4LTIzOXEzNSAyMSA1NiA0MmwzMzYgMzM2cTg0IDg2IDg0IDIwNHptLTYxNy03MjRsLTIzOSAxOC0yNzMtMjc0cS0yOC0yOC02OC0yOC0zOSAwLTY4IDI3bC0xNDcgMTQ2cS0yOCAyOC0yOCA2NyAwIDQwIDI4IDY4bDI3NCAyNzQtMTggMjQwcS0zNS0yMS01Ni00MmwtMzM2LTMzNnEtODQtODYtODQtMjA0IDAtMTIwIDg1LTIwM2wxNDctMTQ2cTgzLTgzIDIwMy04MyAxMjEgMCAyMDQgODVsMzM0IDMzNXEyMSAyMSA0MiA1NnptNjMzIDg0cTAgMTQtOSAyM3QtMjMgOWgtMzIwcS0xNCAwLTIzLTl0LTktMjMgOS0yMyAyMy05aDMyMHExNCAwIDIzIDl0OSAyM3ptLTU0NC01NDR2MzIwcTAgMTQtOSAyM3QtMjMgOS0yMy05LTktMjN2LTMyMHEwLTE0IDktMjN0MjMtOSAyMyA5IDkgMjN6bTQwNyAxNTFsLTI1NiAyNTZxLTExIDktMjMgOXQtMjMtOXEtOS0xMC05LTIzdDktMjNsMjU2LTI1NnExMC05IDIzLTl0MjMgOXE5IDEwIDkgMjN0LTkgMjN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNoYWluQnJva2VuJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
