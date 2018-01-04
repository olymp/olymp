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

var _ref2 = _react2.default.createElement('path', { d: 'M209 129l54 27q12 5 211 5 44 0 132-2t132-2q70 0 246.5-1t304.5-.5 247 4.5q33 1 56-31l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-47.5t-15-73.5-7-36q-10-13-27-19-5-2-66-2-30 0-93-1t-103-1-94 2-96 7q-9 81-8 136l1 152v-52q0 55 1 154t1.5 180 .5 153q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q7-16 11.5-74t6-145.5 1.5-155-.5-153.5-.5-89q0-7-2.5-21.5t-2.5-22.5q0-7 .5-44t1-73 0-76.5-3-67.5-6.5-32q-11-12-162-12-41 0-163 13.5t-138 24.5q-19 12-34 71.5t-31.5 111.5-42.5 54q-42-26-56-44v-383zm1229 1282q12 0 42 19.5t57.5 41.5 59.5 49 36 30q26 21 26 49t-26 49q-4 3-36 30t-59.5 49-57.5 41.5-42 19.5q-13 0-20.5-10.5t-10-28.5-2.5-33.5 1.5-33 1.5-19.5h-1024q0 2 1.5 19.5t1.5 33-2.5 33.5-10 28.5-20.5 10.5q-12 0-42-19.5t-57.5-41.5-59.5-49-36-30q-26-21-26-49t26-49q4-3 36-30t59.5-49 57.5-41.5 42-19.5q13 0 20.5 10.5t10 28.5 2.5 33.5-1.5 33-1.5 19.5h1024q0-2-1.5-19.5t-1.5-33 2.5-33.5 10-28.5 20.5-10.5z' });

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
icon.displayName = 'FaTextWidth';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10ZXh0LXdpZHRoLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwyZ0NBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdGV4dC13aWR0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMjA5IDEyOWw1NCAyN3ExMiA1IDIxMSA1IDQ0IDAgMTMyLTJ0MTMyLTJxNzAgMCAyNDYuNS0xdDMwNC41LS41IDI0NyA0LjVxMzMgMSA1Ni0zMWw0Mi0xcTQgMCAxNCAuNXQxNCAuNXEyIDExMiAyIDMzNiAwIDgwLTUgMTA5LTM5IDE0LTY4IDE4LTI1LTQ0LTU0LTEyOC0zLTktMTEtNDcuNXQtMTUtNzMuNS03LTM2cS0xMC0xMy0yNy0xOS01LTItNjYtMi0zMCAwLTkzLTF0LTEwMy0xLTk0IDItOTYgN3EtOSA4MS04IDEzNmwxIDE1MnYtNTJxMCA1NSAxIDE1NHQxLjUgMTgwIC41IDE1M3EwIDE2LTIuNSA3MS41dDAgOTEuNSAxMi41IDY5cTQwIDIxIDEyNCA0Mi41dDEyMCAzNy41cTUgNDAgNSA1MCAwIDE0LTMgMjlsLTM0IDFxLTc2IDItMjE4LTh0LTIwNy0xMHEtNTAgMC0xNTEgOXQtMTUyIDlxLTMtNTEtMy01MnYtOXExNy0yNyA2MS41LTQzdDk4LjUtMjkgNzgtMjdxNy0xNiAxMS41LTc0dDYtMTQ1LjUgMS41LTE1NS0uNS0xNTMuNS0uNS04OXEwLTctMi41LTIxLjV0LTIuNS0yMi41cTAtNyAuNS00NHQxLTczIDAtNzYuNS0zLTY3LjUtNi41LTMycS0xMS0xMi0xNjItMTItNDEgMC0xNjMgMTMuNXQtMTM4IDI0LjVxLTE5IDEyLTM0IDcxLjV0LTMxLjUgMTExLjUtNDIuNSA1NHEtNDItMjYtNTYtNDR2LTM4M3ptMTIyOSAxMjgycTEyIDAgNDIgMTkuNXQ1Ny41IDQxLjUgNTkuNSA0OSAzNiAzMHEyNiAyMSAyNiA0OXQtMjYgNDlxLTQgMy0zNiAzMHQtNTkuNSA0OS01Ny41IDQxLjUtNDIgMTkuNXEtMTMgMC0yMC41LTEwLjV0LTEwLTI4LjUtMi41LTMzLjUgMS41LTMzIDEuNS0xOS41aC0xMDI0cTAgMiAxLjUgMTkuNXQxLjUgMzMtMi41IDMzLjUtMTAgMjguNS0yMC41IDEwLjVxLTEyIDAtNDItMTkuNXQtNTcuNS00MS41LTU5LjUtNDktMzYtMzBxLTI2LTIxLTI2LTQ5dDI2LTQ5cTQtMyAzNi0zMHQ1OS41LTQ5IDU3LjUtNDEuNSA0Mi0xOS41cTEzIDAgMjAuNSAxMC41dDEwIDI4LjUgMi41IDMzLjUtMS41IDMzLTEuNSAxOS41aDEwMjRxMC0yLTEuNS0xOS41dC0xLjUtMzMgMi41LTMzLjUgMTAtMjguNSAyMC41LTEwLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVRleHRXaWR0aCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
