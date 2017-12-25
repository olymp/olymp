var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M949 893q0 26-16.5 45t-41.5 19q-26 0-45-16.5t-19-41.5q0-26 17-45t42-19 44 16.5 19 41.5zm15 58l350-581q-9 8-67.5 62.5t-125.5 116.5-136.5 127-117 110.5-50.5 51.5l-349 580q7-7 67-62t126-116.5 136-127 117-111 50-50.5zm647-55q0 201-104 371-3-2-17-11t-26.5-16.5-16.5-7.5q-13 0-13 13 0 10 59 44-74 112-184.5 190.5t-241.5 110.5l-16-67q-1-10-15-10-5 0-8 5.5t-2 9.5l16 68q-72 15-146 15-199 0-372-105 1-2 13-20.5t21.5-33.5 9.5-19q0-13-13-13-6 0-17 14.5t-22.5 34.5-13.5 23q-113-75-192-187.5t-110-244.5l69-15q10-3 10-15 0-5-5.5-8t-10.5-2l-68 15q-14-72-14-139 0-206 109-379 2 1 18.5 12t30 19 17.5 8q13 0 13-12 0-6-12.5-15.5t-32.5-21.5l-20-12q77-112 189-189t244-107l15 67q2 10 15 10 5 0 8-5.5t2-10.5l-15-66q71-13 134-13 204 0 379 109-39 56-39 65 0 13 12 13 11 0 48-64 111 75 187.5 186t107.5 241l-56 12q-10 2-10 16 0 5 5.5 8t9.5 2l57-13q14 72 14 140zm85 0q0-163-63.5-311t-170.5-255-255-170.5-311-63.5-311 63.5-255 170.5-170.5 255-63.5 311 63.5 311 170.5 255 255 170.5 311 63.5 311-63.5 255-170.5 170.5-255 63.5-311zm96 0q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z' });

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
icon.displayName = 'FaSafari';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zYWZhcmkuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsOG1DQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFVBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1zYWZhcmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTk0OSA4OTNxMCAyNi0xNi41IDQ1dC00MS41IDE5cS0yNiAwLTQ1LTE2LjV0LTE5LTQxLjVxMC0yNiAxNy00NXQ0Mi0xOSA0NCAxNi41IDE5IDQxLjV6bTE1IDU4bDM1MC01ODFxLTkgOC02Ny41IDYyLjV0LTEyNS41IDExNi41LTEzNi41IDEyNy0xMTcgMTEwLjUtNTAuNSA1MS41bC0zNDkgNTgwcTctNyA2Ny02MnQxMjYtMTE2LjUgMTM2LTEyNyAxMTctMTExIDUwLTUwLjV6bTY0Ny01NXEwIDIwMS0xMDQgMzcxLTMtMi0xNy0xMXQtMjYuNS0xNi41LTE2LjUtNy41cS0xMyAwLTEzIDEzIDAgMTAgNTkgNDQtNzQgMTEyLTE4NC41IDE5MC41dC0yNDEuNSAxMTAuNWwtMTYtNjdxLTEtMTAtMTUtMTAtNSAwLTggNS41dC0yIDkuNWwxNiA2OHEtNzIgMTUtMTQ2IDE1LTE5OSAwLTM3Mi0xMDUgMS0yIDEzLTIwLjV0MjEuNS0zMy41IDkuNS0xOXEwLTEzLTEzLTEzLTYgMC0xNyAxNC41dC0yMi41IDM0LjUtMTMuNSAyM3EtMTEzLTc1LTE5Mi0xODcuNXQtMTEwLTI0NC41bDY5LTE1cTEwLTMgMTAtMTUgMC01LTUuNS04dC0xMC41LTJsLTY4IDE1cS0xNC03Mi0xNC0xMzkgMC0yMDYgMTA5LTM3OSAyIDEgMTguNSAxMnQzMCAxOSAxNy41IDhxMTMgMCAxMy0xMiAwLTYtMTIuNS0xNS41dC0zMi41LTIxLjVsLTIwLTEycTc3LTExMiAxODktMTg5dDI0NC0xMDdsMTUgNjdxMiAxMCAxNSAxMCA1IDAgOC01LjV0Mi0xMC41bC0xNS02NnE3MS0xMyAxMzQtMTMgMjA0IDAgMzc5IDEwOS0zOSA1Ni0zOSA2NSAwIDEzIDEyIDEzIDExIDAgNDgtNjQgMTExIDc1IDE4Ny41IDE4NnQxMDcuNSAyNDFsLTU2IDEycS0xMCAyLTEwIDE2IDAgNSA1LjUgOHQ5LjUgMmw1Ny0xM3ExNCA3MiAxNCAxNDB6bTg1IDBxMC0xNjMtNjMuNS0zMTF0LTE3MC41LTI1NS0yNTUtMTcwLjUtMzExLTYzLjUtMzExIDYzLjUtMjU1IDE3MC41LTE3MC41IDI1NS02My41IDMxMSA2My41IDMxMSAxNzAuNSAyNTUgMjU1IDE3MC41IDMxMSA2My41IDMxMS02My41IDI1NS0xNzAuNSAxNzAuNS0yNTUgNjMuNS0zMTF6bTk2IDBxMCAxODItNzEgMzQ4dC0xOTEgMjg2LTI4NiAxOTEtMzQ4IDcxLTM0OC03MS0yODYtMTkxLTE5MS0yODYtNzEtMzQ4IDcxLTM0OCAxOTEtMjg2IDI4Ni0xOTEgMzQ4LTcxIDM0OCA3MSAyODYgMTkxIDE5MSAyODYgNzEgMzQ4elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTYWZhcmknO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==