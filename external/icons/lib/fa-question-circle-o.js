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

var _ref2 = _react2.default.createElement('path', { d: 'M1008 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zm256-496q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zm-368-448q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z' });

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
icon.displayName = 'FaQuestionCircleO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1xdWVzdGlvbi1jaXJjbGUtby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsNHRCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLG1CQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1xdWVzdGlvbi1jaXJjbGUtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAwOCAxMjAwdjE2MHEwIDE0LTkgMjN0LTIzIDloLTE2MHEtMTQgMC0yMy05dC05LTIzdi0xNjBxMC0xNCA5LTIzdDIzLTloMTYwcTE0IDAgMjMgOXQ5IDIzem0yNTYtNDk2cTAgNTAtMTUgOTB0LTQ1LjUgNjktNTIgNDQtNTkuNSAzNnEtMzIgMTgtNDYuNSAyOHQtMjYgMjQtMTEuNSAyOXYzMnEwIDE0LTkgMjN0LTIzIDloLTE2MHEtMTQgMC0yMy05dC05LTIzdi02OHEwLTM1IDEwLjUtNjQuNXQyNC00Ny41IDM5LTM1LjUgNDEtMjUuNSA0NC41LTIxcTUzLTI1IDc1LTQzdDIyLTQ5cTAtNDItNDMuNS03MS41dC05NS41LTI5LjVxLTU2IDAtOTUgMjctMjkgMjAtODAgODMtOSAxMi0yNSAxMi0xMSAwLTE5LTZsLTEwOC04MnEtMTAtNy0xMi0yMHQ1LTIzcTEyMi0xOTIgMzQ5LTE5MiAxMjkgMCAyMzguNSA4OS41dDEwOS41IDIxNC41em0tMzY4LTQ0OHEtMTMwIDAtMjQ4LjUgNTF0LTIwNCAxMzYuNS0xMzYuNSAyMDQtNTEgMjQ4LjUgNTEgMjQ4LjUgMTM2LjUgMjA0IDIwNCAxMzYuNSAyNDguNSA1MSAyNDguNS01MSAyMDQtMTM2LjUgMTM2LjUtMjA0IDUxLTI0OC41LTUxLTI0OC41LTEzNi41LTIwNC0yMDQtMTM2LjUtMjQ4LjUtNTF6bTc2OCA2NDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVF1ZXN0aW9uQ2lyY2xlTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
