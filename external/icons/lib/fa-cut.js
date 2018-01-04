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

var _ref2 = _react2.default.createElement('path', { d: 'M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z' });

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
icon.displayName = 'FaCut';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jdXQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDQ2QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1jdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTk2MCA4OTZxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NS00NSAxOS00NS0xOS0xOS00NSAxOS00NSA0NS0xOXptMzAwIDY0bDUwNyAzOThxMjggMjAgMjUgNTYtNSAzNS0zNSA1MWwtMTI4IDY0cS0xMyA3LTI5IDctMTcgMC0zMS04bC02OTAtMzg3LTExMCA2NnEtOCA0LTEyIDUgMTQgNDkgMTAgOTctNyA3Ny01NiAxNDcuNXQtMTMyIDEyMy41cS0xMzIgODQtMjc3IDg0LTEzNiAwLTIyMi03OC05MC04NC03OS0yMDcgNy03NiA1Ni0xNDd0MTMxLTEyNHExMzItODQgMjc4LTg0IDgzIDAgMTUxIDMxIDktMTMgMjItMjJsMTIyLTczLTEyMi03M3EtMTMtOS0yMi0yMi02OCAzMS0xNTEgMzEtMTQ2IDAtMjc4LTg0LTgyLTUzLTEzMS0xMjR0LTU2LTE0N3EtNS01OSAxNS41LTExM3Q2My41LTkzcTg1LTc5IDIyMi03OSAxNDUgMCAyNzcgODQgODMgNTIgMTMyIDEyM3Q1NiAxNDhxNCA0OC0xMCA5NyA0IDEgMTIgNWwxMTAgNjYgNjkwLTM4N3ExNC04IDMxLTggMTYgMCAyOSA3bDEyOCA2NHEzMCAxNiAzNSA1MSAzIDM2LTI1IDU2em0tNjgxLTI2MHE0Ni00MiAyMS0xMDh0LTEwNi0xMTdxLTkyLTU5LTE5Mi01OS03NCAwLTExMyAzNi00NiA0Mi0yMSAxMDh0MTA2IDExN3E5MiA1OSAxOTIgNTkgNzQgMCAxMTMtMzZ6bS04NSA3NDVxODEtNTEgMTA2LTExN3QtMjEtMTA4cS0zOS0zNi0xMTMtMzYtMTAwIDAtMTkyIDU5LTgxIDUxLTEwNiAxMTd0MjEgMTA4cTM5IDM2IDExMyAzNiAxMDAgMCAxOTItNTl6bTE3OC02MTNsOTYgNTh2LTExcTAtMzYgMzMtNTZsMTQtOC03OS00Ny0yNiAyNnEtMyAzLTEwIDExdC0xMiAxMnEtMiAyLTQgMy41dC0zIDIuNXptMjI0IDIyNGw5NiAzMiA3MzYtNTc2LTEyOC02NC03NjggNDMxdjExM2wtMTYwIDk2IDkgOHEyIDIgNyA2IDQgNCAxMSAxMnQxMSAxMmwyNiAyNnptNzA0IDQxNmwxMjgtNjQtNTIwLTQwOC0xNzcgMTM4cS0yIDMtMTMgN3pcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQ3V0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
