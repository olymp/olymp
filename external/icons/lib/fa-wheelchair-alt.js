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

var _ref2 = _react2.default.createElement('path', { d: 'M1566 813q34 35 29 82l-44 551q-4 42-34.5 70t-71.5 28q-6 0-9-1-44-3-72.5-36.5t-25.5-77.5l35-429-143 8q55 113 55 240 0 216-148 372l-137-137q91-101 91-235 0-145-102.5-248t-247.5-103q-134 0-236 92l-137-138q120-114 284-141l264-300-149-87-181 161q-33 30-77 27.5t-73-35.5-26.5-77 34.5-73l239-213q26-23 60-26.5t64 14.5l488 283q36 21 48 68 17 67-26 117l-205 232 371-20q49-3 83 32zm-198-457q-74 0-126-52t-52-126 52-126 126-52 126.5 52 52.5 126-52.5 126-126.5 52zm-627 1242q106 0 196-61l139 139q-146 116-335 116-148 0-273.5-73t-198.5-198-73-273q0-188 116-336l139 139q-60 88-60 197 0 145 102.5 247.5t247.5 102.5z' });

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
icon.displayName = 'FaWheelchairAlt';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS13aGVlbGNoYWlyLWFsdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsMGxCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGlCQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS13aGVlbGNoYWlyLWFsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTU2NiA4MTNxMzQgMzUgMjkgODJsLTQ0IDU1MXEtNCA0Mi0zNC41IDcwdC03MS41IDI4cS02IDAtOS0xLTQ0LTMtNzIuNS0zNi41dC0yNS41LTc3LjVsMzUtNDI5LTE0MyA4cTU1IDExMyA1NSAyNDAgMCAyMTYtMTQ4IDM3MmwtMTM3LTEzN3E5MS0xMDEgOTEtMjM1IDAtMTQ1LTEwMi41LTI0OHQtMjQ3LjUtMTAzcS0xMzQgMC0yMzYgOTJsLTEzNy0xMzhxMTIwLTExNCAyODQtMTQxbDI2NC0zMDAtMTQ5LTg3LTE4MSAxNjFxLTMzIDMwLTc3IDI3LjV0LTczLTM1LjUtMjYuNS03NyAzNC41LTczbDIzOS0yMTNxMjYtMjMgNjAtMjYuNXQ2NCAxNC41bDQ4OCAyODNxMzYgMjEgNDggNjggMTcgNjctMjYgMTE3bC0yMDUgMjMyIDM3MS0yMHE0OS0zIDgzIDMyem0tMTk4LTQ1N3EtNzQgMC0xMjYtNTJ0LTUyLTEyNiA1Mi0xMjYgMTI2LTUyIDEyNi41IDUyIDUyLjUgMTI2LTUyLjUgMTI2LTEyNi41IDUyem0tNjI3IDEyNDJxMTA2IDAgMTk2LTYxbDEzOSAxMzlxLTE0NiAxMTYtMzM1IDExNi0xNDggMC0yNzMuNS03M3QtMTk4LjUtMTk4LTczLTI3M3EwLTE4OCAxMTYtMzM2bDEzOSAxMzlxLTYwIDg4LTYwIDE5NyAwIDE0NSAxMDIuNSAyNDcuNXQyNDcuNSAxMDIuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhV2hlZWxjaGFpckFsdCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
