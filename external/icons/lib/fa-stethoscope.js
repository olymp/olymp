var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1472 704q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0q0 62-35.5 111t-92.5 70v395q0 159-131.5 271.5t-316.5 112.5-316.5-112.5-131.5-271.5v-132q-164-20-274-128t-110-252v-512q0-26 19-45t45-19q6 0 16 2 17-30 47-48t65-18q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5q-33 0-64-18v402q0 106 94 181t226 75 226-75 94-181v-402q-31 18-64 18-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5q35 0 65 18t47 48q10-2 16-2 26 0 45 19t19 45v512q0 144-110 252t-274 128v132q0 106 94 181t226 75 226-75 94-181v-395q-57-21-92.5-70t-35.5-111q0-80 56-136t136-56 136 56 56 136z' });

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
icon.displayName = 'FaStethoscope';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zdGV0aG9zY29wZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSxxakJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsZUFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXN0ZXRob3Njb3BlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNDcyIDcwNHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4IDBxMCA2Mi0zNS41IDExMXQtOTIuNSA3MHYzOTVxMCAxNTktMTMxLjUgMjcxLjV0LTMxNi41IDExMi41LTMxNi41LTExMi41LTEzMS41LTI3MS41di0xMzJxLTE2NC0yMC0yNzQtMTI4dC0xMTAtMjUydi01MTJxMC0yNiAxOS00NXQ0NS0xOXE2IDAgMTYgMiAxNy0zMCA0Ny00OHQ2NS0xOHE1MyAwIDkwLjUgMzcuNXQzNy41IDkwLjUtMzcuNSA5MC41LTkwLjUgMzcuNXEtMzMgMC02NC0xOHY0MDJxMCAxMDYgOTQgMTgxdDIyNiA3NSAyMjYtNzUgOTQtMTgxdi00MDJxLTMxIDE4LTY0IDE4LTUzIDAtOTAuNS0zNy41dC0zNy41LTkwLjUgMzcuNS05MC41IDkwLjUtMzcuNXEzNSAwIDY1IDE4dDQ3IDQ4cTEwLTIgMTYtMiAyNiAwIDQ1IDE5dDE5IDQ1djUxMnEwIDE0NC0xMTAgMjUydC0yNzQgMTI4djEzMnEwIDEwNiA5NCAxODF0MjI2IDc1IDIyNi03NSA5NC0xODF2LTM5NXEtNTctMjEtOTIuNS03MHQtMzUuNS0xMTFxMC04MCA1Ni0xMzZ0MTM2LTU2IDEzNiA1NiA1NiAxMzZ6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVN0ZXRob3Njb3BlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
