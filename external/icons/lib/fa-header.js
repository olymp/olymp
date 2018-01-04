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

var _ref2 = _react2.default.createElement('path', { d: 'M1682 1664q-44 0-132.5-3.5t-133.5-3.5q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4h-675q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5t-138.5-3.5q-43 0-128 3.5t-127 3.5q-23 0-35.5-21t-12.5-45q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57v-813q0-3 .5-26t0-36.5-1.5-38.5-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5t138.5 3.5q42 0 126.5-3.5t126.5-3.5q25 0 37.5 22t12.5 48q0 30-17 43.5t-38.5 14.5-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13-25.5-49.5q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z' });

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
icon.displayName = 'FaHeader';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oZWFkZXIuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGk2QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE2ODIgMTY2NHEtNDQgMC0xMzIuNS0zLjV0LTEzMy41LTMuNXEtNDQgMC0xMzIgMy41dC0xMzIgMy41cS0yNCAwLTM3LTIwLjV0LTEzLTQ1LjVxMC0zMSAxNy00NnQzOS0xNyA1MS03IDQ1LTE1cTMzLTIxIDMzLTE0MGwtMS0zOTFxMC0yMS0xLTMxLTEzLTQtNTAtNGgtNjc1cS0zOCAwLTUxIDQtMSAxMC0xIDMxbC0xIDM3MXEwIDE0MiAzNyAxNjQgMTYgMTAgNDggMTN0NTcgMy41IDQ1IDE1IDIwIDQ1LjVxMCAyNi0xMi41IDQ4dC0zNi41IDIycS00NyAwLTEzOS41LTMuNXQtMTM4LjUtMy41cS00MyAwLTEyOCAzLjV0LTEyNyAzLjVxLTIzIDAtMzUuNS0yMXQtMTIuNS00NXEwLTMwIDE1LjUtNDV0MzYtMTcuNSA0Ny41LTcuNSA0Mi0xNXEzMy0yMyAzMy0xNDNsLTEtNTd2LTgxM3EwLTMgLjUtMjZ0MC0zNi41LTEuNS0zOC41LTMuNS00Mi02LjUtMzYuNS0xMS0zMS41LTE2LTE4cS0xNS0xMC00NS0xMnQtNTMtMi00MS0xNC0xOC00NXEwLTI2IDEyLTQ4dDM2LTIycTQ2IDAgMTM4LjUgMy41dDEzOC41IDMuNXE0MiAwIDEyNi41LTMuNXQxMjYuNS0zLjVxMjUgMCAzNy41IDIydDEyLjUgNDhxMCAzMC0xNyA0My41dC0zOC41IDE0LjUtNDkuNSA0LTQzIDEzcS0zNSAyMS0zNSAxNjBsMSAzMjBxMCAyMSAxIDMyIDEzIDMgMzkgM2g2OTlxMjUgMCAzOC0zIDEtMTEgMS0zMmwxLTMyMHEwLTEzOS0zNS0xNjAtMTgtMTEtNTguNS0xMi41dC02Ni0xMy0yNS41LTQ5LjVxMC0yNiAxMi41LTQ4dDM3LjUtMjJxNDQgMCAxMzIgMy41dDEzMiAzLjVxNDMgMCAxMjktMy41dDEyOS0zLjVxMjUgMCAzNy41IDIydDEyLjUgNDhxMCAzMC0xNy41IDQ0dC00MCAxNC41LTUxLjUgMy00NCAxMi41cS0zNSAyMy0zNSAxNjFsMSA5NDNxMCAxMTkgMzQgMTQwIDE2IDEwIDQ2IDEzLjV0NTMuNSA0LjUgNDEuNSAxNS41IDE4IDQ0LjVxMCAyNi0xMiA0OHQtMzYgMjJ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUhlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
