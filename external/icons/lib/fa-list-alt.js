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

var _ref2 = _react2.default.createElement('path', { d: 'M384 1184v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm0-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm0-256v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm1152 512v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zm0-256v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zm0-256v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zm128 704v-832q0-13-9.5-22.5t-22.5-9.5h-1472q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm128-1088v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z' });

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
icon.displayName = 'FaListAlt';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1saXN0LWFsdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsaTdCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFdBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWxpc3QtYWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zODQgMTE4NHY2NHEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtNjRxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di02NHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTAtMjU2djY0cTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC02NHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTY0cTAtMTMgOS41LTIyLjV0MjIuNS05LjVoNjRxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC0yNTZ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg2NHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0xMTUyIDUxMnY2NHEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtOTYwcS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtNjRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWg5NjBxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMC0yNTZ2NjRxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTk2MHEtMTMgMC0yMi41LTkuNXQtOS41LTIyLjV2LTY0cTAtMTMgOS41LTIyLjV0MjIuNS05LjVoOTYwcTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6bTAtMjU2djY0cTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC05NjBxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di02NHEwLTEzIDkuNS0yMi41dDIyLjUtOS41aDk2MHExMyAwIDIyLjUgOS41dDkuNSAyMi41em0xMjggNzA0di04MzJxMC0xMy05LjUtMjIuNXQtMjIuNS05LjVoLTE0NzJxLTEzIDAtMjIuNSA5LjV0LTkuNSAyMi41djgzMnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDE0NzJxMTMgMCAyMi41LTkuNXQ5LjUtMjIuNXptMTI4LTEwODh2MTA4OHEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0xNDcycS02NiAwLTExMy00N3QtNDctMTEzdi0xMDg4cTAtNjYgNDctMTEzdDExMy00N2gxNDcycTY2IDAgMTEzIDQ3dDQ3IDExM3pcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhTGlzdEFsdCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
