var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1473 929q7-118-33-226.5t-113-189-177-131-221-57.5q-116-7-225.5 32t-192 110.5-135 175-59.5 220.5q-7 118 33 226.5t113 189 177.5 131 221.5 57.5q155 9 293-59t224-195.5 94-283.5zm319-929l-349 348q120 117 180.5 272t50.5 321q-11 183-102 339t-241 255.5-332 124.5l-999 132 347-347q-120-116-180.5-271.5t-50.5-321.5q11-184 102-340t241.5-255.5 332.5-124.5q167-22 500-66t500-66z' });

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
icon.displayName = 'FaSuperpowers';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zdXBlcnBvd2Vycy5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSxnWEFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtc3VwZXJwb3dlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0NzMgOTI5cTctMTE4LTMzLTIyNi41dC0xMTMtMTg5LTE3Ny0xMzEtMjIxLTU3LjVxLTExNi03LTIyNS41IDMydC0xOTIgMTEwLjUtMTM1IDE3NS01OS41IDIyMC41cS03IDExOCAzMyAyMjYuNXQxMTMgMTg5IDE3Ny41IDEzMSAyMjEuNSA1Ny41cTE1NSA5IDI5My01OXQyMjQtMTk1LjUgOTQtMjgzLjV6bTMxOS05MjlsLTM0OSAzNDhxMTIwIDExNyAxODAuNSAyNzJ0NTAuNSAzMjFxLTExIDE4My0xMDIgMzM5dC0yNDEgMjU1LjUtMzMyIDEyNC41bC05OTkgMTMyIDM0Ny0zNDdxLTEyMC0xMTYtMTgwLjUtMjcxLjV0LTUwLjUtMzIxLjVxMTEtMTg0IDEwMi0zNDB0MjQxLjUtMjU1LjUgMzMyLjUtMTI0LjVxMTY3LTIyIDUwMC02NnQ1MDAtNjZ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVN1cGVycG93ZXJzJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=