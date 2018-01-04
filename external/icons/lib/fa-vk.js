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

var _ref2 = _react2.default.createElement('path', { d: 'M1981 520q23 64-150 294-24 32-65 85-40 51-55 72t-30.5 49.5-12 42 13 34.5 32.5 43 57 53q4 2 5 4 141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66-70.5-57.5l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211-130.5-272q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5 41.5 38.5 34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 16-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z' });

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
icon.displayName = 'FaVk';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12ay5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsaTVCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE1BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXZrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOTgxIDUyMHEyMyA2NC0xNTAgMjk0LTI0IDMyLTY1IDg1LTQwIDUxLTU1IDcydC0zMC41IDQ5LjUtMTIgNDIgMTMgMzQuNSAzMi41IDQzIDU3IDUzcTQgMiA1IDQgMTQxIDEzMSAxOTEgMjIxIDMgNSA2LjUgMTIuNXQ3IDI2LjUtLjUgMzQtMjUgMjcuNS01OSAxMi41bC0yNTYgNHEtMjQgNS01Ni01dC01Mi0yMmwtMjAtMTJxLTMwLTIxLTcwLTY0dC02OC41LTc3LjUtNjEtNTgtNTYuNS0xNS41cS0zIDEtOCAzLjV0LTE3IDE0LjUtMjEuNSAyOS41LTE3IDUyLTYuNSA3Ny41cTAgMTUtMy41IDI3LjV0LTcuNSAxOC41bC00IDVxLTE4IDE5LTUzIDIyaC0xMTVxLTcxIDQtMTQ2LTE2LjV0LTEzMS41LTUzLTEwMy02Ni03MC41LTU3LjVsLTI1LTI0cS0xMC0xMC0yNy41LTMwdC03MS41LTkxLTEwNi0xNTEtMTIyLjUtMjExLTEzMC41LTI3MnEtNi0xNi02LTI3dDMtMTZsNC02cTE1LTE5IDU3LTE5bDI3NC0ycTEyIDIgMjMgNi41dDE2IDguNWw1IDNxMTYgMTEgMjQgMzIgMjAgNTAgNDYgMTAzLjV0NDEgODEuNWwxNiAyOXEyOSA2MCA1NiAxMDR0NDguNSA2OC41IDQxLjUgMzguNSAzNCAxNCAyNy01cTItMSA1LTV0MTItMjIgMTMuNS00NyA5LjUtODEgMC0xMjVxLTItNDAtOS03M3QtMTQtNDZsLTYtMTJxLTI1LTM0LTg1LTQzLTEzLTIgNS0yNCAxNi0xOSAzOC0zMCA1My0yNiAyMzktMjQgODIgMSAxMzUgMTMgMjAgNSAzMy41IDEzLjV0MjAuNSAyNCAxMC41IDMyIDMuNSA0NS41LTEgNTUtMi41IDcwLjUtMS41IDgyLjVxMCAxMS0xIDQydC0uNSA0OCAzLjUgNDAuNSAxMS41IDM5IDIyLjUgMjQuNXE4IDIgMTcgNHQyNi0xMSAzOC0zNC41IDUyLTY3IDY4LTEwNy41cTYwLTEwNCAxMDctMjI1IDQtMTAgMTAtMTcuNXQxMS0xMC41bDQtMyA1LTIuNSAxMy0zIDIwLS41IDI4OC0ycTM5LTUgNjQgMi41dDMxIDE2LjV6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFWayc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
