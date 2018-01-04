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

var _ref2 = _react2.default.createElement('path', { d: 'M1374 657q-6-26-28.5-39.5t-48.5-7.5q-261 62-401 62t-401-62q-26-6-48.5 7.5t-28.5 39.5 7.5 48.5 39.5 28.5q194 46 303 58-2 158-15.5 269t-26.5 155.5-41 115.5l-9 21q-10 25 1 49t36 34q9 4 23 4 44 0 60-41l8-20q54-139 71-259h42q17 120 71 259l8 20q16 41 60 41 14 0 23-4 25-10 36-34t1-49l-9-21q-28-71-41-115.5t-26.5-155.5-15.5-269q109-12 303-58 26-6 39.5-28.5t7.5-48.5zm-350-145q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm576 384q0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5zm-704-768q-156 0-298 61t-245 164-164 245-61 298 61 298 164 245 245 164 298 61 298-61 245-164 164-245 61-298-61-298-164-245-245-164-298-61zm896 768q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z' });

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
icon.displayName = 'FaUniversalAccess';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11bml2ZXJzYWwtYWNjZXNzLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxtNEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsbUJBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXVuaXZlcnNhbC1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzNzQgNjU3cS02LTI2LTI4LjUtMzkuNXQtNDguNS03LjVxLTI2MSA2Mi00MDEgNjJ0LTQwMS02MnEtMjYtNi00OC41IDcuNXQtMjguNSAzOS41IDcuNSA0OC41IDM5LjUgMjguNXExOTQgNDYgMzAzIDU4LTIgMTU4LTE1LjUgMjY5dC0yNi41IDE1NS41LTQxIDExNS41bC05IDIxcS0xMCAyNSAxIDQ5dDM2IDM0cTkgNCAyMyA0IDQ0IDAgNjAtNDFsOC0yMHE1NC0xMzkgNzEtMjU5aDQycTE3IDEyMCA3MSAyNTlsOCAyMHExNiA0MSA2MCA0MSAxNCAwIDIzLTQgMjUtMTAgMzYtMzR0MS00OWwtOS0yMXEtMjgtNzEtNDEtMTE1LjV0LTI2LjUtMTU1LjUtMTUuNS0yNjlxMTA5LTEyIDMwMy01OCAyNi02IDM5LjUtMjguNXQ3LjUtNDguNXptLTM1MC0xNDVxMC01My0zNy41LTkwLjV0LTkwLjUtMzcuNS05MC41IDM3LjUtMzcuNSA5MC41IDM3LjUgOTAuNSA5MC41IDM3LjUgOTAuNS0zNy41IDM3LjUtOTAuNXptNTc2IDM4NHEwIDE0My01NS41IDI3My41dC0xNTAgMjI1LTIyNSAxNTAtMjczLjUgNTUuNS0yNzMuNS01NS41LTIyNS0xNTAtMTUwLTIyNS01NS41LTI3My41IDU1LjUtMjczLjUgMTUwLTIyNSAyMjUtMTUwIDI3My41LTU1LjUgMjczLjUgNTUuNSAyMjUgMTUwIDE1MCAyMjUgNTUuNSAyNzMuNXptLTcwNC03NjhxLTE1NiAwLTI5OCA2MXQtMjQ1IDE2NC0xNjQgMjQ1LTYxIDI5OCA2MSAyOTggMTY0IDI0NSAyNDUgMTY0IDI5OCA2MSAyOTgtNjEgMjQ1LTE2NCAxNjQtMjQ1IDYxLTI5OC02MS0yOTgtMTY0LTI0NS0yNDUtMTY0LTI5OC02MXptODk2IDc2OHEwIDE4Mi03MSAzNDh0LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzEgMzQ4IDcxIDI4NiAxOTEgMTkxIDI4NiA3MSAzNDh6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVVuaXZlcnNhbEFjY2Vzcyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
