var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1792 654v978q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-978q0-15 11-24 8-7 39-34.5t41.5-36 45.5-37.5 70-55.5 96-73 143.5-107 192.5-140.5q5-4 52.5-40t71.5-52.5 64-35 69-18.5 69 18.5 65 35.5 71 52 52 40q110 80 192.5 140.5t143.5 107 96 73 70 55.5 45.5 37.5 41.5 36 39 34.5q11 9 11 24zm-564 585q263-191 345-252 11-8 12.5-20.5t-6.5-23.5l-38-52q-8-11-21-12.5t-24 6.5q-231 169-343 250-5 3-52 39t-71.5 52.5-64.5 35-69 18.5-69-18.5-64.5-35-71.5-52.5-52-39q-186-134-343-250-11-8-24-6.5t-21 12.5l-38 52q-8 11-6.5 23.5t12.5 20.5q82 61 345 252 10 8 50 38t65 47 64 39.5 77.5 33.5 75.5 11 75.5-11 79-34.5 64.5-39.5 65-47.5 48-36.5z' });

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
icon.displayName = 'FaEnvelopeOpen';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1lbnZlbG9wZS1vcGVuLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLGduQkFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixnQkFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWVudmVsb3BlLW9wZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE3OTIgNjU0djk3OHEwIDY2LTQ3IDExM3QtMTEzIDQ3aC0xNDcycS02NiAwLTExMy00N3QtNDctMTEzdi05NzhxMC0xNSAxMS0yNCA4LTcgMzktMzQuNXQ0MS41LTM2IDQ1LjUtMzcuNSA3MC01NS41IDk2LTczIDE0My41LTEwNyAxOTIuNS0xNDAuNXE1LTQgNTIuNS00MHQ3MS41LTUyLjUgNjQtMzUgNjktMTguNSA2OSAxOC41IDY1IDM1LjUgNzEgNTIgNTIgNDBxMTEwIDgwIDE5Mi41IDE0MC41dDE0My41IDEwNyA5NiA3MyA3MCA1NS41IDQ1LjUgMzcuNSA0MS41IDM2IDM5IDM0LjVxMTEgOSAxMSAyNHptLTU2NCA1ODVxMjYzLTE5MSAzNDUtMjUyIDExLTggMTIuNS0yMC41dC02LjUtMjMuNWwtMzgtNTJxLTgtMTEtMjEtMTIuNXQtMjQgNi41cS0yMzEgMTY5LTM0MyAyNTAtNSAzLTUyIDM5dC03MS41IDUyLjUtNjQuNSAzNS02OSAxOC41LTY5LTE4LjUtNjQuNS0zNS03MS41LTUyLjUtNTItMzlxLTE4Ni0xMzQtMzQzLTI1MC0xMS04LTI0LTYuNXQtMjEgMTIuNWwtMzggNTJxLTggMTEtNi41IDIzLjV0MTIuNSAyMC41cTgyIDYxIDM0NSAyNTIgMTAgOCA1MCAzOHQ2NSA0NyA2NCAzOS41IDc3LjUgMzMuNSA3NS41IDExIDc1LjUtMTEgNzktMzQuNSA2NC41LTM5LjUgNjUtNDcuNSA0OC0zNi41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFFbnZlbG9wZU9wZW4nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
