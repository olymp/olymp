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

var _ref2 = _react2.default.createElement('path', { d: 'M2288 805q16 8 16 27t-16 27l-320 192q-8 5-16 5-9 0-16-4-16-10-16-28v-128h-858q37 58 83 165 16 37 24.5 55t24 49 27 47 27 34 31.5 26 33 8h96v-96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-96h-96q-32 0-61-10t-51-23.5-45-40.5-37-46-33.5-57-28.5-57.5-28-60.5q-23-53-37-81.5t-36-65-44.5-53.5-46.5-17h-360q-22 84-91 138t-157 54q-106 0-181-75t-75-181 75-181 181-75q88 0 157 54t91 138h104q24 0 46.5-17t44.5-53.5 36-65 37-81.5q19-41 28-60.5t28.5-57.5 33.5-57 37-46 45-40.5 51-23.5 61-10h107q21-57 70-92.5t111-35.5q80 0 136 56t56 136-56 136-136 56q-62 0-111-35.5t-70-92.5h-107q-17 0-33 8t-31.5 26-27 34-27 47-24 49-24.5 55q-46 107-83 165h1114v-128q0-18 16-28t32 1z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUsb';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11c2IuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUVvSix3Q0FBTSxHQUFFLGlyQkFBUixHOztBQURwSixJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLE9BQU0sTUFBaEYsRUFBdUYsU0FBUSxlQUEvRixFQUErRyxPQUFNLDRCQUFySDtBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE9BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXVzYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHdpZHRoPVwiMjMwNFwiIHZpZXdCb3g9XCIwIDAgMjMwNCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMjI4OCA4MDVxMTYgOCAxNiAyN3QtMTYgMjdsLTMyMCAxOTJxLTggNS0xNiA1LTkgMC0xNi00LTE2LTEwLTE2LTI4di0xMjhoLTg1OHEzNyA1OCA4MyAxNjUgMTYgMzcgMjQuNSA1NXQyNCA0OSAyNyA0NyAyNyAzNCAzMS41IDI2IDMzIDhoOTZ2LTk2cTAtMTQgOS0yM3QyMy05aDMyMHExNCAwIDIzIDl0OSAyM3YzMjBxMCAxNC05IDIzdC0yMyA5aC0zMjBxLTE0IDAtMjMtOXQtOS0yM3YtOTZoLTk2cS0zMiAwLTYxLTEwdC01MS0yMy41LTQ1LTQwLjUtMzctNDYtMzMuNS01Ny0yOC41LTU3LjUtMjgtNjAuNXEtMjMtNTMtMzctODEuNXQtMzYtNjUtNDQuNS01My41LTQ2LjUtMTdoLTM2MHEtMjIgODQtOTEgMTM4dC0xNTcgNTRxLTEwNiAwLTE4MS03NXQtNzUtMTgxIDc1LTE4MSAxODEtNzVxODggMCAxNTcgNTR0OTEgMTM4aDEwNHEyNCAwIDQ2LjUtMTd0NDQuNS01My41IDM2LTY1IDM3LTgxLjVxMTktNDEgMjgtNjAuNXQyOC41LTU3LjUgMzMuNS01NyAzNy00NiA0NS00MC41IDUxLTIzLjUgNjEtMTBoMTA3cTIxLTU3IDcwLTkyLjV0MTExLTM1LjVxODAgMCAxMzYgNTZ0NTYgMTM2LTU2IDEzNi0xMzYgNTZxLTYyIDAtMTExLTM1LjV0LTcwLTkyLjVoLTEwN3EtMTcgMC0zMyA4dC0zMS41IDI2LTI3IDM0LTI3IDQ3LTI0IDQ5LTI0LjUgNTVxLTQ2IDEwNy04MyAxNjVoMTExNHYtMTI4cTAtMTggMTYtMjh0MzIgMXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVXNiJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
