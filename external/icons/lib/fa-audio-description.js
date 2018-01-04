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

var _ref2 = _react2.default.createElement('path', { d: 'M504 994h171l-1-265zm1026-99q0-87-50.5-140t-146.5-53h-54v388h52q91 0 145-57t54-138zm-574-377l1 756q0 14-9.5 24t-23.5 10h-216q-14 0-23.5-10t-9.5-24v-62h-291l-55 81q-10 15-28 15h-267q-21 0-30.5-18t3.5-35l556-757q9-14 27-14h332q14 0 24 10t10 24zm827 377q0 193-125.5 303t-324.5 110h-270q-14 0-24-10t-10-24v-756q0-14 10-24t24-10h268q200 0 326 109t126 302zm156 1q0 11-.5 29t-8 71.5-21.5 102-44.5 108-73.5 102.5h-51q38-45 66.5-104.5t41.5-112 21-98 9-72.5l1-27q0-8-.5-22.5t-7.5-60-20-91.5-41-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 10.5 70.5zm184 0q0 11-.5 29t-8 71.5-21.5 102-45 108-74 102.5h-51q38-45 66.5-104.5t41.5-112 21-98 9-72.5l1-27q0-8-.5-22.5t-7.5-60-19.5-91.5-40.5-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 10.5 70.5zm181 0q0 11-.5 29t-8 71.5-21.5 102-44.5 108-73.5 102.5h-51q38-45 66-104.5t41-112 21-98 9-72.5l1-27q0-8-.5-22.5t-7.5-60-19.5-91.5-40.5-111.5-66-124.5h43q41 47 72 107t45.5 111.5 23 96 9.5 70.5z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAudioDescription';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hdWRpby1kZXNjcmlwdGlvbi5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRW9KLHdDQUFNLEdBQUUsKzVCQUFSLEc7O0FBRHBKLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsT0FBTSxNQUFoRixFQUF1RixTQUFRLGVBQS9GLEVBQStHLE9BQU0sNEJBQXJIO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsb0JBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWF1ZGlvLWRlc2NyaXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk01MDQgOTk0aDE3MWwtMS0yNjV6bTEwMjYtOTlxMC04Ny01MC41LTE0MHQtMTQ2LjUtNTNoLTU0djM4OGg1MnE5MSAwIDE0NS01N3Q1NC0xMzh6bS01NzQtMzc3bDEgNzU2cTAgMTQtOS41IDI0dC0yMy41IDEwaC0yMTZxLTE0IDAtMjMuNS0xMHQtOS41LTI0di02MmgtMjkxbC01NSA4MXEtMTAgMTUtMjggMTVoLTI2N3EtMjEgMC0zMC41LTE4dDMuNS0zNWw1NTYtNzU3cTktMTQgMjctMTRoMzMycTE0IDAgMjQgMTB0MTAgMjR6bTgyNyAzNzdxMCAxOTMtMTI1LjUgMzAzdC0zMjQuNSAxMTBoLTI3MHEtMTQgMC0yNC0xMHQtMTAtMjR2LTc1NnEwLTE0IDEwLTI0dDI0LTEwaDI2OHEyMDAgMCAzMjYgMTA5dDEyNiAzMDJ6bTE1NiAxcTAgMTEtLjUgMjl0LTggNzEuNS0yMS41IDEwMi00NC41IDEwOC03My41IDEwMi41aC01MXEzOC00NSA2Ni41LTEwNC41dDQxLjUtMTEyIDIxLTk4IDktNzIuNWwxLTI3cTAtOC0uNS0yMi41dC03LjUtNjAtMjAtOTEuNS00MS0xMTEuNS02Ni0xMjQuNWg0M3E0MSA0NyA3MiAxMDd0NDUuNSAxMTEuNSAyMyA5NiAxMC41IDcwLjV6bTE4NCAwcTAgMTEtLjUgMjl0LTggNzEuNS0yMS41IDEwMi00NSAxMDgtNzQgMTAyLjVoLTUxcTM4LTQ1IDY2LjUtMTA0LjV0NDEuNS0xMTIgMjEtOTggOS03Mi41bDEtMjdxMC04LS41LTIyLjV0LTcuNS02MC0xOS41LTkxLjUtNDAuNS0xMTEuNS02Ni0xMjQuNWg0M3E0MSA0NyA3MiAxMDd0NDUuNSAxMTEuNSAyMyA5NiAxMC41IDcwLjV6bTE4MSAwcTAgMTEtLjUgMjl0LTggNzEuNS0yMS41IDEwMi00NC41IDEwOC03My41IDEwMi41aC01MXEzOC00NSA2Ni0xMDQuNXQ0MS0xMTIgMjEtOTggOS03Mi41bDEtMjdxMC04LS41LTIyLjV0LTcuNS02MC0xOS41LTkxLjUtNDAuNS0xMTEuNS02Ni0xMjQuNWg0M3E0MSA0NyA3MiAxMDd0NDUuNSAxMTEuNSAyMyA5NiA5LjUgNzAuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQXVkaW9EZXNjcmlwdGlvbic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
