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

var _ref2 = _react2.default.createElement('path', { d: 'M1645 1098q0-59-34-106.5t-87-68.5q-7 45-23 92-7 24-27.5 38t-44.5 14q-12 0-24-3-31-10-45-38.5t-4-58.5q23-71 23-143 0-123-61-227.5t-166-165.5-228-61q-134 0-247 73t-167 194q108 28 188 106 22 23 22 55t-22 54-54 22-55-22q-75-75-180-75-106 0-181 74.5t-75 180.5 75 180.5 181 74.5h1046q79 0 134.5-55.5t55.5-133.5zm153 0q0 142-100.5 242t-242.5 100h-1046q-169 0-289-119.5t-120-288.5q0-153 100-267t249-136q62-184 221-298t354-114q235 0 408.5 158.5t196.5 389.5q116 25 192.5 118.5t76.5 214.5zm250 0q0 175-97 319-23 33-64 33-24 0-43-13-26-17-32-48.5t12-57.5q71-104 71-233t-71-233q-18-26-12-57t32-49 57.5-11.5 49.5 32.5q97 142 97 318zm256 0q0 244-134 443-23 34-64 34-23 0-42-13-26-18-32.5-49t11.5-57q108-164 108-358 0-195-108-357-18-26-11.5-57.5t32.5-48.5q26-18 57-12t49 33q134 198 134 442z' });

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
icon.displayName = 'FaMixcloud';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1taXhjbG91ZC5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRW9KLHdDQUFNLEdBQUUsd3dCQUFSLEc7O0FBRHBKLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsT0FBTSxNQUFoRixFQUF1RixTQUFRLGVBQS9GLEVBQStHLE9BQU0sNEJBQXJIO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsWUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtbWl4Y2xvdWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB3aWR0aD1cIjIzMDRcIiB2aWV3Qm94PVwiMCAwIDIzMDQgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE2NDUgMTA5OHEwLTU5LTM0LTEwNi41dC04Ny02OC41cS03IDQ1LTIzIDkyLTcgMjQtMjcuNSAzOHQtNDQuNSAxNHEtMTIgMC0yNC0zLTMxLTEwLTQ1LTM4LjV0LTQtNTguNXEyMy03MSAyMy0xNDMgMC0xMjMtNjEtMjI3LjV0LTE2Ni0xNjUuNS0yMjgtNjFxLTEzNCAwLTI0NyA3M3QtMTY3IDE5NHExMDggMjggMTg4IDEwNiAyMiAyMyAyMiA1NXQtMjIgNTQtNTQgMjItNTUtMjJxLTc1LTc1LTE4MC03NS0xMDYgMC0xODEgNzQuNXQtNzUgMTgwLjUgNzUgMTgwLjUgMTgxIDc0LjVoMTA0NnE3OSAwIDEzNC41LTU1LjV0NTUuNS0xMzMuNXptMTUzIDBxMCAxNDItMTAwLjUgMjQydC0yNDIuNSAxMDBoLTEwNDZxLTE2OSAwLTI4OS0xMTkuNXQtMTIwLTI4OC41cTAtMTUzIDEwMC0yNjd0MjQ5LTEzNnE2Mi0xODQgMjIxLTI5OHQzNTQtMTE0cTIzNSAwIDQwOC41IDE1OC41dDE5Ni41IDM4OS41cTExNiAyNSAxOTIuNSAxMTguNXQ3Ni41IDIxNC41em0yNTAgMHEwIDE3NS05NyAzMTktMjMgMzMtNjQgMzMtMjQgMC00My0xMy0yNi0xNy0zMi00OC41dDEyLTU3LjVxNzEtMTA0IDcxLTIzM3QtNzEtMjMzcS0xOC0yNi0xMi01N3QzMi00OSA1Ny41LTExLjUgNDkuNSAzMi41cTk3IDE0MiA5NyAzMTh6bTI1NiAwcTAgMjQ0LTEzNCA0NDMtMjMgMzQtNjQgMzQtMjMgMC00Mi0xMy0yNi0xOC0zMi41LTQ5dDExLjUtNTdxMTA4LTE2NCAxMDgtMzU4IDAtMTk1LTEwOC0zNTctMTgtMjYtMTEuNS01Ny41dDMyLjUtNDguNXEyNi0xOCA1Ny0xMnQ0OSAzM3ExMzQgMTk4IDEzNCA0NDJ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYU1peGNsb3VkJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
