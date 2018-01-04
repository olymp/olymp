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

var _ref2 = _react2.default.createElement('path', { d: 'M1474 289q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zm-610 1151q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm720 238v114h-469v-114h167v-432q0-7 .5-19t.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165zm30-1331q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5z' });

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
icon.displayName = 'FaSortNumericDesc';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3J0LW51bWVyaWMtZGVzYy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUscWtCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLG1CQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3J0LW51bWVyaWMtZGVzYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTQ3NCAyODlxMC02My00NC0xMTZ0LTEwMy01M3EtNTIgMC04MyAzN3QtMzEgOTQgMzYuNSA5NSAxMDQuNSAzOHE1MCAwIDg1LTI3dDM1LTY4em0tNjEwIDExNTFxMCAxMi0xMCAyNGwtMzE5IDMxOXEtMTAgOS0yMyA5LTEyIDAtMjMtOWwtMzIwLTMyMHEtMTUtMTYtNy0zNSA4LTIwIDMwLTIwaDE5MnYtMTM3NnEwLTE0IDktMjN0MjMtOWgxOTJxMTQgMCAyMyA5dDkgMjN2MTM3NmgxOTJxMTQgMCAyMyA5dDkgMjN6bTcyMCAyMzh2MTE0aC00Njl2LTExNGgxNjd2LTQzMnEwLTcgLjUtMTl0LjUtMTd2LTE2aC0ybC03IDEycS04IDEzLTI2IDMxbC02MiA1OC04Mi04NiAxOTItMTg1aDEyM3Y2NTRoMTY1em0zMC0xMzMxcTAgNjItMTMgMTIxLjV0LTQxIDExNC02OCA5NS41LTk4LjUgNjUuNS0xMjcuNSAyNC41cS02MiAwLTEwOC0xNi0yNC04LTQyLTE1bDM5LTExM3ExNSA3IDMxIDExIDM3IDEzIDc1IDEzIDg0IDAgMTM0LjUtNTguNXQ2Ni41LTE0NS41aC0ycS0yMSAyMy02MS41IDM3dC04NC41IDE0cS0xMDYgMC0xNzMtNzEuNXQtNjctMTcyLjVxMC0xMDUgNzItMTc4dDE4MS03M3ExMjMgMCAyMDUgOTQuNXQ4MiAyNTIuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhU29ydE51bWVyaWNEZXNjJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
