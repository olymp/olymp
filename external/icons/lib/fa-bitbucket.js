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

var _ref2 = _react2.default.createElement('path', { d: 'M1007 859q8 63-50.5 101t-111.5 6q-39-17-53.5-58t-.5-82 52-58q36-18 72.5-12t64 35.5 27.5 67.5zm111-21q-14-107-113-164t-197-13q-63 28-100.5 88.5t-34.5 129.5q4 91 77.5 155t165.5 56q91-8 152-84t50-168zm239-542q-20-27-56-44.5t-58-22-71-12.5q-291-47-566 2-43 7-66 12t-55 22-50 43q30 28 76 45.5t73.5 22 87.5 11.5q228 29 448 1 63-8 89.5-12t72.5-21.5 75-46.5zm57 1035q-8 26-15.5 76.5t-14 84-28.5 70-58 56.5q-86 48-189.5 71.5t-202 22-201.5-18.5q-46-8-81.5-18t-76.5-27-73-43.5-52-61.5q-25-96-57-292l6-16 18-9q223 148 506.5 148t507.5-148q21 6 24 23t-5 45-8 37zm181-961q-26 167-111 655-5 30-27 56t-43.5 40-54.5 31q-252 126-610 88-248-27-394-139-15-12-25.5-26.5t-17-35-9-34-6-39.5-5.5-35q-9-50-26.5-150t-28-161.5-23.5-147.5-22-158q3-26 17.5-48.5t31.5-37.5 45-30 46-22.5 48-18.5q125-46 313-64 379-37 676 50 155 46 215 122 16 20 16.5 51t-5.5 54z' });

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
icon.displayName = 'FaBitbucket';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaXRidWNrZXQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLCt6QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixhQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaXRidWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwMDcgODU5cTggNjMtNTAuNSAxMDF0LTExMS41IDZxLTM5LTE3LTUzLjUtNTh0LS41LTgyIDUyLTU4cTM2LTE4IDcyLjUtMTJ0NjQgMzUuNSAyNy41IDY3LjV6bTExMS0yMXEtMTQtMTA3LTExMy0xNjR0LTE5Ny0xM3EtNjMgMjgtMTAwLjUgODguNXQtMzQuNSAxMjkuNXE0IDkxIDc3LjUgMTU1dDE2NS41IDU2cTkxLTggMTUyLTg0dDUwLTE2OHptMjM5LTU0MnEtMjAtMjctNTYtNDQuNXQtNTgtMjItNzEtMTIuNXEtMjkxLTQ3LTU2NiAyLTQzIDctNjYgMTJ0LTU1IDIyLTUwIDQzcTMwIDI4IDc2IDQ1LjV0NzMuNSAyMiA4Ny41IDExLjVxMjI4IDI5IDQ0OCAxIDYzLTggODkuNS0xMnQ3Mi41LTIxLjUgNzUtNDYuNXptNTcgMTAzNXEtOCAyNi0xNS41IDc2LjV0LTE0IDg0LTI4LjUgNzAtNTggNTYuNXEtODYgNDgtMTg5LjUgNzEuNXQtMjAyIDIyLTIwMS41LTE4LjVxLTQ2LTgtODEuNS0xOHQtNzYuNS0yNy03My00My41LTUyLTYxLjVxLTI1LTk2LTU3LTI5Mmw2LTE2IDE4LTlxMjIzIDE0OCA1MDYuNSAxNDh0NTA3LjUtMTQ4cTIxIDYgMjQgMjN0LTUgNDUtOCAzN3ptMTgxLTk2MXEtMjYgMTY3LTExMSA2NTUtNSAzMC0yNyA1NnQtNDMuNSA0MC01NC41IDMxcS0yNTIgMTI2LTYxMCA4OC0yNDgtMjctMzk0LTEzOS0xNS0xMi0yNS41LTI2LjV0LTE3LTM1LTktMzQtNi0zOS41LTUuNS0zNXEtOS01MC0yNi41LTE1MHQtMjgtMTYxLjUtMjMuNS0xNDcuNS0yMi0xNThxMy0yNiAxNy41LTQ4LjV0MzEuNS0zNy41IDQ1LTMwIDQ2LTIyLjUgNDgtMTguNXExMjUtNDYgMzEzLTY0IDM3OS0zNyA2NzYgNTAgMTU1IDQ2IDIxNSAxMjIgMTYgMjAgMTYuNSA1MXQtNS41IDU0elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFCaXRidWNrZXQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
