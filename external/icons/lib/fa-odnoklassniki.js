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

var _ref2 = _react2.default.createElement('path', { d: 'M896 907q-188 0-321-133t-133-320q0-188 133-321t321-133 321 133 133 321q0 187-133 320t-321 133zm0-677q-92 0-157.5 65.5t-65.5 158.5q0 92 65.5 157.5t157.5 65.5 157.5-65.5 65.5-157.5q0-93-65.5-158.5t-157.5-65.5zm523 732q13 27 15 49.5t-4.5 40.5-26.5 38.5-42.5 37-61.5 41.5q-115 73-315 94l73 72 267 267q30 31 30 74t-30 73l-12 13q-31 30-74 30t-74-30q-67-68-267-268l-267 268q-31 30-74 30t-73-30l-12-13q-31-30-31-73t31-74l267-267 72-72q-203-21-317-94-39-25-61.5-41.5t-42.5-37-26.5-38.5-4.5-40.5 15-49.5q10-20 28-35t42-22 56 2 65 35q5 4 15 11t43 24.5 69 30.5 92 24 113 11q91 0 174-25.5t120-50.5l38-25q33-26 65-35t56-2 42 22 28 35z' });

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
icon.displayName = 'FaOdnoklassniki';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1vZG5va2xhc3NuaWtpLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw4bUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsaUJBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLW9kbm9rbGFzc25pa2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTg5NiA5MDdxLTE4OCAwLTMyMS0xMzN0LTEzMy0zMjBxMC0xODggMTMzLTMyMXQzMjEtMTMzIDMyMSAxMzMgMTMzIDMyMXEwIDE4Ny0xMzMgMzIwdC0zMjEgMTMzem0wLTY3N3EtOTIgMC0xNTcuNSA2NS41dC02NS41IDE1OC41cTAgOTIgNjUuNSAxNTcuNXQxNTcuNSA2NS41IDE1Ny41LTY1LjUgNjUuNS0xNTcuNXEwLTkzLTY1LjUtMTU4LjV0LTE1Ny41LTY1LjV6bTUyMyA3MzJxMTMgMjcgMTUgNDkuNXQtNC41IDQwLjUtMjYuNSAzOC41LTQyLjUgMzctNjEuNSA0MS41cS0xMTUgNzMtMzE1IDk0bDczIDcyIDI2NyAyNjdxMzAgMzEgMzAgNzR0LTMwIDczbC0xMiAxM3EtMzEgMzAtNzQgMzB0LTc0LTMwcS02Ny02OC0yNjctMjY4bC0yNjcgMjY4cS0zMSAzMC03NCAzMHQtNzMtMzBsLTEyLTEzcS0zMS0zMC0zMS03M3QzMS03NGwyNjctMjY3IDcyLTcycS0yMDMtMjEtMzE3LTk0LTM5LTI1LTYxLjUtNDEuNXQtNDIuNS0zNy0yNi41LTM4LjUtNC41LTQwLjUgMTUtNDkuNXExMC0yMCAyOC0zNXQ0Mi0yMiA1NiAyIDY1IDM1cTUgNCAxNSAxMXQ0MyAyNC41IDY5IDMwLjUgOTIgMjQgMTEzIDExcTkxIDAgMTc0LTI1LjV0MTIwLTUwLjVsMzgtMjVxMzMtMjYgNjUtMzV0NTYtMiA0MiAyMiAyOCAzNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhT2Rub2tsYXNzbmlraSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
