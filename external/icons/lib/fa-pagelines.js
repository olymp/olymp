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

var _ref2 = _react2.default.createElement('path', { d: 'M1594 1103q-32 80-76 138t-91 88.5-99 46.5-101.5 14.5-96.5-8.5-86.5-22-69.5-27.5-46-22.5l-17-10q-113 228-289.5 359.5t-384.5 132.5q-19 0-32-13t-13-32 13-31.5 32-12.5q173-1 322.5-107.5t251.5-294.5q-36 14-72 23t-83 13-91-2.5-93-28.5-92-59-84.5-100-74.5-146q114-47 214-57t167.5 7.5 124.5 56.5 88.5 77 56.5 82q53-131 79-291-7 1-18 2.5t-46.5 2.5-69.5-.5-81.5-10-88.5-23-84-42.5-75-65-54.5-94.5-28.5-127.5q70-28 133.5-36.5t112.5 1 92 30 73.5 50 56 61 42 63 27.5 56 16 39.5l4 16q12-122 12-195-8-6-21.5-16t-49-44.5-63.5-71.5-54-93-33-112.5 12-127 70-138.5q73 25 127.5 61.5t84.5 76.5 48 85 20.5 89-.5 85.5-13 76.5-19 62-17 42l-7 15q1 4 1 50t-1 72q3-7 10-18.5t30.5-43 50.5-58 71-55.5 91.5-44.5 112-14.5 132.5 24q-2 78-21.5 141.5t-50 104.5-69.5 71.5-81.5 45.5-84.5 24-80 9.5-67.5-1-46.5-4.5l-17-3q-23 147-73 283 6-7 18-18.5t49.5-41 77.5-52.5 99.5-42 117.5-20 129 23.5 137 77.5z' });

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
icon.displayName = 'FaPagelines';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1wYWdlbGluZXMuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGsyQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixhQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1wYWdlbGluZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1OTQgMTEwM3EtMzIgODAtNzYgMTM4dC05MSA4OC41LTk5IDQ2LjUtMTAxLjUgMTQuNS05Ni41LTguNS04Ni41LTIyLTY5LjUtMjcuNS00Ni0yMi41bC0xNy0xMHEtMTEzIDIyOC0yODkuNSAzNTkuNXQtMzg0LjUgMTMyLjVxLTE5IDAtMzItMTN0LTEzLTMyIDEzLTMxLjUgMzItMTIuNXExNzMtMSAzMjIuNS0xMDcuNXQyNTEuNS0yOTQuNXEtMzYgMTQtNzIgMjN0LTgzIDEzLTkxLTIuNS05My0yOC41LTkyLTU5LTg0LjUtMTAwLTc0LjUtMTQ2cTExNC00NyAyMTQtNTd0MTY3LjUgNy41IDEyNC41IDU2LjUgODguNSA3NyA1Ni41IDgycTUzLTEzMSA3OS0yOTEtNyAxLTE4IDIuNXQtNDYuNSAyLjUtNjkuNS0uNS04MS41LTEwLTg4LjUtMjMtODQtNDIuNS03NS02NS01NC41LTk0LjUtMjguNS0xMjcuNXE3MC0yOCAxMzMuNS0zNi41dDExMi41IDEgOTIgMzAgNzMuNSA1MCA1NiA2MSA0MiA2MyAyNy41IDU2IDE2IDM5LjVsNCAxNnExMi0xMjIgMTItMTk1LTgtNi0yMS41LTE2dC00OS00NC41LTYzLjUtNzEuNS01NC05My0zMy0xMTIuNSAxMi0xMjcgNzAtMTM4LjVxNzMgMjUgMTI3LjUgNjEuNXQ4NC41IDc2LjUgNDggODUgMjAuNSA4OS0uNSA4NS41LTEzIDc2LjUtMTkgNjItMTcgNDJsLTcgMTVxMSA0IDEgNTB0LTEgNzJxMy03IDEwLTE4LjV0MzAuNS00MyA1MC41LTU4IDcxLTU1LjUgOTEuNS00NC41IDExMi0xNC41IDEzMi41IDI0cS0yIDc4LTIxLjUgMTQxLjV0LTUwIDEwNC41LTY5LjUgNzEuNS04MS41IDQ1LjUtODQuNSAyNC04MCA5LjUtNjcuNS0xLTQ2LjUtNC41bC0xNy0zcS0yMyAxNDctNzMgMjgzIDYtNyAxOC0xOC41dDQ5LjUtNDEgNzcuNS01Mi41IDk5LjUtNDIgMTE3LjUtMjAgMTI5IDIzLjUgMTM3IDc3LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVBhZ2VsaW5lcyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
