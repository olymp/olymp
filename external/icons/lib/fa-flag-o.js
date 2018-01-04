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

var _ref2 = _react2.default.createElement('path', { d: 'M1664 1045v-616q-169 91-306 91-82 0-145-32-100-49-184-76.5t-178-27.5q-173 0-403 127v599q245-113 433-113 55 0 103.5 7.5t98 26 77 31 82.5 39.5l28 14q44 22 101 22 120 0 293-92zm-1344-789q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm1472 64v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z' });

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
icon.displayName = 'FaFlagO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1mbGFnLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDJtQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixTQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1mbGFnLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE2NjQgMTA0NXYtNjE2cS0xNjkgOTEtMzA2IDkxLTgyIDAtMTQ1LTMyLTEwMC00OS0xODQtNzYuNXQtMTc4LTI3LjVxLTE3MyAwLTQwMyAxMjd2NTk5cTI0NS0xMTMgNDMzLTExMyA1NSAwIDEwMy41IDcuNXQ5OCAyNiA3NyAzMSA4Mi41IDM5LjVsMjggMTRxNDQgMjIgMTAxIDIyIDEyMCAwIDI5My05MnptLTEzNDQtNzg5cTAgMzUtMTcuNSA2NHQtNDYuNSA0NnYxMjY2cTAgMTQtOSAyM3QtMjMgOWgtNjRxLTE0IDAtMjMtOXQtOS0yM3YtMTI2NnEtMjktMTctNDYuNS00NnQtMTcuNS02NHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMTQ3MiA2NHY3NjNxMCAzOS0zNSA1Ny0xMCA1LTE3IDktMjE4IDExNi0zNjkgMTE2LTg4IDAtMTU4LTM1bC0yOC0xNHEtNjQtMzMtOTktNDh0LTkxLTI5LTExNC0xNHEtMTAyIDAtMjM1LjUgNDR0LTIyOC41IDEwMnEtMTUgOS0zMyA5LTE2IDAtMzItOC0zMi0xOS0zMi01NnYtNzQycTAtMzUgMzEtNTUgMzUtMjEgNzguNS00Mi41dDExNC01MiAxNTIuNS00OS41IDE1NS0xOXExMTIgMCAyMDkgMzF0MjA5IDg2cTM4IDE5IDg5IDE5IDEyMiAwIDMxMC0xMTIgMjItMTIgMzEtMTcgMzEtMTYgNjIgMiAzMSAyMCAzMSA1NXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhRmxhZ08nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
