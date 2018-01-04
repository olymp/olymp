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

var _ref2 = _react2.default.createElement('path', { d: 'M384 448q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm1152 576q0-35-21.5-81t-53.5-47q15-17 25-47.5t10-55.5q0-69-53-119 18-31 18-69 0-37-17.5-73.5t-47.5-52.5q5-30 5-56 0-85-49-126t-136-41h-128q-131 0-342 73-5 2-29 10.5t-35.5 12.5-35 11.5-38 11-33 6.5-31.5 3h-32v640h32q16 0 35.5 9t40 27 38.5 35.5 40 44 34.5 42.5 31.5 41 23 30q55 68 77 91 41 43 59.5 109.5t30.5 125.5 38 85q96 0 128-47t32-145q0-59-48-160.5t-48-159.5h352q50 0 89-38.5t39-89.5zm128 1q0 103-76 179t-180 76h-176q48 99 48 192 0 118-35 186-35 69-102 101.5t-151 32.5q-51 0-90-37-34-33-54-82t-25.5-90.5-17.5-84.5-31-64q-48-50-107-127-101-131-137-155h-274q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q22 0 138-40 128-44 223-66t200-22h112q140 0 226.5 79t85.5 216v5q60 77 60 178 0 22-3 43 38 67 38 144 0 36-9 69 49 73 49 163z' });

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
icon.displayName = 'FaThumbsODown';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS10aHVtYnMtby1kb3duLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSx1eUJBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtdGh1bWJzLW8tZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzg0IDQ0OHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTE1MiA1NzZxMC0zNS0yMS41LTgxdC01My41LTQ3cTE1LTE3IDI1LTQ3LjV0MTAtNTUuNXEwLTY5LTUzLTExOSAxOC0zMSAxOC02OSAwLTM3LTE3LjUtNzMuNXQtNDcuNS01Mi41cTUtMzAgNS01NiAwLTg1LTQ5LTEyNnQtMTM2LTQxaC0xMjhxLTEzMSAwLTM0MiA3My01IDItMjkgMTAuNXQtMzUuNSAxMi41LTM1IDExLjUtMzggMTEtMzMgNi41LTMxLjUgM2gtMzJ2NjQwaDMycTE2IDAgMzUuNSA5dDQwIDI3IDM4LjUgMzUuNSA0MCA0NCAzNC41IDQyLjUgMzEuNSA0MSAyMyAzMHE1NSA2OCA3NyA5MSA0MSA0MyA1OS41IDEwOS41dDMwLjUgMTI1LjUgMzggODVxOTYgMCAxMjgtNDd0MzItMTQ1cTAtNTktNDgtMTYwLjV0LTQ4LTE1OS41aDM1MnE1MCAwIDg5LTM4LjV0MzktODkuNXptMTI4IDFxMCAxMDMtNzYgMTc5dC0xODAgNzZoLTE3NnE0OCA5OSA0OCAxOTIgMCAxMTgtMzUgMTg2LTM1IDY5LTEwMiAxMDEuNXQtMTUxIDMyLjVxLTUxIDAtOTAtMzctMzQtMzMtNTQtODJ0LTI1LjUtOTAuNS0xNy41LTg0LjUtMzEtNjRxLTQ4LTUwLTEwNy0xMjctMTAxLTEzMS0xMzctMTU1aC0yNzRxLTUzIDAtOTAuNS0zNy41dC0zNy41LTkwLjV2LTY0MHEwLTUzIDM3LjUtOTAuNXQ5MC41LTM3LjVoMjg4cTIyIDAgMTM4LTQwIDEyOC00NCAyMjMtNjZ0MjAwLTIyaDExMnExNDAgMCAyMjYuNSA3OXQ4NS41IDIxNnY1cTYwIDc3IDYwIDE3OCAwIDIyLTMgNDMgMzggNjcgMzggMTQ0IDAgMzYtOSA2OSA0OSA3MyA0OSAxNjN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVRodW1ic09Eb3duJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
