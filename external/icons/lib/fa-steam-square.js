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

var _ref2 = _react2.default.createElement('path', { d: 'M1370 647q0-80-57-136.5t-137-56.5-136.5 57-56.5 136q0 80 56.5 136.5t136.5 56.5 137-56.5 57-136.5zm-610 588q0 83-58 140.5t-140 57.5q-56 0-103-29t-72-77q52 20 98 40 60 24 120-1.5t85-86.5q24-60-1.5-120t-86.5-84l-82-33q22-5 42-5 82 0 140 57.5t58 140.5zm904-819v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5t105.5-254.5q0-150-105.5-255.5t-255.5-105.5q-148 0-253 104.5t-107 252.5l-225 322q-9-1-28-1-75 0-137 37l-297-119v-468q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5zm-247 233q0 100-71 170.5t-171 70.5-170.5-70.5-70.5-170.5 70.5-171 170.5-71q101 0 171.5 70.5t70.5 171.5z' });

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
icon.displayName = 'FaSteamSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zdGVhbS1zcXVhcmUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGdyQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zdGVhbS1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzNzAgNjQ3cTAtODAtNTctMTM2LjV0LTEzNy01Ni41LTEzNi41IDU3LTU2LjUgMTM2cTAgODAgNTYuNSAxMzYuNXQxMzYuNSA1Ni41IDEzNy01Ni41IDU3LTEzNi41em0tNjEwIDU4OHEwIDgzLTU4IDE0MC41dC0xNDAgNTcuNXEtNTYgMC0xMDMtMjl0LTcyLTc3cTUyIDIwIDk4IDQwIDYwIDI0IDEyMC0xLjV0ODUtODYuNXEyNC02MC0xLjUtMTIwdC04Ni41LTg0bC04Mi0zM3EyMi01IDQyLTUgODIgMCAxNDAgNTcuNXQ1OCAxNDAuNXptOTA0LTgxOXY5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di0xNTNsMTcyIDY5cTIwIDkyIDkzLjUgMTUydDE2OC41IDYwcTEwNCAwIDE4MS03MHQ4Ny0xNzNsMzQ1LTI1MnExNTAgMCAyNTUuNS0xMDUuNXQxMDUuNS0yNTQuNXEwLTE1MC0xMDUuNS0yNTUuNXQtMjU1LjUtMTA1LjVxLTE0OCAwLTI1MyAxMDQuNXQtMTA3IDI1Mi41bC0yMjUgMzIycS05LTEtMjgtMS03NSAwLTEzNyAzN2wtMjk3LTExOXYtNDY4cTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjBxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41em0tMjQ3IDIzM3EwIDEwMC03MSAxNzAuNXQtMTcxIDcwLjUtMTcwLjUtNzAuNS03MC41LTE3MC41IDcwLjUtMTcxIDE3MC41LTcxcTEwMSAwIDE3MS41IDcwLjV0NzAuNSAxNzEuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhU3RlYW1TcXVhcmUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
