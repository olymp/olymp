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

var _ref2 = _react2.default.createElement('path', { d: 'M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zm-1504 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zm196-480h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zm1212 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z' });

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
icon.displayName = 'FaTaxi';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10YXhpLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFHd0ksd0NBQU0sR0FBRSwwaEJBQVIsRzs7QUFEeEksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsUUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdGF4aS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTgyNCA4OTZxOTMgMCAxNTguNSA2NS41dDY1LjUgMTU4LjV2Mzg0cTAgMTQtOSAyM3QtMjMgOWgtOTZ2NjRxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2di02NGgtMTAyNHY2NHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzZ2LTY0aC05NnEtMTQgMC0yMy05dC05LTIzdi0zODRxMC05MyA2NS41LTE1OC41dDE1OC41LTY1LjVoMjhsMTA1LTQxOXEyMy05NCAxMDQtMTU3LjV0MTc5LTYzLjVoMTI4di0yMjRxMC0xNCA5LTIzdDIzLTloNDQ4cTE0IDAgMjMgOXQ5IDIzdjIyNGgxMjhxOTggMCAxNzkgNjMuNXQxMDQgMTU3LjVsMTA1IDQxOWgyOHptLTE1MDQgNDgwcTY2IDAgMTEzLTQ3dDQ3LTExMy00Ny0xMTMtMTEzLTQ3LTExMyA0Ny00NyAxMTMgNDcgMTEzIDExMyA0N3ptMTk2LTQ4MGgxMDE2bC04OS0zNTdxLTItOC0xNC0xNy41dC0yMS05LjVoLTc2OHEtOSAwLTIxIDkuNXQtMTQgMTcuNXptMTIxMiA0ODBxNjYgMCAxMTMtNDd0NDctMTEzLTQ3LTExMy0xMTMtNDctMTEzIDQ3LTQ3IDExMyA0NyAxMTMgMTEzIDQ3elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVGF4aSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
