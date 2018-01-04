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

var _ref2 = _react2.default.createElement('path', { d: 'M1056 832q0 26 19 45t45 19 45-19 19-45q0-146-103-249t-249-103-249 103-103 249q0 26 19 45t45 19 45-19 19-45q0-93 66-158.5t158-65.5 158 65.5 66 158.5zm-221-576q-117 0-223.5 45.5t-184 123-123 184-45.5 223.5q0 26 19 45t45 19 45-19 19-45q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 55-18 103.5t-37.5 74.5-59.5 72q-34 39-52 63t-43.5 66.5-37 91-11.5 105.5q0 106-75 181t-181 75q-26 0-45 19t-19 45 19 45 45 19q159 0 271.5-112.5t112.5-271.5q0-41 7.5-74t26.5-64 33.5-50 45.5-54q35-41 53-64.5t44-67.5 37.5-93.5 11.5-108.5q0-117-45.5-223.5t-123-184-184-123-223.5-45.5zm-244 719l226 226-579 579q-12 12-29 12t-29-12l-168-168q-12-12-12-29t12-29zm1021-963l168 168q12 12 12 29t-12 30l-233 233-26 25-71 71q-66-153-195-258l91-91 207-207q13-12 30-12t29 12z' });

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
icon.displayName = 'FaHardOfHearing';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYXJkLW9mLWhlYXJpbmcuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDZ1QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixpQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtaGFyZC1vZi1oZWFyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMDU2IDgzMnEwIDI2IDE5IDQ1dDQ1IDE5IDQ1LTE5IDE5LTQ1cTAtMTQ2LTEwMy0yNDl0LTI0OS0xMDMtMjQ5IDEwMy0xMDMgMjQ5cTAgMjYgMTkgNDV0NDUgMTkgNDUtMTkgMTktNDVxMC05MyA2Ni0xNTguNXQxNTgtNjUuNSAxNTggNjUuNSA2NiAxNTguNXptLTIyMS01NzZxLTExNyAwLTIyMy41IDQ1LjV0LTE4NCAxMjMtMTIzIDE4NC00NS41IDIyMy41cTAgMjYgMTkgNDV0NDUgMTkgNDUtMTkgMTktNDVxMC0xODUgMTMxLjUtMzE2LjV0MzE2LjUtMTMxLjUgMzE2LjUgMTMxLjUgMTMxLjUgMzE2LjVxMCA1NS0xOCAxMDMuNXQtMzcuNSA3NC41LTU5LjUgNzJxLTM0IDM5LTUyIDYzdC00My41IDY2LjUtMzcgOTEtMTEuNSAxMDUuNXEwIDEwNi03NSAxODF0LTE4MSA3NXEtMjYgMC00NSAxOXQtMTkgNDUgMTkgNDUgNDUgMTlxMTU5IDAgMjcxLjUtMTEyLjV0MTEyLjUtMjcxLjVxMC00MSA3LjUtNzR0MjYuNS02NCAzMy41LTUwIDQ1LjUtNTRxMzUtNDEgNTMtNjQuNXQ0NC02Ny41IDM3LjUtOTMuNSAxMS41LTEwOC41cTAtMTE3LTQ1LjUtMjIzLjV0LTEyMy0xODQtMTg0LTEyMy0yMjMuNS00NS41em0tMjQ0IDcxOWwyMjYgMjI2LTU3OSA1NzlxLTEyIDEyLTI5IDEydC0yOS0xMmwtMTY4LTE2OHEtMTItMTItMTItMjl0MTItMjl6bTEwMjEtOTYzbDE2OCAxNjhxMTIgMTIgMTIgMjl0LTEyIDMwbC0yMzMgMjMzLTI2IDI1LTcxIDcxcS02Ni0xNTMtMTk1LTI1OGw5MS05MSAyMDctMjA3cTEzLTEyIDMwLTEydDI5IDEyelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFIYXJkT2ZIZWFyaW5nJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
