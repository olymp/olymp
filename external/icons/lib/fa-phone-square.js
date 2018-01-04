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

var _ref2 = _react2.default.createElement('path', { d: 'M1408 1193q0-11-2-16t-18-16.5-40.5-25-47.5-26.5-45.5-25-28.5-15q-5-3-19-13t-25-15-21-5q-15 0-36.5 20.5t-39.5 45-38.5 45-33.5 20.5q-7 0-16.5-3.5t-15.5-6.5-17-9.5-14-8.5q-99-55-170-126.5t-127-170.5q-2-3-8.5-14t-9.5-17-6.5-15.5-3.5-16.5q0-13 20.5-33.5t45-38.5 45-39.5 20.5-36.5q0-10-5-21t-15-25-13-19q-3-6-15-28.5t-25-45.5-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5t-34 130.5q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5t320.5 216.5q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zm256-777v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaPhoneSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1waG9uZS1zcXVhcmUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLGlyQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1waG9uZS1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0MDggMTE5M3EwLTExLTItMTZ0LTE4LTE2LjUtNDAuNS0yNS00Ny41LTI2LjUtNDUuNS0yNS0yOC41LTE1cS01LTMtMTktMTN0LTI1LTE1LTIxLTVxLTE1IDAtMzYuNSAyMC41dC0zOS41IDQ1LTM4LjUgNDUtMzMuNSAyMC41cS03IDAtMTYuNS0zLjV0LTE1LjUtNi41LTE3LTkuNS0xNC04LjVxLTk5LTU1LTE3MC0xMjYuNXQtMTI3LTE3MC41cS0yLTMtOC41LTE0dC05LjUtMTctNi41LTE1LjUtMy41LTE2LjVxMC0xMyAyMC41LTMzLjV0NDUtMzguNSA0NS0zOS41IDIwLjUtMzYuNXEwLTEwLTUtMjF0LTE1LTI1LTEzLTE5cS0zLTYtMTUtMjguNXQtMjUtNDUuNS0yNi41LTQ3LjUtMjUtNDAuNS0xNi41LTE4LTE2LTJxLTQ4IDAtMTAxIDIyLTQ2IDIxLTgwIDk0LjV0LTM0IDEzMC41cTAgMTYgMi41IDM0dDUgMzAuNSA5IDMzIDEwIDI5LjUgMTIuNSAzMyAxMSAzMHE2MCAxNjQgMjE2LjUgMzIwLjV0MzIwLjUgMjE2LjVxNiAyIDMwIDExdDMzIDEyLjUgMjkuNSAxMCAzMyA5IDMwLjUgNSAzNCAyLjVxNTcgMCAxMzAuNS0zNHQ5NC41LTgwcTIyLTUzIDIyLTEwMXptMjU2LTc3N3Y5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtOTYwcS0xMTkgMC0yMDMuNS04NC41dC04NC41LTIwMy41di05NjBxMC0xMTkgODQuNS0yMDMuNXQyMDMuNS04NC41aDk2MHExMTkgMCAyMDMuNSA4NC41dDg0LjUgMjAzLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVBob25lU3F1YXJlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
