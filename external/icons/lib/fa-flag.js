var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M320 256q0 72-64 110v1266q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-1266q-64-38-64-110 0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm1472 64v763q0 25-12.5 38.5t-39.5 27.5q-215 116-369 116-61 0-123.5-22t-108.5-48-115.5-48-142.5-22q-192 0-464 146-17 9-33 9-26 0-45-19t-19-45v-742q0-32 31-55 21-14 79-43 236-120 421-120 107 0 200 29t219 88q38 19 88 19 54 0 117.5-21t110-47 88-47 54.5-21q26 0 45 19t19 45z' });

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
icon.displayName = 'FaFlag';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1mbGFnLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLCtaQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1mbGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zMjAgMjU2cTAgNzItNjQgMTEwdjEyNjZxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTI2NnEtNjQtMzgtNjQtMTEwIDAtNTMgMzcuNS05MC41dDkwLjUtMzcuNSA5MC41IDM3LjUgMzcuNSA5MC41em0xNDcyIDY0djc2M3EwIDI1LTEyLjUgMzguNXQtMzkuNSAyNy41cS0yMTUgMTE2LTM2OSAxMTYtNjEgMC0xMjMuNS0yMnQtMTA4LjUtNDgtMTE1LjUtNDgtMTQyLjUtMjJxLTE5MiAwLTQ2NCAxNDYtMTcgOS0zMyA5LTI2IDAtNDUtMTl0LTE5LTQ1di03NDJxMC0zMiAzMS01NSAyMS0xNCA3OS00MyAyMzYtMTIwIDQyMS0xMjAgMTA3IDAgMjAwIDI5dDIxOSA4OHEzOCAxOSA4OCAxOSA1NCAwIDExNy41LTIxdDExMC00NyA4OC00NyA1NC41LTIxcTI2IDAgNDUgMTl0MTkgNDV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUZsYWcnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
