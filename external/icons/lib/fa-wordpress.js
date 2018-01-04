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

var _ref2 = _react2.default.createElement('path', { d: 'M127 896q0-163 67-313l367 1005q-196-95-315-281t-119-411zm1288-39q0 19-2.5 38.5t-10 49.5-11.5 44-17.5 59-17.5 58l-76 256-278-826q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-75-1-202-10-12-1-20.5 5t-11.5 15-1.5 18.5 9 16.5 19.5 8l80 8 120 328-168 504-280-832q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-7 0-23-.5t-26-.5q105-160 274.5-253.5t367.5-93.5q147 0 280.5 53t238.5 149h-10q-55 0-92 40.5t-37 95.5q0 12 2 24t4 21.5 8 23 9 21 12 22.5 12.5 21 14.5 24 14 23q63 107 63 212zm-506 106l237 647q1 6 5 11-126 44-255 44-112 0-217-32zm661-436q95 174 95 369 0 209-104 385.5t-279 278.5l235-678q59-169 59-276 0-42-6-79zm-674-527q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zm0 1751q173 0 331.5-68t273-182.5 182.5-273 68-331.5-68-331.5-182.5-273-273-182.5-331.5-68-331.5 68-273 182.5-182.5 273-68 331.5 68 331.5 182.5 273 273 182.5 331.5 68z' });

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
icon.displayName = 'FaWordpress';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS13b3JkcHJlc3MuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDQ1QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixhQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS13b3JkcHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyNyA4OTZxMC0xNjMgNjctMzEzbDM2NyAxMDA1cS0xOTYtOTUtMzE1LTI4MXQtMTE5LTQxMXptMTI4OC0zOXEwIDE5LTIuNSAzOC41dC0xMCA0OS41LTExLjUgNDQtMTcuNSA1OS0xNy41IDU4bC03NiAyNTYtMjc4LTgyNnE0Ni0zIDg4LTggMTktMiAyNi0xOC41dC0yLjUtMzEtMjguNS0xMy41bC0yMDUgMTBxLTc1LTEtMjAyLTEwLTEyLTEtMjAuNSA1dC0xMS41IDE1LTEuNSAxOC41IDkgMTYuNSAxOS41IDhsODAgOCAxMjAgMzI4LTE2OCA1MDQtMjgwLTgzMnE0Ni0zIDg4LTggMTktMiAyNi0xOC41dC0yLjUtMzEtMjguNS0xMy41bC0yMDUgMTBxLTcgMC0yMy0uNXQtMjYtLjVxMTA1LTE2MCAyNzQuNS0yNTMuNXQzNjcuNS05My41cTE0NyAwIDI4MC41IDUzdDIzOC41IDE0OWgtMTBxLTU1IDAtOTIgNDAuNXQtMzcgOTUuNXEwIDEyIDIgMjR0NCAyMS41IDggMjMgOSAyMSAxMiAyMi41IDEyLjUgMjEgMTQuNSAyNCAxNCAyM3E2MyAxMDcgNjMgMjEyem0tNTA2IDEwNmwyMzcgNjQ3cTEgNiA1IDExLTEyNiA0NC0yNTUgNDQtMTEyIDAtMjE3LTMyem02NjEtNDM2cTk1IDE3NCA5NSAzNjkgMCAyMDktMTA0IDM4NS41dC0yNzkgMjc4LjVsMjM1LTY3OHE1OS0xNjkgNTktMjc2IDAtNDItNi03OXptLTY3NC01MjdxMTgyIDAgMzQ4IDcxdDI4NiAxOTEgMTkxIDI4NiA3MSAzNDgtNzEgMzQ4LTE5MSAyODYtMjg2IDE5MS0zNDggNzEtMzQ4LTcxLTI4Ni0xOTEtMTkxLTI4Ni03MS0zNDggNzEtMzQ4IDE5MS0yODYgMjg2LTE5MSAzNDgtNzF6bTAgMTc1MXExNzMgMCAzMzEuNS02OHQyNzMtMTgyLjUgMTgyLjUtMjczIDY4LTMzMS41LTY4LTMzMS41LTE4Mi41LTI3My0yNzMtMTgyLjUtMzMxLjUtNjgtMzMxLjUgNjgtMjczIDE4Mi41LTE4Mi41IDI3My02OCAzMzEuNSA2OCAzMzEuNSAxODIuNSAyNzMgMjczIDE4Mi41IDMzMS41IDY4elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFXb3JkcHJlc3MnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
