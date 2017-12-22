var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1811 1555q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-128-128 90-90 83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83zm-1574-38q-19 19-45 19t-45-19l-128-128 90-90 83 82 83-82q19-19 45-19t45 19l83 82 64-64v-293l-210-314q-17-26-7-56.5t40-40.5l177-58v-299h128v-128h256v-128h256v128h256v128h128v299l177 58q30 10 40 40.5t-7 56.5l-210 314v293l19-18q19-19 45-19t45 19l83 82 83-82q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83zm403-1133v128l384-128 384 128v-128h-128v-128h-512v128h-128z' });

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
icon.displayName = 'FaShip';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zaGlwLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUd3SSw4QkFBTSxHQUFFLGtnQ0FBUixHOztBQUR4SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTJFLFNBQVEsZUFBbkYsRUFBbUcsT0FBTSw0QkFBekc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixRQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtc2hpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTgxMSAxNTU1cTE5LTE5IDQ1LTE5dDQ1IDE5bDEyOCAxMjgtOTAgOTAtODMtODMtODMgODNxLTE4IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtODMtODMtODMgODNxLTE5IDE5LTQ1IDE5dC00NS0xOWwtMTI4LTEyOCA5MC05MCA4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MyA4My04M3ExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4M3ptLTE1NzQtMzhxLTE5IDE5LTQ1IDE5dC00NS0xOWwtMTI4LTEyOCA5MC05MCA4MyA4MiA4My04MnExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MiA2NC02NHYtMjkzbC0yMTAtMzE0cS0xNy0yNi03LTU2LjV0NDAtNDAuNWwxNzctNTh2LTI5OWgxMjh2LTEyOGgyNTZ2LTEyOGgyNTZ2MTI4aDI1NnYxMjhoMTI4djI5OWwxNzcgNThxMzAgMTAgNDAgNDAuNXQtNyA1Ni41bC0yMTAgMzE0djI5M2wxOS0xOHExOS0xOSA0NS0xOXQ0NSAxOWw4MyA4MiA4My04MnExOS0xOSA0NS0xOXQ0NSAxOWwxMjggMTI4LTkwIDkwLTgzLTgzLTgzIDgzcS0xOCAxOS00NSAxOXQtNDUtMTlsLTgzLTgzLTgzIDgzcS0xOSAxOS00NSAxOXQtNDUtMTlsLTgzLTgzLTgzIDgzcS0xOSAxOS00NSAxOXQtNDUtMTlsLTgzLTgzLTgzIDgzcS0xOSAxOS00NSAxOXQtNDUtMTlsLTgzLTgzLTgzIDgzcS0xOSAxOS00NSAxOXQtNDUtMTlsLTgzLTgzLTgzIDgzcS0xOSAxOS00NSAxOXQtNDUtMTlsLTgzLTgzem00MDMtMTEzM3YxMjhsMzg0LTEyOCAzODQgMTI4di0xMjhoLTEyOHYtMTI4aC01MTJ2MTI4aC0xMjh6XCIgLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFTaGlwJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
