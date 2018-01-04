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

var _ref2 = _react2.default.createElement('path', { d: 'M605 1233q153 0 257-104 14-18 3-36l-45-82q-6-13-24-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13.5-23.5 14.5-28.5 13-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-148 0-246 96.5t-98 240.5q0 146 97 241.5t247 95.5zm630 0q153 0 257-104 14-18 4-36l-45-82q-8-14-25-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13.5-23.5 14.5-28.5 13-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-147 0-245.5 96.5t-98.5 240.5q0 146 97 241.5t247 95.5zm-339-1073q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zm0-160q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71z' });

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
icon.displayName = 'FaCreativeCommons';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jcmVhdGl2ZS1jb21tb25zLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwrOEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsbUJBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWNyZWF0aXZlLWNvbW1vbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTYwNSAxMjMzcTE1MyAwIDI1Ny0xMDQgMTQtMTggMy0zNmwtNDUtODJxLTYtMTMtMjQtMTctMTYtMi0yNyAxMWwtNCAzcS00IDQtMTEuNSAxMHQtMTcuNSAxMy41LTIzLjUgMTQuNS0yOC41IDEzLTMzLjUgOS41LTM3LjUgMy41cS03NiAwLTEyNS01MHQtNDktMTI3cTAtNzYgNDgtMTI1LjV0MTIyLTQ5LjVxMzcgMCA3MS41IDE0dDUwLjUgMjhsMTYgMTRxMTEgMTEgMjYgMTAgMTYtMiAyNC0xNGw1My03OHExMy0yMC0yLTM5LTMtNC0xMS0xMnQtMzAtMjMuNS00OC41LTI4LTY3LjUtMjIuNS04Ni0xMHEtMTQ4IDAtMjQ2IDk2LjV0LTk4IDI0MC41cTAgMTQ2IDk3IDI0MS41dDI0NyA5NS41em02MzAgMHExNTMgMCAyNTctMTA0IDE0LTE4IDQtMzZsLTQ1LTgycS04LTE0LTI1LTE3LTE2LTItMjcgMTFsLTQgM3EtNCA0LTExLjUgMTB0LTE3LjUgMTMuNS0yMy41IDE0LjUtMjguNSAxMy0zMy41IDkuNS0zNy41IDMuNXEtNzYgMC0xMjUtNTB0LTQ5LTEyN3EwLTc2IDQ4LTEyNS41dDEyMi00OS41cTM3IDAgNzEuNSAxNHQ1MC41IDI4bDE2IDE0cTExIDExIDI2IDEwIDE2LTIgMjQtMTRsNTMtNzhxMTMtMjAtMi0zOS0zLTQtMTEtMTJ0LTMwLTIzLjUtNDguNS0yOC02Ny41LTIyLjUtODYtMTBxLTE0NyAwLTI0NS41IDk2LjV0LTk4LjUgMjQwLjVxMCAxNDYgOTcgMjQxLjV0MjQ3IDk1LjV6bS0zMzktMTA3M3EtMTUwIDAtMjg2IDU4LjV0LTIzNC41IDE1Ny0xNTcgMjM0LjUtNTguNSAyODYgNTguNSAyODYgMTU3IDIzNC41IDIzNC41IDE1NyAyODYgNTguNSAyODYtNTguNSAyMzQuNS0xNTcgMTU3LTIzNC41IDU4LjUtMjg2LTU4LjUtMjg2LTE1Ny0yMzQuNS0yMzQuNS0xNTctMjg2LTU4LjV6bTAtMTYwcTE4MiAwIDM0OCA3MXQyODYgMTkxIDE5MSAyODYgNzEgMzQ4LTcxIDM0OC0xOTEgMjg2LTI4NiAxOTEtMzQ4IDcxLTM0OC03MS0yODYtMTkxLTE5MS0yODYtNzEtMzQ4IDcxLTM0OCAxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFDcmVhdGl2ZUNvbW1vbnMnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
