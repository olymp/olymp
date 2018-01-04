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

var _ref2 = _react2.default.createElement('path', { d: 'M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z' });

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
icon.displayName = 'FaRa';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1yYS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsMnZCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE1BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOSA4NzRxOC0yMTcgMTE2LTQwNnQzMDUtMzE4aDVxMCAxLTEgMy04IDgtMjggMzMuNXQtNTIgNzYuNS02MCAxMTAuNS00NC41IDEzNS41LTE0IDE1MC41IDM5IDE1Ny41IDEwOC41IDE1NHE1MCA1MCAxMDIgNjkuNXQ5MC41IDExLjUgNjkuNS0yMy41IDQ3LTMyLjVsMTYtMTZxMzktNTEgNTMtMTE2LjV0Ni41LTEyMi41LTIxLTEwNy0yNi41LTgwbC0xNC0yOXEtMTAtMjUtMzAuNS00OS41dC00My00MS00My41LTI5LjUtMzUtMTlsLTEzLTYgMTA0LTExNXEzOSAxNyA3OCA1MnQ1OSA2MWwxOSAyN3ExLTQ4LTE4LjUtMTAzLjV0LTQwLjUtODcuNWwtMjAtMzEgMTYxLTE4MyAxNjAgMTgxcS0zMyA0Ni01Mi41IDEwMi41dC0yMi41IDkwLjVsLTQgMzNxMjItMzcgNjEuNS03Mi41dDY3LjUtNTIuNWwyOC0xNyAxMDMgMTE1cS00NCAxNC04NSA1MHQtNjAgNjVsLTE5IDI5cS0zMSA1Ni00OCAxMzMuNXQtNyAxNzAgNTcgMTU2LjVxMzMgNDUgNzcuNSA2MC41dDg1IDUuNSA3Ni0yNi41IDU3LjUtMzMuNWwyMS0xNnE2MC01MyA5Ni41LTExNXQ0OC41LTEyMS41IDEwLTEyMS41LTE4LTExOC0zNy0xMDcuNS00NS41LTkzLTQ1LTcyLTM0LjUtNDcuNWwtMTMtMTdxLTE0LTEzLTctMTNsMTAgM3E0MCAyOSA2Mi41IDQ2dDYyIDUwIDY0IDU4IDU4LjUgNjUgNTUuNSA3NyA0NS41IDg4IDM4IDEwMyAyMy41IDExNyAxMC41IDEzNnEzIDI1OS0xMDggNDY1dC0zMTIgMzIxLTQ1NiAxMTVxLTE4NSAwLTM1MS03NHQtMjgzLjUtMTk4LTE4NC0yOTMtNjAuNS0zNTN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVJhJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
