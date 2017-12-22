var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M858 1241v-693q-106 41-172 135.5t-66 211.5 66 211.5 172 134.5zm504-346q0-117-66-211.5t-172-135.5v694q106-41 172-135.5t66-211.5zm215 0q0 159-78.5 294t-213.5 213.5-294 78.5q-119 0-227.5-46.5t-187-125-125-187-46.5-227.5q0-159 78.5-294t213.5-213.5 294-78.5 294 78.5 213.5 213.5 78.5 294zm383 7q0-139-55.5-261.5t-147.5-205.5-213.5-131-252.5-48h-301q-176 0-323.5 81t-235 230-87.5 335q0 171 87 317.5t236 231.5 323 85h301q129 0 251.5-50.5t214.5-135 147.5-202.5 55.5-246zm344-646v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCcDinersClub';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1jYy1kaW5lcnMtY2x1Yi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFb0osOEJBQU0sR0FBRSxzakJBQVIsRzs7QUFEcEosSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixnQkFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWNjLWRpbmVycy1jbHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gd2lkdGg9XCIyMzA0XCIgdmlld0JveD1cIjAgMCAyMzA0IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk04NTggMTI0MXYtNjkzcS0xMDYgNDEtMTcyIDEzNS41dC02NiAyMTEuNSA2NiAyMTEuNSAxNzIgMTM0LjV6bTUwNC0zNDZxMC0xMTctNjYtMjExLjV0LTE3Mi0xMzUuNXY2OTRxMTA2LTQxIDE3Mi0xMzUuNXQ2Ni0yMTEuNXptMjE1IDBxMCAxNTktNzguNSAyOTR0LTIxMy41IDIxMy41LTI5NCA3OC41cS0xMTkgMC0yMjcuNS00Ni41dC0xODctMTI1LTEyNS0xODctNDYuNS0yMjcuNXEwLTE1OSA3OC41LTI5NHQyMTMuNS0yMTMuNSAyOTQtNzguNSAyOTQgNzguNSAyMTMuNSAyMTMuNSA3OC41IDI5NHptMzgzIDdxMC0xMzktNTUuNS0yNjEuNXQtMTQ3LjUtMjA1LjUtMjEzLjUtMTMxLTI1Mi41LTQ4aC0zMDFxLTE3NiAwLTMyMy41IDgxdC0yMzUgMjMwLTg3LjUgMzM1cTAgMTcxIDg3IDMxNy41dDIzNiAyMzEuNSAzMjMgODVoMzAxcTEyOSAwIDI1MS41LTUwLjV0MjE0LjUtMTM1IDE0Ny41LTIwMi41IDU1LjUtMjQ2em0zNDQtNjQ2djEyODBxMCA1Mi0zOCA5MHQtOTAgMzhoLTIwNDhxLTUyIDAtOTAtMzh0LTM4LTkwdi0xMjgwcTAtNTIgMzgtOTB0OTAtMzhoMjA0OHE1MiAwIDkwIDM4dDM4IDkwelwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFDY0RpbmVyc0NsdWInO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
