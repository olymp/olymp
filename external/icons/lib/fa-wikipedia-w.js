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

var _ref2 = _react2.default.createElement('path', { d: 'M1494 1639l-295-695q-25 49-158.5 305.5t-198.5 389.5q-1 1-27.5.5t-26.5-1.5q-82-193-255.5-587t-259.5-596q-21-50-66.5-107.5t-103.5-100.5-102-43q0-5-.5-24t-.5-27h583v50q-39 2-79.5 16t-66.5 43-10 64q26 59 216.5 499t235.5 540q31-61 140-266.5t131-247.5q-19-39-126-281t-136-295q-38-69-201-71v-50l513 1v47q-60 2-93.5 25t-12.5 69q33 70 87 189.5t86 187.5q110-214 173-363 24-55-10-79.5t-129-26.5q1-7 1-25v-24q64 0 170.5-.5t180-1 92.5-.5v49q-62 2-119 33t-90 81l-213 442q13 33 127.5 290t121.5 274l441-1017q-14-38-49.5-62.5t-65-31.5-55.5-8v-50l460 4 1 2-1 44q-139 4-201 145-526 1216-559 1291h-49z' });

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
icon.displayName = 'FaWikipediaW';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS13aWtpcGVkaWEtdy5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRW9KLHdDQUFNLEdBQUUsdWtCQUFSLEc7O0FBRHBKLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsT0FBTSxNQUFoRixFQUF1RixTQUFRLGVBQS9GLEVBQStHLE9BQU0sNEJBQXJIO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtd2lraXBlZGlhLXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB3aWR0aD1cIjIzMDRcIiB2aWV3Qm94PVwiMCAwIDIzMDQgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0OTQgMTYzOWwtMjk1LTY5NXEtMjUgNDktMTU4LjUgMzA1LjV0LTE5OC41IDM4OS41cS0xIDEtMjcuNS41dC0yNi41LTEuNXEtODItMTkzLTI1NS41LTU4N3QtMjU5LjUtNTk2cS0yMS01MC02Ni41LTEwNy41dC0xMDMuNS0xMDAuNS0xMDItNDNxMC01LS41LTI0dC0uNS0yN2g1ODN2NTBxLTM5IDItNzkuNSAxNnQtNjYuNSA0My0xMCA2NHEyNiA1OSAyMTYuNSA0OTl0MjM1LjUgNTQwcTMxLTYxIDE0MC0yNjYuNXQxMzEtMjQ3LjVxLTE5LTM5LTEyNi0yODF0LTEzNi0yOTVxLTM4LTY5LTIwMS03MXYtNTBsNTEzIDF2NDdxLTYwIDItOTMuNSAyNXQtMTIuNSA2OXEzMyA3MCA4NyAxODkuNXQ4NiAxODcuNXExMTAtMjE0IDE3My0zNjMgMjQtNTUtMTAtNzkuNXQtMTI5LTI2LjVxMS03IDEtMjV2LTI0cTY0IDAgMTcwLjUtLjV0MTgwLTEgOTIuNS0uNXY0OXEtNjIgMi0xMTkgMzN0LTkwIDgxbC0yMTMgNDQycTEzIDMzIDEyNy41IDI5MHQxMjEuNSAyNzRsNDQxLTEwMTdxLTE0LTM4LTQ5LjUtNjIuNXQtNjUtMzEuNS01NS41LTh2LTUwbDQ2MCA0IDEgMi0xIDQ0cS0xMzkgNC0yMDEgMTQ1LTUyNiAxMjE2LTU1OSAxMjkxaC00OXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhV2lraXBlZGlhVyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
