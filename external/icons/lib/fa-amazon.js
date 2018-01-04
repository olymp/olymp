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

var _ref2 = _react2.default.createElement('path', { d: 'M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z' });

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
icon.displayName = 'FaAmazon';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hbWF6b24uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHU5QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1hbWF6b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1NTEgMTQ3NnExNS02IDI2LTN0MTEgMTcuNS0xNSAzMy41cS0xMyAxNi00NCA0My41dC05NS41IDY4LTE0MSA3NC0xODggNTgtMjI5LjUgMjQuNXEtMTE5IDAtMjM4LTMxdC0yMDktNzYuNS0xNzIuNS0xMDQtMTMyLjUtMTA1LTg0LTg3LjVxLTgtOS0xMC0xNi41dDEtMTIgOC03IDExLjUtMiAxMS41IDQuNXExOTIgMTE3IDMwMCAxNjYgMzg5IDE3NiA3OTkgOTAgMTkwLTQwIDM5MS0xMzV6bTIwNy0xMTVxMTEgMTYgMi41IDY5LjV0LTI4LjUgMTAyLjVxLTM0IDgzLTg1IDEyNC0xNyAxNC0yNiA5dDAtMjRxMjEtNDUgNDQuNS0xMjEuNXQ2LjUtOTguNXEtNS03LTE1LjUtMTEuNXQtMjctNi0yOS41LTIuNS0zNSAwLTMxLjUgMi0zMSAzLTIyLjUgMnEtNiAxLTEzIDEuNXQtMTEgMS04LjUgMS03IC41aC0xMGwtMy0uNS0yLTEuNS0xLjUtM3EtNi0xNiA0Ny00MHQxMDMtMzBxNDYtNyAxMDgtMXQ3NiAyNHptLTM5NC00NDNxMCAzMSAxMy41IDY0dDMyIDU4IDM3LjUgNDYgMzMgMzJsMTMgMTEtMjI3IDIyNHEtNDAtMzctNzktNzUuNXQtNTgtNTguNWwtMTktMjBxLTExLTExLTI1LTMzLTM4IDU5LTk3LjUgMTAyLjV0LTEyNy41IDYzLjUtMTQwIDIzLTEzNy41LTIxLTExNy41LTY1LjUtODMtMTEzLTMxLTE2Mi41cTAtODQgMjgtMTU0dDcyLTExNi41IDEwNi41LTgzIDEyMi41LTU3IDEzMC0zNC41IDExOS41LTE4LjUgOTkuNS02LjV2LTEyN3EwLTY1LTIxLTk3LTM0LTUzLTEyMS01My02IDAtMTYuNSAxdC00MC41IDEyLTU2IDI5LjUtNTYgNTkuNS00OCA5NmwtMjk0LTI3cTAtNjAgMjItMTE5dDY3LTExMyAxMDgtOTUgMTUxLjUtNjUuNSAxOTAuNS0yNC41cTEwMCAwIDE4MSAyNXQxMjkuNSA2MS41IDgxIDgzIDQ1IDg2IDEyLjUgNzMuNXY1ODl6bS02NzIgMjFxMCA4NiA3MCAxMzMgNjYgNDQgMTM5IDIyIDg0LTI1IDExNC0xMjMgMTQtNDUgMTQtMTAxdi0xNjJxLTU5IDItMTExIDEydC0xMDYuNSAzMy41LTg3IDcxLTMyLjUgMTE0LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUFtYXpvbic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
