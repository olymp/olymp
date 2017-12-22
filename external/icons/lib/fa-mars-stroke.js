var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1600 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-213 214 140 140q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-140-141-78 79q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l78-78-172-172q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l172 172 213-213h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zm-896 1408q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z' });

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
icon.displayName = 'FaMarsStroke';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1tYXJzLXN0cm9rZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSx5Z0JBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsY0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLW1hcnMtc3Ryb2tlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNjAwIDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djQxNnEwIDE0LTkgMjN0LTIzIDloLTY0cS0xNCAwLTIzLTl0LTktMjN2LTI2MmwtMjEzIDIxNCAxNDAgMTQwcTkgMTAgOSAyM3QtOSAyMmwtNDYgNDZxLTkgOS0yMiA5dC0yMy05bC0xNDAtMTQxLTc4IDc5cTEyNiAxNTYgMTI2IDM1OSAwIDExNy00NS41IDIyMy41dC0xMjMgMTg0LTE4NCAxMjMtMjIzLjUgNDUuNS0yMjMuNS00NS41LTE4NC0xMjMtMTIzLTE4NC00NS41LTIyMy41IDQ1LjUtMjIzLjUgMTIzLTE4NCAxODQtMTIzIDIyMy41LTQ1LjVxMjAzIDAgMzU5IDEyNmw3OC03OC0xNzItMTcycS05LTEwLTktMjN0OS0yMmw0Ni00NnE5LTkgMjItOXQyMyA5bDE3MiAxNzIgMjEzLTIxM2gtMjYxcS0xNCAwLTIzLTl0LTktMjN2LTY0cTAtMTQgOS0yM3QyMy05aDQxNnptLTg5NiAxNDA4cTE4NSAwIDMxNi41LTEzMS41dDEzMS41LTMxNi41LTEzMS41LTMxNi41LTMxNi41LTEzMS41LTMxNi41IDEzMS41LTEzMS41IDMxNi41IDEzMS41IDMxNi41IDMxNi41IDEzMS41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFNYXJzU3Ryb2tlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
