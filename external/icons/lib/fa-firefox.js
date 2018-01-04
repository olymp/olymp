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

var _ref2 = _react2.default.createElement('path', { d: 'M903 1792q-283 0-504.5-150.5t-329.5-398.5q-58-131-67-301t26-332.5 111-312 179-242.5l-11 281q11-14 68-15.5t70 15.5q42-81 160.5-138t234.5-59q-54 45-119.5 148.5t-58.5 163.5q25 8 62.5 13.5t63 7.5 68 4 50.5 3q15 5 9.5 45.5t-30.5 75.5q-5 7-16.5 18.5t-56.5 35.5-101 34l15 189-139-67q-18 43-7.5 81.5t36 66.5 65.5 41.5 81 6.5q51-9 98-34.5t83.5-45 73.5-17.5q61 4 89.5 33t19.5 65q-1 2-2.5 5.5t-8.5 12.5-18 15.5-31.5 10.5-46.5 1q-60 95-144.5 135.5t-209.5 29.5q74 61 162.5 82.5t168.5 6 154.5-52 128-87.5 80.5-104q43-91 39-192.5t-37.5-188.5-78.5-125q87 38 137 79.5t77 112.5q15-170-57.5-343t-209.5-284q265 77 412 279.5t151 517.5q2 127-40.5 255t-123.5 238-189 196-247.5 135.5-288.5 49.5z' });

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
icon.displayName = 'FaFirefox';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1maXJlZm94LmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxpcUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtZmlyZWZveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOTAzIDE3OTJxLTI4MyAwLTUwNC41LTE1MC41dC0zMjkuNS0zOTguNXEtNTgtMTMxLTY3LTMwMXQyNi0zMzIuNSAxMTEtMzEyIDE3OS0yNDIuNWwtMTEgMjgxcTExLTE0IDY4LTE1LjV0NzAgMTUuNXE0Mi04MSAxNjAuNS0xMzh0MjM0LjUtNTlxLTU0IDQ1LTExOS41IDE0OC41dC01OC41IDE2My41cTI1IDggNjIuNSAxMy41dDYzIDcuNSA2OCA0IDUwLjUgM3ExNSA1IDkuNSA0NS41dC0zMC41IDc1LjVxLTUgNy0xNi41IDE4LjV0LTU2LjUgMzUuNS0xMDEgMzRsMTUgMTg5LTEzOS02N3EtMTggNDMtNy41IDgxLjV0MzYgNjYuNSA2NS41IDQxLjUgODEgNi41cTUxLTkgOTgtMzQuNXQ4My41LTQ1IDczLjUtMTcuNXE2MSA0IDg5LjUgMzN0MTkuNSA2NXEtMSAyLTIuNSA1LjV0LTguNSAxMi41LTE4IDE1LjUtMzEuNSAxMC41LTQ2LjUgMXEtNjAgOTUtMTQ0LjUgMTM1LjV0LTIwOS41IDI5LjVxNzQgNjEgMTYyLjUgODIuNXQxNjguNSA2IDE1NC41LTUyIDEyOC04Ny41IDgwLjUtMTA0cTQzLTkxIDM5LTE5Mi41dC0zNy41LTE4OC41LTc4LjUtMTI1cTg3IDM4IDEzNyA3OS41dDc3IDExMi41cTE1LTE3MC01Ny41LTM0M3QtMjA5LjUtMjg0cTI2NSA3NyA0MTIgMjc5LjV0MTUxIDUxNy41cTIgMTI3LTQwLjUgMjU1dC0xMjMuNSAyMzgtMTg5IDE5Ni0yNDcuNSAxMzUuNS0yODguNSA0OS41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFGaXJlZm94JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
