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

var _ref2 = _react2.default.createElement('path', { d: 'M1416 647q60 0 107 23 141 63 141 226v177q0 94-23 186l-85 339q-21 86-90.5 140t-157.5 54h-668q-106 0-181-75t-75-181v-401l-239-628q-17-45-17-91 0-106 75-181t181-75q80 0 145.5 45.5t93.5 119.5l17 44v-113q0-106 75-181t181-75 181 75 75 181v261q27-5 48-5 69 0 127.5 36.5t88.5 98.5zm-216-7q-33 0-60.5 18t-41.5 48l-74 163-71 155h55q50 0 90 31.5t50 80.5l154-338q10-20 10-46 0-46-33-79t-79-33zm221 135q-22 0-40.5 8t-29 16-23.5 29.5-17 30.5-17 37l-132 290q-10 20-10 46 0 46 33 79t79 33q33 0 60.5-18t41.5-48l160-352q9-18 9-38 0-50-32-81.5t-82-31.5zm-1165-359q0 22 8 46l248 650v69l102-111q43-46 106-46h198l106-233v-535q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5v640h-64l-200-526q-14-37-47-59.5t-73-22.5q-53 0-90.5 37.5t-37.5 90.5zm1052 1248q44 0 78.5-27t45.5-70l85-339q19-73 19-155v-91l-141 310q-17 38-53 61t-78 23q-53 0-93.5-34.5t-48.5-86.5q-44 57-114 57h-208v-32h208q46 0 81-33t35-79-31-79-77-33h-296q-49 0-82 36l-126 136v308q0 53 37.5 90.5t90.5 37.5h668z' });

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
icon.displayName = 'FaHandPeaceO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXBlYWNlLW8uZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLG03QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixjQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1oYW5kLXBlYWNlLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0MTYgNjQ3cTYwIDAgMTA3IDIzIDE0MSA2MyAxNDEgMjI2djE3N3EwIDk0LTIzIDE4NmwtODUgMzM5cS0yMSA4Ni05MC41IDE0MHQtMTU3LjUgNTRoLTY2OHEtMTA2IDAtMTgxLTc1dC03NS0xODF2LTQwMWwtMjM5LTYyOHEtMTctNDUtMTctOTEgMC0xMDYgNzUtMTgxdDE4MS03NXE4MCAwIDE0NS41IDQ1LjV0OTMuNSAxMTkuNWwxNyA0NHYtMTEzcTAtMTA2IDc1LTE4MXQxODEtNzUgMTgxIDc1IDc1IDE4MXYyNjFxMjctNSA0OC01IDY5IDAgMTI3LjUgMzYuNXQ4OC41IDk4LjV6bS0yMTYtN3EtMzMgMC02MC41IDE4dC00MS41IDQ4bC03NCAxNjMtNzEgMTU1aDU1cTUwIDAgOTAgMzEuNXQ1MCA4MC41bDE1NC0zMzhxMTAtMjAgMTAtNDYgMC00Ni0zMy03OXQtNzktMzN6bTIyMSAxMzVxLTIyIDAtNDAuNSA4dC0yOSAxNi0yMy41IDI5LjUtMTcgMzAuNS0xNyAzN2wtMTMyIDI5MHEtMTAgMjAtMTAgNDYgMCA0NiAzMyA3OXQ3OSAzM3EzMyAwIDYwLjUtMTh0NDEuNS00OGwxNjAtMzUycTktMTggOS0zOCAwLTUwLTMyLTgxLjV0LTgyLTMxLjV6bS0xMTY1LTM1OXEwIDIyIDggNDZsMjQ4IDY1MHY2OWwxMDItMTExcTQzLTQ2IDEwNi00NmgxOThsMTA2LTIzM3YtNTM1cTAtNTMtMzcuNS05MC41dC05MC41LTM3LjUtOTAuNSAzNy41LTM3LjUgOTAuNXY2NDBoLTY0bC0yMDAtNTI2cS0xNC0zNy00Ny01OS41dC03My0yMi41cS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41em0xMDUyIDEyNDhxNDQgMCA3OC41LTI3dDQ1LjUtNzBsODUtMzM5cTE5LTczIDE5LTE1NXYtOTFsLTE0MSAzMTBxLTE3IDM4LTUzIDYxdC03OCAyM3EtNTMgMC05My41LTM0LjV0LTQ4LjUtODYuNXEtNDQgNTctMTE0IDU3aC0yMDh2LTMyaDIwOHE0NiAwIDgxLTMzdDM1LTc5LTMxLTc5LTc3LTMzaC0yOTZxLTQ5IDAtODIgMzZsLTEyNiAxMzZ2MzA4cTAgNTMgMzcuNSA5MC41dDkwLjUgMzcuNWg2Njh6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUhhbmRQZWFjZU8nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
