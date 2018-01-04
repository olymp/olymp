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

var _ref2 = _react2.default.createElement('path', { d: 'M256 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm1408-576q0-51-39-89.5t-89-38.5h-576q0-20 15-48.5t33-55 33-68 15-84.5q0-67-44.5-97.5t-115.5-30.5q-24 0-90 139-24 44-37 65-40 64-112 145-71 81-101 106-69 57-140 57h-32v640h32q72 0 167 32t193.5 64 179.5 32q189 0 189-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5h331q52 0 90-38t38-90zm128-1q0 105-75.5 181t-180.5 76h-169q-4 62-37 119 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5q-133 0-322-69-164-59-223-59h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q10 0 21.5-4.5t23.5-14 22.5-18 24-22.5 20.5-21.5 19-21.5 14-17q65-74 100-129 13-21 33-62t37-72 40.5-63 55-49.5 69.5-17.5q125 0 206.5 67t81.5 189q0 68-22 128h374q104 0 180 76t76 179z' });

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
icon.displayName = 'FaHandORight';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLW8tcmlnaHQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGt2QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLW8tcmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTI1NiAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0xNDA4LTU3NnEwLTUxLTM5LTg5LjV0LTg5LTM4LjVoLTU3NnEwLTIwIDE1LTQ4LjV0MzMtNTUgMzMtNjggMTUtODQuNXEwLTY3LTQ0LjUtOTcuNXQtMTE1LjUtMzAuNXEtMjQgMC05MCAxMzktMjQgNDQtMzcgNjUtNDAgNjQtMTEyIDE0NS03MSA4MS0xMDEgMTA2LTY5IDU3LTE0MCA1N2gtMzJ2NjQwaDMycTcyIDAgMTY3IDMydDE5My41IDY0IDE3OS41IDMycTE4OSAwIDE4OS0xNjcgMC0yNi01LTU2IDMwLTE2IDQ3LjUtNTIuNXQxNy41LTczLjUtMTgtNjlxNTMtNTAgNTMtMTE5IDAtMjUtMTAtNTUuNXQtMjUtNDcuNWgzMzFxNTIgMCA5MC0zOHQzOC05MHptMTI4LTFxMCAxMDUtNzUuNSAxODF0LTE4MC41IDc2aC0xNjlxLTQgNjItMzcgMTE5IDMgMjEgMyA0MyAwIDEwMS02MCAxNzggMSAxMzktODUgMjE5LjV0LTIyNyA4MC41cS0xMzMgMC0zMjItNjktMTY0LTU5LTIyMy01OWgtMjg4cS01MyAwLTkwLjUtMzcuNXQtMzcuNS05MC41di02NDBxMC01MyAzNy41LTkwLjV0OTAuNS0zNy41aDI4OHExMCAwIDIxLjUtNC41dDIzLjUtMTQgMjIuNS0xOCAyNC0yMi41IDIwLjUtMjEuNSAxOS0yMS41IDE0LTE3cTY1LTc0IDEwMC0xMjkgMTMtMjEgMzMtNjJ0MzctNzIgNDAuNS02MyA1NS00OS41IDY5LjUtMTcuNXExMjUgMCAyMDYuNSA2N3Q4MS41IDE4OXEwIDY4LTIyIDEyOGgzNzRxMTA0IDAgMTgwIDc2dDc2IDE3OXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZE9SaWdodCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
