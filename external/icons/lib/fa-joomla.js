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

var _ref2 = _react2.default.createElement('path', { d: 'M1198 1073l-160 160-151 152-30 30q-65 64-151.5 87t-171.5 2q-16 70-72 115t-129 45q-85 0-145-60.5t-60-145.5q0-72 44.5-128t113.5-72q-22-86 1-173t88-152l12-12 151 152-11 11q-37 37-37 89t37 90q37 37 89 37t89-37l30-30 151-152 161-160zm-341-682l12 12-152 152-12-12q-37-37-89-37t-89 37-37 89.5 37 89.5l29 29 152 152 160 160-151 152-161-160-151-152-30-30q-68-67-90-159.5t5-179.5q-70-15-115-71t-45-129q0-85 60-145.5t145-60.5q76 0 133.5 49t69.5 123q84-20 169.5 3.5t149.5 87.5zm807 1067q0 85-60 145.5t-145 60.5q-74 0-131-47t-71-118q-86 28-179.5 6t-161.5-90l-11-12 151-152 12 12q37 37 89 37t89-37 37-89-37-89l-30-30-152-152-160-160 152-152 160 160 152 152 29 30q64 64 87.5 150.5t2.5 171.5q76 11 126.5 68.5t50.5 134.5zm-2-1124q0 77-51 135t-127 69q26 85 3 176.5t-90 158.5l-12 12-151-152 12-12q37-37 37-89t-37-89-89-37-89 37l-30 30-152 152-160 160-152-152 161-160 152-152 29-30q67-67 159-89.5t178 3.5q11-75 68.5-126t135.5-51q85 0 145 60.5t60 145.5z' });

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
icon.displayName = 'FaJoomla';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1qb29tbGEuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLHM2QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1qb29tbGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTExOTggMTA3M2wtMTYwIDE2MC0xNTEgMTUyLTMwIDMwcS02NSA2NC0xNTEuNSA4N3QtMTcxLjUgMnEtMTYgNzAtNzIgMTE1dC0xMjkgNDVxLTg1IDAtMTQ1LTYwLjV0LTYwLTE0NS41cTAtNzIgNDQuNS0xMjh0MTEzLjUtNzJxLTIyLTg2IDEtMTczdDg4LTE1MmwxMi0xMiAxNTEgMTUyLTExIDExcS0zNyAzNy0zNyA4OXQzNyA5MHEzNyAzNyA4OSAzN3Q4OS0zN2wzMC0zMCAxNTEtMTUyIDE2MS0xNjB6bS0zNDEtNjgybDEyIDEyLTE1MiAxNTItMTItMTJxLTM3LTM3LTg5LTM3dC04OSAzNy0zNyA4OS41IDM3IDg5LjVsMjkgMjkgMTUyIDE1MiAxNjAgMTYwLTE1MSAxNTItMTYxLTE2MC0xNTEtMTUyLTMwLTMwcS02OC02Ny05MC0xNTkuNXQ1LTE3OS41cS03MC0xNS0xMTUtNzF0LTQ1LTEyOXEwLTg1IDYwLTE0NS41dDE0NS02MC41cTc2IDAgMTMzLjUgNDl0NjkuNSAxMjNxODQtMjAgMTY5LjUgMy41dDE0OS41IDg3LjV6bTgwNyAxMDY3cTAgODUtNjAgMTQ1LjV0LTE0NSA2MC41cS03NCAwLTEzMS00N3QtNzEtMTE4cS04NiAyOC0xNzkuNSA2dC0xNjEuNS05MGwtMTEtMTIgMTUxLTE1MiAxMiAxMnEzNyAzNyA4OSAzN3Q4OS0zNyAzNy04OS0zNy04OWwtMzAtMzAtMTUyLTE1Mi0xNjAtMTYwIDE1Mi0xNTIgMTYwIDE2MCAxNTIgMTUyIDI5IDMwcTY0IDY0IDg3LjUgMTUwLjV0Mi41IDE3MS41cTc2IDExIDEyNi41IDY4LjV0NTAuNSAxMzQuNXptLTItMTEyNHEwIDc3LTUxIDEzNXQtMTI3IDY5cTI2IDg1IDMgMTc2LjV0LTkwIDE1OC41bC0xMiAxMi0xNTEtMTUyIDEyLTEycTM3LTM3IDM3LTg5dC0zNy04OS04OS0zNy04OSAzN2wtMzAgMzAtMTUyIDE1Mi0xNjAgMTYwLTE1Mi0xNTIgMTYxLTE2MCAxNTItMTUyIDI5LTMwcTY3LTY3IDE1OS04OS41dDE3OCAzLjVxMTEtNzUgNjguNS0xMjZ0MTM1LjUtNTFxODUgMCAxNDUgNjAuNXQ2MCAxNDUuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSm9vbWxhJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
