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

var _ref2 = _react2.default.createElement('path', { d: 'M896 1212q0 55-31.5 93.5t-75.5 38.5h-426q-44 0-75.5-38.5t-31.5-93.5q0-54 7.5-100.5t24.5-90 51-68.5 81-25q64 64 156 64t156-64q47 0 81 25t51 68.5 24.5 90 7.5 100.5zm-128-444q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 416v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zm-384-256v64q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h320q14 0 23 9t9 23zm384 0v64q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h192q14 0 23 9t9 23zm0-256v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704q14 0 23 9t9 23zm128 832v-1120h-1792v1120q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5-9.5t9.5-22.5zm128-1216v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z' });

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
icon.displayName = 'FaIdCardO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1pZC1jYXJkLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUd3SSx3Q0FBTSxHQUFFLHN3QkFBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixXQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1pZC1jYXJkLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTg5NiAxMjEycTAgNTUtMzEuNSA5My41dC03NS41IDM4LjVoLTQyNnEtNDQgMC03NS41LTM4LjV0LTMxLjUtOTMuNXEwLTU0IDcuNS0xMDAuNXQyNC41LTkwIDUxLTY4LjUgODEtMjVxNjQgNjQgMTU2IDY0dDE1Ni02NHE0NyAwIDgxIDI1dDUxIDY4LjUgMjQuNSA5MCA3LjUgMTAwLjV6bS0xMjgtNDQ0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNiA1Ni0xMzYgMTM2LTU2IDEzNiA1NiA1NiAxMzZ6bTEwMjQgNDE2djY0cTAgMTQtOSAyM3QtMjMgOWgtNzA0cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDcwNHExNCAwIDIzIDl0OSAyM3ptLTM4NC0yNTZ2NjRxMCAxNC05IDIzdC0yMyA5aC0zMjBxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzIwcTE0IDAgMjMgOXQ5IDIzem0zODQgMHY2NHEwIDE0LTkgMjN0LTIzIDloLTE5MnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgxOTJxMTQgMCAyMyA5dDkgMjN6bTAtMjU2djY0cTAgMTQtOSAyM3QtMjMgOWgtNzA0cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDcwNHExNCAwIDIzIDl0OSAyM3ptMTI4IDgzMnYtMTEyMGgtMTc5MnYxMTIwcTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTcyOHExMyAwIDIyLjUtOS41dDkuNS0yMi41em0xMjgtMTIxNnYxMjE2cTAgNjYtNDcgMTEzdC0xMTMgNDdoLTE3MjhxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDE3MjhxNjYgMCAxMTMgNDd0NDcgMTEzelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSWRDYXJkTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
