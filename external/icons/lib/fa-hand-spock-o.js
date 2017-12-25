var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M459 1792q-77 0-137.5-47.5t-79.5-122.5l-101-401q-13-57-13-108 0-45-5-67l-116-477q-7-27-7-57 0-93 62-161t155-78q17-85 82.5-139t152.5-54q83 0 148 51.5t85 132.5l83 348 103-428q20-81 85-132.5t148-51.5q89 0 155.5 57.5t80.5 144.5q92 10 152 79t60 162q0 24-7 59l-123 512q10-7 37.5-28.5t38.5-29.5 35-23 41-20.5 41.5-11 49.5-5.5q105 0 180 74t75 179q0 62-28.5 118t-78.5 94l-507 380q-68 51-153 51h-694zm645-1664q-38 0-68.5 24t-39.5 62l-164 682h-127l-145-602q-9-38-39.5-62t-68.5-24q-48 0-80 33t-32 80q0 15 3 28l132 547h-26l-99-408q-9-37-40-62.5t-69-25.5q-47 0-80 33t-33 79q0 14 3 26l116 478q7 28 9 86t10 88l100 401q8 32 34 52.5t59 20.5h694q42 0 76-26l507-379q56-43 56-110 0-52-37.5-88.5t-89.5-36.5q-43 0-77 26l-307 230v-227q0-4 32-138t68-282 39-161q4-18 4-29 0-47-32-81t-79-34q-39 0-69.5 24t-39.5 62l-116 482h-26l150-624q3-14 3-28 0-48-31.5-82t-79.5-34z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaHandSpockO';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1oYW5kLXNwb2NrLW8uZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBR3dJLDhCQUFNLEdBQUUsMDBCQUFSLEc7O0FBRHhJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1oYW5kLXNwb2NrLW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTQ1OSAxNzkycS03NyAwLTEzNy41LTQ3LjV0LTc5LjUtMTIyLjVsLTEwMS00MDFxLTEzLTU3LTEzLTEwOCAwLTQ1LTUtNjdsLTExNi00NzdxLTctMjctNy01NyAwLTkzIDYyLTE2MXQxNTUtNzhxMTctODUgODIuNS0xMzl0MTUyLjUtNTRxODMgMCAxNDggNTEuNXQ4NSAxMzIuNWw4MyAzNDggMTAzLTQyOHEyMC04MSA4NS0xMzIuNXQxNDgtNTEuNXE4OSAwIDE1NS41IDU3LjV0ODAuNSAxNDQuNXE5MiAxMCAxNTIgNzl0NjAgMTYycTAgMjQtNyA1OWwtMTIzIDUxMnExMC03IDM3LjUtMjguNXQzOC41LTI5LjUgMzUtMjMgNDEtMjAuNSA0MS41LTExIDQ5LjUtNS41cTEwNSAwIDE4MCA3NHQ3NSAxNzlxMCA2Mi0yOC41IDExOHQtNzguNSA5NGwtNTA3IDM4MHEtNjggNTEtMTUzIDUxaC02OTR6bTY0NS0xNjY0cS0zOCAwLTY4LjUgMjR0LTM5LjUgNjJsLTE2NCA2ODJoLTEyN2wtMTQ1LTYwMnEtOS0zOC0zOS41LTYydC02OC41LTI0cS00OCAwLTgwIDMzdC0zMiA4MHEwIDE1IDMgMjhsMTMyIDU0N2gtMjZsLTk5LTQwOHEtOS0zNy00MC02Mi41dC02OS0yNS41cS00NyAwLTgwIDMzdC0zMyA3OXEwIDE0IDMgMjZsMTE2IDQ3OHE3IDI4IDkgODZ0MTAgODhsMTAwIDQwMXE4IDMyIDM0IDUyLjV0NTkgMjAuNWg2OTRxNDIgMCA3Ni0yNmw1MDctMzc5cTU2LTQzIDU2LTExMCAwLTUyLTM3LjUtODguNXQtODkuNS0zNi41cS00MyAwLTc3IDI2bC0zMDcgMjMwdi0yMjdxMC00IDMyLTEzOHQ2OC0yODIgMzktMTYxcTQtMTggNC0yOSAwLTQ3LTMyLTgxdC03OS0zNHEtMzkgMC02OS41IDI0dC0zOS41IDYybC0xMTYgNDgyaC0yNmwxNTAtNjI0cTMtMTQgMy0yOCAwLTQ4LTMxLjUtODJ0LTc5LjUtMzR6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFIYW5kU3BvY2tPJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=