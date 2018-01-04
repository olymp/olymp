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

var _ref2 = _react2.default.createElement('path', { d: 'M896 1212q0-54-7.5-100.5t-24.5-90-51-68.5-81-25q-64 64-156 64t-156-64q-47 0-81 25t-51 68.5-24.5 90-7.5 100.5q0 55 31.5 93.5t75.5 38.5h426q44 0 75.5-38.5t31.5-93.5zm-128-444q0-80-56-136t-136-56-136 56-56 136 56 136 136 56 136-56 56-136zm1024 480v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm-384-256v-64q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23-9t9-23zm384 0v-64q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v64q0 14 9 23t23 9h192q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm-1664-352h1792v-96q0-14-9-23t-23-9h-1728q-14 0-23 9t-9 23v96zm1920-96v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z' });

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
icon.displayName = 'FaIdCard';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1pZC1jYXJkLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSx1dkJBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtaWQtY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODk2IDEyMTJxMC01NC03LjUtMTAwLjV0LTI0LjUtOTAtNTEtNjguNS04MS0yNXEtNjQgNjQtMTU2IDY0dC0xNTYtNjRxLTQ3IDAtODEgMjV0LTUxIDY4LjUtMjQuNSA5MC03LjUgMTAwLjVxMCA1NSAzMS41IDkzLjV0NzUuNSAzOC41aDQyNnE0NCAwIDc1LjUtMzguNXQzMS41LTkzLjV6bS0xMjgtNDQ0cTAtODAtNTYtMTM2dC0xMzYtNTYtMTM2IDU2LTU2IDEzNiA1NiAxMzYgMTM2IDU2IDEzNi01NiA1Ni0xMzZ6bTEwMjQgNDgwdi02NHEwLTE0LTktMjN0LTIzLTloLTcwNHEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDcwNHExNCAwIDIzLTl0OS0yM3ptLTM4NC0yNTZ2LTY0cTAtMTQtOS0yM3QtMjMtOWgtMzIwcS0xNCAwLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloMzIwcTE0IDAgMjMtOXQ5LTIzem0zODQgMHYtNjRxMC0xNC05LTIzdC0yMy05aC0xOTJxLTE0IDAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMy05dDktMjN6bTAtMjU2di02NHEwLTE0LTktMjN0LTIzLTloLTcwNHEtMTQgMC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDcwNHExNCAwIDIzLTl0OS0yM3ptLTE2NjQtMzUyaDE3OTJ2LTk2cTAtMTQtOS0yM3QtMjMtOWgtMTcyOHEtMTQgMC0yMyA5dC05IDIzdjk2em0xOTIwLTk2djEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTcyOHEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFJZENhcmQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
