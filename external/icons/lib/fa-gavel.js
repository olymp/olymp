var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z' });

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
icon.displayName = 'FaGavel';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1nYXZlbC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSx3eUJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWdhdmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNzcxIDE1MzZxMCA1My0zNyA5MGwtMTA3IDEwOHEtMzkgMzctOTEgMzctNTMgMC05MC0zN2wtMzYzLTM2NHEtMzgtMzYtMzgtOTAgMC01MyA0My05NmwtMjU2LTI1Ni0xMjYgMTI2cS0xNCAxNC0zNCAxNHQtMzQtMTRxMiAyIDEyLjUgMTJ0MTIuNSAxMyAxMCAxMS41IDEwIDEzLjUgNiAxMy41IDUuNSAxNi41IDEuNSAxOHEwIDM4LTI4IDY4LTMgMy0xNi41IDE4dC0xOSAyMC41LTE4LjUgMTYuNS0yMiAxNS41LTIyIDktMjYgNC41cS00MCAwLTY4LTI4bC00MDgtNDA4cS0yOC0yOC0yOC02OCAwLTEzIDQuNS0yNnQ5LTIyIDE1LjUtMjIgMTYuNS0xOC41IDIwLjUtMTkgMTgtMTYuNXEzMC0yOCA2OC0yOCAxMCAwIDE4IDEuNXQxNi41IDUuNSAxMy41IDYgMTMuNSAxMCAxMS41IDEwIDEzIDEyLjUgMTIgMTIuNXEtMTQtMTQtMTQtMzR0MTQtMzRsMzQ4LTM0OHExNC0xNCAzNC0xNHQzNCAxNHEtMi0yLTEyLjUtMTJ0LTEyLjUtMTMtMTAtMTEuNS0xMC0xMy41LTYtMTMuNS01LjUtMTYuNS0xLjUtMThxMC0zOCAyOC02OCAzLTMgMTYuNS0xOHQxOS0yMC41IDE4LjUtMTYuNSAyMi0xNS41IDIyLTkgMjYtNC41cTQwIDAgNjggMjhsNDA4IDQwOHEyOCAyOCAyOCA2OCAwIDEzLTQuNSAyNnQtOSAyMi0xNS41IDIyLTE2LjUgMTguNS0yMC41IDE5LTE4IDE2LjVxLTMwIDI4LTY4IDI4LTEwIDAtMTgtMS41dC0xNi41LTUuNS0xMy41LTYtMTMuNS0xMC0xMS41LTEwLTEzLTEyLjUtMTItMTIuNXExNCAxNCAxNCAzNHQtMTQgMzRsLTEyNiAxMjYgMjU2IDI1NnE0My00MyA5Ni00MyA1MiAwIDkxIDM3bDM2MyAzNjNxMzcgMzkgMzcgOTF6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUdhdmVsJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
