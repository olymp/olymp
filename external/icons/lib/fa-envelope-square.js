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

var _ref2 = _react2.default.createElement('path', { d: 'M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm32 1056v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69t-164-69q-47-32-142-92.5t-142-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zm0-573q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z' });

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
icon.displayName = 'FaEnvelopeSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1lbnZlbG9wZS1zcXVhcmUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDRpQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixrQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtZW52ZWxvcGUtc3F1YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMzc2IDEyOHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV2OTYwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTk2MHEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjB6bTMyIDEwNTZ2LTQzNnEtMzEgMzUtNjQgNTUtMzQgMjItMTMyLjUgODV0LTE1MS41IDk5cS05OCA2OS0xNjQgNjl0LTE2NC02OXEtNDctMzItMTQyLTkyLjV0LTE0Mi05Mi41cS0xMi04LTMzLTI3dC0zMS0yN3Y0MzZxMCA0MCAyOCA2OHQ2OCAyOGg4MzJxNDAgMCA2OC0yOHQyOC02OHptMC01NzNxMC00MS0yNy41LTcwdC02OC41LTI5aC04MzJxLTQwIDAtNjggMjh0LTI4IDY4cTAgMzcgMzAuNSA3Ni41dDY3LjUgNjQuNXE0NyAzMiAxMzcuNSA4OXQxMjkuNSA4M3EzIDIgMTcgMTEuNXQyMSAxNCAyMSAxMyAyMy41IDEzIDIxLjUgOS41IDIyLjUgNy41IDIwLjUgMi41IDIwLjUtMi41IDIyLjUtNy41IDIxLjUtOS41IDIzLjUtMTMgMjEtMTMgMjEtMTQgMTctMTEuNWwyNjctMTc0cTM1LTIzIDY2LjUtNjIuNXQzMS41LTczLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUVudmVsb3BlU3F1YXJlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
