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

var _ref2 = _react2.default.createElement('path', { d: 'M1024 1523q-20 0-93-73.5t-73-93.5q0-32 62.5-54t103.5-22 103.5 22 62.5 54q0 20-73 93.5t-93 73.5zm270-271q-2 0-40-25t-101.5-50-128.5-25-128.5 25-101 50-40.5 25q-18 0-93.5-75t-75.5-93q0-13 10-23 78-77 196-121t233-44 233 44 196 121q10 10 10 23 0 18-75.5 93t-93.5 75zm273-272q-11 0-23-8-136-105-252-154.5t-268-49.5q-85 0-170.5 22t-149 53-113.5 62-79 53-31 22q-17 0-92-75t-75-93q0-12 10-22 132-132 320-205t380-73 380 73 320 205q10 10 10 22 0 18-75 93t-92 75zm271-271q-11 0-22-9-179-157-371.5-236.5t-420.5-79.5-420.5 79.5-371.5 236.5q-11 9-22 9-17 0-92.5-75t-75.5-93q0-13 10-23 187-186 445-288t527-102 527 102 445 288q10 10 10 23 0 18-75.5 93t-92.5 75z' });

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
icon.displayName = 'FaWifi';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS13aWZpLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSx1b0JBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsUUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtd2lmaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAyNCAxNTIzcS0yMCAwLTkzLTczLjV0LTczLTkzLjVxMC0zMiA2Mi41LTU0dDEwMy41LTIyIDEwMy41IDIyIDYyLjUgNTRxMCAyMC03MyA5My41dC05MyA3My41em0yNzAtMjcxcS0yIDAtNDAtMjV0LTEwMS41LTUwLTEyOC41LTI1LTEyOC41IDI1LTEwMSA1MC00MC41IDI1cS0xOCAwLTkzLjUtNzV0LTc1LjUtOTNxMC0xMyAxMC0yMyA3OC03NyAxOTYtMTIxdDIzMy00NCAyMzMgNDQgMTk2IDEyMXExMCAxMCAxMCAyMyAwIDE4LTc1LjUgOTN0LTkzLjUgNzV6bTI3My0yNzJxLTExIDAtMjMtOC0xMzYtMTA1LTI1Mi0xNTQuNXQtMjY4LTQ5LjVxLTg1IDAtMTcwLjUgMjJ0LTE0OSA1My0xMTMuNSA2Mi03OSA1My0zMSAyMnEtMTcgMC05Mi03NXQtNzUtOTNxMC0xMiAxMC0yMiAxMzItMTMyIDMyMC0yMDV0MzgwLTczIDM4MCA3MyAzMjAgMjA1cTEwIDEwIDEwIDIyIDAgMTgtNzUgOTN0LTkyIDc1em0yNzEtMjcxcS0xMSAwLTIyLTktMTc5LTE1Ny0zNzEuNS0yMzYuNXQtNDIwLjUtNzkuNS00MjAuNSA3OS41LTM3MS41IDIzNi41cS0xMSA5LTIyIDktMTcgMC05Mi41LTc1dC03NS41LTkzcTAtMTMgMTAtMjMgMTg3LTE4NiA0NDUtMjg4dDUyNy0xMDIgNTI3IDEwMiA0NDUgMjg4cTEwIDEwIDEwIDIzIDAgMTgtNzUuNSA5M3QtOTIuNSA3NXpcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVdpZmknO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
