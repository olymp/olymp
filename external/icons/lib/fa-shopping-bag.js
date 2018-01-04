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

var _ref2 = _react2.default.createElement('path', { d: 'M1757 1408l35 313q3 28-16 50-19 21-48 21h-1664q-29 0-48-21-19-22-16-50l35-313h1722zm-93-839l86 775h-1708l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h384v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h256q25 0 43 16.5t21 40.5zm-384-185v256q0 26-19 45t-45 19-45-19-19-45v-256q0-106-75-181t-181-75-181 75-75 181v256q0 26-19 45t-45 19-45-19-19-45v-256q0-159 112.5-271.5t271.5-112.5 271.5 112.5 112.5 271.5z' });

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
icon.displayName = 'FaShoppingBag';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zaG9wcGluZy1iYWcuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHFjQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGVBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNob3BwaW5nLWJhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTc1NyAxNDA4bDM1IDMxM3EzIDI4LTE2IDUwLTE5IDIxLTQ4IDIxaC0xNjY0cS0yOSAwLTQ4LTIxLTE5LTIyLTE2LTUwbDM1LTMxM2gxNzIyem0tOTMtODM5bDg2IDc3NWgtMTcwOGw4Ni03NzVxMy0yNCAyMS00MC41dDQzLTE2LjVoMjU2djEyOHEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjUgOTAuNS0zNy41IDM3LjUtOTAuNXYtMTI4aDM4NHYxMjhxMCA1MyAzNy41IDkwLjV0OTAuNSAzNy41IDkwLjUtMzcuNSAzNy41LTkwLjV2LTEyOGgyNTZxMjUgMCA0MyAxNi41dDIxIDQwLjV6bS0zODQtMTg1djI1NnEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOS0xOS00NXYtMjU2cTAtMTA2LTc1LTE4MXQtMTgxLTc1LTE4MSA3NS03NSAxODF2MjU2cTAgMjYtMTkgNDV0LTQ1IDE5LTQ1LTE5LTE5LTQ1di0yNTZxMC0xNTkgMTEyLjUtMjcxLjV0MjcxLjUtMTEyLjUgMjcxLjUgMTEyLjUgMTEyLjUgMjcxLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNob3BwaW5nQmFnJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
