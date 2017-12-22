var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1625 827v198q-101 23-198 23-65 136-165.5 271t-181.5 215.5-128 106.5q-80 45-162-3-28-17-60.5-43.5t-85-83.5-102.5-128.5-107.5-184-105.5-244-91.5-314.5-70.5-390h283q26 218 70 398.5t104.5 317 121.5 235.5 140 195q169-169 287-406-142-72-223-220t-81-333q0-192 104-314.5t284-122.5q178 0 273 105.5t95 297.5q0 159-58 286-7 1-19.5 3t-46 2-63-6-62-25.5-50.5-51.5q31-103 31-184 0-87-29-132t-79-45q-53 0-85 49.5t-32 140.5q0 186 105 293.5t267 107.5q62 0 121-14z' });

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
icon.displayName = 'FaVine';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS12aW5lLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLGljQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS12aW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNjI1IDgyN3YxOThxLTEwMSAyMy0xOTggMjMtNjUgMTM2LTE2NS41IDI3MXQtMTgxLjUgMjE1LjUtMTI4IDEwNi41cS04MCA0NS0xNjItMy0yOC0xNy02MC41LTQzLjV0LTg1LTgzLjUtMTAyLjUtMTI4LjUtMTA3LjUtMTg0LTEwNS41LTI0NC05MS41LTMxNC41LTcwLjUtMzkwaDI4M3EyNiAyMTggNzAgMzk4LjV0MTA0LjUgMzE3IDEyMS41IDIzNS41IDE0MCAxOTVxMTY5LTE2OSAyODctNDA2LTE0Mi03Mi0yMjMtMjIwdC04MS0zMzNxMC0xOTIgMTA0LTMxNC41dDI4NC0xMjIuNXExNzggMCAyNzMgMTA1LjV0OTUgMjk3LjVxMCAxNTktNTggMjg2LTcgMS0xOS41IDN0LTQ2IDItNjMtNi02Mi0yNS41LTUwLjUtNTEuNXEzMS0xMDMgMzEtMTg0IDAtODctMjktMTMydC03OS00NXEtNTMgMC04NSA0OS41dC0zMiAxNDAuNXEwIDE4NiAxMDUgMjkzLjV0MjY3IDEwNy41cTYyIDAgMTIxLTE0elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFWaW5lJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
