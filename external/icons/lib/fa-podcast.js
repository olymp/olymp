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

var _ref2 = _react2.default.createElement('path', { d: 'M1122 1192q0 86-17 197-31 215-55 313-22 90-152 90t-152-90q-24-98-55-313-17-110-17-197 0-168 224-168t224 168zm542-424q0 240-134 434t-350 280q-8 3-15-3t-6-15q7-48 10-66 4-32 6-47 1-9 9-12 159-81 255.5-234t96.5-337q0-180-91-330.5t-247-234.5-337-74q-124 7-237 61t-193.5 140.5-128 202-46.5 240.5q1 184 99 336.5t257 231.5q7 3 9 12 3 21 6 45 1 9 5 32.5t6 35.5q1 9-6.5 15t-15.5 2q-148-58-261-169.5t-173.5-264-52.5-319.5q7-143 66-273.5t154.5-227 225-157.5 272.5-70q164-10 315.5 46.5t261 160.5 175 250.5 65.5 308.5zm-542-32q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5zm288 32q0 122-53.5 228.5t-146.5 177.5q-8 6-16 2t-10-14q-6-52-29-92-7-10 3-20 58-54 91-127t33-155q0-111-58.5-204t-157.5-141.5-212-36.5q-133 15-229 113t-109 231q-10 92 23.5 176t98.5 144q10 10 3 20-24 41-29 93-2 9-10 13t-16-2q-95-74-148.5-183t-51.5-234q3-131 69-244t177-181.5 241-74.5q144-7 268 60t196.5 187.5 72.5 263.5z' });

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
icon.displayName = 'FaPodcast';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1wb2RjYXN0LmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxnNkJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtcG9kY2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTEyMiAxMTkycTAgODYtMTcgMTk3LTMxIDIxNS01NSAzMTMtMjIgOTAtMTUyIDkwdC0xNTItOTBxLTI0LTk4LTU1LTMxMy0xNy0xMTAtMTctMTk3IDAtMTY4IDIyNC0xNjh0MjI0IDE2OHptNTQyLTQyNHEwIDI0MC0xMzQgNDM0dC0zNTAgMjgwcS04IDMtMTUtM3QtNi0xNXE3LTQ4IDEwLTY2IDQtMzIgNi00NyAxLTkgOS0xMiAxNTktODEgMjU1LjUtMjM0dDk2LjUtMzM3cTAtMTgwLTkxLTMzMC41dC0yNDctMjM0LjUtMzM3LTc0cS0xMjQgNy0yMzcgNjF0LTE5My41IDE0MC41LTEyOCAyMDItNDYuNSAyNDAuNXExIDE4NCA5OSAzMzYuNXQyNTcgMjMxLjVxNyAzIDkgMTIgMyAyMSA2IDQ1IDEgOSA1IDMyLjV0NiAzNS41cTEgOS02LjUgMTV0LTE1LjUgMnEtMTQ4LTU4LTI2MS0xNjkuNXQtMTczLjUtMjY0LTUyLjUtMzE5LjVxNy0xNDMgNjYtMjczLjV0MTU0LjUtMjI3IDIyNS0xNTcuNSAyNzIuNS03MHExNjQtMTAgMzE1LjUgNDYuNXQyNjEgMTYwLjUgMTc1IDI1MC41IDY1LjUgMzA4LjV6bS01NDItMzJxMCA5My02NS41IDE1OC41dC0xNTguNSA2NS41LTE1OC41LTY1LjUtNjUuNS0xNTguNSA2NS41LTE1OC41IDE1OC41LTY1LjUgMTU4LjUgNjUuNSA2NS41IDE1OC41em0yODggMzJxMCAxMjItNTMuNSAyMjguNXQtMTQ2LjUgMTc3LjVxLTggNi0xNiAydC0xMC0xNHEtNi01Mi0yOS05Mi03LTEwIDMtMjAgNTgtNTQgOTEtMTI3dDMzLTE1NXEwLTExMS01OC41LTIwNHQtMTU3LjUtMTQxLjUtMjEyLTM2LjVxLTEzMyAxNS0yMjkgMTEzdC0xMDkgMjMxcS0xMCA5MiAyMy41IDE3NnQ5OC41IDE0NHExMCAxMCAzIDIwLTI0IDQxLTI5IDkzLTIgOS0xMCAxM3QtMTYtMnEtOTUtNzQtMTQ4LjUtMTgzdC01MS41LTIzNHEzLTEzMSA2OS0yNDR0MTc3LTE4MS41IDI0MS03NC41cTE0NC03IDI2OCA2MHQxOTYuNSAxODcuNSA3Mi41IDI2My41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFQb2RjYXN0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
