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

var _ref2 = _react2.default.createElement('path', { d: 'M976 870q0-43-41-66t-77-1q-43 20-42.5 72.5t43.5 70.5q39 23 81-4t36-72zm80-16q8 66-36 121t-110 61-119-40-56-113q-2-49 25.5-93t72.5-64q70-31 141.5 10t81.5 118zm172-391q-20 21-53.5 34t-53 16-63.5 8q-155 20-324 0-44-6-63-9.5t-52.5-16-54.5-32.5q13-19 36-31t40-15.5 47-8.5q198-35 408-1 33 5 51 8.5t43 16 39 31.5zm42 746q0-7 5.5-26.5t3-32-17.5-16.5q-161 106-365 106t-366-106l-12 6-5 12q26 154 41 210 47 81 204 108 249 46 428-53 34-19 49-51.5t22.5-85.5 12.5-71zm130-693q9-53-8-75-43-55-155-88-216-63-487-36-132 12-226 46-38 15-59.5 25t-47 34-29.5 54q8 68 19 138t29 171 24 137q1 5 5 31t7 36 12 27 22 28q105 80 284 100 259 28 440-63 24-13 39.5-23t31-29 19.5-40q48-267 80-473zm264-100v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaBitbucketSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iaXRidWNrZXQtc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx5eUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsbUJBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWJpdGJ1Y2tldC1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTk3NiA4NzBxMC00My00MS02NnQtNzctMXEtNDMgMjAtNDIuNSA3Mi41dDQzLjUgNzAuNXEzOSAyMyA4MS00dDM2LTcyem04MC0xNnE4IDY2LTM2IDEyMXQtMTEwIDYxLTExOS00MC01Ni0xMTNxLTItNDkgMjUuNS05M3Q3Mi41LTY0cTcwLTMxIDE0MS41IDEwdDgxLjUgMTE4em0xNzItMzkxcS0yMCAyMS01My41IDM0dC01MyAxNi02My41IDhxLTE1NSAyMC0zMjQgMC00NC02LTYzLTkuNXQtNTIuNS0xNi01NC41LTMyLjVxMTMtMTkgMzYtMzF0NDAtMTUuNSA0Ny04LjVxMTk4LTM1IDQwOC0xIDMzIDUgNTEgOC41dDQzIDE2IDM5IDMxLjV6bTQyIDc0NnEwLTcgNS41LTI2LjV0My0zMi0xNy41LTE2LjVxLTE2MSAxMDYtMzY1IDEwNnQtMzY2LTEwNmwtMTIgNi01IDEycTI2IDE1NCA0MSAyMTAgNDcgODEgMjA0IDEwOCAyNDkgNDYgNDI4LTUzIDM0LTE5IDQ5LTUxLjV0MjIuNS04NS41IDEyLjUtNzF6bTEzMC02OTNxOS01My04LTc1LTQzLTU1LTE1NS04OC0yMTYtNjMtNDg3LTM2LTEzMiAxMi0yMjYgNDYtMzggMTUtNTkuNSAyNXQtNDcgMzQtMjkuNSA1NHE4IDY4IDE5IDEzOHQyOSAxNzEgMjQgMTM3cTEgNSA1IDMxdDcgMzYgMTIgMjcgMjIgMjhxMTA1IDgwIDI4NCAxMDAgMjU5IDI4IDQ0MC02MyAyNC0xMyAzOS41LTIzdDMxLTI5IDE5LjUtNDBxNDgtMjY3IDgwLTQ3M3ptMjY0LTEwMHY5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di05NjBxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDk2MHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUJpdGJ1Y2tldFNxdWFyZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
