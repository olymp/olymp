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

var _ref2 = _react2.default.createElement('path', { d: 'M1024 1344q0 80-56 136t-136 56-136-56-56-136q0-60 35-110t93-71v-907h128v907q58 21 93 71t35 110zm128 0q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zm128 0q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zm128-576v128h-192v-128h192zm0-256v128h-192v-128h192zm0-256v128h-192v-128h192z' });

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
icon.displayName = 'FaThermometerFull';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10aGVybW9tZXRlci1mdWxsLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSxtZEFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixtQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdGhlcm1vbWV0ZXItZnVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAyNCAxMzQ0cTAgODAtNTYgMTM2dC0xMzYgNTYtMTM2LTU2LTU2LTEzNnEwLTYwIDM1LTExMHQ5My03MXYtOTA3aDEyOHY5MDdxNTggMjEgOTMgNzF0MzUgMTEwem0xMjggMHEwLTc3LTM0LTE0NHQtOTQtMTEydi03NjhxMC04MC01Ni0xMzZ0LTEzNi01Ni0xMzYgNTYtNTYgMTM2djc2OHEtNjAgNDUtOTQgMTEydC0zNCAxNDRxMCAxMzMgOTMuNSAyMjYuNXQyMjYuNSA5My41IDIyNi41LTkzLjUgOTMuNS0yMjYuNXptMTI4IDBxMCAxODUtMTMxLjUgMzE2LjV0LTMxNi41IDEzMS41LTMxNi41LTEzMS41LTEzMS41LTMxNi41cTAtMTgyIDEyOC0zMTN2LTcxMXEwLTEzMyA5My41LTIyNi41dDIyNi41LTkzLjUgMjI2LjUgOTMuNSA5My41IDIyNi41djcxMXExMjggMTMxIDEyOCAzMTN6bTEyOC01NzZ2MTI4aC0xOTJ2LTEyOGgxOTJ6bTAtMjU2djEyOGgtMTkydi0xMjhoMTkyem0wLTI1NnYxMjhoLTE5MnYtMTI4aDE5MnpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVGhlcm1vbWV0ZXJGdWxsJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
