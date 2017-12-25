var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M646 183v655q103 1 191.5-1.5t125.5-5.5l37-3q68-2 90.5-24.5t39.5-94.5l33-142h103l-14 322 7 319h-103l-29-127q-15-68-45-93t-84-26q-87-8-352-8v556q0 78 43.5 115.5t133.5 37.5h357q35 0 59.5-2t55-7.5 54-18 48.5-32 46-50.5 39-73l93-216h89q-6 37-31.5 252t-30.5 276q-146-5-263.5-8t-162.5-4h-672l-376 12v-102l127-25q67-13 91.5-37t25.5-79l8-643q3-402-8-645-2-61-25.5-84t-91.5-36l-127-24v-102l376 12h702q139 0 374-27-6 68-14 194.5t-12 219.5l-5 92h-93l-32-124q-31-121-74-179.5t-113-58.5h-548q-28 0-35.5 8.5t-7.5 30.5z' });

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
icon.displayName = 'FaEtsy';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1ldHN5LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLHlmQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1ldHN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk02NDYgMTgzdjY1NXExMDMgMSAxOTEuNS0xLjV0MTI1LjUtNS41bDM3LTNxNjgtMiA5MC41LTI0LjV0MzkuNS05NC41bDMzLTE0MmgxMDNsLTE0IDMyMiA3IDMxOWgtMTAzbC0yOS0xMjdxLTE1LTY4LTQ1LTkzdC04NC0yNnEtODctOC0zNTItOHY1NTZxMCA3OCA0My41IDExNS41dDEzMy41IDM3LjVoMzU3cTM1IDAgNTkuNS0ydDU1LTcuNSA1NC0xOCA0OC41LTMyIDQ2LTUwLjUgMzktNzNsOTMtMjE2aDg5cS02IDM3LTMxLjUgMjUydC0zMC41IDI3NnEtMTQ2LTUtMjYzLjUtOHQtMTYyLjUtNGgtNjcybC0zNzYgMTJ2LTEwMmwxMjctMjVxNjctMTMgOTEuNS0zN3QyNS41LTc5bDgtNjQzcTMtNDAyLTgtNjQ1LTItNjEtMjUuNS04NHQtOTEuNS0zNmwtMTI3LTI0di0xMDJsMzc2IDEyaDcwMnExMzkgMCAzNzQtMjctNiA2OC0xNCAxOTQuNXQtMTIgMjE5LjVsLTUgOTJoLTkzbC0zMi0xMjRxLTMxLTEyMS03NC0xNzkuNXQtMTEzLTU4LjVoLTU0OHEtMjggMC0zNS41IDguNXQtNy41IDMwLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUV0c3knO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==