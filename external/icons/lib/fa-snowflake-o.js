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

var _ref2 = _react2.default.createElement('path', { d: 'M1630 1117l-167 33 186 107q23 13 29.5 38.5t-6.5 48.5q-14 23-39 29.5t-48-6.5l-186-106 55 160q13 38-12 63.5t-60.5 20.5-48.5-42l-102-300-271-156v313l208 238q16 18 17 39t-11 36.5-28.5 25-37 5.5-36.5-22l-112-128v214q0 26-19 45t-45 19-45-19-19-45v-214l-112 128q-16 18-36.5 22t-37-5.5-28.5-25-11-36.5 17-39l208-238v-313l-271 156-102 300q-13 37-48.5 42t-60.5-20.5-12-63.5l55-160-186 106q-23 13-48 6.5t-39-29.5q-13-23-6.5-48.5t29.5-38.5l186-107-167-33q-29-6-42-29t-8.5-46.5 25.5-40 50-10.5l310 62 271-157-271-157-310 62q-4 1-13 1-27 0-44-18t-19-40 11-43 40-26l167-33-186-107q-23-13-29.5-38.5t6.5-48.5 39-30 48 7l186 106-55-160q-13-38 12-63.5t60.5-20.5 48.5 42l102 300 271 156v-313l-208-238q-16-18-17-39t11-36.5 28.5-25 37-5.5 36.5 22l112 128v-214q0-26 19-45t45-19 45 19 19 45v214l112-128q16-18 36.5-22t37 5.5 28.5 25 11 36.5-17 39l-208 238v313l271-156 102-300q13-37 48.5-42t60.5 20.5 12 63.5l-55 160 186-106q23-13 48-6.5t39 29.5q13 23 6.5 48.5t-29.5 38.5l-186 107 167 33q27 5 40 26t11 43-19 40-44 18q-9 0-13-1l-310-62-271 157 271 157 310-62q29-6 50 10.5t25.5 40-8.5 46.5-42 29z' });

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
icon.displayName = 'FaSnowflakeO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zbm93Zmxha2Utby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsOGlDQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNub3dmbGFrZS1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNjMwIDExMTdsLTE2NyAzMyAxODYgMTA3cTIzIDEzIDI5LjUgMzguNXQtNi41IDQ4LjVxLTE0IDIzLTM5IDI5LjV0LTQ4LTYuNWwtMTg2LTEwNiA1NSAxNjBxMTMgMzgtMTIgNjMuNXQtNjAuNSAyMC41LTQ4LjUtNDJsLTEwMi0zMDAtMjcxLTE1NnYzMTNsMjA4IDIzOHExNiAxOCAxNyAzOXQtMTEgMzYuNS0yOC41IDI1LTM3IDUuNS0zNi41LTIybC0xMTItMTI4djIxNHEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOS0xOS00NXYtMjE0bC0xMTIgMTI4cS0xNiAxOC0zNi41IDIydC0zNy01LjUtMjguNS0yNS0xMS0zNi41IDE3LTM5bDIwOC0yMzh2LTMxM2wtMjcxIDE1Ni0xMDIgMzAwcS0xMyAzNy00OC41IDQydC02MC41LTIwLjUtMTItNjMuNWw1NS0xNjAtMTg2IDEwNnEtMjMgMTMtNDggNi41dC0zOS0yOS41cS0xMy0yMy02LjUtNDguNXQyOS41LTM4LjVsMTg2LTEwNy0xNjctMzNxLTI5LTYtNDItMjl0LTguNS00Ni41IDI1LjUtNDAgNTAtMTAuNWwzMTAgNjIgMjcxLTE1Ny0yNzEtMTU3LTMxMCA2MnEtNCAxLTEzIDEtMjcgMC00NC0xOHQtMTktNDAgMTEtNDMgNDAtMjZsMTY3LTMzLTE4Ni0xMDdxLTIzLTEzLTI5LjUtMzguNXQ2LjUtNDguNSAzOS0zMCA0OCA3bDE4NiAxMDYtNTUtMTYwcS0xMy0zOCAxMi02My41dDYwLjUtMjAuNSA0OC41IDQybDEwMiAzMDAgMjcxIDE1NnYtMzEzbC0yMDgtMjM4cS0xNi0xOC0xNy0zOXQxMS0zNi41IDI4LjUtMjUgMzctNS41IDM2LjUgMjJsMTEyIDEyOHYtMjE0cTAtMjYgMTktNDV0NDUtMTkgNDUgMTkgMTkgNDV2MjE0bDExMi0xMjhxMTYtMTggMzYuNS0yMnQzNyA1LjUgMjguNSAyNSAxMSAzNi41LTE3IDM5bC0yMDggMjM4djMxM2wyNzEtMTU2IDEwMi0zMDBxMTMtMzcgNDguNS00MnQ2MC41IDIwLjUgMTIgNjMuNWwtNTUgMTYwIDE4Ni0xMDZxMjMtMTMgNDgtNi41dDM5IDI5LjVxMTMgMjMgNi41IDQ4LjV0LTI5LjUgMzguNWwtMTg2IDEwNyAxNjcgMzNxMjcgNSA0MCAyNnQxMSA0My0xOSA0MC00NCAxOHEtOSAwLTEzLTFsLTMxMC02Mi0yNzEgMTU3IDI3MSAxNTcgMzEwLTYycTI5LTYgNTAgMTAuNXQyNS41IDQwLTguNSA0Ni41LTQyIDI5elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTbm93Zmxha2VPJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
