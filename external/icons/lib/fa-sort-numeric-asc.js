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

var _ref2 = _react2.default.createElement('path', { d: 'M1474 1313q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zm-610 127q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm750-69q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5zm-30-717v114h-469v-114h167v-432q0-7 .5-19t.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165z' });

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
icon.displayName = 'FaSortNumericAsc';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3J0LW51bWVyaWMtYXNjLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxva0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsa0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNvcnQtbnVtZXJpYy1hc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0NzQgMTMxM3EwLTYzLTQ0LTExNnQtMTAzLTUzcS01MiAwLTgzIDM3dC0zMSA5NCAzNi41IDk1IDEwNC41IDM4cTUwIDAgODUtMjd0MzUtNjh6bS02MTAgMTI3cTAgMTItMTAgMjRsLTMxOSAzMTlxLTEwIDktMjMgOS0xMiAwLTIzLTlsLTMyMC0zMjBxLTE1LTE2LTctMzUgOC0yMCAzMC0yMGgxOTJ2LTEzNzZxMC0xNCA5LTIzdDIzLTloMTkycTE0IDAgMjMgOXQ5IDIzdjEzNzZoMTkycTE0IDAgMjMgOXQ5IDIzem03NTAtNjlxMCA2Mi0xMyAxMjEuNXQtNDEgMTE0LTY4IDk1LjUtOTguNSA2NS41LTEyNy41IDI0LjVxLTYyIDAtMTA4LTE2LTI0LTgtNDItMTVsMzktMTEzcTE1IDcgMzEgMTEgMzcgMTMgNzUgMTMgODQgMCAxMzQuNS01OC41dDY2LjUtMTQ1LjVoLTJxLTIxIDIzLTYxLjUgMzd0LTg0LjUgMTRxLTEwNiAwLTE3My03MS41dC02Ny0xNzIuNXEwLTEwNSA3Mi0xNzh0MTgxLTczcTEyMyAwIDIwNSA5NC41dDgyIDI1Mi41em0tMzAtNzE3djExNGgtNDY5di0xMTRoMTY3di00MzJxMC03IC41LTE5dC41LTE3di0xNmgtMmwtNyAxMnEtOCAxMy0yNiAzMWwtNjIgNTgtODItODYgMTkyLTE4NWgxMjN2NjU0aDE2NXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhU29ydE51bWVyaWNBc2MnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
