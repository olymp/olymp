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

var _ref2 = _react2.default.createElement('path', { d: 'M128 128h1536v1536h-1536v-1536zm908 320l-12 33 75 83-31 114 25 25 107-57 107 57 25-25-31-114 75-83-12-33h-95l-53-96h-32l-53 96h-95zm-267 163q32 0 44.5 16t11.5 63l174-21q0-55-17.5-92.5t-50.5-56-69-25.5-85-7q-133 0-199 57.5t-66 182.5v72h-96v128h76q20 0 20 8v382q0 14-5 20t-18 7l-73 7v88h448v-86l-149-14q-6-1-8.5-1.5t-3.5-2.5-.5-4 1-7 .5-10v-387h191l38-128h-231q-6 0-2-6t4-9v-80q0-27 1.5-40.5t7.5-28 19.5-20 36.5-5.5zm607 829v-86l-54-9q-7-1-9.5-2.5t-2.5-3 1-7.5 1-12v-520h-275l-23 101 83 22q23 7 23 27v370q0 14-6 18.5t-20 6.5l-70 9v86h352z' });

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
icon.displayName = 'FaFonticons';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1mb250aWNvbnMuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLDBoQkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixhQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1mb250aWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyOCAxMjhoMTUzNnYxNTM2aC0xNTM2di0xNTM2em05MDggMzIwbC0xMiAzMyA3NSA4My0zMSAxMTQgMjUgMjUgMTA3LTU3IDEwNyA1NyAyNS0yNS0zMS0xMTQgNzUtODMtMTItMzNoLTk1bC01My05NmgtMzJsLTUzIDk2aC05NXptLTI2NyAxNjNxMzIgMCA0NC41IDE2dDExLjUgNjNsMTc0LTIxcTAtNTUtMTcuNS05Mi41dC01MC41LTU2LTY5LTI1LjUtODUtN3EtMTMzIDAtMTk5IDU3LjV0LTY2IDE4Mi41djcyaC05NnYxMjhoNzZxMjAgMCAyMCA4djM4MnEwIDE0LTUgMjB0LTE4IDdsLTczIDd2ODhoNDQ4di04NmwtMTQ5LTE0cS02LTEtOC41LTEuNXQtMy41LTIuNS0uNS00IDEtNyAuNS0xMHYtMzg3aDE5MWwzOC0xMjhoLTIzMXEtNiAwLTItNnQ0LTl2LTgwcTAtMjcgMS41LTQwLjV0Ny41LTI4IDE5LjUtMjAgMzYuNS01LjV6bTYwNyA4Mjl2LTg2bC01NC05cS03LTEtOS41LTIuNXQtMi41LTMgMS03LjUgMS0xMnYtNTIwaC0yNzVsLTIzIDEwMSA4MyAyMnEyMyA3IDIzIDI3djM3MHEwIDE0LTYgMTguNXQtMjAgNi41bC03MCA5djg2aDM1MnpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhRm9udGljb25zJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
