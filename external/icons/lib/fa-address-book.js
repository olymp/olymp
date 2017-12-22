var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1265 1238q0-57-5.5-107t-21-100.5-39.5-86-64-58-91-22.5q-6 4-33.5 20.5t-42.5 24.5-40.5 20-49 17-46.5 5-46.5-5-49-17-40.5-20-42.5-24.5-33.5-20.5q-51 0-91 22.5t-64 58-39.5 86-21 100.5-5.5 107q0 73 42 121.5t103 48.5h576q61 0 103-48.5t42-121.5zm-173-594q0-108-76.5-184t-183.5-76-183.5 76-76.5 184q0 107 76.5 183t183.5 76 183.5-76 76.5-183zm636 540v192q0 14-9 23t-23 9h-96v224q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-1472q0-66 47-113t113-47h1216q66 0 113 47t47 113v224h96q14 0 23 9t9 23v192q0 14-9 23t-23 9h-96v128h96q14 0 23 9t9 23v192q0 14-9 23t-23 9h-96v128h96q14 0 23 9t9 23z' });

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
icon.displayName = 'FaAddressBook';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1hZGRyZXNzLWJvb2suZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsd2tCQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGVBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1hZGRyZXNzLWJvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEyNjUgMTIzOHEwLTU3LTUuNS0xMDd0LTIxLTEwMC41LTM5LjUtODYtNjQtNTgtOTEtMjIuNXEtNiA0LTMzLjUgMjAuNXQtNDIuNSAyNC41LTQwLjUgMjAtNDkgMTctNDYuNSA1LTQ2LjUtNS00OS0xNy00MC41LTIwLTQyLjUtMjQuNS0zMy41LTIwLjVxLTUxIDAtOTEgMjIuNXQtNjQgNTgtMzkuNSA4Ni0yMSAxMDAuNS01LjUgMTA3cTAgNzMgNDIgMTIxLjV0MTAzIDQ4LjVoNTc2cTYxIDAgMTAzLTQ4LjV0NDItMTIxLjV6bS0xNzMtNTk0cTAtMTA4LTc2LjUtMTg0dC0xODMuNS03Ni0xODMuNSA3Ni03Ni41IDE4NHEwIDEwNyA3Ni41IDE4M3QxODMuNSA3NiAxODMuNS03NiA3Ni41LTE4M3ptNjM2IDU0MHYxOTJxMCAxNC05IDIzdC0yMyA5aC05NnYyMjRxMCA2Ni00NyAxMTN0LTExMyA0N2gtMTIxNnEtNjYgMC0xMTMtNDd0LTQ3LTExM3YtMTQ3MnEwLTY2IDQ3LTExM3QxMTMtNDdoMTIxNnE2NiAwIDExMyA0N3Q0NyAxMTN2MjI0aDk2cTE0IDAgMjMgOXQ5IDIzdjE5MnEwIDE0LTkgMjN0LTIzIDloLTk2djEyOGg5NnExNCAwIDIzIDl0OSAyM3YxOTJxMCAxNC05IDIzdC0yMyA5aC05NnYxMjhoOTZxMTQgMCAyMyA5dDkgMjN6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUFkZHJlc3NCb29rJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
