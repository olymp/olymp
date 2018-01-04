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

var _ref2 = _react2.default.createElement('path', { d: 'M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zm-307-181q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zm395 0q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zm251-120q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zm358 30q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z' });

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
icon.displayName = 'FaReddit';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZWRkaXQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHVzQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZWRkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwOTUgMTE2N3ExNiAxNiAwIDMxLTYyIDYyLTE5OSA2MnQtMTk5LTYycS0xNi0xNSAwLTMxIDYtNiAxNS02dDE1IDZxNDggNDkgMTY5IDQ5IDEyMCAwIDE2OS00OSA2LTYgMTUtNnQxNSA2em0tMzA3LTE4MXEwIDM3LTI2IDYzdC02MyAyNi02My41LTI2LTI2LjUtNjNxMC0zOCAyNi41LTY0dDYzLjUtMjYgNjMgMjYuNSAyNiA2My41em0zOTUgMHEwIDM3LTI2LjUgNjN0LTYzLjUgMjYtNjMtMjYtMjYtNjMgMjYtNjMuNSA2My0yNi41IDYzLjUgMjYgMjYuNSA2NHptMjUxLTEyMHEwLTQ5LTM1LTg0dC04NS0zNS04NiAzNnEtMTMwLTkwLTMxMS05Nmw2My0yODMgMjAwIDQ1cTAgMzcgMjYgNjN0NjMgMjYgNjMuNS0yNi41IDI2LjUtNjMuNS0yNi41LTYzLjUtNjMuNS0yNi41cS01NCAwLTgwIDUwbC0yMjEtNDlxLTE5LTUtMjUgMTZsLTY5IDMxMnEtMTgwIDctMzA5IDk3LTM1LTM3LTg3LTM3LTUwIDAtODUgMzV0LTM1IDg0cTAgMzUgMTguNSA2NHQ0OS41IDQ0cS02IDI3LTYgNTYgMCAxNDIgMTQwIDI0M3QzMzcgMTAxcTE5OCAwIDMzOC0xMDF0MTQwLTI0M3EwLTMyLTctNTcgMzAtMTUgNDgtNDMuNXQxOC02My41em0zNTggMzBxMCAxODItNzEgMzQ4dC0xOTEgMjg2LTI4NiAxOTEtMzQ4IDcxLTM0OC03MS0yODYtMTkxLTE5MS0yODYtNzEtMzQ4IDcxLTM0OCAxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxIDM0OCA3MSAyODYgMTkxIDE5MSAyODYgNzEgMzQ4elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFSZWRkaXQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
