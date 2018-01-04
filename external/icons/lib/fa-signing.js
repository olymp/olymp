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

var _ref2 = _react2.default.createElement('path', { d: 'M895 673q32 0 59 18l222 148q61 40 110 97l146 170q40 46 29 106l-72 413q-6 32-29.5 53.5t-55.5 25.5l-527 56-352 32h-9q-39 0-67.5-28t-28.5-68q0-37 27-64t65-32l260-32h-448q-41 0-69.5-30t-26.5-71q2-39 32-65t69-26l442-1-521-64q-41-5-66-37t-19-73q6-35 34.5-57.5t65.5-22.5h10l481 60-351-94q-38-10-62-41.5t-18-68.5q6-36 33-58.5t62-22.5q6 0 20 2l448 96 217 37q1 0 3 .5t3 .5q23 0 30.5-23t-12.5-36l-186-125q-35-23-42-63.5t18-73.5q27-38 76-38zm-70 202l186 125-218-37-5-2-36-38-238-262q-1-1-2.5-3.5t-2.5-3.5q-24-31-18.5-70t37.5-64q31-23 68-17.5t64 33.5l142 147q-2 1-5 3.5t-4 4.5q-32 45-23 99t55 85zm887-454l15 266q4 73-11 147l-48 219q-12 59-67 87l-106 54q2-62-39-109l-146-170q-53-61-117-103l-222-148q-34-23-76-23-51 0-88 37l-235-312q-25-33-18-73.5t41-63.5q33-22 71.5-14t62.5 40l266 352-262-455q-21-35-10.5-75t47.5-59q35-18 72.5-6t57.5 46l241 420-136-337q-15-35-4.5-74t44.5-56q37-19 76-6t56 51l193 415 101 196q8 15 23 17.5t27-7.5 11-26l-12-224q-2-41 26-71t69-31q39 0 67 28.5t30 67.5z' });

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
icon.displayName = 'FaSigning';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zaWduaW5nLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx5OEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtc2lnbmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODk1IDY3M3EzMiAwIDU5IDE4bDIyMiAxNDhxNjEgNDAgMTEwIDk3bDE0NiAxNzBxNDAgNDYgMjkgMTA2bC03MiA0MTNxLTYgMzItMjkuNSA1My41dC01NS41IDI1LjVsLTUyNyA1Ni0zNTIgMzJoLTlxLTM5IDAtNjcuNS0yOHQtMjguNS02OHEwLTM3IDI3LTY0dDY1LTMybDI2MC0zMmgtNDQ4cS00MSAwLTY5LjUtMzB0LTI2LjUtNzFxMi0zOSAzMi02NXQ2OS0yNmw0NDItMS01MjEtNjRxLTQxLTUtNjYtMzd0LTE5LTczcTYtMzUgMzQuNS01Ny41dDY1LjUtMjIuNWgxMGw0ODEgNjAtMzUxLTk0cS0zOC0xMC02Mi00MS41dC0xOC02OC41cTYtMzYgMzMtNTguNXQ2Mi0yMi41cTYgMCAyMCAybDQ0OCA5NiAyMTcgMzdxMSAwIDMgLjV0MyAuNXEyMyAwIDMwLjUtMjN0LTEyLjUtMzZsLTE4Ni0xMjVxLTM1LTIzLTQyLTYzLjV0MTgtNzMuNXEyNy0zOCA3Ni0zOHptLTcwIDIwMmwxODYgMTI1LTIxOC0zNy01LTItMzYtMzgtMjM4LTI2MnEtMS0xLTIuNS0zLjV0LTIuNS0zLjVxLTI0LTMxLTE4LjUtNzB0MzcuNS02NHEzMS0yMyA2OC0xNy41dDY0IDMzLjVsMTQyIDE0N3EtMiAxLTUgMy41dC00IDQuNXEtMzIgNDUtMjMgOTl0NTUgODV6bTg4Ny00NTRsMTUgMjY2cTQgNzMtMTEgMTQ3bC00OCAyMTlxLTEyIDU5LTY3IDg3bC0xMDYgNTRxMi02Mi0zOS0xMDlsLTE0Ni0xNzBxLTUzLTYxLTExNy0xMDNsLTIyMi0xNDhxLTM0LTIzLTc2LTIzLTUxIDAtODggMzdsLTIzNS0zMTJxLTI1LTMzLTE4LTczLjV0NDEtNjMuNXEzMy0yMiA3MS41LTE0dDYyLjUgNDBsMjY2IDM1Mi0yNjItNDU1cS0yMS0zNS0xMC41LTc1dDQ3LjUtNTlxMzUtMTggNzIuNS02dDU3LjUgNDZsMjQxIDQyMC0xMzYtMzM3cS0xNS0zNS00LjUtNzR0NDQuNS01NnEzNy0xOSA3Ni02dDU2IDUxbDE5MyA0MTUgMTAxIDE5NnE4IDE1IDIzIDE3LjV0MjctNy41IDExLTI2bC0xMi0yMjRxLTItNDEgMjYtNzF0NjktMzFxMzkgMCA2NyAyOC41dDMwIDY3LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNpZ25pbmcnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
