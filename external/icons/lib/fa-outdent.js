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

var _ref2 = _react2.default.createElement('path', { d: 'M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z' });

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
icon.displayName = 'FaOutdent';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1vdXRkZW50LmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw2bEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsV0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtb3V0ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzg0IDU0NHY1NzZxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVxLTE0IDAtMjMtOWwtMjg4LTI4OHEtOS05LTktMjN0OS0yM2wyODgtMjg4cTktOSAyMy05IDEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTE0MDggNzY4djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTcyOHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDE3MjhxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC0zODR2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMDg4cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTA4OHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTM4NHYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEwODhxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMDg4cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTAtMzg0djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtMTcyOHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTE5MnEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDE3MjhxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhT3V0ZGVudCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
