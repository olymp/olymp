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

var _ref2 = _react2.default.createElement('path', { d: 'M1292 704q0 6 10 41 10 29 25 49.5t41 34 44 20 55 16.5q325 91 325 332 0 146-105.5 242.5t-254.5 96.5q-59 0-111.5-18.5t-91.5-45.5-77-74.5-63-87.5-53.5-103.5-43.5-103-39.5-106.5-35.5-95q-32-81-61.5-133.5t-73.5-96.5-104-64-142-20q-96 0-183 55.5t-138 144.5-51 185q0 160 106.5 279.5t263.5 119.5q177 0 258-95 56-63 83-116l84 152q-15 34-44 70l1 1q-131 152-388 152-147 0-269.5-79t-190.5-207.5-68-274.5q0-105 43.5-206t116-176.5 172-121.5 204.5-46q87 0 159 19t123.5 50 95 80 72.5 99 58.5 117 50.5 124.5 50 130.5 55 127q96 200 233 200 81 0 138.5-48.5t57.5-128.5q0-42-19-72t-50.5-46-72.5-31.5-84.5-27-87.5-34-81-52-65-82-39-122.5q-3-16-3-33 0-110 87.5-192t198.5-78q78 3 120.5 14.5t90.5 53.5h-1q12 11 23 24.5t26 36 19 27.5l-129 99q-26-49-54-70v-1q-23-21-97-21-49 0-84 33t-35 83z' });

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
icon.displayName = 'FaLastfm';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sYXN0Zm0uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDZ2QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1sYXN0Zm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyOTIgNzA0cTAgNiAxMCA0MSAxMCAyOSAyNSA0OS41dDQxIDM0IDQ0IDIwIDU1IDE2LjVxMzI1IDkxIDMyNSAzMzIgMCAxNDYtMTA1LjUgMjQyLjV0LTI1NC41IDk2LjVxLTU5IDAtMTExLjUtMTguNXQtOTEuNS00NS41LTc3LTc0LjUtNjMtODcuNS01My41LTEwMy41LTQzLjUtMTAzLTM5LjUtMTA2LjUtMzUuNS05NXEtMzItODEtNjEuNS0xMzMuNXQtNzMuNS05Ni41LTEwNC02NC0xNDItMjBxLTk2IDAtMTgzIDU1LjV0LTEzOCAxNDQuNS01MSAxODVxMCAxNjAgMTA2LjUgMjc5LjV0MjYzLjUgMTE5LjVxMTc3IDAgMjU4LTk1IDU2LTYzIDgzLTExNmw4NCAxNTJxLTE1IDM0LTQ0IDcwbDEgMXEtMTMxIDE1Mi0zODggMTUyLTE0NyAwLTI2OS41LTc5dC0xOTAuNS0yMDcuNS02OC0yNzQuNXEwLTEwNSA0My41LTIwNnQxMTYtMTc2LjUgMTcyLTEyMS41IDIwNC41LTQ2cTg3IDAgMTU5IDE5dDEyMy41IDUwIDk1IDgwIDcyLjUgOTkgNTguNSAxMTcgNTAuNSAxMjQuNSA1MCAxMzAuNSA1NSAxMjdxOTYgMjAwIDIzMyAyMDAgODEgMCAxMzguNS00OC41dDU3LjUtMTI4LjVxMC00Mi0xOS03MnQtNTAuNS00Ni03Mi41LTMxLjUtODQuNS0yNy04Ny41LTM0LTgxLTUyLTY1LTgyLTM5LTEyMi41cS0zLTE2LTMtMzMgMC0xMTAgODcuNS0xOTJ0MTk4LjUtNzhxNzggMyAxMjAuNSAxNC41dDkwLjUgNTMuNWgtMXExMiAxMSAyMyAyNC41dDI2IDM2IDE5IDI3LjVsLTEyOSA5OXEtMjYtNDktNTQtNzB2LTFxLTIzLTIxLTk3LTIxLTQ5IDAtODQgMzN0LTM1IDgzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFMYXN0Zm0nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
