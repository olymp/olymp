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

var _ref2 = _react2.default.createElement('path', { d: 'M595 1514q0-100-165-100-158 0-158 104 0 101 172 101 151 0 151-105zm-59-755q0-61-30-102t-89-41q-124 0-124 145 0 135 124 135 119 0 119-137zm269-324v202q-36 12-79 22 16 43 16 84 0 127-73 216.5t-197 112.5q-40 8-59.5 27t-19.5 58q0 31 22.5 51.5t58 32 78.5 22 86 25.5 78.5 37.5 58 64 22.5 98.5q0 304-363 304-69 0-130-12.5t-116-41-87.5-82-32.5-127.5q0-165 182-225v-4q-67-41-67-126 0-109 63-137v-4q-72-24-119.5-108.5t-47.5-165.5q0-139 95-231.5t235-92.5q96 0 178 47 98 0 218-47zm318 881h-222q4-45 4-134v-609q0-94-4-128h222q-4 33-4 124v613q0 89 4 134zm601-222v196q-71 39-174 39-62 0-107-20t-70-50-39.5-78-18.5-92-4-103v-351h2v-4q-7 0-19-1t-18-1q-21 0-59 6v-190h96v-76q0-54-6-89h227q-6 41-6 165h171v190q-15 0-43.5-2t-42.5-2h-85v365q0 131 87 131 61 0 109-33zm-576-947q0 58-39 101.5t-96 43.5q-58 0-98-43.5t-40-101.5q0-59 39.5-103t98.5-44q58 0 96.5 44.5t38.5 102.5z' });

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
icon.displayName = 'FaGit';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLG8xQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTU5NSAxNTE0cTAtMTAwLTE2NS0xMDAtMTU4IDAtMTU4IDEwNCAwIDEwMSAxNzIgMTAxIDE1MSAwIDE1MS0xMDV6bS01OS03NTVxMC02MS0zMC0xMDJ0LTg5LTQxcS0xMjQgMC0xMjQgMTQ1IDAgMTM1IDEyNCAxMzUgMTE5IDAgMTE5LTEzN3ptMjY5LTMyNHYyMDJxLTM2IDEyLTc5IDIyIDE2IDQzIDE2IDg0IDAgMTI3LTczIDIxNi41dC0xOTcgMTEyLjVxLTQwIDgtNTkuNSAyN3QtMTkuNSA1OHEwIDMxIDIyLjUgNTEuNXQ1OCAzMiA3OC41IDIyIDg2IDI1LjUgNzguNSAzNy41IDU4IDY0IDIyLjUgOTguNXEwIDMwNC0zNjMgMzA0LTY5IDAtMTMwLTEyLjV0LTExNi00MS04Ny41LTgyLTMyLjUtMTI3LjVxMC0xNjUgMTgyLTIyNXYtNHEtNjctNDEtNjctMTI2IDAtMTA5IDYzLTEzN3YtNHEtNzItMjQtMTE5LjUtMTA4LjV0LTQ3LjUtMTY1LjVxMC0xMzkgOTUtMjMxLjV0MjM1LTkyLjVxOTYgMCAxNzggNDcgOTggMCAyMTgtNDd6bTMxOCA4ODFoLTIyMnE0LTQ1IDQtMTM0di02MDlxMC05NC00LTEyOGgyMjJxLTQgMzMtNCAxMjR2NjEzcTAgODkgNCAxMzR6bTYwMS0yMjJ2MTk2cS03MSAzOS0xNzQgMzktNjIgMC0xMDctMjB0LTcwLTUwLTM5LjUtNzgtMTguNS05Mi00LTEwM3YtMzUxaDJ2LTRxLTcgMC0xOS0xdC0xOC0xcS0yMSAwLTU5IDZ2LTE5MGg5NnYtNzZxMC01NC02LTg5aDIyN3EtNiA0MS02IDE2NWgxNzF2MTkwcS0xNSAwLTQzLjUtMnQtNDIuNS0yaC04NXYzNjVxMCAxMzEgODcgMTMxIDYxIDAgMTA5LTMzem0tNTc2LTk0N3EwIDU4LTM5IDEwMS41dC05NiA0My41cS01OCAwLTk4LTQzLjV0LTQwLTEwMS41cTAtNTkgMzkuNS0xMDN0OTguNS00NHE1OCAwIDk2LjUgNDQuNXQzOC41IDEwMi41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFHaXQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
