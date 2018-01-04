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

var _ref2 = _react2.default.createElement('path', { d: 'M1848 339h-511v124h511v-124zm-252 426q-90 0-146 52.5t-62 142.5h408q-18-195-200-195zm16 585q63 0 122-32t76-87h221q-100 307-427 307-214 0-340.5-132t-126.5-347q0-208 130.5-345.5t336.5-137.5q138 0 240.5 68t153 179 50.5 248q0 17-2 47h-658q0 111 57.5 171.5t166.5 60.5zm-1335-50h296q205 0 205-167 0-180-199-180h-302v347zm0-537h281q78 0 123.5-36.5t45.5-113.5q0-144-190-144h-260v294zm-277-509h594q87 0 155 14t126.5 47.5 90 96.5 31.5 154q0 181-172 263 114 32 172 115t58 204q0 75-24.5 136.5t-66 103.5-98.5 71-121 42-134 13h-611v-1260z' });

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
icon.displayName = 'FaBehance';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iZWhhbmNlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSw2Z0JBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtYmVoYW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTg0OCAzMzloLTUxMXYxMjRoNTExdi0xMjR6bS0yNTIgNDI2cS05MCAwLTE0NiA1Mi41dC02MiAxNDIuNWg0MDhxLTE4LTE5NS0yMDAtMTk1em0xNiA1ODVxNjMgMCAxMjItMzJ0NzYtODdoMjIxcS0xMDAgMzA3LTQyNyAzMDctMjE0IDAtMzQwLjUtMTMydC0xMjYuNS0zNDdxMC0yMDggMTMwLjUtMzQ1LjV0MzM2LjUtMTM3LjVxMTM4IDAgMjQwLjUgNjh0MTUzIDE3OSA1MC41IDI0OHEwIDE3LTIgNDdoLTY1OHEwIDExMSA1Ny41IDE3MS41dDE2Ni41IDYwLjV6bS0xMzM1LTUwaDI5NnEyMDUgMCAyMDUtMTY3IDAtMTgwLTE5OS0xODBoLTMwMnYzNDd6bTAtNTM3aDI4MXE3OCAwIDEyMy41LTM2LjV0NDUuNS0xMTMuNXEwLTE0NC0xOTAtMTQ0aC0yNjB2Mjk0em0tMjc3LTUwOWg1OTRxODcgMCAxNTUgMTR0MTI2LjUgNDcuNSA5MCA5Ni41IDMxLjUgMTU0cTAgMTgxLTE3MiAyNjMgMTE0IDMyIDE3MiAxMTV0NTggMjA0cTAgNzUtMjQuNSAxMzYuNXQtNjYgMTAzLjUtOTguNSA3MS0xMjEgNDItMTM0IDEzaC02MTF2LTEyNjB6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFCZWhhbmNlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
