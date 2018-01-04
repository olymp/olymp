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

var _ref2 = _react2.default.createElement('path', { d: 'M288 384q66 0 113 47t47 113v1088q0 66-47 113t-113 47h-128q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h128zm1376 163q58 34 93 93t35 128v768q0 106-75 181t-181 75h-864q-66 0-113-47t-47-113v-1536q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v163zm-736 989v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm96-384v-256h-160q-40 0-68-28t-28-68v-160h-640v512h896z' });

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
icon.displayName = 'FaFax';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1mYXguZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDhsQ0FBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixPQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1mYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTI4OCAzODRxNjYgMCAxMTMgNDd0NDcgMTEzdjEwODhxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTI4cS02NiAwLTExMy00N3QtNDctMTEzdi0xMDg4cTAtNjYgNDctMTEzdDExMy00N2gxMjh6bTEzNzYgMTYzcTU4IDM0IDkzIDkzdDM1IDEyOHY3NjhxMCAxMDYtNzUgMTgxdC0xODEgNzVoLTg2NHEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTUzNnEwLTQwIDI4LTY4dDY4LTI4aDY3MnE0MCAwIDg4IDIwdDc2IDQ4bDE1MiAxNTJxMjggMjggNDggNzZ0MjAgODh2MTYzem0tNzM2IDk4OXYtMTI4cTAtMTQtOS0yM3QtMjMtOWgtMTI4cS0xNCAwLTIzIDl0LTkgMjN2MTI4cTAgMTQgOSAyM3QyMyA5aDEyOHExNCAwIDIzLTl0OS0yM3ptMC0yNTZ2LTEyOHEwLTE0LTktMjN0LTIzLTloLTEyOHEtMTQgMC0yMyA5dC05IDIzdjEyOHEwIDE0IDkgMjN0MjMgOWgxMjhxMTQgMCAyMy05dDktMjN6bTAtMjU2di0xMjhxMC0xNC05LTIzdC0yMy05aC0xMjhxLTE0IDAtMjMgOXQtOSAyM3YxMjhxMCAxNCA5IDIzdDIzIDloMTI4cTE0IDAgMjMtOXQ5LTIzem0yNTYgNTEydi0xMjhxMC0xNC05LTIzdC0yMy05aC0xMjhxLTE0IDAtMjMgOXQtOSAyM3YxMjhxMCAxNCA5IDIzdDIzIDloMTI4cTE0IDAgMjMtOXQ5LTIzem0wLTI1NnYtMTI4cTAtMTQtOS0yM3QtMjMtOWgtMTI4cS0xNCAwLTIzIDl0LTkgMjN2MTI4cTAgMTQgOSAyM3QyMyA5aDEyOHExNCAwIDIzLTl0OS0yM3ptMC0yNTZ2LTEyOHEwLTE0LTktMjN0LTIzLTloLTEyOHEtMTQgMC0yMyA5dC05IDIzdjEyOHEwIDE0IDkgMjN0MjMgOWgxMjhxMTQgMCAyMy05dDktMjN6bTI1NiA1MTJ2LTEyOHEwLTE0LTktMjN0LTIzLTloLTEyOHEtMTQgMC0yMyA5dC05IDIzdjEyOHEwIDE0IDkgMjN0MjMgOWgxMjhxMTQgMCAyMy05dDktMjN6bTAtMjU2di0xMjhxMC0xNC05LTIzdC0yMy05aC0xMjhxLTE0IDAtMjMgOXQtOSAyM3YxMjhxMCAxNCA5IDIzdDIzIDloMTI4cTE0IDAgMjMtOXQ5LTIzem0wLTI1NnYtMTI4cTAtMTQtOS0yM3QtMjMtOWgtMTI4cS0xNCAwLTIzIDl0LTkgMjN2MTI4cTAgMTQgOSAyM3QyMyA5aDEyOHExNCAwIDIzLTl0OS0yM3ptOTYtMzg0di0yNTZoLTE2MHEtNDAgMC02OC0yOHQtMjgtNjh2LTE2MGgtNjQwdjUxMmg4OTZ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUZheCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
