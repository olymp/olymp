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

var _ref2 = _react2.default.createElement('path', { d: 'M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z' });

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
icon.displayName = 'FaAddressCard';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hZGRyZXNzLWNhcmQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUd3SSx3Q0FBTSxHQUFFLGswQkFBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1hZGRyZXNzLWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwMjQgMTEzMXEwLTY0LTktMTE3LjV0LTI5LjUtMTAzLTYwLjUtNzgtOTctMjguNXEtNiA0LTMwIDE4dC0zNy41IDIxLjUtMzUuNSAxNy41LTQzIDE0LjUtNDIgNC41LTQyLTQuNS00My0xNC41LTM1LjUtMTcuNS0zNy41LTIxLjUtMzAtMThxLTU3IDAtOTcgMjguNXQtNjAuNSA3OC0yOS41IDEwMy05IDExNy41IDM3IDEwNi41IDkxIDQyLjVoNTEycTU0IDAgOTEtNDIuNXQzNy0xMDYuNXptLTE1Ny01MjBxMC05NC02Ni41LTE2MC41dC0xNjAuNS02Ni41LTE2MC41IDY2LjUtNjYuNSAxNjAuNSA2Ni41IDE2MC41IDE2MC41IDY2LjUgMTYwLjUtNjYuNSA2Ni41LTE2MC41em05MjUgNTA5di02NHEwLTE0LTktMjN0LTIzLTloLTU3NnEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDU3NnExNCAwIDIzLTl0OS0yM3ptMC0yNjB2LTU2cTAtMTUtMTAuNS0yNS41dC0yNS41LTEwLjVoLTU2OHEtMTUgMC0yNS41IDEwLjV0LTEwLjUgMjUuNXY1NnEwIDE1IDEwLjUgMjUuNXQyNS41IDEwLjVoNTY4cTE1IDAgMjUuNS0xMC41dDEwLjUtMjUuNXptMC0yNTJ2LTY0cTAtMTQtOS0yM3QtMjMtOWgtNTc2cS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNTc2cTE0IDAgMjMtOXQ5LTIzem0yNTYtMzIwdjEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMzUydi05NnEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2OTZoLTc2OHYtOTZxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjk2aC0zNTJxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDE3MjhxNjYgMCAxMTMgNDd0NDcgMTEzelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQWRkcmVzc0NhcmQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
