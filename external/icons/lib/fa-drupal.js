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

var _ref2 = _react2.default.createElement('path', { d: 'M1295 1586q-5-19-24-5-30 22-87 39t-131 17q-129 0-193-49-5-4-13-4-11 0-26 12-7 6-7.5 16t7.5 20q34 32 87.5 46t102.5 12.5 99-4.5q41-4 84.5-20.5t65-30 28.5-20.5q12-12 7-29zm-39-115q-19-47-39-61-23-15-76-15-47 0-71 10-29 12-78 56-26 24-12 44 9 8 17.5 4.5t31.5-23.5q3-2 10.5-8.5t10.5-8.5 10-7 11.5-7 12.5-5 15-4.5 16.5-2.5 20.5-1q27 0 44.5 7.5t23 14.5 13.5 22q10 17 12.5 20t12.5-1q23-12 14-34zm355-281q0-22-5-44.5t-16.5-45-34-36.5-52.5-14q-33 0-97 41.5t-129 83.5-101 42q-27 1-63.5-19t-76-49-83.5-58-100-49-111-19q-115 1-197 78.5t-84 178.5q-2 112 74 164 29 20 62.5 28.5t103.5 8.5q57 0 132-32.5t134-71 120-70.5 93-31q26 1 65 31.5t71.5 67 68 67.5 55.5 32q35 3 58.5-14t55.5-63q28-41 42.5-101t14.5-106zm53-160q0 164-62 304.5t-166 236-242.5 149.5-290.5 54-293-57.5-247.5-157-170.5-241.5-64-302q0-89 19.5-172.5t49-145.5 70.5-118.5 78.5-94 78.5-69.5 64.5-46.5 42.5-24.5q14-8 51-26.5t54.5-28.5 48-30 60.5-44q36-28 58-72.5t30-125.5q129 155 186 193 44 29 130 68t129 66q21 13 39 25t60.5 46.5 76 70.5 75 95 69 122 47 148.5 19.5 177.5z' });

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
icon.displayName = 'FaDrupal';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1kcnVwYWwuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHkvQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1kcnVwYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyOTUgMTU4NnEtNS0xOS0yNC01LTMwIDIyLTg3IDM5dC0xMzEgMTdxLTEyOSAwLTE5My00OS01LTQtMTMtNC0xMSAwLTI2IDEyLTcgNi03LjUgMTZ0Ny41IDIwcTM0IDMyIDg3LjUgNDZ0MTAyLjUgMTIuNSA5OS00LjVxNDEtNCA4NC41LTIwLjV0NjUtMzAgMjguNS0yMC41cTEyLTEyIDctMjl6bS0zOS0xMTVxLTE5LTQ3LTM5LTYxLTIzLTE1LTc2LTE1LTQ3IDAtNzEgMTAtMjkgMTItNzggNTYtMjYgMjQtMTIgNDQgOSA4IDE3LjUgNC41dDMxLjUtMjMuNXEzLTIgMTAuNS04LjV0MTAuNS04LjUgMTAtNyAxMS41LTcgMTIuNS01IDE1LTQuNSAxNi41LTIuNSAyMC41LTFxMjcgMCA0NC41IDcuNXQyMyAxNC41IDEzLjUgMjJxMTAgMTcgMTIuNSAyMHQxMi41LTFxMjMtMTIgMTQtMzR6bTM1NS0yODFxMC0yMi01LTQ0LjV0LTE2LjUtNDUtMzQtMzYuNS01Mi41LTE0cS0zMyAwLTk3IDQxLjV0LTEyOSA4My41LTEwMSA0MnEtMjcgMS02My41LTE5dC03Ni00OS04My41LTU4LTEwMC00OS0xMTEtMTlxLTExNSAxLTE5NyA3OC41dC04NCAxNzguNXEtMiAxMTIgNzQgMTY0IDI5IDIwIDYyLjUgMjguNXQxMDMuNSA4LjVxNTcgMCAxMzItMzIuNXQxMzQtNzEgMTIwLTcwLjUgOTMtMzFxMjYgMSA2NSAzMS41dDcxLjUgNjcgNjggNjcuNSA1NS41IDMycTM1IDMgNTguNS0xNHQ1NS41LTYzcTI4LTQxIDQyLjUtMTAxdDE0LjUtMTA2em01My0xNjBxMCAxNjQtNjIgMzA0LjV0LTE2NiAyMzYtMjQyLjUgMTQ5LjUtMjkwLjUgNTQtMjkzLTU3LjUtMjQ3LjUtMTU3LTE3MC41LTI0MS41LTY0LTMwMnEwLTg5IDE5LjUtMTcyLjV0NDktMTQ1LjUgNzAuNS0xMTguNSA3OC41LTk0IDc4LjUtNjkuNSA2NC41LTQ2LjUgNDIuNS0yNC41cTE0LTggNTEtMjYuNXQ1NC41LTI4LjUgNDgtMzAgNjAuNS00NHEzNi0yOCA1OC03Mi41dDMwLTEyNS41cTEyOSAxNTUgMTg2IDE5MyA0NCAyOSAxMzAgNjh0MTI5IDY2cTIxIDEzIDM5IDI1dDYwLjUgNDYuNSA3NiA3MC41IDc1IDk1IDY5IDEyMiA0NyAxNDguNSAxOS41IDE3Ny41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFEcnVwYWwnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
