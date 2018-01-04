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

var _ref2 = _react2.default.createElement('path', { d: 'M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 .5-3.5t.5-3.5zm116-427l35-128h-292l32 128h225zm192 0h139l-35-128h-70zm449 428l78-300h-162l81 299q0 1 .5 3.5t1.5 3.5q0-1 .5-3t.5-3zm111-428l33-128h-297l34 128h230zm410 32v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z' });

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
icon.displayName = 'FaKrw';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1rcncuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLCtwQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1rcncuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTUxNCAxMTk1bDgxLTI5OWgtMTU5bDc1IDMwMHExIDEgMSAzdDEgM3EwLTEgLjUtMy41dC41LTMuNXptMTE2LTQyN2wzNS0xMjhoLTI5MmwzMiAxMjhoMjI1em0xOTIgMGgxMzlsLTM1LTEyOGgtNzB6bTQ0OSA0MjhsNzgtMzAwaC0xNjJsODEgMjk5cTAgMSAuNSAzLjV0MS41IDMuNXEwLTEgLjUtM3QuNS0zem0xMTEtNDI4bDMzLTEyOGgtMjk3bDM0IDEyOGgyMzB6bTQxMCAzMnY2NHEwIDE0LTkgMjN0LTIzIDloLTIxM2wtMTY0IDYxNnEtNyAyNC0zMSAyNGgtMTU5cS0yNCAwLTMxLTI0bC0xNjYtNjE2aC0yMDlsLTE2NyA2MTZxLTcgMjQtMzEgMjRoLTE1OXEtMTEgMC0xOS41LTd0LTEwLjUtMTdsLTE2MC02MTZoLTIwOHEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgxNzVsLTMzLTEyOGgtMTQycS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDEwOWwtODktMzQ0cS01LTE1IDUtMjggMTAtMTIgMjYtMTJoMTM3cTI2IDAgMzEgMjRsOTAgMzYwaDM1OWw5Ny0zNjBxNy0yNCAzMS0yNGgxMjZxMjQgMCAzMSAyNGw5OCAzNjBoMzY1bDkzLTM2MHE1LTI0IDMxLTI0aDEzN3ExNiAwIDI2IDEyIDEwIDEzIDUgMjhsLTkxIDM0NGgxMTFxMTQgMCAyMyA5dDkgMjN2NjRxMCAxNC05IDIzdC0yMyA5aC0xNDVsLTM0IDEyOGgxNzlxMTQgMCAyMyA5dDkgMjN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUtydyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
