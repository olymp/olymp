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

var _ref2 = _react2.default.createElement('path', { d: 'M1632 1600q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472zm-1374-64q3-55 16-107t30-95 46-87 53.5-76 64.5-69.5 66-60 70.5-55 66.5-47.5 65-43q-43-28-65-43t-66.5-47.5-70.5-55-66-60-64.5-69.5-53.5-76-46-87-30-95-16-107h1276q-3 55-16 107t-30 95-46 87-53.5 76-64.5 69.5-66 60-70.5 55-66.5 47.5-65 43q43 28 65 43t66.5 47.5 70.5 55 66 60 64.5 69.5 53.5 76 46 87 30 95 16 107h-1276zm1374-1536q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472z' });

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
icon.displayName = 'FaHourglass';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1ob3VyZ2xhc3MuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHlmQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWhvdXJnbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTYzMiAxNjAwcTE0IDAgMjMgOXQ5IDIzdjEyOHEwIDE0LTkgMjN0LTIzIDloLTE0NzJxLTE0IDAtMjMtOXQtOS0yM3YtMTI4cTAtMTQgOS0yM3QyMy05aDE0NzJ6bS0xMzc0LTY0cTMtNTUgMTYtMTA3dDMwLTk1IDQ2LTg3IDUzLjUtNzYgNjQuNS02OS41IDY2LTYwIDcwLjUtNTUgNjYuNS00Ny41IDY1LTQzcS00My0yOC02NS00M3QtNjYuNS00Ny41LTcwLjUtNTUtNjYtNjAtNjQuNS02OS41LTUzLjUtNzYtNDYtODctMzAtOTUtMTYtMTA3aDEyNzZxLTMgNTUtMTYgMTA3dC0zMCA5NS00NiA4Ny01My41IDc2LTY0LjUgNjkuNS02NiA2MC03MC41IDU1LTY2LjUgNDcuNS02NSA0M3E0MyAyOCA2NSA0M3Q2Ni41IDQ3LjUgNzAuNSA1NSA2NiA2MCA2NC41IDY5LjUgNTMuNSA3NiA0NiA4NyAzMCA5NSAxNiAxMDdoLTEyNzZ6bTEzNzQtMTUzNnExNCAwIDIzIDl0OSAyM3YxMjhxMCAxNC05IDIzdC0yMyA5aC0xNDcycS0xNCAwLTIzLTl0LTktMjN2LTEyOHEwLTE0IDktMjN0MjMtOWgxNDcyelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFIb3VyZ2xhc3MnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
