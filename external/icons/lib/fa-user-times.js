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

var _ref2 = _react2.default.createElement('path', { d: 'M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zm1077 320l249 249q9 9 9 23 0 13-9 22l-136 136q-9 9-22 9-14 0-23-9l-249-249-249 249q-9 9-23 9-13 0-22-9l-136-136q-9-9-9-22 0-14 9-23l249-249-249-249q-9-9-9-23 0-13 9-22l136-136q9-9 22-9 14 0 23 9l249 249 249-249q9-9 23-9 13 0 22 9l136 136q9 9 9 22 0 14-9 23zm-498 0l-181 181q-37 37-37 91 0 53 37 90l83 83q-21 3-44 3h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 154 122 319 122t319-122q20-17 39-17 28 0 57 6-28 27-41 50t-13 56q0 54 37 91z' });

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
icon.displayName = 'FaUserTimes';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11c2VyLXRpbWVzLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSxrbUJBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdXNlci10aW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNzA0IDg5NnEtMTU5IDAtMjcxLjUtMTEyLjV0LTExMi41LTI3MS41IDExMi41LTI3MS41IDI3MS41LTExMi41IDI3MS41IDExMi41IDExMi41IDI3MS41LTExMi41IDI3MS41LTI3MS41IDExMi41em0xMDc3IDMyMGwyNDkgMjQ5cTkgOSA5IDIzIDAgMTMtOSAyMmwtMTM2IDEzNnEtOSA5LTIyIDktMTQgMC0yMy05bC0yNDktMjQ5LTI0OSAyNDlxLTkgOS0yMyA5LTEzIDAtMjItOWwtMTM2LTEzNnEtOS05LTktMjIgMC0xNCA5LTIzbDI0OS0yNDktMjQ5LTI0OXEtOS05LTktMjMgMC0xMyA5LTIybDEzNi0xMzZxOS05IDIyLTkgMTQgMCAyMyA5bDI0OSAyNDkgMjQ5LTI0OXE5LTkgMjMtOSAxMyAwIDIyIDlsMTM2IDEzNnE5IDkgOSAyMiAwIDE0LTkgMjN6bS00OTggMGwtMTgxIDE4MXEtMzcgMzctMzcgOTEgMCA1MyAzNyA5MGw4MyA4M3EtMjEgMy00NCAzaC04NzRxLTEyMSAwLTE5NC02OXQtNzMtMTkwcTAtNTMgMy41LTEwMy41dDE0LTEwOSAyNi41LTEwOC41IDQzLTk3LjUgNjItODEgODUuNS01My41IDExMS41LTIwcTE5IDAgMzkgMTcgMTU0IDEyMiAzMTkgMTIydDMxOS0xMjJxMjAtMTcgMzktMTcgMjggMCA1NyA2LTI4IDI3LTQxIDUwdC0xMyA1NnEwIDU0IDM3IDkxelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVXNlclRpbWVzJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
