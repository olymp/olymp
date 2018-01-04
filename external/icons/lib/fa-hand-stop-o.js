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

var _ref2 = _react2.default.createElement('path', { d: 'M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v784l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zm0-128q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z' });

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
icon.displayName = 'FaHandStopO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXN0b3Atby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsK2xCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWhhbmQtc3RvcC1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk04ODAgMTI4cS00NiAwLTc5IDMzdC0zMyA3OXY2NTZoLTMydi01MjhxMC00Ni0zMy03OXQtNzktMzMtNzkgMzMtMzMgNzl2Nzg0bC0xNTQtMjA1cS0zOC01MS0xMDItNTEtNTMgMC05MC41IDM3LjV0LTM3LjUgOTAuNXEwIDQzIDI2IDc3bDM4NCA1MTJxMzggNTEgMTAyIDUxaDY4OHEzNCAwIDYxLTIydDM0LTU2bDc2LTQwNXE1LTMyIDUtNTl2LTQ5OHEwLTQ2LTMzLTc5dC03OS0zMy03OSAzMy0zMyA3OXYyNzJoLTMydi01MjhxMC00Ni0zMy03OXQtNzktMzMtNzkgMzMtMzMgNzl2NTI4aC0zMnYtNjU2cTAtNDYtMzMtNzl0LTc5LTMzem0wLTEyOHE2OCAwIDEyNS41IDM1LjV0ODguNSA5Ni41cTE5LTQgNDItNCA5OSAwIDE2OS41IDcwLjV0NzAuNSAxNjkuNXYxN3ExMDUtNiAxODAuNSA2NHQ3NS41IDE3NXY0OThxMCA0MC04IDgzbC03NiA0MDRxLTE0IDc5LTc2LjUgMTMxdC0xNDMuNSA1MmgtNjg4cS02MCAwLTExNC41LTI3LjV0LTkwLjUtNzQuNWwtMzg0LTUxMnEtNTEtNjgtNTEtMTU0IDAtMTA2IDc1LTE4MXQxODEtNzVxNzggMCAxMjggMzR2LTQzNHEwLTk5IDcwLjUtMTY5LjV0MTY5LjUtNzAuNXEyMyAwIDQyIDQgMzEtNjEgODguNS05Ni41dDEyNS41LTM1LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUhhbmRTdG9wTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
