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

var _ref2 = _react2.default.createElement('path', { d: 'M512 1216q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm1024 0q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-46-396l-72-384q-5-23-22.5-37.5t-40.5-14.5h-918q-23 0-40.5 14.5t-22.5 37.5l-72 384q-5 30 14 53t49 23h1062q30 0 49-23t14-53zm-226-612q0-20-14-34t-34-14h-640q-20 0-34 14t-14 34 14 34 34 14h640q20 0 34-14t14-34zm400 725v603h-128v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-768v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-128v-603q0-112 25-223l103-454q9-78 97.5-137t230-89 312.5-30 312.5 30 230 89 97.5 137l105 454q23 102 23 223z' });

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
icon.displayName = 'FaBus';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1idXMuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGtvQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1idXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTUxMiAxMjE2cTAtNTMtMzcuNS05MC41dC05MC41LTM3LjUtOTAuNSAzNy41LTM3LjUgOTAuNSAzNy41IDkwLjUgOTAuNSAzNy41IDkwLjUtMzcuNSAzNy41LTkwLjV6bTEwMjQgMHEwLTUzLTM3LjUtOTAuNXQtOTAuNS0zNy41LTkwLjUgMzcuNS0zNy41IDkwLjUgMzcuNSA5MC41IDkwLjUgMzcuNSA5MC41LTM3LjUgMzcuNS05MC41em0tNDYtMzk2bC03Mi0zODRxLTUtMjMtMjIuNS0zNy41dC00MC41LTE0LjVoLTkxOHEtMjMgMC00MC41IDE0LjV0LTIyLjUgMzcuNWwtNzIgMzg0cS01IDMwIDE0IDUzdDQ5IDIzaDEwNjJxMzAgMCA0OS0yM3QxNC01M3ptLTIyNi02MTJxMC0yMC0xNC0zNHQtMzQtMTRoLTY0MHEtMjAgMC0zNCAxNHQtMTQgMzQgMTQgMzQgMzQgMTRoNjQwcTIwIDAgMzQtMTR0MTQtMzR6bTQwMCA3MjV2NjAzaC0xMjh2MTI4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNXYtMTI4aC03Njh2MTI4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjUtOTAuNS0zNy41LTM3LjUtOTAuNXYtMTI4aC0xMjh2LTYwM3EwLTExMiAyNS0yMjNsMTAzLTQ1NHE5LTc4IDk3LjUtMTM3dDIzMC04OSAzMTIuNS0zMCAzMTIuNSAzMCAyMzAgODkgOTcuNSAxMzdsMTA1IDQ1NHEyMyAxMDIgMjMgMjIzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFCdXMnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
