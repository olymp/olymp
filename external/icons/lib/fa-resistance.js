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

var _ref2 = _react2.default.createElement('path', { d: 'M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z' });

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
icon.displayName = 'FaResistance';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZXNpc3RhbmNlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwydkJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtcmVzaXN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTkgODc0cTgtMjE3IDExNi00MDZ0MzA1LTMxOGg1cTAgMS0xIDMtOCA4LTI4IDMzLjV0LTUyIDc2LjUtNjAgMTEwLjUtNDQuNSAxMzUuNS0xNCAxNTAuNSAzOSAxNTcuNSAxMDguNSAxNTRxNTAgNTAgMTAyIDY5LjV0OTAuNSAxMS41IDY5LjUtMjMuNSA0Ny0zMi41bDE2LTE2cTM5LTUxIDUzLTExNi41dDYuNS0xMjIuNS0yMS0xMDctMjYuNS04MGwtMTQtMjlxLTEwLTI1LTMwLjUtNDkuNXQtNDMtNDEtNDMuNS0yOS41LTM1LTE5bC0xMy02IDEwNC0xMTVxMzkgMTcgNzggNTJ0NTkgNjFsMTkgMjdxMS00OC0xOC41LTEwMy41dC00MC41LTg3LjVsLTIwLTMxIDE2MS0xODMgMTYwIDE4MXEtMzMgNDYtNTIuNSAxMDIuNXQtMjIuNSA5MC41bC00IDMzcTIyLTM3IDYxLjUtNzIuNXQ2Ny41LTUyLjVsMjgtMTcgMTAzIDExNXEtNDQgMTQtODUgNTB0LTYwIDY1bC0xOSAyOXEtMzEgNTYtNDggMTMzLjV0LTcgMTcwIDU3IDE1Ni41cTMzIDQ1IDc3LjUgNjAuNXQ4NSA1LjUgNzYtMjYuNSA1Ny41LTMzLjVsMjEtMTZxNjAtNTMgOTYuNS0xMTV0NDguNS0xMjEuNSAxMC0xMjEuNS0xOC0xMTgtMzctMTA3LjUtNDUuNS05My00NS03Mi0zNC41LTQ3LjVsLTEzLTE3cS0xNC0xMy03LTEzbDEwIDNxNDAgMjkgNjIuNSA0NnQ2MiA1MCA2NCA1OCA1OC41IDY1IDU1LjUgNzcgNDUuNSA4OCAzOCAxMDMgMjMuNSAxMTcgMTAuNSAxMzZxMyAyNTktMTA4IDQ2NXQtMzEyIDMyMS00NTYgMTE1cS0xODUgMC0zNTEtNzR0LTI4My41LTE5OC0xODQtMjkzLTYwLjUtMzUzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFSZXNpc3RhbmNlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
