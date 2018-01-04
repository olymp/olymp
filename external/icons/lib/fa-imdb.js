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

var _ref2 = _react2.default.createElement('path', { d: 'M1050 797v182q0 4 .5 15t0 15l-1.5 12-3.5 11.5-6.5 7.5-11 5.5-16 1.5v-309q9 0 16 1t11 5 6.5 5.5 3.5 9.5 1 10.5v27.5zm316 96v121q0 1 .5 12.5t0 15.5-2.5 11.5-7.5 10.5-13.5 3q-9 0-14-9-4-10-4-165v-24.5l1.5-8.5 3.5-7 5-5.5 8-1.5q6 0 10 1.5t6.5 4.5 4 6 2 8.5.5 8v18.5zm-1058 236h122v-472h-122v472zm434 0h106v-472h-159l-28 221q-20-148-32-221h-158v472h107v-312l45 312h76l43-319v319zm425-305q0-67-5-90-3-16-11-28.5t-17-20.5-25-14-26.5-8.5-31-4-29-1.5h-132.5v472h56q169 1 197-24.5t25-180.5q-1-62-1-100zm317 197v-133q0-29-2-45t-9.5-33.5-24.5-25-46-7.5q-46 0-77 34v-154h-117v472h110l7-30q30 36 77 36 50 0 66-30.5t16-83.5zm180-733v1216q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1216q66 0 113 47t47 113z' });

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
icon.displayName = 'FaImdb';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1pbWRiLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxpdEJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsUUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtaW1kYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTA1MCA3OTd2MTgycTAgNCAuNSAxNXQwIDE1bC0xLjUgMTItMy41IDExLjUtNi41IDcuNS0xMSA1LjUtMTYgMS41di0zMDlxOSAwIDE2IDF0MTEgNSA2LjUgNS41IDMuNSA5LjUgMSAxMC41djI3LjV6bTMxNiA5NnYxMjFxMCAxIC41IDEyLjV0MCAxNS41LTIuNSAxMS41LTcuNSAxMC41LTEzLjUgM3EtOSAwLTE0LTktNC0xMC00LTE2NXYtMjQuNWwxLjUtOC41IDMuNS03IDUtNS41IDgtMS41cTYgMCAxMCAxLjV0Ni41IDQuNSA0IDYgMiA4LjUuNSA4djE4LjV6bS0xMDU4IDIzNmgxMjJ2LTQ3MmgtMTIydjQ3MnptNDM0IDBoMTA2di00NzJoLTE1OWwtMjggMjIxcS0yMC0xNDgtMzItMjIxaC0xNTh2NDcyaDEwN3YtMzEybDQ1IDMxMmg3Nmw0My0zMTl2MzE5em00MjUtMzA1cTAtNjctNS05MC0zLTE2LTExLTI4LjV0LTE3LTIwLjUtMjUtMTQtMjYuNS04LjUtMzEtNC0yOS0xLjVoLTEzMi41djQ3Mmg1NnExNjkgMSAxOTctMjQuNXQyNS0xODAuNXEtMS02Mi0xLTEwMHptMzE3IDE5N3YtMTMzcTAtMjktMi00NXQtOS41LTMzLjUtMjQuNS0yNS00Ni03LjVxLTQ2IDAtNzcgMzR2LTE1NGgtMTE3djQ3MmgxMTBsNy0zMHEzMCAzNiA3NyAzNiA1MCAwIDY2LTMwLjV0MTYtODMuNXptMTgwLTczM3YxMjE2cTAgNjYtNDcgMTEzdC0xMTMgNDdoLTEyMTZxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTEyMTZxMC02NiA0Ny0xMTN0MTEzLTQ3aDEyMTZxNjYgMCAxMTMgNDd0NDcgMTEzelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFJbWRiJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
