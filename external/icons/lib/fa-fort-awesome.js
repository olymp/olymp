var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M640 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 0v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zm512 32v752h-640v-320q0-80-56-136t-136-56-136 56-56 136v320h-640v-752q0-16 16-16h96q16 0 16 16v112h128v-624q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-6 2.5-9.5t8.5-5 9.5-2 11.5 0 9 .5v-391q-32-15-32-50 0-23 16.5-39t38.5-16 38.5 16 16.5 39q0 35-32 50v17q45-10 83-10 21 0 59.5 7.5t54.5 7.5q17 0 47-7.5t37-7.5q16 0 16 16v210q0 15-35 21.5t-62 6.5q-18 0-54.5-7.5t-55.5-7.5q-40 0-90 12v133q1 0 9-.5t11.5 0 9.5 2 8.5 5 2.5 9.5v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v624h128v-112q0-16 16-16h96q16 0 16 16z' });

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
icon.displayName = 'FaFortAwesome';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1mb3J0LWF3ZXNvbWUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsdXNCQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGVBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1mb3J0LWF3ZXNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTY0MCAxMDA4di0yMjRxMC0xNi0xNi0xNmgtOTZxLTE2IDAtMTYgMTZ2MjI0cTAgMTYgMTYgMTZoOTZxMTYgMCAxNi0xNnptNTEyIDB2LTIyNHEwLTE2LTE2LTE2aC05NnEtMTYgMC0xNiAxNnYyMjRxMCAxNiAxNiAxNmg5NnExNiAwIDE2LTE2em01MTIgMzJ2NzUyaC02NDB2LTMyMHEwLTgwLTU2LTEzNnQtMTM2LTU2LTEzNiA1Ni01NiAxMzZ2MzIwaC02NDB2LTc1MnEwLTE2IDE2LTE2aDk2cTE2IDAgMTYgMTZ2MTEyaDEyOHYtNjI0cTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnYxMTJoMTI4di0xMTJxMC0xNiAxNi0xNmg5NnExNiAwIDE2IDE2djExMmgxMjh2LTExMnEwLTYgMi41LTkuNXQ4LjUtNSA5LjUtMiAxMS41IDAgOSAuNXYtMzkxcS0zMi0xNS0zMi01MCAwLTIzIDE2LjUtMzl0MzguNS0xNiAzOC41IDE2IDE2LjUgMzlxMCAzNS0zMiA1MHYxN3E0NS0xMCA4My0xMCAyMSAwIDU5LjUgNy41dDU0LjUgNy41cTE3IDAgNDctNy41dDM3LTcuNXExNiAwIDE2IDE2djIxMHEwIDE1LTM1IDIxLjV0LTYyIDYuNXEtMTggMC01NC41LTcuNXQtNTUuNS03LjVxLTQwIDAtOTAgMTJ2MTMzcTEgMCA5LS41dDExLjUgMCA5LjUgMiA4LjUgNSAyLjUgOS41djExMmgxMjh2LTExMnEwLTE2IDE2LTE2aDk2cTE2IDAgMTYgMTZ2MTEyaDEyOHYtMTEycTAtMTYgMTYtMTZoOTZxMTYgMCAxNiAxNnY2MjRoMTI4di0xMTJxMC0xNiAxNi0xNmg5NnExNiAwIDE2IDE2elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFGb3J0QXdlc29tZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
