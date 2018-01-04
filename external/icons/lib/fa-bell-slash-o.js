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

var _ref2 = _react2.default.createElement('path', { d: 'M1040 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm-537-475l877-760q-42-88-132.5-146.5t-223.5-58.5q-93 0-169.5 31.5t-121.5 80.5-69 103-24 105q0 384-137 645zm1353 187q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5l149-129h757q-166-187-227-459l111-97q61 356 298 556zm86-1392l84 96q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaBellSlashO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1iZWxsLXNsYXNoLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUd3SSx3Q0FBTSxHQUFFLHFvQkFBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1iZWxsLXNsYXNoLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwNDAgMTY5NnEwLTE2LTE2LTE2LTU5IDAtMTAxLjUtNDIuNXQtNDIuNS0xMDEuNXEwLTE2LTE2LTE2dC0xNiAxNnEwIDczIDUxLjUgMTI0LjV0MTI0LjUgNTEuNXExNiAwIDE2LTE2em0tNTM3LTQ3NWw4NzctNzYwcS00Mi04OC0xMzIuNS0xNDYuNXQtMjIzLjUtNTguNXEtOTMgMC0xNjkuNSAzMS41dC0xMjEuNSA4MC41LTY5IDEwMy0yNCAxMDVxMCAzODQtMTM3IDY0NXptMTM1MyAxODdxMCA1Mi0zOCA5MHQtOTAgMzhoLTQ0OHEwIDEwNi03NSAxODF0LTE4MSA3NS0xODAuNS03NC41LTc1LjUtMTgwLjVsMTQ5LTEyOWg3NTdxLTE2Ni0xODctMjI3LTQ1OWwxMTEtOTdxNjEgMzU2IDI5OCA1NTZ6bTg2LTEzOTJsODQgOTZxOCAxMCA3LjUgMjMuNXQtMTAuNSAyMi41bC0xODcyIDE2MjJxLTEwIDgtMjMuNSA3dC0yMS41LTExbC04NC05NnEtOC0xMC03LjUtMjMuNXQxMC41LTIxLjVsMTg2LTE2MXEtMTktMzItMTktNjYgNTAtNDIgOTEtODh0ODUtMTE5LjUgNzQuNS0xNTguNSA1MC0yMDYgMTkuNS0yNjBxMC0xNTIgMTE3LTI4Mi41dDMwNy0xNTguNXEtOC0xOS04LTM5IDAtNDAgMjgtNjh0NjgtMjggNjggMjggMjggNjhxMCAyMC04IDM5IDEyNCAxOCAyMTkgODIuNXQxNDggMTU3LjVsNDE4LTM2M3ExMC04IDIzLjUtN3QyMS41IDExelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQmVsbFNsYXNoTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
