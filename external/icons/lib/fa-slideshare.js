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

var _ref2 = _react2.default.createElement('path', { d: 'M873 740q0 83-63.5 142.5t-152.5 59.5-152.5-59.5-63.5-142.5q0-84 63.5-143t152.5-59 152.5 59 63.5 143zm502 0q0 83-63 142.5t-153 59.5q-89 0-152.5-59.5t-63.5-142.5q0-84 63.5-143t152.5-59q90 0 153 59t63 143zm225 180v-667q0-87-32-123.5t-111-36.5h-1112q-83 0-112.5 34t-29.5 126v673q43 23 88.5 40t81 28 81 18.5 71 11 70 4 58.5.5 56.5-2 44.5-2q68-1 95 27 6 6 10 9 26 25 61 51 7-91 118-87 5 0 36.5 1.5t43 2 45.5 1 53-1 54.5-4.5 61-8.5 62-13.5 67-19.5 67.5-27 72-34.5zm163-5q-121 149-372 252 84 285-23 465-66 113-183 148-104 32-182-15-86-51-82-164l-1-326v-1q-8-2-24.5-6t-23.5-5l-1 338q4 114-83 164-79 47-183 15-117-36-182-150-105-180-22-463-251-103-372-252-25-37-4-63t60 1q4 2 11.5 7t10.5 8v-694q0-72 47-123t114-51h1257q67 0 114 51t47 123v694l21-15q39-27 60-1t-4 63z' });

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
icon.displayName = 'FaSlideshare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zbGlkZXNoYXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxxdkJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtc2xpZGVzaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODczIDc0MHEwIDgzLTYzLjUgMTQyLjV0LTE1Mi41IDU5LjUtMTUyLjUtNTkuNS02My41LTE0Mi41cTAtODQgNjMuNS0xNDN0MTUyLjUtNTkgMTUyLjUgNTkgNjMuNSAxNDN6bTUwMiAwcTAgODMtNjMgMTQyLjV0LTE1MyA1OS41cS04OSAwLTE1Mi41LTU5LjV0LTYzLjUtMTQyLjVxMC04NCA2My41LTE0M3QxNTIuNS01OXE5MCAwIDE1MyA1OXQ2MyAxNDN6bTIyNSAxODB2LTY2N3EwLTg3LTMyLTEyMy41dC0xMTEtMzYuNWgtMTExMnEtODMgMC0xMTIuNSAzNHQtMjkuNSAxMjZ2NjczcTQzIDIzIDg4LjUgNDB0ODEgMjggODEgMTguNSA3MSAxMSA3MCA0IDU4LjUuNSA1Ni41LTIgNDQuNS0ycTY4LTEgOTUgMjcgNiA2IDEwIDkgMjYgMjUgNjEgNTEgNy05MSAxMTgtODcgNSAwIDM2LjUgMS41dDQzIDIgNDUuNSAxIDUzLTEgNTQuNS00LjUgNjEtOC41IDYyLTEzLjUgNjctMTkuNSA2Ny41LTI3IDcyLTM0LjV6bTE2My01cS0xMjEgMTQ5LTM3MiAyNTIgODQgMjg1LTIzIDQ2NS02NiAxMTMtMTgzIDE0OC0xMDQgMzItMTgyLTE1LTg2LTUxLTgyLTE2NGwtMS0zMjZ2LTFxLTgtMi0yNC41LTZ0LTIzLjUtNWwtMSAzMzhxNCAxMTQtODMgMTY0LTc5IDQ3LTE4MyAxNS0xMTctMzYtMTgyLTE1MC0xMDUtMTgwLTIyLTQ2My0yNTEtMTAzLTM3Mi0yNTItMjUtMzctNC02M3Q2MCAxcTQgMiAxMS41IDd0MTAuNSA4di02OTRxMC03MiA0Ny0xMjN0MTE0LTUxaDEyNTdxNjcgMCAxMTQgNTF0NDcgMTIzdjY5NGwyMS0xNXEzOS0yNyA2MC0xdC00IDYzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTbGlkZXNoYXJlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
