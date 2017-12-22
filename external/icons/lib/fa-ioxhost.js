var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1463 832q0 35-25 60.5t-61 25.5h-702q-36 0-61-25.5t-25-60.5 25-60.5 61-25.5h702q36 0 61 25.5t25 60.5zm214 0q0-86-23-170h-982q-36 0-61-25t-25-60q0-36 25-61t61-25h908q-88-143-235-227t-320-84q-177 0-327.5 87.5t-238 237.5-87.5 327q0 86 23 170h982q36 0 61 25t25 60q0 36-25 61t-61 25h-908q88 143 235.5 227t320.5 84q132 0 253-51.5t208-139 139-208 52-253.5zm371-255q0 35-25 60t-61 25h-131q17 85 17 170 0 167-65.5 319.5t-175.5 263-262.5 176-319.5 65.5q-246 0-448.5-133t-301.5-350h-189q-36 0-61-25t-25-61q0-35 25-60t61-25h132q-17-85-17-170 0-167 65.5-319.5t175.5-263 262.5-176 320.5-65.5q245 0 447.5 133t301.5 350h188q36 0 61 25t25 61z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { viewBox: '0 0 2048 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaIoxhost';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1pb3hob3N0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUd3SSw4QkFBTSxHQUFFLG1uQkFBUixHOztBQUR4SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixXQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtaW94aG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTQ2MyA4MzJxMCAzNS0yNSA2MC41dC02MSAyNS41aC03MDJxLTM2IDAtNjEtMjUuNXQtMjUtNjAuNSAyNS02MC41IDYxLTI1LjVoNzAycTM2IDAgNjEgMjUuNXQyNSA2MC41em0yMTQgMHEwLTg2LTIzLTE3MGgtOTgycS0zNiAwLTYxLTI1dC0yNS02MHEwLTM2IDI1LTYxdDYxLTI1aDkwOHEtODgtMTQzLTIzNS0yMjd0LTMyMC04NHEtMTc3IDAtMzI3LjUgODcuNXQtMjM4IDIzNy41LTg3LjUgMzI3cTAgODYgMjMgMTcwaDk4MnEzNiAwIDYxIDI1dDI1IDYwcTAgMzYtMjUgNjF0LTYxIDI1aC05MDhxODggMTQzIDIzNS41IDIyN3QzMjAuNSA4NHExMzIgMCAyNTMtNTEuNXQyMDgtMTM5IDEzOS0yMDggNTItMjUzLjV6bTM3MS0yNTVxMCAzNS0yNSA2MHQtNjEgMjVoLTEzMXExNyA4NSAxNyAxNzAgMCAxNjctNjUuNSAzMTkuNXQtMTc1LjUgMjYzLTI2Mi41IDE3Ni0zMTkuNSA2NS41cS0yNDYgMC00NDguNS0xMzN0LTMwMS41LTM1MGgtMTg5cS0zNiAwLTYxLTI1dC0yNS02MXEwLTM1IDI1LTYwdDYxLTI1aDEzMnEtMTctODUtMTctMTcwIDAtMTY3IDY1LjUtMzE5LjV0MTc1LjUtMjYzIDI2Mi41LTE3NiAzMjAuNS02NS41cTI0NSAwIDQ0Ny41IDEzM3QzMDEuNSAzNTBoMTg4cTM2IDAgNjEgMjV0MjUgNjF6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFJb3hob3N0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
