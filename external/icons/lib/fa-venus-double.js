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

var _ref2 = _react2.default.createElement('path', { d: 'M1790 529q12 155-52.5 292t-186 224-271.5 103v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-512v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q17-206 164.5-356.5t352.5-169.5q206-21 377 94 171-115 377-94 205 19 352.5 169.5t164.5 356.5zm-894 360q128-131 128-313t-128-313q-128 131-128 313t128 313zm-320 135q115 0 218-57-154-165-154-391 0-224 154-391-103-57-218-57-185 0-316.5 131.5t-131.5 316.5 131.5 316.5 316.5 131.5zm576 384v-260q-137-15-256-94-119 79-256 94v260h512zm64-384q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-115 0-218 57 154 167 154 391 0 226-154 391 103 57 218 57z' });

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
icon.displayName = 'FaVenusDouble';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12ZW51cy1kb3VibGUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGl0QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS12ZW51cy1kb3VibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE3OTAgNTI5cTEyIDE1NS01Mi41IDI5MnQtMTg2IDIyNC0yNzEuNSAxMDN2MjYwaDIyNHExNCAwIDIzIDl0OSAyM3Y2NHEwIDE0LTkgMjN0LTIzIDloLTIyNHYyMjRxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0yMjRoLTUxMnYyMjRxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0yMjRoLTIyNHEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgyMjR2LTI2MHEtMTUwLTE2LTI3MS41LTEwM3QtMTg2LTIyNC01Mi41LTI5MnExNy0yMDYgMTY0LjUtMzU2LjV0MzUyLjUtMTY5LjVxMjA2LTIxIDM3NyA5NCAxNzEtMTE1IDM3Ny05NCAyMDUgMTkgMzUyLjUgMTY5LjV0MTY0LjUgMzU2LjV6bS04OTQgMzYwcTEyOC0xMzEgMTI4LTMxM3QtMTI4LTMxM3EtMTI4IDEzMS0xMjggMzEzdDEyOCAzMTN6bS0zMjAgMTM1cTExNSAwIDIxOC01Ny0xNTQtMTY1LTE1NC0zOTEgMC0yMjQgMTU0LTM5MS0xMDMtNTctMjE4LTU3LTE4NSAwLTMxNi41IDEzMS41dC0xMzEuNSAzMTYuNSAxMzEuNSAzMTYuNSAzMTYuNSAxMzEuNXptNTc2IDM4NHYtMjYwcS0xMzctMTUtMjU2LTk0LTExOSA3OS0yNTYgOTR2MjYwaDUxMnptNjQtMzg0cTE4NSAwIDMxNi41LTEzMS41dDEzMS41LTMxNi41LTEzMS41LTMxNi41LTMxNi41LTEzMS41cS0xMTUgMC0yMTggNTcgMTU0IDE2NyAxNTQgMzkxIDAgMjI2LTE1NCAzOTEgMTAzIDU3IDIxOCA1N3pcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVmVudXNEb3VibGUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
