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

var _ref2 = _react2.default.createElement('path', { d: 'M782 1078q-1 3-12.5-.5t-31.5-11.5l-20-9q-44-20-87-49-7-5-41-31.5t-38-28.5q-67 103-134 181-81 95-105 110-4 2-19.5 4t-18.5 0q6-4 82-92 21-24 85.5-115t78.5-118q17-30 51-98.5t36-77.5q-8-1-110 33-8 2-27.5 7.5t-34.5 9.5-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15-23 7-47 0-18-4-28-21-4-6-5-23 6-2 24.5-5t29.5-6q58-16 105-32 100-35 102-35 10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5 6 .5q2 12-1 33 0 2-12.5 27t-26.5 53.5-17 33.5q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5zm-205-486q3 15-4 28-12 23-50 38-30 12-60 12-26-3-49-26-14-15-18-41l1-3q3 3 19.5 5t26.5 0 58-16q36-12 55-14 17 0 21 17zm698 129l63 227-139-42zm-1108 800l694-232v-1032l-694 233v1031zm1241-317l102 31-181-657-100-31-216 536 102 31 45-110 211 65zm-503-962l573 184v-380zm311 1323l158 13-54 160-40-66q-130 83-276 108-58 12-91 12h-84q-79 0-199.5-39t-183.5-85q-8-7-8-16 0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5 20.5 11q73 37 159.5 61.5t157.5 24.5q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19 28.5-16.5zm448-1079v1079l-774-246q-14 6-375 127.5t-368 121.5q-13 0-18-13 0-1-1-3v-1078q3-9 4-10 5-6 20-11 107-36 149-50v-384l558 198q2 0 160.5-55t316-108.5 161.5-53.5q20 0 20 21v418z' });

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
icon.displayName = 'FaLanguage';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1sYW5ndWFnZS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsb25DQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFlBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWxhbmd1YWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03ODIgMTA3OHEtMSAzLTEyLjUtLjV0LTMxLjUtMTEuNWwtMjAtOXEtNDQtMjAtODctNDktNy01LTQxLTMxLjV0LTM4LTI4LjVxLTY3IDEwMy0xMzQgMTgxLTgxIDk1LTEwNSAxMTAtNCAyLTE5LjUgNHQtMTguNSAwcTYtNCA4Mi05MiAyMS0yNCA4NS41LTExNXQ3OC41LTExOHExNy0zMCA1MS05OC41dDM2LTc3LjVxLTgtMS0xMTAgMzMtOCAyLTI3LjUgNy41dC0zNC41IDkuNS0xNyA1cS0yIDItMiAxMC41dC0xIDkuNXEtNSAxMC0zMSAxNS0yMyA3LTQ3IDAtMTgtNC0yOC0yMS00LTYtNS0yMyA2LTIgMjQuNS01dDI5LjUtNnE1OC0xNiAxMDUtMzIgMTAwLTM1IDEwMi0zNSAxMC0yIDQzLTE5LjV0NDQtMjEuNXE5LTMgMjEuNS04dDE0LjUtNS41IDYgLjVxMiAxMi0xIDMzIDAgMi0xMi41IDI3dC0yNi41IDUzLjUtMTcgMzMuNXEtMjUgNTAtNzcgMTMxbDY0IDI4cTEyIDYgNzQuNSAzMnQ2Ny41IDI4cTQgMSAxMC41IDI1LjV0NC41IDMwLjV6bS0yMDUtNDg2cTMgMTUtNCAyOC0xMiAyMy01MCAzOC0zMCAxMi02MCAxMi0yNi0zLTQ5LTI2LTE0LTE1LTE4LTQxbDEtM3EzIDMgMTkuNSA1dDI2LjUgMCA1OC0xNnEzNi0xMiA1NS0xNCAxNyAwIDIxIDE3em02OTggMTI5bDYzIDIyNy0xMzktNDJ6bS0xMTA4IDgwMGw2OTQtMjMydi0xMDMybC02OTQgMjMzdjEwMzF6bTEyNDEtMzE3bDEwMiAzMS0xODEtNjU3LTEwMC0zMS0yMTYgNTM2IDEwMiAzMSA0NS0xMTAgMjExIDY1em0tNTAzLTk2Mmw1NzMgMTg0di0zODB6bTMxMSAxMzIzbDE1OCAxMy01NCAxNjAtNDAtNjZxLTEzMCA4My0yNzYgMTA4LTU4IDEyLTkxIDEyaC04NHEtNzkgMC0xOTkuNS0zOXQtMTgzLjUtODVxLTgtNy04LTE2IDAtOCA1LTEzLjV0MTMtNS41cTQgMCAxOCA3LjV0MzAuNSAxNi41IDIwLjUgMTFxNzMgMzcgMTU5LjUgNjEuNXQxNTcuNSAyNC41cTk1IDAgMTY3LTE0LjV0MTU3LTUwLjVxMTUtNyAzMC41LTE1LjV0MzQtMTkgMjguNS0xNi41em00NDgtMTA3OXYxMDc5bC03NzQtMjQ2cS0xNCA2LTM3NSAxMjcuNXQtMzY4IDEyMS41cS0xMyAwLTE4LTEzIDAtMS0xLTN2LTEwNzhxMy05IDQtMTAgNS02IDIwLTExIDEwNy0zNiAxNDktNTB2LTM4NGw1NTggMTk4cTIgMCAxNjAuNS01NXQzMTYtMTA4LjUgMTYxLjUtNTMuNXEyMCAwIDIwIDIxdjQxOHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhTGFuZ3VhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
