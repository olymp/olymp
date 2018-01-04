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

var _ref2 = _react2.default.createElement('path', { d: 'M1280 704q0-26-19-45t-45-19q-172 0-318 49.5t-259.5 134-235.5 219.5q-19 21-19 45 0 26 19 45t45 19q24 0 45-19 27-24 74-71t67-66q137-124 268.5-176t313.5-52q26 0 45-19t19-45zm512-198q0 95-20 193-46 224-184.5 383t-357.5 268q-214 108-438 108-148 0-286-47-15-5-88-42t-96-37q-16 0-39.5 32t-45 70-52.5 70-60 32q-43 0-63.5-17.5t-45.5-59.5q-2-4-6-11t-5.5-10-3-9.5-1.5-13.5q0-35 31-73.5t68-65.5 68-56 31-48q0-4-14-38t-16-44q-9-51-9-104 0-115 43.5-220t119-184.5 170.5-139 204-95.5q55-18 145-25.5t179.5-9 178.5-6 163.5-24 113.5-56.5l29.5-29.5 29.5-28 27-20 36.5-16 43.5-4.5q39 0 70.5 46t47.5 112 24 124 8 96z' });

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
icon.displayName = 'FaLeaf';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sZWFmLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxvbEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsUUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtbGVhZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTI4MCA3MDRxMC0yNi0xOS00NXQtNDUtMTlxLTE3MiAwLTMxOCA0OS41dC0yNTkuNSAxMzQtMjM1LjUgMjE5LjVxLTE5IDIxLTE5IDQ1IDAgMjYgMTkgNDV0NDUgMTlxMjQgMCA0NS0xOSAyNy0yNCA3NC03MXQ2Ny02NnExMzctMTI0IDI2OC41LTE3NnQzMTMuNS01MnEyNiAwIDQ1LTE5dDE5LTQ1em01MTItMTk4cTAgOTUtMjAgMTkzLTQ2IDIyNC0xODQuNSAzODN0LTM1Ny41IDI2OHEtMjE0IDEwOC00MzggMTA4LTE0OCAwLTI4Ni00Ny0xNS01LTg4LTQydC05Ni0zN3EtMTYgMC0zOS41IDMydC00NSA3MC01Mi41IDcwLTYwIDMycS00MyAwLTYzLjUtMTcuNXQtNDUuNS01OS41cS0yLTQtNi0xMXQtNS41LTEwLTMtOS41LTEuNS0xMy41cTAtMzUgMzEtNzMuNXQ2OC02NS41IDY4LTU2IDMxLTQ4cTAtNC0xNC0zOHQtMTYtNDRxLTktNTEtOS0xMDQgMC0xMTUgNDMuNS0yMjB0MTE5LTE4NC41IDE3MC41LTEzOSAyMDQtOTUuNXE1NS0xOCAxNDUtMjUuNXQxNzkuNS05IDE3OC41LTYgMTYzLjUtMjQgMTEzLjUtNTYuNWwyOS41LTI5LjUgMjkuNS0yOCAyNy0yMCAzNi41LTE2IDQzLjUtNC41cTM5IDAgNzAuNSA0NnQ0Ny41IDExMiAyNCAxMjQgOCA5NnpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhTGVhZic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
