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

var _ref2 = _react2.default.createElement('path', { d: 'M1408 1148q0-22-22-27-67-14-118-58t-80-109q-7-14-7-25 0-15 19.5-26t42.5-17 42.5-20.5 19.5-36.5q0-19-18.5-31.5t-38.5-12.5q-11 0-31 8t-32 8q-4 0-12-2 5-63 5-115 0-78-17-114-36-78-102.5-121.5t-152.5-43.5q-198 0-275 165-18 38-18 115 0 38 6 114-10 2-15 2-11 0-31.5-8t-30.5-8q-20 0-37.5 12.5t-17.5 32.5q0 21 19.5 35.5t42.5 20.5 42.5 17 19.5 26q0 11-7 25-64 138-198 167-22 5-22 27 0 47 138 69 2 5 6 26t11 30.5 23 9.5q13 0 38.5-5t38.5-5q35 0 67.5 15t54.5 32.5 57.5 32.5 76.5 15q43 0 79-15t57.5-32.5 54-32.5 67.5-15q13 0 39 4.5t39 4.5q15 0 22.5-9.5t11.5-31 5-24.5q138-22 138-69zm256-732v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaSnapchatSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zbmFwY2hhdC1zcXVhcmUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHlzQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixrQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtc25hcGNoYXQtc3F1YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNDA4IDExNDhxMC0yMi0yMi0yNy02Ny0xNC0xMTgtNTh0LTgwLTEwOXEtNy0xNC03LTI1IDAtMTUgMTkuNS0yNnQ0Mi41LTE3IDQyLjUtMjAuNSAxOS41LTM2LjVxMC0xOS0xOC41LTMxLjV0LTM4LjUtMTIuNXEtMTEgMC0zMSA4dC0zMiA4cS00IDAtMTItMiA1LTYzIDUtMTE1IDAtNzgtMTctMTE0LTM2LTc4LTEwMi41LTEyMS41dC0xNTIuNS00My41cS0xOTggMC0yNzUgMTY1LTE4IDM4LTE4IDExNSAwIDM4IDYgMTE0LTEwIDItMTUgMi0xMSAwLTMxLjUtOHQtMzAuNS04cS0yMCAwLTM3LjUgMTIuNXQtMTcuNSAzMi41cTAgMjEgMTkuNSAzNS41dDQyLjUgMjAuNSA0Mi41IDE3IDE5LjUgMjZxMCAxMS03IDI1LTY0IDEzOC0xOTggMTY3LTIyIDUtMjIgMjcgMCA0NyAxMzggNjkgMiA1IDYgMjZ0MTEgMzAuNSAyMyA5LjVxMTMgMCAzOC41LTV0MzguNS01cTM1IDAgNjcuNSAxNXQ1NC41IDMyLjUgNTcuNSAzMi41IDc2LjUgMTVxNDMgMCA3OS0xNXQ1Ny41LTMyLjUgNTQtMzIuNSA2Ny41LTE1cTEzIDAgMzkgNC41dDM5IDQuNXExNSAwIDIyLjUtOS41dDExLjUtMzEgNS0yNC41cTEzOC0yMiAxMzgtNjl6bTI1Ni03MzJ2OTYwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTk2MHEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjBxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTbmFwY2hhdFNxdWFyZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
