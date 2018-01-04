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

var _ref2 = _react2.default.createElement('path', { d: 'M1024 1131q0 64-37 106.5t-91 42.5h-512q-54 0-91-42.5t-37-106.5 9-117.5 29.5-103 60.5-78 97-28.5q6 4 30 18t37.5 21.5 35.5 17.5 43 14.5 42 4.5 42-4.5 43-14.5 35.5-17.5 37.5-21.5 30-18q57 0 97 28.5t60.5 78 29.5 103 9 117.5zm-157-520q0 94-66.5 160.5t-160.5 66.5-160.5-66.5-66.5-160.5 66.5-160.5 160.5-66.5 160.5 66.5 66.5 160.5zm925 445v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zm0-252v56q0 15-10.5 25.5t-25.5 10.5h-568q-15 0-25.5-10.5t-10.5-25.5v-56q0-15 10.5-25.5t25.5-10.5h568q15 0 25.5 10.5t10.5 25.5zm0-260v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zm128 960v-1216q0-13-9.5-22.5t-22.5-9.5h-1728q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h352v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h768v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h352q13 0 22.5-9.5t9.5-22.5zm128-1216v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z' });

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
icon.displayName = 'FaVcardO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12Y2FyZC1vLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSxzN0JBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdmNhcmQtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAyNCAxMTMxcTAgNjQtMzcgMTA2LjV0LTkxIDQyLjVoLTUxMnEtNTQgMC05MS00Mi41dC0zNy0xMDYuNSA5LTExNy41IDI5LjUtMTAzIDYwLjUtNzggOTctMjguNXE2IDQgMzAgMTh0MzcuNSAyMS41IDM1LjUgMTcuNSA0MyAxNC41IDQyIDQuNSA0Mi00LjUgNDMtMTQuNSAzNS41LTE3LjUgMzcuNS0yMS41IDMwLTE4cTU3IDAgOTcgMjguNXQ2MC41IDc4IDI5LjUgMTAzIDkgMTE3LjV6bS0xNTctNTIwcTAgOTQtNjYuNSAxNjAuNXQtMTYwLjUgNjYuNS0xNjAuNS02Ni41LTY2LjUtMTYwLjUgNjYuNS0xNjAuNSAxNjAuNS02Ni41IDE2MC41IDY2LjUgNjYuNSAxNjAuNXptOTI1IDQ0NXY2NHEwIDE0LTkgMjN0LTIzIDloLTU3NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWg1NzZxMTQgMCAyMyA5dDkgMjN6bTAtMjUydjU2cTAgMTUtMTAuNSAyNS41dC0yNS41IDEwLjVoLTU2OHEtMTUgMC0yNS41LTEwLjV0LTEwLjUtMjUuNXYtNTZxMC0xNSAxMC41LTI1LjV0MjUuNS0xMC41aDU2OHExNSAwIDI1LjUgMTAuNXQxMC41IDI1LjV6bTAtMjYwdjY0cTAgMTQtOSAyM3QtMjMgOWgtNTc2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDU3NnExNCAwIDIzIDl0OSAyM3ptMTI4IDk2MHYtMTIxNnEwLTEzLTkuNS0yMi41dC0yMi41LTkuNWgtMTcyOHEtMTMgMC0yMi41IDkuNXQtOS41IDIyLjV2MTIxNnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDM1MnYtOTZxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN2OTZoNzY4di05NnEwLTE0IDktMjN0MjMtOWg2NHExNCAwIDIzIDl0OSAyM3Y5NmgzNTJxMTMgMCAyMi41LTkuNXQ5LjUtMjIuNXptMTI4LTEyMTZ2MTIxNnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0xNzI4cS02NiAwLTExMy00N3QtNDctMTEzdi0xMjE2cTAtNjYgNDctMTEzdDExMy00N2gxNzI4cTY2IDAgMTEzIDQ3dDQ3IDExM3pcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVZjYXJkTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
