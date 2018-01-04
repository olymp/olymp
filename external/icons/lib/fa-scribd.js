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

var _ref2 = _react2.default.createElement('path', { d: 'M1628 1549q0 89-63 152.5t-153 63.5-153.5-63.5-63.5-152.5q0-90 63.5-153.5t153.5-63.5 153 63.5 63 153.5zm-233-281q-115 15-192.5 102.5t-77.5 205.5q0 74 33 138-146 78-379 78-109 0-201-21t-153.5-54.5-110.5-76.5-76-85-44.5-83-23.5-66.5-6-39.5q0-19 4.5-42.5t18.5-56 36.5-58 64-43.5 94.5-18 94 17.5 63 41 35.5 53 17.5 49 4 33.5q0 34-23 81 28 27 82 42t93 17l40 1q115 0 190-51t75-133q0-26-9-48.5t-31.5-44.5-49.5-41-74-44-93.5-47.5-119.5-56.5q-28-13-43-20-116-55-187-100t-122.5-102-72-125.5-20.5-162.5q0-78 20.5-150t66-137.5 112.5-114 166.5-77 221.5-28.5q120 0 220 26t164.5 67 109.5 94 64 105.5 19 103.5q0 46-15 82.5t-36.5 58-48.5 36-49 19.5-39 5h-40l-39-5-44-14-41-28-37-46-24-70.5-10-97.5q-15-16-59-25.5t-81-10.5l-37-1q-68 0-117.5 31t-70.5 70-21 76q0 24 5 43t24 46 53 51 97 53.5 150 58.5q76 25 138.5 53.5t109 55.5 83 59 60.5 59.5 41 62.5 26.5 62 14.5 63.5 6 62 1 62.5z' });

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
icon.displayName = 'FaScribd';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1zY3JpYmQuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDYxQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1zY3JpYmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE2MjggMTU0OXEwIDg5LTYzIDE1Mi41dC0xNTMgNjMuNS0xNTMuNS02My41LTYzLjUtMTUyLjVxMC05MCA2My41LTE1My41dDE1My41LTYzLjUgMTUzIDYzLjUgNjMgMTUzLjV6bS0yMzMtMjgxcS0xMTUgMTUtMTkyLjUgMTAyLjV0LTc3LjUgMjA1LjVxMCA3NCAzMyAxMzgtMTQ2IDc4LTM3OSA3OC0xMDkgMC0yMDEtMjF0LTE1My41LTU0LjUtMTEwLjUtNzYuNS03Ni04NS00NC41LTgzLTIzLjUtNjYuNS02LTM5LjVxMC0xOSA0LjUtNDIuNXQxOC41LTU2IDM2LjUtNTggNjQtNDMuNSA5NC41LTE4IDk0IDE3LjUgNjMgNDEgMzUuNSA1MyAxNy41IDQ5IDQgMzMuNXEwIDM0LTIzIDgxIDI4IDI3IDgyIDQydDkzIDE3bDQwIDFxMTE1IDAgMTkwLTUxdDc1LTEzM3EwLTI2LTktNDguNXQtMzEuNS00NC41LTQ5LjUtNDEtNzQtNDQtOTMuNS00Ny41LTExOS41LTU2LjVxLTI4LTEzLTQzLTIwLTExNi01NS0xODctMTAwdC0xMjIuNS0xMDItNzItMTI1LjUtMjAuNS0xNjIuNXEwLTc4IDIwLjUtMTUwdDY2LTEzNy41IDExMi41LTExNCAxNjYuNS03NyAyMjEuNS0yOC41cTEyMCAwIDIyMCAyNnQxNjQuNSA2NyAxMDkuNSA5NCA2NCAxMDUuNSAxOSAxMDMuNXEwIDQ2LTE1IDgyLjV0LTM2LjUgNTgtNDguNSAzNi00OSAxOS41LTM5IDVoLTQwbC0zOS01LTQ0LTE0LTQxLTI4LTM3LTQ2LTI0LTcwLjUtMTAtOTcuNXEtMTUtMTYtNTktMjUuNXQtODEtMTAuNWwtMzctMXEtNjggMC0xMTcuNSAzMXQtNzAuNSA3MC0yMSA3NnEwIDI0IDUgNDN0MjQgNDYgNTMgNTEgOTcgNTMuNSAxNTAgNTguNXE3NiAyNSAxMzguNSA1My41dDEwOSA1NS41IDgzIDU5IDYwLjUgNTkuNSA0MSA2Mi41IDI2LjUgNjIgMTQuNSA2My41IDYgNjIgMSA2Mi41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTY3JpYmQnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
