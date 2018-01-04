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

var _ref2 = _react2.default.createElement('path', { d: 'M836 1169l-15 368-2 22-420-29q-36-3-67-31.5t-47-65.5q-11-27-14.5-55t4-65 12-55 21.5-64 19-53q78 12 509 28zm-387-586l180 379-147-92q-63 72-111.5 144.5t-72.5 125-39.5 94.5-18.5 63l-4 21-190-357q-17-26-18-56t6-47l8-18q35-63 114-188l-140-86zm1231 517l-188 359q-12 29-36.5 46.5t-43.5 20.5l-18 4q-71 7-219 12l8 164-230-367 211-362 7 173q170 16 283 5t170-33zm-785-924q-47 63-265 435l-317-187-19-12 225-356q20-31 60-45t80-10q24 2 48.5 12t42 21 41.5 33 36 34.5 36 39.5 32 35zm655 307l212 363q18 37 12.5 76t-27.5 74q-13 20-33 37t-38 28-48.5 22-47 16-51.5 14-46 12q-34-72-265-436l313-195zm-143-226l142-83-220 373-419-20 151-86q-34-89-75-166t-75.5-123.5-64.5-80-47-46.5l-17-13 405 1q31-3 58 10.5t39 28.5l11 15q39 61 112 190z' });

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
icon.displayName = 'FaRecycle';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZWN5Y2xlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwwc0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtcmVjeWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODM2IDExNjlsLTE1IDM2OC0yIDIyLTQyMC0yOXEtMzYtMy02Ny0zMS41dC00Ny02NS41cS0xMS0yNy0xNC41LTU1dDQtNjUgMTItNTUgMjEuNS02NCAxOS01M3E3OCAxMiA1MDkgMjh6bS0zODctNTg2bDE4MCAzNzktMTQ3LTkycS02MyA3Mi0xMTEuNSAxNDQuNXQtNzIuNSAxMjUtMzkuNSA5NC41LTE4LjUgNjNsLTQgMjEtMTkwLTM1N3EtMTctMjYtMTgtNTZ0Ni00N2w4LTE4cTM1LTYzIDExNC0xODhsLTE0MC04NnptMTIzMSA1MTdsLTE4OCAzNTlxLTEyIDI5LTM2LjUgNDYuNXQtNDMuNSAyMC41bC0xOCA0cS03MSA3LTIxOSAxMmw4IDE2NC0yMzAtMzY3IDIxMS0zNjIgNyAxNzNxMTcwIDE2IDI4MyA1dDE3MC0zM3ptLTc4NS05MjRxLTQ3IDYzLTI2NSA0MzVsLTMxNy0xODctMTktMTIgMjI1LTM1NnEyMC0zMSA2MC00NXQ4MC0xMHEyNCAyIDQ4LjUgMTJ0NDIgMjEgNDEuNSAzMyAzNiAzNC41IDM2IDM5LjUgMzIgMzV6bTY1NSAzMDdsMjEyIDM2M3ExOCAzNyAxMi41IDc2dC0yNy41IDc0cS0xMyAyMC0zMyAzN3QtMzggMjgtNDguNSAyMi00NyAxNi01MS41IDE0LTQ2IDEycS0zNC03Mi0yNjUtNDM2bDMxMy0xOTV6bS0xNDMtMjI2bDE0Mi04My0yMjAgMzczLTQxOS0yMCAxNTEtODZxLTM0LTg5LTc1LTE2NnQtNzUuNS0xMjMuNS02NC41LTgwLTQ3LTQ2LjVsLTE3LTEzIDQwNSAxcTMxLTMgNTggMTAuNXQzOSAyOC41bDExIDE1cTM5IDYxIDExMiAxOTB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVJlY3ljbGUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
