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

var _ref2 = _react2.default.createElement('path', { d: 'M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v784l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zm0-128q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z' });

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
icon.displayName = 'FaHandPaperO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXBhcGVyLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLCtsQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXBhcGVyLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTg4MCAxMjhxLTQ2IDAtNzkgMzN0LTMzIDc5djY1NmgtMzJ2LTUyOHEwLTQ2LTMzLTc5dC03OS0zMy03OSAzMy0zMyA3OXY3ODRsLTE1NC0yMDVxLTM4LTUxLTEwMi01MS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41cTAgNDMgMjYgNzdsMzg0IDUxMnEzOCA1MSAxMDIgNTFoNjg4cTM0IDAgNjEtMjJ0MzQtNTZsNzYtNDA1cTUtMzIgNS01OXYtNDk4cTAtNDYtMzMtNzl0LTc5LTMzLTc5IDMzLTMzIDc5djI3MmgtMzJ2LTUyOHEwLTQ2LTMzLTc5dC03OS0zMy03OSAzMy0zMyA3OXY1MjhoLTMydi02NTZxMC00Ni0zMy03OXQtNzktMzN6bTAtMTI4cTY4IDAgMTI1LjUgMzUuNXQ4OC41IDk2LjVxMTktNCA0Mi00IDk5IDAgMTY5LjUgNzAuNXQ3MC41IDE2OS41djE3cTEwNS02IDE4MC41IDY0dDc1LjUgMTc1djQ5OHEwIDQwLTggODNsLTc2IDQwNHEtMTQgNzktNzYuNSAxMzF0LTE0My41IDUyaC02ODhxLTYwIDAtMTE0LjUtMjcuNXQtOTAuNS03NC41bC0zODQtNTEycS01MS02OC01MS0xNTQgMC0xMDYgNzUtMTgxdDE4MS03NXE3OCAwIDEyOCAzNHYtNDM0cTAtOTkgNzAuNS0xNjkuNXQxNjkuNS03MC41cTIzIDAgNDIgNCAzMS02MSA4OC41LTk2LjV0MTI1LjUtMzUuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZFBhcGVyTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
