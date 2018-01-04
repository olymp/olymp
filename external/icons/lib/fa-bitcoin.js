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

var _ref2 = _react2.default.createElement('path', { d: 'M1423 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-.5t-55-.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zm-215 545q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 .5t48 .5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zm-71-476q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5.5v307q5 0 34.5.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z' });

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
icon.displayName = 'FaBitcoin';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaXRjb2luLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw4bUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtYml0Y29pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTQyMyA2NDBxMTggMTgyLTEzMSAyNTggMTE3IDI4IDE3NSAxMDN0NDUgMjE0cS03IDcxLTMyLjUgMTI1dC02NC41IDg5LTk3IDU4LjUtMTIxLjUgMzQuNS0xNDUuNSAxNXYyNTVoLTE1NHYtMjUxcS04MCAwLTEyMi0xdjI1MmgtMTU0di0yNTVxLTE4IDAtNTQtLjV0LTU1LS41aC0yMDBsMzEtMTgzaDExMXE1MCAwIDU4LTUxdi00MDJoMTZxLTYtMS0xNi0xdi0yODdxLTEzLTY4LTg5LTY4aC0xMTF2LTE2NGwyMTIgMXE2NCAwIDk3LTF2LTI1MmgxNTR2MjQ3cTgyLTIgMTIyLTJ2LTI0NWgxNTR2MjUycTc5IDcgMTQwIDIyLjV0MTEzIDQ1IDgyLjUgNzggMzYuNSAxMTQuNXptLTIxNSA1NDVxMC0zNi0xNS02NHQtMzctNDYtNTcuNS0zMC41LTY1LjUtMTguNS03NC05LTY5LTMtNjQuNSAxLTQ3LjUgMXYzMzhxOCAwIDM3IC41dDQ4IC41IDUzLTEuNSA1OC41LTQgNTctOC41IDU1LjUtMTQgNDcuNS0yMSAzOS41LTMwIDI0LjUtNDAgOS41LTUxem0tNzEtNDc2cTAtMzMtMTIuNS01OC41dC0zMC41LTQyLTQ4LTI4LTU1LTE2LjUtNjEuNS04LTU4LTIuNS01NCAxLTM5LjUuNXYzMDdxNSAwIDM0LjUuNXQ0Ni41IDAgNTAtMiA1NS01LjUgNTEuNS0xMSA0OC41LTE4LjUgMzctMjcgMjctMzguNSA5LTUxelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFCaXRjb2luJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
