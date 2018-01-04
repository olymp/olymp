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

var _ref2 = _react2.default.createElement('path', { d: 'M1042 703q0-88-60-121-33-18-117-18h-123v281h162q66 0 102-37t36-105zm52 285l205 373q8 17-1 31-8 16-27 16h-152q-20 0-28-17l-194-365h-155v350q0 14-9 23t-23 9h-134q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h294q128 0 190 24 85 31 134 109t49 180q0 92-42.5 165.5t-115.5 109.5q6 10 9 16zm-198-828q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zm896 736q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z' });

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
icon.displayName = 'FaRegistered';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZWdpc3RlcmVkLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxza0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtcmVnaXN0ZXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTA0MiA3MDNxMC04OC02MC0xMjEtMzMtMTgtMTE3LTE4aC0xMjN2MjgxaDE2MnE2NiAwIDEwMi0zN3QzNi0xMDV6bTUyIDI4NWwyMDUgMzczcTggMTctMSAzMS04IDE2LTI3IDE2aC0xNTJxLTIwIDAtMjgtMTdsLTE5NC0zNjVoLTE1NXYzNTBxMCAxNC05IDIzdC0yMyA5aC0xMzRxLTE0IDAtMjMtOXQtOS0yM3YtOTYwcTAtMTQgOS0yM3QyMy05aDI5NHExMjggMCAxOTAgMjQgODUgMzEgMTM0IDEwOXQ0OSAxODBxMCA5Mi00Mi41IDE2NS41dC0xMTUuNSAxMDkuNXE2IDEwIDkgMTZ6bS0xOTgtODI4cS0xNTAgMC0yODYgNTguNXQtMjM0LjUgMTU3LTE1NyAyMzQuNS01OC41IDI4NiA1OC41IDI4NiAxNTcgMjM0LjUgMjM0LjUgMTU3IDI4NiA1OC41IDI4Ni01OC41IDIzNC41LTE1NyAxNTctMjM0LjUgNTguNS0yODYtNTguNS0yODYtMTU3LTIzNC41LTIzNC41LTE1Ny0yODYtNTguNXptODk2IDczNnEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVJlZ2lzdGVyZWQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
