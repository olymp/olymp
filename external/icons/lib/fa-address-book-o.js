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

var _ref2 = _react2.default.createElement('path', { d: 'M1092 644q0 107-76.5 183t-183.5 76-183.5-76-76.5-183q0-108 76.5-184t183.5-76 183.5 76 76.5 184zm-48 220q46 0 82.5 17t60 47.5 39.5 67 24 81 11.5 82.5 3.5 79q0 67-39.5 118.5t-105.5 51.5h-576q-66 0-105.5-51.5t-39.5-118.5q0-48 4.5-93.5t18.5-98.5 36.5-91.5 63-64.5 93.5-26h5q7 4 32 19.5t35.5 21 33 17 37 16 35 9 39.5 4.5 39.5-4.5 35-9 37-16 33-17 35.5-21 32-19.5zm684-256q0 13-9.5 22.5t-22.5 9.5h-96v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-96v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-96v224q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h1216q66 0 113 47t47 113v224h96q13 0 22.5 9.5t9.5 22.5v192zm-256 1024v-1472q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v1472q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5z' });

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
icon.displayName = 'FaAddressBookO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hZGRyZXNzLWJvb2stby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBRXVJLHdDQUFNLEdBQUUsK3dCQUFSLEc7O0FBRHZJLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGdCQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1hZGRyZXNzLWJvb2stby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTA5MiA2NDRxMCAxMDctNzYuNSAxODN0LTE4My41IDc2LTE4My41LTc2LTc2LjUtMTgzcTAtMTA4IDc2LjUtMTg0dDE4My41LTc2IDE4My41IDc2IDc2LjUgMTg0em0tNDggMjIwcTQ2IDAgODIuNSAxN3Q2MCA0Ny41IDM5LjUgNjcgMjQgODEgMTEuNSA4Mi41IDMuNSA3OXEwIDY3LTM5LjUgMTE4LjV0LTEwNS41IDUxLjVoLTU3NnEtNjYgMC0xMDUuNS01MS41dC0zOS41LTExOC41cTAtNDggNC41LTkzLjV0MTguNS05OC41IDM2LjUtOTEuNSA2My02NC41IDkzLjUtMjZoNXE3IDQgMzIgMTkuNXQzNS41IDIxIDMzIDE3IDM3IDE2IDM1IDkgMzkuNSA0LjUgMzkuNS00LjUgMzUtOSAzNy0xNiAzMy0xNyAzNS41LTIxIDMyLTE5LjV6bTY4NC0yNTZxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTk2djEyOGg5NnExMyAwIDIyLjUgOS41dDkuNSAyMi41djE5MnEwIDEzLTkuNSAyMi41dC0yMi41IDkuNWgtOTZ2MTI4aDk2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC05NnYyMjRxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTIxNnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTQ3MnEwLTY2IDQ3LTExM3QxMTMtNDdoMTIxNnE2NiAwIDExMyA0N3Q0NyAxMTN2MjI0aDk2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2MTkyem0tMjU2IDEwMjR2LTE0NzJxMC0xMy05LjUtMjIuNXQtMjIuNS05LjVoLTEyMTZxLTEzIDAtMjIuNSA5LjV0LTkuNSAyMi41djE0NzJxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxMjE2cTEzIDAgMjIuNS05LjV0OS41LTIyLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUFkZHJlc3NCb29rTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
