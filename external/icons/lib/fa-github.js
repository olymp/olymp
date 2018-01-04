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

var _ref2 = _react2.default.createElement('path', { d: 'M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z' });

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
icon.displayName = 'FaGithub';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXRodWIuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHU4QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXRodWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTg5NiAxMjhxMjA5IDAgMzg1LjUgMTAzdDI3OS41IDI3OS41IDEwMyAzODUuNXEwIDI1MS0xNDYuNSA0NTEuNXQtMzc4LjUgMjc3LjVxLTI3IDUtNDAtN3QtMTMtMzBxMC0zIC41LTc2LjV0LjUtMTM0LjVxMC05Ny01Mi0xNDIgNTctNiAxMDIuNS0xOHQ5NC0zOSA4MS02Ni41IDUzLTEwNSAyMC41LTE1MC41cTAtMTE5LTc5LTIwNiAzNy05MS04LTIwNC0yOC05LTgxIDExdC05MiA0NGwtMzggMjRxLTkzLTI2LTE5Mi0yNnQtMTkyIDI2cS0xNi0xMS00Mi41LTI3dC04My41LTM4LjUtODUtMTMuNXEtNDUgMTEzLTggMjA0LTc5IDg3LTc5IDIwNiAwIDg1IDIwLjUgMTUwdDUyLjUgMTA1IDgwLjUgNjcgOTQgMzkgMTAyLjUgMThxLTM5IDM2LTQ5IDEwMy0yMSAxMC00NSAxNXQtNTcgNS02NS41LTIxLjUtNTUuNS02Mi41cS0xOS0zMi00OC41LTUydC00OS41LTI0bC0yMC0zcS0yMSAwLTI5IDQuNXQtNSAxMS41IDkgMTQgMTMgMTJsNyA1cTIyIDEwIDQzLjUgMzh0MzEuNSA1MWwxMCAyM3ExMyAzOCA0NCA2MS41dDY3IDMwIDY5LjUgNyA1NS41LTMuNWwyMy00cTAgMzggLjUgODguNXQuNSA1NC41cTAgMTgtMTMgMzB0LTQwIDdxLTIzMi03Ny0zNzguNS0yNzcuNXQtMTQ2LjUtNDUxLjVxMC0yMDkgMTAzLTM4NS41dDI3OS41LTI3OS41IDM4NS41LTEwM3ptLTQ3NyAxMTAzcTMtNy03LTEyLTEwLTMtMTMgMi0zIDcgNyAxMiA5IDYgMTMtMnptMzEgMzRxNy01LTItMTYtMTAtOS0xNi0zLTcgNSAyIDE2IDEwIDEwIDE2IDN6bTMwIDQ1cTktNyAwLTE5LTgtMTMtMTctNi05IDUgMCAxOHQxNyA3em00MiA0MnE4LTgtNC0xOS0xMi0xMi0yMC0zLTkgOCA0IDE5IDEyIDEyIDIwIDN6bTU3IDI1cTMtMTEtMTMtMTYtMTUtNC0xOSA3dDEzIDE1cTE1IDYgMTktNnptNjMgNXEwLTEzLTE3LTExLTE2IDAtMTYgMTEgMCAxMyAxNyAxMSAxNiAwIDE2LTExem01OC0xMHEtMi0xMS0xOC05LTE2IDMtMTQgMTV0MTggOCAxNC0xNHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhR2l0aHViJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
