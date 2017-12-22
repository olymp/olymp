var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-725q85-122 108-210 9-34 53-209 21 39 73.5 67t112.5 28q181 0 295.5-147.5t114.5-373.5q0-84-35-162.5t-96.5-139-152.5-97-197-36.5q-104 0-194.5 28.5t-153 76.5-107.5 109.5-66.5 128-21.5 132.5q0 102 39.5 180t116.5 110q13 5 23.5 0t14.5-19q10-44 15-61 6-23-11-42-50-62-50-150 0-150 103.5-256.5t270.5-106.5q149 0 232.5 81t83.5 210q0 168-67.5 286t-173.5 118q-60 0-97-43.5t-23-103.5q8-34 26.5-92.5t29.5-102 11-74.5q0-49-26.5-81.5t-75.5-32.5q-61 0-103.5 56.5t-42.5 139.5q0 72 24 121l-98 414q-24 100-7 254h-183q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 1792 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaPinterestSquare';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1waW50ZXJlc3Qtc3F1YXJlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLDhuQkFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixtQkFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXBpbnRlcmVzdC1zcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzNzYgMTI4cTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXY5NjBxMCAxMTktODQuNSAyMDMuNXQtMjAzLjUgODQuNWgtNzI1cTg1LTEyMiAxMDgtMjEwIDktMzQgNTMtMjA5IDIxIDM5IDczLjUgNjd0MTEyLjUgMjhxMTgxIDAgMjk1LjUtMTQ3LjV0MTE0LjUtMzczLjVxMC04NC0zNS0xNjIuNXQtOTYuNS0xMzktMTUyLjUtOTctMTk3LTM2LjVxLTEwNCAwLTE5NC41IDI4LjV0LTE1MyA3Ni41LTEwNy41IDEwOS41LTY2LjUgMTI4LTIxLjUgMTMyLjVxMCAxMDIgMzkuNSAxODB0MTE2LjUgMTEwcTEzIDUgMjMuNSAwdDE0LjUtMTlxMTAtNDQgMTUtNjEgNi0yMy0xMS00Mi01MC02Mi01MC0xNTAgMC0xNTAgMTAzLjUtMjU2LjV0MjcwLjUtMTA2LjVxMTQ5IDAgMjMyLjUgODF0ODMuNSAyMTBxMCAxNjgtNjcuNSAyODZ0LTE3My41IDExOHEtNjAgMC05Ny00My41dC0yMy0xMDMuNXE4LTM0IDI2LjUtOTIuNXQyOS41LTEwMiAxMS03NC41cTAtNDktMjYuNS04MS41dC03NS41LTMyLjVxLTYxIDAtMTAzLjUgNTYuNXQtNDIuNSAxMzkuNXEwIDcyIDI0IDEyMWwtOTggNDE0cS0yNCAxMDAtNyAyNTRoLTE4M3EtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtOTYwcTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg5NjB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVBpbnRlcmVzdFNxdWFyZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
