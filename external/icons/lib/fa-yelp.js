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

var _ref2 = _react2.default.createElement('path', { d: 'M901 1319v127q-1 292-6 305-12 32-51 40-54 9-181.5-38t-162.5-89q-13-15-17-36-1-12 4-26 4-10 34-47t181-216q1 0 60-70 15-19 39.5-24.5t49.5 3.5q24 10 37.5 29t12.5 42zm-149-251q-3 55-52 70l-120 39q-275 88-292 88-35-2-54-36-12-25-17-75-8-76 1-166.5t30-124.5 56-32q13 0 202 77 71 29 115 47l84 34q23 9 35.5 30.5t11.5 48.5zm826 297q-7 54-91.5 161t-135.5 127q-37 14-63-7-14-10-184-287l-47-77q-14-21-11.5-46t19.5-46q35-43 83-26 1 1 119 40 203 66 242 79.5t47 20.5q28 22 22 61zm-672-632q5 102-54 122-58 17-114-71l-378-598q-8-35 19-62 41-43 207.5-89.5t224.5-31.5q40 10 49 45 3 18 22 305.5t24 379.5zm662 108q3 39-26 59-15 10-329 86-67 15-91 23l1-2q-23 6-46-4t-37-32q-30-47 0-87 1-1 75-102 125-171 150-204t34-39q28-19 65-2 48 23 123 133.5t81 167.5v3z' });

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
icon.displayName = 'FaYelp';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS15ZWxwLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxndUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsUUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEteWVscC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOTAxIDEzMTl2MTI3cS0xIDI5Mi02IDMwNS0xMiAzMi01MSA0MC01NCA5LTE4MS41LTM4dC0xNjIuNS04OXEtMTMtMTUtMTctMzYtMS0xMiA0LTI2IDQtMTAgMzQtNDd0MTgxLTIxNnExIDAgNjAtNzAgMTUtMTkgMzkuNS0yNC41dDQ5LjUgMy41cTI0IDEwIDM3LjUgMjl0MTIuNSA0MnptLTE0OS0yNTFxLTMgNTUtNTIgNzBsLTEyMCAzOXEtMjc1IDg4LTI5MiA4OC0zNS0yLTU0LTM2LTEyLTI1LTE3LTc1LTgtNzYgMS0xNjYuNXQzMC0xMjQuNSA1Ni0zMnExMyAwIDIwMiA3NyA3MSAyOSAxMTUgNDdsODQgMzRxMjMgOSAzNS41IDMwLjV0MTEuNSA0OC41em04MjYgMjk3cS03IDU0LTkxLjUgMTYxdC0xMzUuNSAxMjdxLTM3IDE0LTYzLTctMTQtMTAtMTg0LTI4N2wtNDctNzdxLTE0LTIxLTExLjUtNDZ0MTkuNS00NnEzNS00MyA4My0yNiAxIDEgMTE5IDQwIDIwMyA2NiAyNDIgNzkuNXQ0NyAyMC41cTI4IDIyIDIyIDYxem0tNjcyLTYzMnE1IDEwMi01NCAxMjItNTggMTctMTE0LTcxbC0zNzgtNTk4cS04LTM1IDE5LTYyIDQxLTQzIDIwNy41LTg5LjV0MjI0LjUtMzEuNXE0MCAxMCA0OSA0NSAzIDE4IDIyIDMwNS41dDI0IDM3OS41em02NjIgMTA4cTMgMzktMjYgNTktMTUgMTAtMzI5IDg2LTY3IDE1LTkxIDIzbDEtMnEtMjMgNi00Ni00dC0zNy0zMnEtMzAtNDcgMC04NyAxLTEgNzUtMTAyIDEyNS0xNzEgMTUwLTIwNHQzNC0zOXEyOC0xOSA2NS0yIDQ4IDIzIDEyMyAxMzMuNXQ4MSAxNjcuNXYzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFZZWxwJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
