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

var _ref2 = _react2.default.createElement('path', { d: 'M1255 1432h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zm-455 8q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm925 246v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70zm-89-1151v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248v-119h121z' });

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
icon.displayName = 'FaSortAlphaDesc';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3J0LWFscGhhLWRlc2MuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHVkQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGlCQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zb3J0LWFscGhhLWRlc2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyNTUgMTQzMmgxNzdsLTcyLTIxOC0xMi00N3EtMi0xNi0yLTIwaC00bC0zIDIwcTAgMS0zLjUgMTh0LTcuNSAyOXptLTQ1NSA4cTAgMTItMTAgMjRsLTMxOSAzMTlxLTEwIDktMjMgOS0xMiAwLTIzLTlsLTMyMC0zMjBxLTE1LTE2LTctMzUgOC0yMCAzMC0yMGgxOTJ2LTEzNzZxMC0xNCA5LTIzdDIzLTloMTkycTE0IDAgMjMgOXQ5IDIzdjEzNzZoMTkycTE0IDAgMjMgOXQ5IDIzem05MjUgMjQ2djEwNmgtMjg4di0xMDZoNzVsLTQ3LTE0NGgtMjQzbC00NyAxNDRoNzV2MTA2aC0yODd2LTEwNmg3MGwyMzAtNjYyaDE2MmwyMzAgNjYyaDcwem0tODktMTE1MXYyMzNoLTU4NHYtOTBsMzY5LTUyOXExMi0xOCAyMS0yN2wxMS05di0zcS0yIDAtNi41LjV0LTcuNS41cS0xMiAzLTMwIDNoLTIzMnYxMTVoLTEyMHYtMjI5aDU2N3Y4OWwtMzY5IDUzMHEtNiA4LTIxIDI2bC0xMSAxMHYzbDE0LTNxOS0xIDMwLTFoMjQ4di0xMTloMTIxelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTb3J0QWxwaGFEZXNjJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
