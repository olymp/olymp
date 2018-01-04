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

var _ref2 = _react2.default.createElement('path', { d: 'M1100 775q0-108-53.5-169t-147.5-61q-63 0-124 30.5t-110 84.5-79.5 137-30.5 180q0 112 53.5 173t150.5 61q96 0 176-66.5t122.5-166 42.5-203.5zm564 121q0 111-37 197t-98.5 135-131.5 74.5-145 27.5q-6 0-15.5.5t-16.5.5q-95 0-142-53-28-33-33-83-52 66-131.5 110t-173.5 44q-161 0-249.5-95.5t-88.5-269.5q0-157 66-290t179-210.5 246-77.5q87 0 155 35.5t106 99.5l2-19 11-56q1-6 5.5-12t9.5-6h118q5 0 13 11 5 5 3 16l-120 614q-5 24-5 48 0 39 12.5 52t44.5 13q28-1 57-5.5t73-24 77-50 57-89.5 24-137q0-292-174-466t-466-174q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51q228 0 405-144 11-9 24-8t21 12l41 49q8 12 7 24-2 13-12 22-102 83-227.5 128t-258.5 45q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q344 0 556 212t212 556z' });

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
icon.displayName = 'FaAt';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hdC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsdXZCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE1BQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMTAwIDc3NXEwLTEwOC01My41LTE2OXQtMTQ3LjUtNjFxLTYzIDAtMTI0IDMwLjV0LTExMCA4NC41LTc5LjUgMTM3LTMwLjUgMTgwcTAgMTEyIDUzLjUgMTczdDE1MC41IDYxcTk2IDAgMTc2LTY2LjV0MTIyLjUtMTY2IDQyLjUtMjAzLjV6bTU2NCAxMjFxMCAxMTEtMzcgMTk3dC05OC41IDEzNS0xMzEuNSA3NC41LTE0NSAyNy41cS02IDAtMTUuNS41dC0xNi41LjVxLTk1IDAtMTQyLTUzLTI4LTMzLTMzLTgzLTUyIDY2LTEzMS41IDExMHQtMTczLjUgNDRxLTE2MSAwLTI0OS41LTk1LjV0LTg4LjUtMjY5LjVxMC0xNTcgNjYtMjkwdDE3OS0yMTAuNSAyNDYtNzcuNXE4NyAwIDE1NSAzNS41dDEwNiA5OS41bDItMTkgMTEtNTZxMS02IDUuNS0xMnQ5LjUtNmgxMThxNSAwIDEzIDExIDUgNSAzIDE2bC0xMjAgNjE0cS01IDI0LTUgNDggMCAzOSAxMi41IDUydDQ0LjUgMTNxMjgtMSA1Ny01LjV0NzMtMjQgNzctNTAgNTctODkuNSAyNC0xMzdxMC0yOTItMTc0LTQ2NnQtNDY2LTE3NHEtMTMwIDAtMjQ4LjUgNTF0LTIwNCAxMzYuNS0xMzYuNSAyMDQtNTEgMjQ4LjUgNTEgMjQ4LjUgMTM2LjUgMjA0IDIwNCAxMzYuNSAyNDguNSA1MXEyMjggMCA0MDUtMTQ0IDExLTkgMjQtOHQyMSAxMmw0MSA0OXE4IDEyIDcgMjQtMiAxMy0xMiAyMi0xMDIgODMtMjI3LjUgMTI4dC0yNTguNSA0NXEtMTU2IDAtMjk4LTYxdC0yNDUtMTY0LTE2NC0yNDUtNjEtMjk4IDYxLTI5OCAxNjQtMjQ1IDI0NS0xNjQgMjk4LTYxcTM0NCAwIDU1NiAyMTJ0MjEyIDU1NnpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQXQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
