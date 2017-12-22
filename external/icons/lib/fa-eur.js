var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1360 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z' });

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
icon.displayName = 'FaEur';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1ldXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsZ3BCQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE9BQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1ldXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEzNjAgMTMwN2wzNSAxNTlxMyAxMi0zIDIyLjV0LTE3IDE0LjVsLTUgMXEtNCAyLTEwLjUgMy41dC0xNiA0LjUtMjEuNSA1LjUtMjUuNSA1LTMwIDUtMzMuNSA0LjUtMzYuNSAzLTM4LjUgMXEtMjM0IDAtNDA5LTEzMC41dC0yMzgtMzUxLjVoLTk1cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTEzcTAtMTMgOS41LTIyLjV0MjIuNS05LjVoNjZxLTItNTcgMS0xMDVoLTY3cS0xNCAwLTIzLTl0LTktMjN2LTExNHEwLTE0IDktMjN0MjMtOWg5OHE2Ny0yMTAgMjQzLjUtMzM4dDQwMC41LTEyOHExMDIgMCAxOTQgMjMgMTEgMyAyMCAxNSA2IDExIDMgMjRsLTQzIDE1OXEtMyAxMy0xNCAxOS41dC0yNCAyLjVsLTQtMXEtNC0xLTExLjUtMi41bC0xNy41LTMuNS0yMi41LTMuNS0yNi0zLTI5LTIuNS0yOS41LTFxLTEyNiAwLTIyNiA2NHQtMTUwIDE3Nmg0NjhxMTYgMCAyNSAxMiAxMCAxMiA3IDI2bC0yNCAxMTRxLTUgMjYtMzIgMjZoLTQ4OHEtMyAzNyAwIDEwNWg0NTlxMTUgMCAyNSAxMiA5IDEyIDYgMjdsLTI0IDExMnEtMiAxMS0xMSAxOC41dC0yMCA3LjVoLTM4N3E0OCAxMTcgMTQ5LjUgMTg1LjV0MjI4LjUgNjguNXExOCAwIDM2LTEuNXQzMy41LTMuNSAyOS41LTQuNSAyNC41LTUgMTguNS00LjVsMTItMyA1LTJxMTMtNSAyNiAyIDEyIDcgMTUgMjF6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUV1cic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
