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

var _ref2 = _react2.default.createElement('path', { d: 'M576 1344q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zm1024 61q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-68 5.5-131t24-138 47.5-132.5 81-103 120-60.5q-22 52-22 120v203q-58 20-93 70t-35 111q0 80 56 136t136 56 136-56 56-136q0-61-35.5-111t-92.5-70v-203q0-62 25-93 132 104 295 104t295-104q25 31 25 93v64q-106 0-181 75t-75 181v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-52 38-90t90-38 90 38 38 90v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-68-34.5-127.5t-93.5-93.5q0-10 .5-42.5t0-48-2.5-41.5-7-47-13-40q68 15 120 60.5t81 103 47.5 132.5 24 138 5.5 131zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z' });

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
icon.displayName = 'FaUserMd';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11c2VyLW1kLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSw2c0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdXNlci1tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNTc2IDEzNDRxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTktMTktNDUgMTktNDUgNDUtMTkgNDUgMTkgMTkgNDV6bTEwMjQgNjFxMCAxMjEtNzMgMTkwdC0xOTQgNjloLTg3NHEtMTIxIDAtMTk0LTY5dC03My0xOTBxMC02OCA1LjUtMTMxdDI0LTEzOCA0Ny41LTEzMi41IDgxLTEwMyAxMjAtNjAuNXEtMjIgNTItMjIgMTIwdjIwM3EtNTggMjAtOTMgNzB0LTM1IDExMXEwIDgwIDU2IDEzNnQxMzYgNTYgMTM2LTU2IDU2LTEzNnEwLTYxLTM1LjUtMTExdC05Mi41LTcwdi0yMDNxMC02MiAyNS05MyAxMzIgMTA0IDI5NSAxMDR0Mjk1LTEwNHEyNSAzMSAyNSA5M3Y2NHEtMTA2IDAtMTgxIDc1dC03NSAxODF2ODlxLTMyIDI5LTMyIDcxIDAgNDAgMjggNjh0NjggMjggNjgtMjggMjgtNjhxMC00Mi0zMi03MXYtODlxMC01MiAzOC05MHQ5MC0zOCA5MCAzOCAzOCA5MHY4OXEtMzIgMjktMzIgNzEgMCA0MCAyOCA2OHQ2OCAyOCA2OC0yOCAyOC02OHEwLTQyLTMyLTcxdi04OXEwLTY4LTM0LjUtMTI3LjV0LTkzLjUtOTMuNXEwLTEwIC41LTQyLjV0MC00OC0yLjUtNDEuNS03LTQ3LTEzLTQwcTY4IDE1IDEyMCA2MC41dDgxIDEwMyA0Ny41IDEzMi41IDI0IDEzOCA1LjUgMTMxem0tMzIwLTg5M3EwIDE1OS0xMTIuNSAyNzEuNXQtMjcxLjUgMTEyLjUtMjcxLjUtMTEyLjUtMTEyLjUtMjcxLjUgMTEyLjUtMjcxLjUgMjcxLjUtMTEyLjUgMjcxLjUgMTEyLjUgMTEyLjUgMjcxLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVVzZXJNZCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
