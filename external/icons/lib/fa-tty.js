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

var _ref2 = _react2.default.createElement('path', { d: 'M448 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm-192-384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm576 384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm-192-384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm-574-160q-28 0-47-19t-19-46v-129h514v129q0 27-19 46t-46 19h-383zm1150 544v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm-192-384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm576 384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm-192-384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm384-408v13h-514v-10q0-104-382-102-382 1-382 102v10h-514v-13q0-17 8.5-43t34-64 65.5-75.5 110.5-76 160-67.5 224-47.5 293.5-18.5 293 18.5 224 47.5 160.5 67.5 110.5 76 65.5 75.5 34 64 8.5 43zm0 408v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zm0-354v129q0 27-19 46t-46 19h-384q-27 0-46-19t-19-46v-129h514z' });

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
icon.displayName = 'FaTty';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10dHkuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDJtQ0FBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS10dHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTQ0OCAxMzEydjE5MnEwIDE0LTkgMjN0LTIzIDloLTE5MnEtMTQgMC0yMy05dC05LTIzdi0xOTJxMC0xNCA5LTIzdDIzLTloMTkycTE0IDAgMjMgOXQ5IDIzem0tMTkyLTM4NHYxOTJxMCAxNC05IDIzdC0yMyA5aC0xOTJxLTE0IDAtMjMtOXQtOS0yM3YtMTkycTAtMTQgOS0yM3QyMy05aDE5MnExNCAwIDIzIDl0OSAyM3ptNTc2IDM4NHYxOTJxMCAxNC05IDIzdC0yMyA5aC0xOTJxLTE0IDAtMjMtOXQtOS0yM3YtMTkycTAtMTQgOS0yM3QyMy05aDE5MnExNCAwIDIzIDl0OSAyM3ptLTE5Mi0zODR2MTkycTAgMTQtOSAyM3QtMjMgOWgtMTkycS0xNCAwLTIzLTl0LTktMjN2LTE5MnEwLTE0IDktMjN0MjMtOWgxOTJxMTQgMCAyMyA5dDkgMjN6bS01NzQtMTYwcS0yOCAwLTQ3LTE5dC0xOS00NnYtMTI5aDUxNHYxMjlxMCAyNy0xOSA0NnQtNDYgMTloLTM4M3ptMTE1MCA1NDR2MTkycTAgMTQtOSAyM3QtMjMgOWgtMTkycS0xNCAwLTIzLTl0LTktMjN2LTE5MnEwLTE0IDktMjN0MjMtOWgxOTJxMTQgMCAyMyA5dDkgMjN6bS0xOTItMzg0djE5MnEwIDE0LTkgMjN0LTIzIDloLTE5MnEtMTQgMC0yMy05dC05LTIzdi0xOTJxMC0xNCA5LTIzdDIzLTloMTkycTE0IDAgMjMgOXQ5IDIzem01NzYgMzg0djE5MnEwIDE0LTkgMjN0LTIzIDloLTE5MnEtMTQgMC0yMy05dC05LTIzdi0xOTJxMC0xNCA5LTIzdDIzLTloMTkycTE0IDAgMjMgOXQ5IDIzem0tMTkyLTM4NHYxOTJxMCAxNC05IDIzdC0yMyA5aC0xOTJxLTE0IDAtMjMtOXQtOS0yM3YtMTkycTAtMTQgOS0yM3QyMy05aDE5MnExNCAwIDIzIDl0OSAyM3ptMzg0LTQwOHYxM2gtNTE0di0xMHEwLTEwNC0zODItMTAyLTM4MiAxLTM4MiAxMDJ2MTBoLTUxNHYtMTNxMC0xNyA4LjUtNDN0MzQtNjQgNjUuNS03NS41IDExMC41LTc2IDE2MC02Ny41IDIyNC00Ny41IDI5My41LTE4LjUgMjkzIDE4LjUgMjI0IDQ3LjUgMTYwLjUgNjcuNSAxMTAuNSA3NiA2NS41IDc1LjUgMzQgNjQgOC41IDQzem0wIDQwOHYxOTJxMCAxNC05IDIzdC0yMyA5aC0xOTJxLTE0IDAtMjMtOXQtOS0yM3YtMTkycTAtMTQgOS0yM3QyMy05aDE5MnExNCAwIDIzIDl0OSAyM3ptMC0zNTR2MTI5cTAgMjctMTkgNDZ0LTQ2IDE5aC0zODRxLTI3IDAtNDYtMTl0LTE5LTQ2di0xMjloNTE0elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFUdHknO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
