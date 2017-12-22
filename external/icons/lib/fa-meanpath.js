var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1439 842v114q0 24-13.5 38t-37.5 14h-202q-24 0-38-14t-14-38v-114q0-24 14-38t38-14h202q24 0 37.5 14t13.5 38zm-490 230v-250q0-53-32.5-85.5t-85.5-32.5h-133q-68 0-96 52-28-52-96-52h-130q-53 0-85.5 32.5t-32.5 85.5v250q0 22 21 22h55q22 0 22-22v-230q0-24 13.5-38t38.5-14h94q24 0 38 14t14 38v230q0 22 21 22h54q22 0 22-22v-230q0-24 14-38t38-14h97q24 0 37.5 14t13.5 38v230q0 22 22 22h55q21 0 21-22zm589-96v-154q0-53-33-85.5t-86-32.5h-264q-53 0-86 32.5t-33 85.5v410q0 21 22 21h55q21 0 21-21v-180q31 42 94 42h191q53 0 86-32.5t33-85.5zm126-616v1072q0 96-68 164t-164 68h-1072q-96 0-164-68t-68-164v-1072q0-96 68-164t164-68h1072q96 0 164 68t68 164z' });

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
icon.displayName = 'FaMeanpath';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1tZWFucGF0aC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSwwbkJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsWUFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLW1lYW5wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNDM5IDg0MnYxMTRxMCAyNC0xMy41IDM4dC0zNy41IDE0aC0yMDJxLTI0IDAtMzgtMTR0LTE0LTM4di0xMTRxMC0yNCAxNC0zOHQzOC0xNGgyMDJxMjQgMCAzNy41IDE0dDEzLjUgMzh6bS00OTAgMjMwdi0yNTBxMC01My0zMi41LTg1LjV0LTg1LjUtMzIuNWgtMTMzcS02OCAwLTk2IDUyLTI4LTUyLTk2LTUyaC0xMzBxLTUzIDAtODUuNSAzMi41dC0zMi41IDg1LjV2MjUwcTAgMjIgMjEgMjJoNTVxMjIgMCAyMi0yMnYtMjMwcTAtMjQgMTMuNS0zOHQzOC41LTE0aDk0cTI0IDAgMzggMTR0MTQgMzh2MjMwcTAgMjIgMjEgMjJoNTRxMjIgMCAyMi0yMnYtMjMwcTAtMjQgMTQtMzh0MzgtMTRoOTdxMjQgMCAzNy41IDE0dDEzLjUgMzh2MjMwcTAgMjIgMjIgMjJoNTVxMjEgMCAyMS0yMnptNTg5LTk2di0xNTRxMC01My0zMy04NS41dC04Ni0zMi41aC0yNjRxLTUzIDAtODYgMzIuNXQtMzMgODUuNXY0MTBxMCAyMSAyMiAyMWg1NXEyMSAwIDIxLTIxdi0xODBxMzEgNDIgOTQgNDJoMTkxcTUzIDAgODYtMzIuNXQzMy04NS41em0xMjYtNjE2djEwNzJxMCA5Ni02OCAxNjR0LTE2NCA2OGgtMTA3MnEtOTYgMC0xNjQtNjh0LTY4LTE2NHYtMTA3MnEwLTk2IDY4LTE2NHQxNjQtNjhoMTA3MnE5NiAwIDE2NCA2OHQ2OCAxNjR6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYU1lYW5wYXRoJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
