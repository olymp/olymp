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

var _ref2 = _react2.default.createElement('path', { d: 'M1497 249q10 10 10 23t-10 23l-626 626q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l44-44q-72-91-81.5-207t46.5-215q-74-71-176-71-106 0-181 75t-75 181v1280h-256v-1280q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5q106 0 201 41t166 115q94-39 197-24.5t185 79.5l44-44q10-10 23-10t23 10zm-89 263q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm256 128q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zm256-128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-640 128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm192 64q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45zm320-64q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-640 128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm256 128q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zm256-128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-384 256q-26 0-45-19t-19-45 19-45 45-19 45 19 19 45-19 45-45 19zm256-128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-384 128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm256 0q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-128 128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm-128 128q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaShower';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zaG93ZXIuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUd3SSx3Q0FBTSxHQUFFLDJzQ0FBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zaG93ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0OTcgMjQ5cTEwIDEwIDEwIDIzdC0xMCAyM2wtNjI2IDYyNnEtMTAgMTAtMjMgMTB0LTIzLTEwbC04Mi04MnEtMTAtMTAtMTAtMjN0MTAtMjNsNDQtNDRxLTcyLTkxLTgxLjUtMjA3dDQ2LjUtMjE1cS03NC03MS0xNzYtNzEtMTA2IDAtMTgxIDc1dC03NSAxODF2MTI4MGgtMjU2di0xMjgwcTAtMTA0IDQwLjUtMTk4LjV0MTA5LjUtMTYzLjUgMTYzLjUtMTA5LjUgMTk4LjUtNDAuNXExMDYgMCAyMDEgNDF0MTY2IDExNXE5NC0zOSAxOTctMjQuNXQxODUgNzkuNWw0NC00NHExMC0xMCAyMy0xMHQyMyAxMHptLTg5IDI2M3EyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0yNTYgMTI4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NSA0NS0xOSA0NSAxOSAxOSA0NS0xOSA0NS00NSAxOXptMjU2LTEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0tNjQwIDEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0xOTIgNjRxMC0yNiAxOS00NXQ0NS0xOSA0NSAxOSAxOSA0NS0xOSA0NS00NSAxOS00NS0xOS0xOS00NXptMzIwLTY0cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDUtNDUgMTktNDUtMTktMTktNDUgMTktNDUgNDUtMTl6bS02NDAgMTI4cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDUtNDUgMTktNDUtMTktMTktNDUgMTktNDUgNDUtMTl6bTI1NiAxMjhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1IDQ1LTE5IDQ1IDE5IDE5IDQ1LTE5IDQ1LTQ1IDE5em0yNTYtMTI4cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDUtNDUgMTktNDUtMTktMTktNDUgMTktNDUgNDUtMTl6bS0zODQgMjU2cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NSA0NS0xOSA0NSAxOSAxOSA0NS0xOSA0NS00NSAxOXptMjU2LTEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0tMzg0IDEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0yNTYgMHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0tMTI4IDEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5em0tMTI4IDEyOHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5LTQ1LTE5LTE5LTQ1IDE5LTQ1IDQ1LTE5elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhU2hvd2VyJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
