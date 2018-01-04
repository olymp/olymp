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

var _ref2 = _react2.default.createElement('path', { d: 'M1325 1024h-109q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h109q-32-108-112.5-188.5t-188.5-112.5v109q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-109q-108 32-188.5 112.5t-112.5 188.5h109q26 0 45 19t19 45v128q0 26-19 45t-45 19h-109q32 108 112.5 188.5t188.5 112.5v-109q0-26 19-45t45-19h128q26 0 45 19t19 45v109q108-32 188.5-112.5t112.5-188.5zm339-192v128q0 26-19 45t-45 19h-143q-37 161-154.5 278.5t-278.5 154.5v143q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-143q-161-37-278.5-154.5t-154.5-278.5h-143q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h143q37-161 154.5-278.5t278.5-154.5v-143q0-26 19-45t45-19h128q26 0 45 19t19 45v143q161 37 278.5 154.5t154.5 278.5h143q26 0 45 19t19 45z' });

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
icon.displayName = 'FaCrosshairs';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jcm9zc2hhaXJzLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw4cEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtY3Jvc3NoYWlycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTMyNSAxMDI0aC0xMDlxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxMDlxLTMyLTEwOC0xMTIuNS0xODguNXQtMTg4LjUtMTEyLjV2MTA5cTAgMjYtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMDlxLTEwOCAzMi0xODguNSAxMTIuNXQtMTEyLjUgMTg4LjVoMTA5cTI2IDAgNDUgMTl0MTkgNDV2MTI4cTAgMjYtMTkgNDV0LTQ1IDE5aC0xMDlxMzIgMTA4IDExMi41IDE4OC41dDE4OC41IDExMi41di0xMDlxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXYxMDlxMTA4LTMyIDE4OC41LTExMi41dDExMi41LTE4OC41em0zMzktMTkydjEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtMTQzcS0zNyAxNjEtMTU0LjUgMjc4LjV0LTI3OC41IDE1NC41djE0M3EwIDI2LTE5IDQ1dC00NSAxOWgtMTI4cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQzcS0xNjEtMzctMjc4LjUtMTU0LjV0LTE1NC41LTI3OC41aC0xNDNxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgxNDNxMzctMTYxIDE1NC41LTI3OC41dDI3OC41LTE1NC41di0xNDNxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXYxNDNxMTYxIDM3IDI3OC41IDE1NC41dDE1NC41IDI3OC41aDE0M3EyNiAwIDQ1IDE5dDE5IDQ1elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFDcm9zc2hhaXJzJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
