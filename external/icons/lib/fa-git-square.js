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

var _ref2 = _react2.default.createElement('path', { d: 'M710 1308q0 66-93 66-107 0-107-63 0-64 98-64 102 0 102 61zm-36-466q0 85-74 85-77 0-77-84 0-90 77-90 36 0 55 25.5t19 63.5zm166-75v-125q-78 29-135 29-50-29-110-29-86 0-145 57t-59 143q0 50 29.5 102t73.5 67v3q-38 17-38 85 0 53 41 77v3q-113 37-113 139 0 45 20 78.5t54 51 72 25.5 81 8q224 0 224-188 0-67-48-99t-126-46q-27-5-51.5-20.5t-24.5-39.5q0-44 49-52 77-15 122-70t45-134q0-24-10-52 37-9 49-13zm59 419h137q-2-27-2-82v-387q0-46 2-69h-137q3 23 3 71v392q0 50-3 75zm509-16v-121q-30 21-68 21-53 0-53-82v-225h52q9 0 26.5 1t26.5 1v-117h-105q0-82 3-102h-140q4 24 4 55v47h-60v117q36-3 37-3 3 0 11 .5t12 .5v2h-2v217q0 37 2.5 64t11.5 56.5 24.5 48.5 43.5 31 66 12q64 0 108-24zm-356-706q0-36-24-63.5t-60-27.5-60.5 27-24.5 64q0 36 25 62.5t60 26.5 59.5-27 24.5-62zm612-48v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaGitSquare';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1naXQtc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7WUFFdUksd0NBQU0sR0FBRSwwM0JBQVIsRzs7QUFEdkksSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtZ2l0LXNxdWFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNzEwIDEzMDhxMCA2Ni05MyA2Ni0xMDcgMC0xMDctNjMgMC02NCA5OC02NCAxMDIgMCAxMDIgNjF6bS0zNi00NjZxMCA4NS03NCA4NS03NyAwLTc3LTg0IDAtOTAgNzctOTAgMzYgMCA1NSAyNS41dDE5IDYzLjV6bTE2Ni03NXYtMTI1cS03OCAyOS0xMzUgMjktNTAtMjktMTEwLTI5LTg2IDAtMTQ1IDU3dC01OSAxNDNxMCA1MCAyOS41IDEwMnQ3My41IDY3djNxLTM4IDE3LTM4IDg1IDAgNTMgNDEgNzd2M3EtMTEzIDM3LTExMyAxMzkgMCA0NSAyMCA3OC41dDU0IDUxIDcyIDI1LjUgODEgOHEyMjQgMCAyMjQtMTg4IDAtNjctNDgtOTl0LTEyNi00NnEtMjctNS01MS41LTIwLjV0LTI0LjUtMzkuNXEwLTQ0IDQ5LTUyIDc3LTE1IDEyMi03MHQ0NS0xMzRxMC0yNC0xMC01MiAzNy05IDQ5LTEzem01OSA0MTloMTM3cS0yLTI3LTItODJ2LTM4N3EwLTQ2IDItNjloLTEzN3EzIDIzIDMgNzF2MzkycTAgNTAtMyA3NXptNTA5LTE2di0xMjFxLTMwIDIxLTY4IDIxLTUzIDAtNTMtODJ2LTIyNWg1MnE5IDAgMjYuNSAxdDI2LjUgMXYtMTE3aC0xMDVxMC04MiAzLTEwMmgtMTQwcTQgMjQgNCA1NXY0N2gtNjB2MTE3cTM2LTMgMzctMyAzIDAgMTEgLjV0MTIgLjV2MmgtMnYyMTdxMCAzNyAyLjUgNjR0MTEuNSA1Ni41IDI0LjUgNDguNSA0My41IDMxIDY2IDEycTY0IDAgMTA4LTI0em0tMzU2LTcwNnEwLTM2LTI0LTYzLjV0LTYwLTI3LjUtNjAuNSAyNy0yNC41IDY0cTAgMzYgMjUgNjIuNXQ2MCAyNi41IDU5LjUtMjcgMjQuNS02MnptNjEyLTQ4djk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwcTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhR2l0U3F1YXJlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
