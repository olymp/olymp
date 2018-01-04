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

var _ref2 = _react2.default.createElement('path', { d: 'M448 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm128-256v96q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h224q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm1024 512v96q0 16-16 16h-864q-16 0-16-16v-96q0-16 16-16h864q16 0 16 16zm-640-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-512-512v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm256 0v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm256 0v352q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h112v-240q0-16 16-16h96q16 0 16 16zm128 752v-896h-1664v896h1664zm128-896v896q0 53-37.5 90.5t-90.5 37.5h-1664q-53 0-90.5-37.5t-37.5-90.5v-896q0-53 37.5-90.5t90.5-37.5h1664q53 0 90.5 37.5t37.5 90.5z' });

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
icon.displayName = 'FaKeyboardO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1rZXlib2FyZC1vLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSxvakNBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEta2V5Ym9hcmQtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNDQ4IDExNjh2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptMTI4LTI1NnY5NnEwIDE2LTE2IDE2aC0yMjRxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoMjI0cTE2IDAgMTYgMTZ6bS0xMjgtMjU2djk2cTAgMTYtMTYgMTZoLTk2cS0xNiAwLTE2LTE2di05NnEwLTE2IDE2LTE2aDk2cTE2IDAgMTYgMTZ6bTEwMjQgNTEydjk2cTAgMTYtMTYgMTZoLTg2NHEtMTYgMC0xNi0xNnYtOTZxMC0xNiAxNi0xNmg4NjRxMTYgMCAxNiAxNnptLTY0MC0yNTZ2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptLTEyOC0yNTZ2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptMzg0IDI1NnY5NnEwIDE2LTE2IDE2aC05NnEtMTYgMC0xNi0xNnYtOTZxMC0xNiAxNi0xNmg5NnExNiAwIDE2IDE2em0tMTI4LTI1NnY5NnEwIDE2LTE2IDE2aC05NnEtMTYgMC0xNi0xNnYtOTZxMC0xNiAxNi0xNmg5NnExNiAwIDE2IDE2em0zODQgMjU2djk2cTAgMTYtMTYgMTZoLTk2cS0xNiAwLTE2LTE2di05NnEwLTE2IDE2LTE2aDk2cTE2IDAgMTYgMTZ6bTM4NCAyNTZ2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptLTUxMi01MTJ2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptMjU2IDB2OTZxMCAxNi0xNiAxNmgtOTZxLTE2IDAtMTYtMTZ2LTk2cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnptMjU2IDB2MzUycTAgMTYtMTYgMTZoLTIyNHEtMTYgMC0xNi0xNnYtOTZxMC0xNiAxNi0xNmgxMTJ2LTI0MHEwLTE2IDE2LTE2aDk2cTE2IDAgMTYgMTZ6bTEyOCA3NTJ2LTg5NmgtMTY2NHY4OTZoMTY2NHptMTI4LTg5NnY4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNWgtMTY2NHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNXYtODk2cTAtNTMgMzcuNS05MC41dDkwLjUtMzcuNWgxNjY0cTUzIDAgOTAuNSAzNy41dDM3LjUgOTAuNXpcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUtleWJvYXJkTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
