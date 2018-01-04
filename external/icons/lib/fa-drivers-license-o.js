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
icon.displayName = 'FaDriversLicenseO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1kcml2ZXJzLWxpY2Vuc2Utby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsc3dCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLG1CQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1kcml2ZXJzLWxpY2Vuc2Utby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODk2IDEyMTJxMCA1NS0zMS41IDkzLjV0LTc1LjUgMzguNWgtNDI2cS00NCAwLTc1LjUtMzguNXQtMzEuNS05My41cTAtNTQgNy41LTEwMC41dDI0LjUtOTAgNTEtNjguNSA4MS0yNXE2NCA2NCAxNTYgNjR0MTU2LTY0cTQ3IDAgODEgMjV0NTEgNjguNSAyNC41IDkwIDcuNSAxMDAuNXptLTEyOC00NDRxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTAyNCA0MTZ2NjRxMCAxNC05IDIzdC0yMyA5aC03MDRxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloNzA0cTE0IDAgMjMgOXQ5IDIzem0tMzg0LTI1NnY2NHEwIDE0LTkgMjN0LTIzIDloLTMyMHEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWgzMjBxMTQgMCAyMyA5dDkgMjN6bTM4NCAwdjY0cTAgMTQtOSAyM3QtMjMgOWgtMTkycS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDE5MnExNCAwIDIzIDl0OSAyM3ptMC0yNTZ2NjRxMCAxNC05IDIzdC0yMyA5aC03MDRxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloNzA0cTE0IDAgMjMgOXQ5IDIzem0xMjggODMydi0xMTIwaC0xNzkydjExMjBxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxNzI4cTEzIDAgMjIuNS05LjV0OS41LTIyLjV6bTEyOC0xMjE2djEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTcyOHEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFEcml2ZXJzTGljZW5zZU8nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
