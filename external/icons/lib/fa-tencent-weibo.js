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

var _ref2 = _react2.default.createElement('path', { d: 'M1098 572q0 80-57 136.5t-136 56.5q-60 0-111-35-62 67-115 146-247 371-202 859 1 22-12.5 38.5t-34.5 18.5h-5q-20 0-35-13.5t-17-33.5q-14-126-3.5-247.5t29.5-217 54-186 69-155.5 74-125q61-90 132-165-16-35-16-77 0-80 56.5-136.5t136.5-56.5 136.5 56.5 56.5 136.5zm381 11q0 158-78 292t-212.5 212-292.5 78q-64 0-131-14-21-5-32.5-23.5t-6.5-39.5q5-20 23-31.5t39-7.5q51 13 108 13 97 0 186-38t153-102 102-153 38-186-38-186-102-153-153-102-186-38-186 38-153 102-102 153-38 186q0 114 52 218 10 20 3.5 40t-25.5 30-39.5 3-30.5-26q-64-123-64-265 0-119 46.5-227t124.5-186 186-124 226-46q158 0 292.5 78t212.5 212.5 78 292.5z' });

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
icon.displayName = 'FaTencentWeibo';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10ZW5jZW50LXdlaWJvLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw0bEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZ0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXRlbmNlbnQtd2VpYm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwOTggNTcycTAgODAtNTcgMTM2LjV0LTEzNiA1Ni41cS02MCAwLTExMS0zNS02MiA2Ny0xMTUgMTQ2LTI0NyAzNzEtMjAyIDg1OSAxIDIyLTEyLjUgMzguNXQtMzQuNSAxOC41aC01cS0yMCAwLTM1LTEzLjV0LTE3LTMzLjVxLTE0LTEyNi0zLjUtMjQ3LjV0MjkuNS0yMTcgNTQtMTg2IDY5LTE1NS41IDc0LTEyNXE2MS05MCAxMzItMTY1LTE2LTM1LTE2LTc3IDAtODAgNTYuNS0xMzYuNXQxMzYuNS01Ni41IDEzNi41IDU2LjUgNTYuNSAxMzYuNXptMzgxIDExcTAgMTU4LTc4IDI5MnQtMjEyLjUgMjEyLTI5Mi41IDc4cS02NCAwLTEzMS0xNC0yMS01LTMyLjUtMjMuNXQtNi41LTM5LjVxNS0yMCAyMy0zMS41dDM5LTcuNXE1MSAxMyAxMDggMTMgOTcgMCAxODYtMzh0MTUzLTEwMiAxMDItMTUzIDM4LTE4Ni0zOC0xODYtMTAyLTE1My0xNTMtMTAyLTE4Ni0zOC0xODYgMzgtMTUzIDEwMi0xMDIgMTUzLTM4IDE4NnEwIDExNCA1MiAyMTggMTAgMjAgMy41IDQwdC0yNS41IDMwLTM5LjUgMy0zMC41LTI2cS02NC0xMjMtNjQtMjY1IDAtMTE5IDQ2LjUtMjI3dDEyNC41LTE4NiAxODYtMTI0IDIyNi00NnExNTggMCAyOTIuNSA3OHQyMTIuNSAyMTIuNSA3OCAyOTIuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVGVuY2VudFdlaWJvJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
