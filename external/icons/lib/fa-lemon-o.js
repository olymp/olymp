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

var _ref2 = _react2.default.createElement('path', { d: 'M1535 826q0-44-7-113.5t-18-96.5q-12-30-17-44t-9-36.5-4-48.5q0-23 5-68.5t5-67.5q0-37-10-55-4-1-13-1-19 0-58 4.5t-59 4.5q-60 0-176-24t-175-24q-43 0-94.5 11.5t-85 23.5-89.5 34q-137 54-202 103-96 73-159.5 189.5t-88 236-24.5 248.5q0 40 12.5 120t12.5 121q0 23-11 66.5t-11 65.5 12 36.5 34 14.5q24 0 72.5-11t73.5-11q57 0 169.5 15.5t169.5 15.5q181 0 284-36 129-45 235.5-152.5t166-245.5 59.5-275zm128-2q0 165-70 327.5t-196 288-281 180.5q-124 44-326 44-57 0-170-14.5t-169-14.5q-24 0-72.5 14.5t-73.5 14.5q-73 0-123.5-55.5t-50.5-128.5q0-24 11-68t11-67q0-40-12.5-120.5t-12.5-121.5q0-111 18-217.5t54.5-209.5 100.5-194 150-156q78-59 232-120 194-78 316-78 60 0 175.5 24t173.5 24q19 0 57-5t58-5q81 0 118 50.5t37 134.5q0 23-5 68t-5 68q0 13 2 25t3.5 16.5 7.5 20.5 8 20q16 40 25 118.5t9 136.5z' });

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
icon.displayName = 'FaLemonO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sZW1vbi1vLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxzd0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtbGVtb24tby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUzNSA4MjZxMC00NC03LTExMy41dC0xOC05Ni41cS0xMi0zMC0xNy00NHQtOS0zNi41LTQtNDguNXEwLTIzIDUtNjguNXQ1LTY3LjVxMC0zNy0xMC01NS00LTEtMTMtMS0xOSAwLTU4IDQuNXQtNTkgNC41cS02MCAwLTE3Ni0yNHQtMTc1LTI0cS00MyAwLTk0LjUgMTEuNXQtODUgMjMuNS04OS41IDM0cS0xMzcgNTQtMjAyIDEwMy05NiA3My0xNTkuNSAxODkuNXQtODggMjM2LTI0LjUgMjQ4LjVxMCA0MCAxMi41IDEyMHQxMi41IDEyMXEwIDIzLTExIDY2LjV0LTExIDY1LjUgMTIgMzYuNSAzNCAxNC41cTI0IDAgNzIuNS0xMXQ3My41LTExcTU3IDAgMTY5LjUgMTUuNXQxNjkuNSAxNS41cTE4MSAwIDI4NC0zNiAxMjktNDUgMjM1LjUtMTUyLjV0MTY2LTI0NS41IDU5LjUtMjc1em0xMjgtMnEwIDE2NS03MCAzMjcuNXQtMTk2IDI4OC0yODEgMTgwLjVxLTEyNCA0NC0zMjYgNDQtNTcgMC0xNzAtMTQuNXQtMTY5LTE0LjVxLTI0IDAtNzIuNSAxNC41dC03My41IDE0LjVxLTczIDAtMTIzLjUtNTUuNXQtNTAuNS0xMjguNXEwLTI0IDExLTY4dDExLTY3cTAtNDAtMTIuNS0xMjAuNXQtMTIuNS0xMjEuNXEwLTExMSAxOC0yMTcuNXQ1NC41LTIwOS41IDEwMC41LTE5NCAxNTAtMTU2cTc4LTU5IDIzMi0xMjAgMTk0LTc4IDMxNi03OCA2MCAwIDE3NS41IDI0dDE3My41IDI0cTE5IDAgNTctNXQ1OC01cTgxIDAgMTE4IDUwLjV0MzcgMTM0LjVxMCAyMy01IDY4dC01IDY4cTAgMTMgMiAyNXQzLjUgMTYuNSA3LjUgMjAuNSA4IDIwcTE2IDQwIDI1IDExOC41dDkgMTM2LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUxlbW9uTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
