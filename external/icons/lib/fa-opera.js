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

var _ref2 = _react2.default.createElement('path', { d: 'M1493 228q-165-110-359-110-155 0-293 73t-240 200q-75 93-119.5 218t-48.5 266v42q4 141 48.5 266t119.5 218q102 127 240 200t293 73q194 0 359-110-121 108-274.5 168t-322.5 60q-29 0-43-1-175-8-333-82t-272-193-181-281-67-339q0-182 71-348t191-286 286-191 348-71h3q168 1 320.5 60.5t273.5 167.5zm299 668q0 192-77 362.5t-213 296.5q-104 63-222 63-137 0-255-84 154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83 119 0 226 65 135 125 210.5 295t75.5 361z' });

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
icon.displayName = 'FaOpera';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1vcGVyYS5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsbWNBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsU0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtb3BlcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0OTMgMjI4cS0xNjUtMTEwLTM1OS0xMTAtMTU1IDAtMjkzIDczdC0yNDAgMjAwcS03NSA5My0xMTkuNSAyMTh0LTQ4LjUgMjY2djQycTQgMTQxIDQ4LjUgMjY2dDExOS41IDIxOHExMDIgMTI3IDI0MCAyMDB0MjkzIDczcTE5NCAwIDM1OS0xMTAtMTIxIDEwOC0yNzQuNSAxNjh0LTMyMi41IDYwcS0yOSAwLTQzLTEtMTc1LTgtMzMzLTgydC0yNzItMTkzLTE4MS0yODEtNjctMzM5cTAtMTgyIDcxLTM0OHQxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxaDNxMTY4IDEgMzIwLjUgNjAuNXQyNzMuNSAxNjcuNXptMjk5IDY2OHEwIDE5Mi03NyAzNjIuNXQtMjEzIDI5Ni41cS0xMDQgNjMtMjIyIDYzLTEzNyAwLTI1NS04NCAxNTQtNTYgMjUzLjUtMjMzdDk5LjUtNDA1cTAtMjI3LTk5LTQwNHQtMjUzLTIzNHExMTktODMgMjU0LTgzIDExOSAwIDIyNiA2NSAxMzUgMTI1IDIxMC41IDI5NXQ3NS41IDM2MXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhT3BlcmEnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
