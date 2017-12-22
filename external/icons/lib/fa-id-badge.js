var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1280 1258q0 64-37 107t-91 43h-512q-54 0-91-43t-37-107 9-118 29.5-104 61-78.5 96.5-28.5q80 75 188 75t188-75q56 0 96.5 28.5t61 78.5 29.5 104 9 118zm-154-519q0 94-67.5 160.5t-162.5 66.5-162.5-66.5-67.5-160.5 67.5-160.5 162.5-66.5 162.5 66.5 67.5 160.5zm282 893v-1376h-1024v1376q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zm128-1472v1472q0 66-47 113t-113 47h-960q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h352v96q0 14 9 23t23 9h192q14 0 23-9t9-23v-96h352q66 0 113 47t47 113z' });

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
icon.displayName = 'FaIdBadge';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1pZC1iYWRnZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSxrZUFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixXQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtaWQtYmFkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyODAgMTI1OHEwIDY0LTM3IDEwN3QtOTEgNDNoLTUxMnEtNTQgMC05MS00M3QtMzctMTA3IDktMTE4IDI5LjUtMTA0IDYxLTc4LjUgOTYuNS0yOC41cTgwIDc1IDE4OCA3NXQxODgtNzVxNTYgMCA5Ni41IDI4LjV0NjEgNzguNSAyOS41IDEwNCA5IDExOHptLTE1NC01MTlxMCA5NC02Ny41IDE2MC41dC0xNjIuNSA2Ni41LTE2Mi41LTY2LjUtNjcuNS0xNjAuNSA2Ny41LTE2MC41IDE2Mi41LTY2LjUgMTYyLjUgNjYuNSA2Ny41IDE2MC41em0yODIgODkzdi0xMzc2aC0xMDI0djEzNzZxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg5NjBxMTMgMCAyMi41LTkuNXQ5LjUtMjIuNXptMTI4LTE0NzJ2MTQ3MnEwIDY2LTQ3IDExM3QtMTEzIDQ3aC05NjBxLTY2IDAtMTEzLTQ3dC00Ny0xMTN2LTE0NzJxMC02NiA0Ny0xMTN0MTEzLTQ3aDM1MnY5NnEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMy05dDktMjN2LTk2aDM1MnE2NiAwIDExMyA0N3Q0NyAxMTN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUlkQmFkZ2UnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
