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

var _ref2 = _react2.default.createElement('path', { d: 'M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z' });

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
icon.displayName = 'FaBug';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1idWcuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHdnQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1idWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE2OTYgOTYwcTAgMjYtMTkgNDV0LTQ1IDE5aC0yMjRxMCAxNzEtNjcgMjkwbDIwOCAyMDlxMTkgMTkgMTkgNDV0LTE5IDQ1cS0xOCAxOS00NSAxOXQtNDUtMTlsLTE5OC0xOTdxLTUgNS0xNSAxM3QtNDIgMjguNS02NSAzNi41LTgyIDI5LTk3IDEzdi04OTZoLTEyOHY4OTZxLTUxIDAtMTAxLjUtMTMuNXQtODctMzMtNjYtMzktNDMuNS0zMi41bC0xNS0xNC0xODMgMjA3cS0yMCAyMS00OCAyMS0yNCAwLTQzLTE2LTE5LTE4LTIwLjUtNDQuNXQxNS41LTQ2LjVsMjAyLTIyN3EtNTgtMTE0LTU4LTI3NGgtMjI0cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NSA0NS0xOWgyMjR2LTI5NGwtMTczLTE3M3EtMTktMTktMTktNDV0MTktNDUgNDUtMTkgNDUgMTlsMTczIDE3M2g4NDRsMTczLTE3M3ExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NS0xOSA0NWwtMTczIDE3M3YyOTRoMjI0cTI2IDAgNDUgMTl0MTkgNDV6bS00ODAtNTc2aC02NDBxMC0xMzMgOTMuNS0yMjYuNXQyMjYuNS05My41IDIyNi41IDkzLjUgOTMuNSAyMjYuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQnVnJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
