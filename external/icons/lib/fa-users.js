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

var _ref2 = _react2.default.createElement('path', { d: 'M657 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-1024-1277q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm704 384q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaUsers';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS11c2Vycy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBR3dJLHdDQUFNLEdBQUUsNnhCQUFSLEc7O0FBRHhJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02NTcgODk2cS0xNjIgNS0yNjUgMTI4aC0xMzRxLTgyIDAtMTM4LTQwLjV0LTU2LTExOC41cTAtMzUzIDEyNC0zNTMgNiAwIDQzLjUgMjF0OTcuNSA0Mi41IDExOSAyMS41cTY3IDAgMTMzLTIzLTUgMzctNSA2NiAwIDEzOSA4MSAyNTZ6bTEwNzEgNjM3cTAgMTIwLTczIDE4OS41dC0xOTQgNjkuNWgtODc0cS0xMjEgMC0xOTQtNjkuNXQtNzMtMTg5LjVxMC01MyAzLjUtMTAzLjV0MTQtMTA5IDI2LjUtMTA4LjUgNDMtOTcuNSA2Mi04MSA4NS41LTUzLjUgMTExLjUtMjBxMTAgMCA0MyAyMS41dDczIDQ4IDEwNyA0OCAxMzUgMjEuNSAxMzUtMjEuNSAxMDctNDggNzMtNDggNDMtMjEuNXE2MSAwIDExMS41IDIwdDg1LjUgNTMuNSA2MiA4MSA0MyA5Ny41IDI2LjUgMTA4LjUgMTQgMTA5IDMuNSAxMDMuNXptLTEwMjQtMTI3N3EwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptNzA0IDM4NHEwIDE1OS0xMTIuNSAyNzEuNXQtMjcxLjUgMTEyLjUtMjcxLjUtMTEyLjUtMTEyLjUtMjcxLjUgMTEyLjUtMjcxLjUgMjcxLjUtMTEyLjUgMjcxLjUgMTEyLjUgMTEyLjUgMjcxLjV6bTU3NiAyMjVxMCA3OC01NiAxMTguNXQtMTM4IDQwLjVoLTEzNHEtMTAzLTEyMy0yNjUtMTI4IDgxLTExNyA4MS0yNTYgMC0yOS01LTY2IDY2IDIzIDEzMyAyMyA1OSAwIDExOS0yMS41dDk3LjUtNDIuNSA0My41LTIxcTEyNCAwIDEyNCAzNTN6bS0xMjgtNjA5cTAgMTA2LTc1IDE4MXQtMTgxIDc1LTE4MS03NS03NS0xODEgNzUtMTgxIDE4MS03NSAxODEgNzUgNzUgMTgxelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVXNlcnMnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
