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

var _ref2 = _react2.default.createElement('path', { d: 'M1450 896q0 45-5 76l-236-14 224 78q-19 73-58 141l-214-103 177 158q-44 61-107 108l-157-178 103 215q-61 37-140 59l-79-228 14 240q-38 6-76 6t-76-6l14-238-78 226q-74-19-140-59l103-215-157 178q-59-43-108-108l178-158-214 104q-39-69-58-141l224-79-237 14q-5-42-5-76 0-35 5-77l238 14-225-79q19-73 58-140l214 104-177-159q46-61 107-108l158 178-103-215q67-39 140-58l77 224-13-236q36-6 75-6 38 0 76 6l-14 237 78-225q74 19 140 59l-103 214 158-178q61 47 107 108l-177 159 213-104q37 62 58 141l-224 78 237-14q5 31 5 77zm30 0q0-160-78.5-295.5t-213-214-292.5-78.5q-119 0-227 46.5t-186.5 125-124.5 187.5-46 229q0 119 46 228t124.5 187.5 186.5 125 227 46.5q158 0 292.5-78.5t213-214 78.5-294.5zm73-383v766l-657 383-657-383v-766l657-383zm-657 1206l708-412v-823l-708-411-708 411v823zm768-1271v896l-768 448-768-448v-896l768-448z' });

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
icon.displayName = 'FaFirstOrder';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1maXJzdC1vcmRlci5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsb3lCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO2tCQUNlLHNCQUFPUCxJQUFQLEMiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvbGliL2ZhLWZpcnN0LW9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNDUwIDg5NnEwIDQ1LTUgNzZsLTIzNi0xNCAyMjQgNzhxLTE5IDczLTU4IDE0MWwtMjE0LTEwMyAxNzcgMTU4cS00NCA2MS0xMDcgMTA4bC0xNTctMTc4IDEwMyAyMTVxLTYxIDM3LTE0MCA1OWwtNzktMjI4IDE0IDI0MHEtMzggNi03NiA2dC03Ni02bDE0LTIzOC03OCAyMjZxLTc0LTE5LTE0MC01OWwxMDMtMjE1LTE1NyAxNzhxLTU5LTQzLTEwOC0xMDhsMTc4LTE1OC0yMTQgMTA0cS0zOS02OS01OC0xNDFsMjI0LTc5LTIzNyAxNHEtNS00Mi01LTc2IDAtMzUgNS03N2wyMzggMTQtMjI1LTc5cTE5LTczIDU4LTE0MGwyMTQgMTA0LTE3Ny0xNTlxNDYtNjEgMTA3LTEwOGwxNTggMTc4LTEwMy0yMTVxNjctMzkgMTQwLTU4bDc3IDIyNC0xMy0yMzZxMzYtNiA3NS02IDM4IDAgNzYgNmwtMTQgMjM3IDc4LTIyNXE3NCAxOSAxNDAgNTlsLTEwMyAyMTQgMTU4LTE3OHE2MSA0NyAxMDcgMTA4bC0xNzcgMTU5IDIxMy0xMDRxMzcgNjIgNTggMTQxbC0yMjQgNzggMjM3LTE0cTUgMzEgNSA3N3ptMzAgMHEwLTE2MC03OC41LTI5NS41dC0yMTMtMjE0LTI5Mi41LTc4LjVxLTExOSAwLTIyNyA0Ni41dC0xODYuNSAxMjUtMTI0LjUgMTg3LjUtNDYgMjI5cTAgMTE5IDQ2IDIyOHQxMjQuNSAxODcuNSAxODYuNSAxMjUgMjI3IDQ2LjVxMTU4IDAgMjkyLjUtNzguNXQyMTMtMjE0IDc4LjUtMjk0LjV6bTczLTM4M3Y3NjZsLTY1NyAzODMtNjU3LTM4M3YtNzY2bDY1Ny0zODN6bS02NTcgMTIwNmw3MDgtNDEydi04MjNsLTcwOC00MTEtNzA4IDQxMXY4MjN6bTc2OC0xMjcxdjg5NmwtNzY4IDQ0OC03NjgtNDQ4di04OTZsNzY4LTQ0OHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhRmlyc3RPcmRlcic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
