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

var _ref2 = _react2.default.createElement('path', { d: 'M1306 1106q0 215-147 374-148 161-378 161-232 0-378-161-147-159-147-374 0-147 68-270.5t189-196.5 268-73q96 0 182 31-32 62-39 126-66-28-143-28-167 0-280.5 123t-113.5 291q0 170 112.5 288.5t281.5 118.5 281-118.5 112-288.5q0-89-32-166 66-13 123-49 41 98 41 212zm-204-189q0 192-79.5 345t-238.5 253l-14 1q-29 0-62-5 83-32 146.5-102.5t99.5-154.5 58.5-189 30-192.5 7.5-178.5q0-69-3-103 55 160 55 326zm-55-328v2q-73-214-206-440 88 59 142.5 186.5t63.5 251.5zm244 203q-83 0-160-75 218-120 290-247 19-37 21-56-42 94-139.5 166.5t-204.5 97.5q-35-54-35-113 0-37 17-79t43-68q46-44 157-74 59-16 106-58.5t74-100.5q74 105 74 253 0 109-24 170-32 77-88.5 130.5t-130.5 53.5z' });

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
icon.displayName = 'FaViadeo';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12aWFkZW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDZvQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS12aWFkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzMDYgMTEwNnEwIDIxNS0xNDcgMzc0LTE0OCAxNjEtMzc4IDE2MS0yMzIgMC0zNzgtMTYxLTE0Ny0xNTktMTQ3LTM3NCAwLTE0NyA2OC0yNzAuNXQxODktMTk2LjUgMjY4LTczcTk2IDAgMTgyIDMxLTMyIDYyLTM5IDEyNi02Ni0yOC0xNDMtMjgtMTY3IDAtMjgwLjUgMTIzdC0xMTMuNSAyOTFxMCAxNzAgMTEyLjUgMjg4LjV0MjgxLjUgMTE4LjUgMjgxLTExOC41IDExMi0yODguNXEwLTg5LTMyLTE2NiA2Ni0xMyAxMjMtNDkgNDEgOTggNDEgMjEyem0tMjA0LTE4OXEwIDE5Mi03OS41IDM0NXQtMjM4LjUgMjUzbC0xNCAxcS0yOSAwLTYyLTUgODMtMzIgMTQ2LjUtMTAyLjV0OTkuNS0xNTQuNSA1OC41LTE4OSAzMC0xOTIuNSA3LjUtMTc4LjVxMC02OS0zLTEwMyA1NSAxNjAgNTUgMzI2em0tNTUtMzI4djJxLTczLTIxNC0yMDYtNDQwIDg4IDU5IDE0Mi41IDE4Ni41dDYzLjUgMjUxLjV6bTI0NCAyMDNxLTgzIDAtMTYwLTc1IDIxOC0xMjAgMjkwLTI0NyAxOS0zNyAyMS01Ni00MiA5NC0xMzkuNSAxNjYuNXQtMjA0LjUgOTcuNXEtMzUtNTQtMzUtMTEzIDAtMzcgMTctNzl0NDMtNjhxNDYtNDQgMTU3LTc0IDU5LTE2IDEwNi01OC41dDc0LTEwMC41cTc0IDEwNSA3NCAyNTMgMCAxMDktMjQgMTcwLTMyIDc3LTg4LjUgMTMwLjV0LTEzMC41IDUzLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVZpYWRlbyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
