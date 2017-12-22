var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M684 1120q-110 64-268 64h-128v-64h-64q-13 0-22.5-23.5t-9.5-56.5q0-24 7-49-58-2-96.5-10.5t-38.5-20.5 38.5-20.5 96.5-10.5q-7-25-7-49 0-33 9.5-56.5t22.5-23.5h64v-64h128q158 0 268 64h1113q42 7 106.5 18t80.5 14q89 15 150 40.5t83.5 47.5 22.5 40-22.5 40-83.5 47.5-150 40.5q-16 3-80.5 14t-106.5 18h-1113zm1119-252q53 36 53 92t-53 92l81 30q68-48 68-122t-68-122zm-1114 268h1015q-217 38-456 80-57 0-113 24t-83 48l-28 24-288 288q-26 26-70.5 45t-89.5 19h-96l-93-464h29q157 0 273-64zm-273-416h-29l93-464h96q46 0 90 19t70 45l288 288q4 4 11 10.5t30.5 23 48.5 29 61.5 23 72.5 10.5l456 80h-1015q-116-64-273-64z' });

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
icon.displayName = 'FaSpaceShuttle';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zcGFjZS1zaHV0dGxlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUVvSiw4QkFBTSxHQUFFLGtsQkFBUixHOztBQURwSixJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLE9BQU0sTUFBaEYsRUFBdUYsU0FBUSxlQUEvRixFQUErRyxPQUFNLDRCQUFySDtBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGdCQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtc3BhY2Utc2h1dHRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHdpZHRoPVwiMjMwNFwiIHZpZXdCb3g9XCIwIDAgMjMwNCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNjg0IDExMjBxLTExMCA2NC0yNjggNjRoLTEyOHYtNjRoLTY0cS0xMyAwLTIyLjUtMjMuNXQtOS41LTU2LjVxMC0yNCA3LTQ5LTU4LTItOTYuNS0xMC41dC0zOC41LTIwLjUgMzguNS0yMC41IDk2LjUtMTAuNXEtNy0yNS03LTQ5IDAtMzMgOS41LTU2LjV0MjIuNS0yMy41aDY0di02NGgxMjhxMTU4IDAgMjY4IDY0aDExMTNxNDIgNyAxMDYuNSAxOHQ4MC41IDE0cTg5IDE1IDE1MCA0MC41dDgzLjUgNDcuNSAyMi41IDQwLTIyLjUgNDAtODMuNSA0Ny41LTE1MCA0MC41cS0xNiAzLTgwLjUgMTR0LTEwNi41IDE4aC0xMTEzem0xMTE5LTI1MnE1MyAzNiA1MyA5MnQtNTMgOTJsODEgMzBxNjgtNDggNjgtMTIydC02OC0xMjJ6bS0xMTE0IDI2OGgxMDE1cS0yMTcgMzgtNDU2IDgwLTU3IDAtMTEzIDI0dC04MyA0OGwtMjggMjQtMjg4IDI4OHEtMjYgMjYtNzAuNSA0NXQtODkuNSAxOWgtOTZsLTkzLTQ2NGgyOXExNTcgMCAyNzMtNjR6bS0yNzMtNDE2aC0yOWw5My00NjRoOTZxNDYgMCA5MCAxOXQ3MCA0NWwyODggMjg4cTQgNCAxMSAxMC41dDMwLjUgMjMgNDguNSAyOSA2MS41IDIzIDcyLjUgMTAuNWw0NTYgODBoLTEwMTVxLTExNi02NC0yNzMtNjR6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVNwYWNlU2h1dHRsZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
