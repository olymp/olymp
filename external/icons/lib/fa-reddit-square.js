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

var _ref2 = _react2.default.createElement('path', { d: 'M1067 1129q13 13 0 26-53 53-171 53t-171-53q-13-13 0-26 5-6 13-6t13 6q42 42 145 42t145-42q5-6 13-6t13 6zm-263-156q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zm338 0q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zm215-103q0-42-30-72t-73-30q-42 0-73 31-113-78-267-82l54-243 171 39q1 32 23.5 54t53.5 22q32 0 54.5-22.5t22.5-54.5-22.5-54.5-54.5-22.5q-48 0-69 43l-189-42q-17-5-21 13l-60 268q-154 6-265 83-30-32-74-32-43 0-73 30t-30 72q0 30 16 55t42 38q-5 25-5 48 0 122 120 208.5t289 86.5q170 0 290-86.5t120-208.5q0-25-6-49 25-13 40.5-37.5t15.5-54.5zm307-454v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaRedditSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yZWRkaXQtc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx5dUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZ0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXJlZGRpdC1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwNjcgMTEyOXExMyAxMyAwIDI2LTUzIDUzLTE3MSA1M3QtMTcxLTUzcS0xMy0xMyAwLTI2IDUtNiAxMy02dDEzIDZxNDIgNDIgMTQ1IDQydDE0NS00MnE1LTYgMTMtNnQxMyA2em0tMjYzLTE1NnEwIDMxLTIzIDU0dC01NCAyMy01NC0yMy0yMy01NHEwLTMyIDIyLjUtNTQuNXQ1NC41LTIyLjUgNTQuNSAyMi41IDIyLjUgNTQuNXptMzM4IDBxMCAzMS0yMyA1NHQtNTQgMjMtNTQtMjMtMjMtNTRxMC0zMiAyMi41LTU0LjV0NTQuNS0yMi41IDU0LjUgMjIuNSAyMi41IDU0LjV6bTIxNS0xMDNxMC00Mi0zMC03MnQtNzMtMzBxLTQyIDAtNzMgMzEtMTEzLTc4LTI2Ny04Mmw1NC0yNDMgMTcxIDM5cTEgMzIgMjMuNSA1NHQ1My41IDIycTMyIDAgNTQuNS0yMi41dDIyLjUtNTQuNS0yMi41LTU0LjUtNTQuNS0yMi41cS00OCAwLTY5IDQzbC0xODktNDJxLTE3LTUtMjEgMTNsLTYwIDI2OHEtMTU0IDYtMjY1IDgzLTMwLTMyLTc0LTMyLTQzIDAtNzMgMzB0LTMwIDcycTAgMzAgMTYgNTV0NDIgMzhxLTUgMjUtNSA0OCAwIDEyMiAxMjAgMjA4LjV0Mjg5IDg2LjVxMTcwIDAgMjkwLTg2LjV0MTIwLTIwOC41cTAtMjUtNi00OSAyNS0xMyA0MC41LTM3LjV0MTUuNS01NC41em0zMDctNDU0djk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwcTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhUmVkZGl0U3F1YXJlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
