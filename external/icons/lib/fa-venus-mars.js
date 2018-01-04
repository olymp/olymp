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

var _ref2 = _react2.default.createElement('path', { d: 'M1664 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-32 180-164.5 310t-313.5 157q-223 34-409-90-117 78-256 93v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-155-17-279.5-109.5t-187-237.5-39.5-307q25-187 159.5-322.5t320.5-164.5q224-34 410 90 146-97 320-97 201 0 359 126l255-254h-134q-14 0-23-9t-9-23v-64zm-768 1113q128-131 128-313t-128-313q-128 131-128 313t128 313zm-768-313q0 185 131.5 316.5t316.5 131.5q117 0 218-57-154-167-154-391t154-391q-101-57-218-57-185 0-316.5 131.5t-131.5 316.5zm1088 448q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-117 0-218 57 154 167 154 391t-154 391q101 57 218 57z' });

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
icon.displayName = 'FaVenusMars';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS12ZW51cy1tYXJzLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSxpd0JBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdmVudXMtbWFycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTY2NCAzMnEwLTE0IDktMjN0MjMtOWgyODhxMjYgMCA0NSAxOXQxOSA0NXYyODhxMCAxNC05IDIzdC0yMyA5aC02NHEtMTQgMC0yMy05dC05LTIzdi0xMzRsLTI1NCAyNTVxNzYgOTUgMTA3LjUgMjE0dDkuNSAyNDdxLTMyIDE4MC0xNjQuNSAzMTB0LTMxMy41IDE1N3EtMjIzIDM0LTQwOS05MC0xMTcgNzgtMjU2IDkzdjEzMmg5NnExNCAwIDIzIDl0OSAyM3Y2NHEwIDE0LTkgMjN0LTIzIDloLTk2djk2cTAgMTQtOSAyM3QtMjMgOWgtNjRxLTE0IDAtMjMtOXQtOS0yM3YtOTZoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDk2di0xMzJxLTE1NS0xNy0yNzkuNS0xMDkuNXQtMTg3LTIzNy41LTM5LjUtMzA3cTI1LTE4NyAxNTkuNS0zMjIuNXQzMjAuNS0xNjQuNXEyMjQtMzQgNDEwIDkwIDE0Ni05NyAzMjAtOTcgMjAxIDAgMzU5IDEyNmwyNTUtMjU0aC0xMzRxLTE0IDAtMjMtOXQtOS0yM3YtNjR6bS03NjggMTExM3ExMjgtMTMxIDEyOC0zMTN0LTEyOC0zMTNxLTEyOCAxMzEtMTI4IDMxM3QxMjggMzEzem0tNzY4LTMxM3EwIDE4NSAxMzEuNSAzMTYuNXQzMTYuNSAxMzEuNXExMTcgMCAyMTgtNTctMTU0LTE2Ny0xNTQtMzkxdDE1NC0zOTFxLTEwMS01Ny0yMTgtNTctMTg1IDAtMzE2LjUgMTMxLjV0LTEzMS41IDMxNi41em0xMDg4IDQ0OHExODUgMCAzMTYuNS0xMzEuNXQxMzEuNS0zMTYuNS0xMzEuNS0zMTYuNS0zMTYuNS0xMzEuNXEtMTE3IDAtMjE4IDU3IDE1NCAxNjcgMTU0IDM5MXQtMTU0IDM5MXExMDEgNTcgMjE4IDU3elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVmVudXNNYXJzJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
