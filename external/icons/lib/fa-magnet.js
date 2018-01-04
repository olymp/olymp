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

var _ref2 = _react2.default.createElement('path', { d: 'M1664 832v128q0 201-98.5 362t-274 251.5-395.5 90.5-395.5-90.5-274-251.5-98.5-362v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v128q0 52 23.5 90t53.5 57 71 30 64 13 44 2 44-2 64-13 71-30 53.5-57 23.5-90v-128q0-26 19-45t45-19h384q26 0 45 19t19 45zm-1024-640v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45zm1024 0v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45z' });

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
icon.displayName = 'FaMagnet';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1tYWduZXQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHliQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFVBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLW1hZ25ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTY2NCA4MzJ2MTI4cTAgMjAxLTk4LjUgMzYydC0yNzQgMjUxLjUtMzk1LjUgOTAuNS0zOTUuNS05MC41LTI3NC0yNTEuNS05OC41LTM2MnYtMTI4cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV2MTI4cTAgNTIgMjMuNSA5MHQ1My41IDU3IDcxIDMwIDY0IDEzIDQ0IDIgNDQtMiA2NC0xMyA3MS0zMCA1My41LTU3IDIzLjUtOTB2LTEyOHEwLTI2IDE5LTQ1dDQ1LTE5aDM4NHEyNiAwIDQ1IDE5dDE5IDQ1em0tMTAyNC02NDB2Mzg0cTAgMjYtMTkgNDV0LTQ1IDE5aC0zODRxLTI2IDAtNDUtMTl0LTE5LTQ1di0zODRxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXptMTAyNCAwdjM4NHEwIDI2LTE5IDQ1dC00NSAxOWgtMzg0cS0yNiAwLTQ1LTE5dC0xOS00NXYtMzg0cTAtMjYgMTktNDV0NDUtMTloMzg0cTI2IDAgNDUgMTl0MTkgNDV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYU1hZ25ldCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
