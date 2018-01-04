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

var _ref2 = _react2.default.createElement('path', { d: 'M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zm-1504 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zm196-480h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zm1212 480q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z' });

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
icon.displayName = 'FaCab';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYWIuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUd3SSx3Q0FBTSxHQUFFLDBoQkFBUixHOztBQUR4SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1jYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4MjQgODk2cTkzIDAgMTU4LjUgNjUuNXQ2NS41IDE1OC41djM4NHEwIDE0LTkgMjN0LTIzIDloLTk2djY0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNnYtNjRoLTEwMjR2NjRxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2di02NGgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtMzg0cTAtOTMgNjUuNS0xNTguNXQxNTguNS02NS41aDI4bDEwNS00MTlxMjMtOTQgMTA0LTE1Ny41dDE3OS02My41aDEyOHYtMjI0cTAtMTQgOS0yM3QyMy05aDQ0OHExNCAwIDIzIDl0OSAyM3YyMjRoMTI4cTk4IDAgMTc5IDYzLjV0MTA0IDE1Ny41bDEwNSA0MTloMjh6bS0xNTA0IDQ4MHE2NiAwIDExMy00N3Q0Ny0xMTMtNDctMTEzLTExMy00Ny0xMTMgNDctNDcgMTEzIDQ3IDExMyAxMTMgNDd6bTE5Ni00ODBoMTAxNmwtODktMzU3cS0yLTgtMTQtMTcuNXQtMjEtOS41aC03NjhxLTkgMC0yMSA5LjV0LTE0IDE3LjV6bTEyMTIgNDgwcTY2IDAgMTEzLTQ3dDQ3LTExMy00Ny0xMTMtMTEzLTQ3LTExMyA0Ny00NyAxMTMgNDcgMTEzIDExMyA0N3pcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNhYic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
