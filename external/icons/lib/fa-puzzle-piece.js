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

var _ref2 = _react2.default.createElement('path', { d: 'M1728 1098q0 81-44.5 135t-123.5 54q-41 0-77.5-17.5t-59-38-56.5-38-71-17.5q-110 0-110 124 0 39 16 115t15 115v5q-22 0-33 1-34 3-97.5 11.5t-115.5 13.5-98 5q-61 0-103-26.5t-42-83.5q0-37 17.5-71t38-56.5 38-59 17.5-77.5q0-79-54-123.5t-135-44.5q-84 0-143 45.5t-59 127.5q0 43 15 83t33.5 64.5 33.5 53 15 50.5q0 45-46 89-37 35-117 35-95 0-245-24-9-2-27.5-4t-27.5-4l-13-2q-1 0-3-1-2 0-2-1v-1024q2 1 17.5 3.5t34 5 21.5 3.5q150 24 245 24 80 0 117-35 46-44 46-89 0-22-15-50.5t-33.5-53-33.5-64.5-15-83q0-82 59-127.5t144-45.5q80 0 134 44.5t54 123.5q0 41-17.5 77.5t-38 59-38 56.5-17.5 71q0 57 42 83.5t103 26.5q64 0 180-15t163-17v2q-1 2-3.5 17.5t-5 34-3.5 21.5q-24 150-24 245 0 80 35 117 44 46 89 46 22 0 50.5-15t53-33.5 64.5-33.5 83-15q82 0 127.5 59t45.5 143z' });

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
icon.displayName = 'FaPuzzlePiece';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1wdXp6bGUtcGllY2UuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHd1QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1wdXp6bGUtcGllY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE3MjggMTA5OHEwIDgxLTQ0LjUgMTM1dC0xMjMuNSA1NHEtNDEgMC03Ny41LTE3LjV0LTU5LTM4LTU2LjUtMzgtNzEtMTcuNXEtMTEwIDAtMTEwIDEyNCAwIDM5IDE2IDExNXQxNSAxMTV2NXEtMjIgMC0zMyAxLTM0IDMtOTcuNSAxMS41dC0xMTUuNSAxMy41LTk4IDVxLTYxIDAtMTAzLTI2LjV0LTQyLTgzLjVxMC0zNyAxNy41LTcxdDM4LTU2LjUgMzgtNTkgMTcuNS03Ny41cTAtNzktNTQtMTIzLjV0LTEzNS00NC41cS04NCAwLTE0MyA0NS41dC01OSAxMjcuNXEwIDQzIDE1IDgzdDMzLjUgNjQuNSAzMy41IDUzIDE1IDUwLjVxMCA0NS00NiA4OS0zNyAzNS0xMTcgMzUtOTUgMC0yNDUtMjQtOS0yLTI3LjUtNHQtMjcuNS00bC0xMy0ycS0xIDAtMy0xLTIgMC0yLTF2LTEwMjRxMiAxIDE3LjUgMy41dDM0IDUgMjEuNSAzLjVxMTUwIDI0IDI0NSAyNCA4MCAwIDExNy0zNSA0Ni00NCA0Ni04OSAwLTIyLTE1LTUwLjV0LTMzLjUtNTMtMzMuNS02NC41LTE1LTgzcTAtODIgNTktMTI3LjV0MTQ0LTQ1LjVxODAgMCAxMzQgNDQuNXQ1NCAxMjMuNXEwIDQxLTE3LjUgNzcuNXQtMzggNTktMzggNTYuNS0xNy41IDcxcTAgNTcgNDIgODMuNXQxMDMgMjYuNXE2NCAwIDE4MC0xNXQxNjMtMTd2MnEtMSAyLTMuNSAxNy41dC01IDM0LTMuNSAyMS41cS0yNCAxNTAtMjQgMjQ1IDAgODAgMzUgMTE3IDQ0IDQ2IDg5IDQ2IDIyIDAgNTAuNS0xNXQ1My0zMy41IDY0LjUtMzMuNSA4My0xNXE4MiAwIDEyNy41IDU5dDQ1LjUgMTQzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFQdXp6bGVQaWVjZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
