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

var _ref2 = _react2.default.createElement('path', { d: 'M1175 996v-4l-24-320q-1-13-11-22.5t-23-9.5h-186q-13 0-23 9.5t-11 22.5l-24 320v4q-1 12 8 20t21 8h244q12 0 21-8t8-20zm759 467q0 73-46 73h-704q13 0 22-9.5t8-22.5l-20-256q-1-13-11-22.5t-23-9.5h-272q-13 0-23 9.5t-11 22.5l-20 256q-1 13 8 22.5t22 9.5h-704q-46 0-46-73 0-54 26-116l417-1044q8-19 26-33t38-14h339q-13 0-23 9.5t-11 22.5l-15 192q-1 14 8 23t22 9h166q13 0 22-9t8-23l-15-192q-1-13-11-22.5t-23-9.5h339q20 0 38 14t26 33l417 1044q26 62 26 116z' });

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
icon.displayName = 'FaRoad';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yb2FkLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSwyYkFBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixRQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1yb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMTc1IDk5NnYtNGwtMjQtMzIwcS0xLTEzLTExLTIyLjV0LTIzLTkuNWgtMTg2cS0xMyAwLTIzIDkuNXQtMTEgMjIuNWwtMjQgMzIwdjRxLTEgMTIgOCAyMHQyMSA4aDI0NHExMiAwIDIxLTh0OC0yMHptNzU5IDQ2N3EwIDczLTQ2IDczaC03MDRxMTMgMCAyMi05LjV0OC0yMi41bC0yMC0yNTZxLTEtMTMtMTEtMjIuNXQtMjMtOS41aC0yNzJxLTEzIDAtMjMgOS41dC0xMSAyMi41bC0yMCAyNTZxLTEgMTMgOCAyMi41dDIyIDkuNWgtNzA0cS00NiAwLTQ2LTczIDAtNTQgMjYtMTE2bDQxNy0xMDQ0cTgtMTkgMjYtMzN0MzgtMTRoMzM5cS0xMyAwLTIzIDkuNXQtMTEgMjIuNWwtMTUgMTkycS0xIDE0IDggMjN0MjIgOWgxNjZxMTMgMCAyMi05dDgtMjNsLTE1LTE5MnEtMS0xMy0xMS0yMi41dC0yMy05LjVoMzM5cTIwIDAgMzggMTR0MjYgMzNsNDE3IDEwNDRxMjYgNjIgMjYgMTE2elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhUm9hZCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
