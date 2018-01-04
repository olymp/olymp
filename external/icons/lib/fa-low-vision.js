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

var _ref2 = _react2.default.createElement('path', { d: 'M335 1356q-2 0-6-2-86-57-168.5-145t-139.5-180q-21-30-21-69 0-9 2-19t4-18 7-18 8.5-16 10.5-17 10-15 12-15.5 11-14.5q184-251 452-365-110-198-110-211 0-19 17-29 116-64 128-64 18 0 28 16l124 229q92-19 192-19 266 0 497.5 137.5t378.5 369.5q20 31 20 69t-20 69q-91 142-218.5 253.5t-278.5 175.5q110 198 110 211 0 20-17 29-116 64-127 64-19 0-29-16l-124-229-64-119-444-820 7-7q-58 24-99 47 3 5 127 234t243 449 119 223q0 7-9 9-13 3-72 3-57 0-60-7l-456-841q-39 28-82 68 24 43 214 393.5t190 354.5q0 10-11 10-14 0-82.5-22t-72.5-28l-106-197-224-413q-44 53-78 106 2 3 18 25t23 34l176 327q0 10-10 10zm830-102l49 91q273-111 450-385-180-277-459-389 67 64 103 148.5t36 176.5q0 106-47 200.5t-132 157.5zm-317-614q0 20 14 34t34 14q86 0 147 61t61 147q0 20 14 34t34 14 34-14 14-34q0-126-89-215t-215-89q-20 0-34 14t-14 34zm366-65l-9-4 7 7z' });

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
icon.displayName = 'FaLowVision';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sb3ctdmlzaW9uLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw4eUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtbG93LXZpc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzM1IDEzNTZxLTIgMC02LTItODYtNTctMTY4LjUtMTQ1dC0xMzkuNS0xODBxLTIxLTMwLTIxLTY5IDAtOSAyLTE5dDQtMTggNy0xOCA4LjUtMTYgMTAuNS0xNyAxMC0xNSAxMi0xNS41IDExLTE0LjVxMTg0LTI1MSA0NTItMzY1LTExMC0xOTgtMTEwLTIxMSAwLTE5IDE3LTI5IDExNi02NCAxMjgtNjQgMTggMCAyOCAxNmwxMjQgMjI5cTkyLTE5IDE5Mi0xOSAyNjYgMCA0OTcuNSAxMzcuNXQzNzguNSAzNjkuNXEyMCAzMSAyMCA2OXQtMjAgNjlxLTkxIDE0Mi0yMTguNSAyNTMuNXQtMjc4LjUgMTc1LjVxMTEwIDE5OCAxMTAgMjExIDAgMjAtMTcgMjktMTE2IDY0LTEyNyA2NC0xOSAwLTI5LTE2bC0xMjQtMjI5LTY0LTExOS00NDQtODIwIDctN3EtNTggMjQtOTkgNDcgMyA1IDEyNyAyMzR0MjQzIDQ0OSAxMTkgMjIzcTAgNy05IDktMTMgMy03MiAzLTU3IDAtNjAtN2wtNDU2LTg0MXEtMzkgMjgtODIgNjggMjQgNDMgMjE0IDM5My41dDE5MCAzNTQuNXEwIDEwLTExIDEwLTE0IDAtODIuNS0yMnQtNzIuNS0yOGwtMTA2LTE5Ny0yMjQtNDEzcS00NCA1My03OCAxMDYgMiAzIDE4IDI1dDIzIDM0bDE3NiAzMjdxMCAxMC0xMCAxMHptODMwLTEwMmw0OSA5MXEyNzMtMTExIDQ1MC0zODUtMTgwLTI3Ny00NTktMzg5IDY3IDY0IDEwMyAxNDguNXQzNiAxNzYuNXEwIDEwNi00NyAyMDAuNXQtMTMyIDE1Ny41em0tMzE3LTYxNHEwIDIwIDE0IDM0dDM0IDE0cTg2IDAgMTQ3IDYxdDYxIDE0N3EwIDIwIDE0IDM0dDM0IDE0IDM0LTE0IDE0LTM0cTAtMTI2LTg5LTIxNXQtMjE1LTg5cS0yMCAwLTM0IDE0dC0xNCAzNHptMzY2LTY1bC05LTQgNyA3elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFMb3dWaXNpb24nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
