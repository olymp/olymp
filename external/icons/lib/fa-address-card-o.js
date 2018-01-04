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

var _ref2 = _react2.default.createElement('path', { d: 'M1024 1131q0 64-37 106.5t-91 42.5h-512q-54 0-91-42.5t-37-106.5 9-117.5 29.5-103 60.5-78 97-28.5q6 4 30 18t37.5 21.5 35.5 17.5 43 14.5 42 4.5 42-4.5 43-14.5 35.5-17.5 37.5-21.5 30-18q57 0 97 28.5t60.5 78 29.5 103 9 117.5zm-157-520q0 94-66.5 160.5t-160.5 66.5-160.5-66.5-66.5-160.5 66.5-160.5 160.5-66.5 160.5 66.5 66.5 160.5zm925 445v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zm0-252v56q0 15-10.5 25.5t-25.5 10.5h-568q-15 0-25.5-10.5t-10.5-25.5v-56q0-15 10.5-25.5t25.5-10.5h568q15 0 25.5 10.5t10.5 25.5zm0-260v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zm128 960v-1216q0-13-9.5-22.5t-22.5-9.5h-1728q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h352v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h768v-96q0-14 9-23t23-9h64q14 0 23 9t9 23v96h352q13 0 22.5-9.5t9.5-22.5zm128-1216v1216q0 66-47 113t-113 47h-1728q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      fill: color,
      width: size || width,
      height: size || height
    }, rest, {
      viewBox: '0 0 2048 1792',
      xmlns: 'http://www.w3.org/2000/svg'
    }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaAddressCardO';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1hZGRyZXNzLWNhcmQtby5lczYiXSwibmFtZXMiOlsiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O1lBV0ksd0NBQU0sR0FBRSxzN0JBQVIsRzs7QUFUSixJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNFLFlBQU1KLEtBRFI7QUFFRSxhQUFPRyxRQUFRRixLQUZqQjtBQUdFLGNBQVFFLFFBQVFEO0FBSGxCLE9BSU1FLElBSk47QUFLRSxlQUFRLGVBTFY7QUFNRSxhQUFNO0FBTlI7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBWUFMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixnQkFBbkI7a0JBQ2Usc0JBQU9QLElBQVAsQyIsImZpbGUiOiJleHRlcm5hbC9pY29ucy9saWIvZmEtYWRkcmVzcy1jYXJkLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnXG4gICAgZmlsbD17Y29sb3J9XG4gICAgd2lkdGg9e3NpemUgfHwgd2lkdGh9XG4gICAgaGVpZ2h0PXtzaXplIHx8IGhlaWdodH1cbiAgICB7Li4ucmVzdH1cbiAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTEwMjQgMTEzMXEwIDY0LTM3IDEwNi41dC05MSA0Mi41aC01MTJxLTU0IDAtOTEtNDIuNXQtMzctMTA2LjUgOS0xMTcuNSAyOS41LTEwMyA2MC41LTc4IDk3LTI4LjVxNiA0IDMwIDE4dDM3LjUgMjEuNSAzNS41IDE3LjUgNDMgMTQuNSA0MiA0LjUgNDItNC41IDQzLTE0LjUgMzUuNS0xNy41IDM3LjUtMjEuNSAzMC0xOHE1NyAwIDk3IDI4LjV0NjAuNSA3OCAyOS41IDEwMyA5IDExNy41em0tMTU3LTUyMHEwIDk0LTY2LjUgMTYwLjV0LTE2MC41IDY2LjUtMTYwLjUtNjYuNS02Ni41LTE2MC41IDY2LjUtMTYwLjUgMTYwLjUtNjYuNSAxNjAuNSA2Ni41IDY2LjUgMTYwLjV6bTkyNSA0NDV2NjRxMCAxNC05IDIzdC0yMyA5aC01NzZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloNTc2cTE0IDAgMjMgOXQ5IDIzem0wLTI1MnY1NnEwIDE1LTEwLjUgMjUuNXQtMjUuNSAxMC41aC01NjhxLTE1IDAtMjUuNS0xMC41dC0xMC41LTI1LjV2LTU2cTAtMTUgMTAuNS0yNS41dDI1LjUtMTAuNWg1NjhxMTUgMCAyNS41IDEwLjV0MTAuNSAyNS41em0wLTI2MHY2NHEwIDE0LTkgMjN0LTIzIDloLTU3NnEtMTQgMC0yMy05dC05LTIzdi02NHEwLTE0IDktMjN0MjMtOWg1NzZxMTQgMCAyMyA5dDkgMjN6bTEyOCA5NjB2LTEyMTZxMC0xMy05LjUtMjIuNXQtMjIuNS05LjVoLTE3MjhxLTEzIDAtMjIuNSA5LjV0LTkuNSAyMi41djEyMTZxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgzNTJ2LTk2cTAtMTQgOS0yM3QyMy05aDY0cTE0IDAgMjMgOXQ5IDIzdjk2aDc2OHYtOTZxMC0xNCA5LTIzdDIzLTloNjRxMTQgMCAyMyA5dDkgMjN2OTZoMzUycTEzIDAgMjIuNS05LjV0OS41LTIyLjV6bTEyOC0xMjE2djEyMTZxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTcyOHEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTIxNnEwLTY2IDQ3LTExM3QxMTMtNDdoMTcyOHE2NiAwIDExMyA0N3Q0NyAxMTN6XCIgLz5cbiAgPC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQWRkcmVzc0NhcmRPJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTtcbiJdfQ==
