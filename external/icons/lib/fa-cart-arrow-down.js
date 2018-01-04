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

var _ref2 = _react2.default.createElement('path', { d: 'M1344 704q0-26-19-45t-45-19-45 19l-147 146v-293q0-26-19-45t-45-19-45 19-19 45v293l-147-146q-19-19-45-19t-45 19-19 45 19 45l256 256q19 19 45 19t45-19l256-256q19-19 19-45zm-640 832q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm896 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm128-1088v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z' });

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
icon.displayName = 'FaCartArrowDown';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYXJ0LWFycm93LWRvd24uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHFwQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixpQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtY2FydC1hcnJvdy1kb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMzQ0IDcwNHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOWwtMTQ3IDE0NnYtMjkzcTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1djI5M2wtMTQ3LTE0NnEtMTktMTktNDUtMTl0LTQ1IDE5LTE5IDQ1IDE5IDQ1bDI1NiAyNTZxMTkgMTkgNDUgMTl0NDUtMTlsMjU2LTI1NnExOS0xOSAxOS00NXptLTY0MCA4MzJxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptODk2IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMTI4LTEwODh2NTEycTAgMjQtMTYgNDIuNXQtNDEgMjEuNWwtMTA0NCAxMjJxMSA3IDQuNSAyMS41dDYgMjYuNSAyLjUgMjJxMCAxNi0yNCA2NGg5MjBxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NS00NSAxOWgtMTAyNHEtMjYgMC00NS0xOXQtMTktNDVxMC0xNCAxMS0zOS41dDI5LjUtNTkuNSAyMC41LTM4bC0xNzctODIzaC0yMDRxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1IDQ1LTE5aDI1NnExNiAwIDI4LjUgNi41dDIwIDE1LjUgMTMgMjQuNSA3LjUgMjYuNSA1LjUgMjkuNSA0LjUgMjUuNWgxMjAxcTI2IDAgNDUgMTl0MTkgNDV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNhcnRBcnJvd0Rvd24nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
