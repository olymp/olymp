var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M896 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zm0-128q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z' });

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
icon.displayName = 'FaHandGrabO';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1oYW5kLWdyYWItby5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSx5ckJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWhhbmQtZ3JhYi1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk04OTYgMzg0cS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41djEyOGgtMzJ2LTkzcTAtNDgtMzItODEuNXQtODAtMzMuNXEtNDYgMC03OSAzM3QtMzMgNzl2NDI5bC0zMi0zMHYtMTcycTAtNDgtMzItODEuNXQtODAtMzMuNXEtNDYgMC03OSAzM3QtMzMgNzl2MjI0cTAgNDcgMzUgODJsMzEwIDI5NnEzOSAzOSAzOSAxMDIgMCAyNiAxOSA0NXQ0NSAxOWg2NDBxMjYgMCA0NS0xOXQxOS00NXYtMjVxMC00MSAxMC03N2wxMDgtNDM2cTEwLTM2IDEwLTc3di0yNDZxMC00OC0zMi04MS41dC04MC0zMy41cS00NiAwLTc5IDMzdC0zMyA3OXYzMmgtMzJ2LTEyNXEwLTQwLTI1LTcyLjV0LTY0LTQwLjVxLTE0LTItMjMtMi00NiAwLTc5IDMzdC0zMyA3OXYxMjhoLTMydi0xMjJxMC01MS0zMi41LTg5LjV0LTgyLjUtNDMuNXEtNS0xLTEzLTF6bTAtMTI4cTg0IDAgMTQ5IDUwIDU3LTM0IDEyMy0zNCA1OSAwIDExMSAyN3Q4NiA3NnEyNy03IDU5LTcgMTAwIDAgMTcwIDcxLjV0NzAgMTcxLjV2MjQ2cTAgNTEtMTMgMTA4bC0xMDkgNDM2cS02IDI0LTYgNzEgMCA4MC01NiAxMzZ0LTEzNiA1NmgtNjQwcS04NCAwLTEzOC01OC41dC01NC0xNDIuNWwtMzA4LTI5NnEtNzYtNzMtNzYtMTc1di0yMjRxMC05OSA3MC41LTE2OS41dDE2OS41LTcwLjVxMTEgMCAxNiAxIDYtOTUgNzUuNS0xNjB0MTY0LjUtNjVxNTIgMCA5OCAyMSA3Mi02OSAxNzQtNjl6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUhhbmRHcmFiTyc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
