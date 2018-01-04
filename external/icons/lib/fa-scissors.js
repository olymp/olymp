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

var _ref2 = _react2.default.createElement('path', { d: 'M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z' });

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
icon.displayName = 'FaScissors';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zY2lzc29ycy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsNDZCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFlBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLXNjaXNzb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk05NjAgODk2cTI2IDAgNDUgMTl0MTkgNDUtMTkgNDUtNDUgMTktNDUtMTktMTktNDUgMTktNDUgNDUtMTl6bTMwMCA2NGw1MDcgMzk4cTI4IDIwIDI1IDU2LTUgMzUtMzUgNTFsLTEyOCA2NHEtMTMgNy0yOSA3LTE3IDAtMzEtOGwtNjkwLTM4Ny0xMTAgNjZxLTggNC0xMiA1IDE0IDQ5IDEwIDk3LTcgNzctNTYgMTQ3LjV0LTEzMiAxMjMuNXEtMTMyIDg0LTI3NyA4NC0xMzYgMC0yMjItNzgtOTAtODQtNzktMjA3IDctNzYgNTYtMTQ3dDEzMS0xMjRxMTMyLTg0IDI3OC04NCA4MyAwIDE1MSAzMSA5LTEzIDIyLTIybDEyMi03My0xMjItNzNxLTEzLTktMjItMjItNjggMzEtMTUxIDMxLTE0NiAwLTI3OC04NC04Mi01My0xMzEtMTI0dC01Ni0xNDdxLTUtNTkgMTUuNS0xMTN0NjMuNS05M3E4NS03OSAyMjItNzkgMTQ1IDAgMjc3IDg0IDgzIDUyIDEzMiAxMjN0NTYgMTQ4cTQgNDgtMTAgOTcgNCAxIDEyIDVsMTEwIDY2IDY5MC0zODdxMTQtOCAzMS04IDE2IDAgMjkgN2wxMjggNjRxMzAgMTYgMzUgNTEgMyAzNi0yNSA1NnptLTY4MS0yNjBxNDYtNDIgMjEtMTA4dC0xMDYtMTE3cS05Mi01OS0xOTItNTktNzQgMC0xMTMgMzYtNDYgNDItMjEgMTA4dDEwNiAxMTdxOTIgNTkgMTkyIDU5IDc0IDAgMTEzLTM2em0tODUgNzQ1cTgxLTUxIDEwNi0xMTd0LTIxLTEwOHEtMzktMzYtMTEzLTM2LTEwMCAwLTE5MiA1OS04MSA1MS0xMDYgMTE3dDIxIDEwOHEzOSAzNiAxMTMgMzYgMTAwIDAgMTkyLTU5em0xNzgtNjEzbDk2IDU4di0xMXEwLTM2IDMzLTU2bDE0LTgtNzktNDctMjYgMjZxLTMgMy0xMCAxMXQtMTIgMTJxLTIgMi00IDMuNXQtMyAyLjV6bTIyNCAyMjRsOTYgMzIgNzM2LTU3Ni0xMjgtNjQtNzY4IDQzMXYxMTNsLTE2MCA5NiA5IDhxMiAyIDcgNiA0IDQgMTEgMTJ0MTEgMTJsMjYgMjZ6bTcwNCA0MTZsMTI4LTY0LTUyMC00MDgtMTc3IDEzOHEtMiAzLTEzIDd6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNjaXNzb3JzJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
