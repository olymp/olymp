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

var _ref2 = _react2.default.createElement('path', { d: 'M458 1535l202 214-34-236-216-213zm226 226l274-218-11-245-300 215zm-311-638l227 213-48-327-245-204zm250 224l317-214-14-324-352 200zm348 11l95 80-2-239-103-79q0 1 1 8.5t0 12-5 7.5l-78 52 85 70q7 6 7 88zm-705-752l256 200-68-465-279-173zm1035 663l15-234-230 164 2 240zm-756-455l373-194-19-441-423 163zm853 365l20-233-226-142-2 105 144 95q6 4 4 9l-7 119zm191-139l30-222-179 128-20 228zm-188 167l-71-49-8 117q0 5-4 8l-234 187q-7 5-14 0l-98-83 7 161q0 5-4 8l-293 234q-4 2-6 2-8-2-8-3l-228-242q-4-4-59-277-2-7 5-11l61-37q-94-86-95-92l-72-351q-2-7 6-12l94-45q-133-100-135-108l-96-466q-2-10 7-13l433-135q5 0 8 1l317 153q6 4 6 9l20 463q0 7-6 10l-118 61 126 85q5 2 5 8l5 123 121-74q5-4 11 0l84 56 3-110q0-6 5-9l206-126q6-3 11 0l245 135q4 4 5 7t-6.5 60-17.5 124.5-10 70.5q0 5-4 7l-191 153q-6 5-13 0z' });

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
icon.displayName = 'FaLinode';
exports.default = (0, _styled2.default)(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL2xpYi9mYS1saW5vZGUuZXM2Il0sIm5hbWVzIjpbImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztZQUV1SSx3Q0FBTSxHQUFFLG94QkFBUixHOztBQUR2SSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixVQUFuQjtrQkFDZSxzQkFBT1AsSUFBUCxDIiwiZmlsZSI6ImV4dGVybmFsL2ljb25zL2xpYi9mYS1saW5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTQ1OCAxNTM1bDIwMiAyMTQtMzQtMjM2LTIxNi0yMTN6bTIyNiAyMjZsMjc0LTIxOC0xMS0yNDUtMzAwIDIxNXptLTMxMS02MzhsMjI3IDIxMy00OC0zMjctMjQ1LTIwNHptMjUwIDIyNGwzMTctMjE0LTE0LTMyNC0zNTIgMjAwem0zNDggMTFsOTUgODAtMi0yMzktMTAzLTc5cTAgMSAxIDguNXQwIDEyLTUgNy41bC03OCA1MiA4NSA3MHE3IDYgNyA4OHptLTcwNS03NTJsMjU2IDIwMC02OC00NjUtMjc5LTE3M3ptMTAzNSA2NjNsMTUtMjM0LTIzMCAxNjQgMiAyNDB6bS03NTYtNDU1bDM3My0xOTQtMTktNDQxLTQyMyAxNjN6bTg1MyAzNjVsMjAtMjMzLTIyNi0xNDItMiAxMDUgMTQ0IDk1cTYgNCA0IDlsLTcgMTE5em0xOTEtMTM5bDMwLTIyMi0xNzkgMTI4LTIwIDIyOHptLTE4OCAxNjdsLTcxLTQ5LTggMTE3cTAgNS00IDhsLTIzNCAxODdxLTcgNS0xNCAwbC05OC04MyA3IDE2MXEwIDUtNCA4bC0yOTMgMjM0cS00IDItNiAyLTgtMi04LTNsLTIyOC0yNDJxLTQtNC01OS0yNzctMi03IDUtMTFsNjEtMzdxLTk0LTg2LTk1LTkybC03Mi0zNTFxLTItNyA2LTEybDk0LTQ1cS0xMzMtMTAwLTEzNS0xMDhsLTk2LTQ2NnEtMi0xMCA3LTEzbDQzMy0xMzVxNSAwIDggMWwzMTcgMTUzcTYgNCA2IDlsMjAgNDYzcTAgNy02IDEwbC0xMTggNjEgMTI2IDg1cTUgMiA1IDhsNSAxMjMgMTIxLTc0cTUtNCAxMSAwbDg0IDU2IDMtMTEwcTAtNiA1LTlsMjA2LTEyNnE2LTMgMTEgMGwyNDUgMTM1cTQgNCA1IDd0LTYuNSA2MC0xNy41IDEyNC41LTEwIDcwLjVxMCA1LTQgN2wtMTkxIDE1M3EtNiA1LTEzIDB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUxpbm9kZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
