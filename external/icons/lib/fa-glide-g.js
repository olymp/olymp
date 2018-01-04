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

var _ref2 = _react2.default.createElement('path', { d: 'M872.5 305q0-24-2-38.5t-8.5-30-21-23-37.5-7.5q-39 0-78 23-105 58-159 190.5t-54 269.5q0 44 8.5 85.5t26.5 80.5 52.5 62.5 81.5 23.5q4 0 18 .5t20 0 16-3 15-8.5 7-16q16-77 48-231.5t48-231.5q19-91 19-146zm754 656q0 7-7.5 13.5t-15.5 6.5l-6-1q-22-3-62-11t-72-12.5-63-4.5q-167 0-351 93-15 8-21 27-10 36-24.5 105.5t-22.5 100.5q-23 91-70 179.5t-112.5 164.5-154.5 123-185 47q-135 0-214.5-83.5t-79.5-219.5q0-53 19.5-117t63-116.5 97.5-52.5q38 0 120 33.5t83 61.5q0 1-16.5 12.5t-39.5 31-46 44.5-39 61-16 74q0 33 16.5 53t48.5 20q45 0 85-31.5t66.5-78 48-105.5 32.5-107 16-90v-9q0-2-3.5-3.5t-8.5-1.5h-10l-10 .5-6 .5q-227 0-352-122.5t-125-348.5q0-108 34.5-221t96-210 156-167.5 204.5-89.5q52-9 106-9 374 0 374 360 0 98-38 273t-43 211l3 3q101-57 182.5-88t167.5-31q22 0 53 13 19 7 80 102.5t61 116.5z' });

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
icon.displayName = 'FaGlideG';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1nbGlkZS1nLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwwd0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtZ2xpZGUtZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODcyLjUgMzA1cTAtMjQtMi0zOC41dC04LjUtMzAtMjEtMjMtMzcuNS03LjVxLTM5IDAtNzggMjMtMTA1IDU4LTE1OSAxOTAuNXQtNTQgMjY5LjVxMCA0NCA4LjUgODUuNXQyNi41IDgwLjUgNTIuNSA2Mi41IDgxLjUgMjMuNXE0IDAgMTggLjV0MjAgMCAxNi0zIDE1LTguNSA3LTE2cTE2LTc3IDQ4LTIzMS41dDQ4LTIzMS41cTE5LTkxIDE5LTE0NnptNzU0IDY1NnEwIDctNy41IDEzLjV0LTE1LjUgNi41bC02LTFxLTIyLTMtNjItMTF0LTcyLTEyLjUtNjMtNC41cS0xNjcgMC0zNTEgOTMtMTUgOC0yMSAyNy0xMCAzNi0yNC41IDEwNS41dC0yMi41IDEwMC41cS0yMyA5MS03MCAxNzkuNXQtMTEyLjUgMTY0LjUtMTU0LjUgMTIzLTE4NSA0N3EtMTM1IDAtMjE0LjUtODMuNXQtNzkuNS0yMTkuNXEwLTUzIDE5LjUtMTE3dDYzLTExNi41IDk3LjUtNTIuNXEzOCAwIDEyMCAzMy41dDgzIDYxLjVxMCAxLTE2LjUgMTIuNXQtMzkuNSAzMS00NiA0NC41LTM5IDYxLTE2IDc0cTAgMzMgMTYuNSA1M3Q0OC41IDIwcTQ1IDAgODUtMzEuNXQ2Ni41LTc4IDQ4LTEwNS41IDMyLjUtMTA3IDE2LTkwdi05cTAtMi0zLjUtMy41dC04LjUtMS41aC0xMGwtMTAgLjUtNiAuNXEtMjI3IDAtMzUyLTEyMi41dC0xMjUtMzQ4LjVxMC0xMDggMzQuNS0yMjF0OTYtMjEwIDE1Ni0xNjcuNSAyMDQuNS04OS41cTUyLTkgMTA2LTkgMzc0IDAgMzc0IDM2MCAwIDk4LTM4IDI3M3QtNDMgMjExbDMgM3ExMDEtNTcgMTgyLjUtODh0MTY3LjUtMzFxMjIgMCA1MyAxMyAxOSA3IDgwIDEwMi41dDYxIDExNi41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFHbGlkZUcnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
