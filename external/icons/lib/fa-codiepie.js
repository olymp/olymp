var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1584 1290l-218-111q-74 120-196.5 189t-263.5 69q-147 0-271-72t-196-196-72-270q0-110 42.5-209.5t115-172 172-115 209.5-42.5q131 0 247.5 60.5t192.5 168.5l215-125q-110-169-286.5-265t-378.5-96q-161 0-308 63t-253 169-169 253-63 308 63 308 169 253 253 169 308 63q213 0 397.5-107t290.5-292zm-554-397l693 352q-116 253-334.5 400t-492.5 147q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71q260 0 470.5 133.5t335.5 366.5zm513 3h-39v160h-96v-352h136q32 0 54.5 20t28.5 48 1 56-27.5 48-57.5 20z' });

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
icon.displayName = 'FaCodiepie';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1jb2RpZXBpZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSxvZkFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixZQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtY29kaWVwaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1ODQgMTI5MGwtMjE4LTExMXEtNzQgMTIwLTE5Ni41IDE4OXQtMjYzLjUgNjlxLTE0NyAwLTI3MS03MnQtMTk2LTE5Ni03Mi0yNzBxMC0xMTAgNDIuNS0yMDkuNXQxMTUtMTcyIDE3Mi0xMTUgMjA5LjUtNDIuNXExMzEgMCAyNDcuNSA2MC41dDE5Mi41IDE2OC41bDIxNS0xMjVxLTExMC0xNjktMjg2LjUtMjY1dC0zNzguNS05NnEtMTYxIDAtMzA4IDYzdC0yNTMgMTY5LTE2OSAyNTMtNjMgMzA4IDYzIDMwOCAxNjkgMjUzIDI1MyAxNjkgMzA4IDYzcTIxMyAwIDM5Ny41LTEwN3QyOTAuNS0yOTJ6bS01NTQtMzk3bDY5MyAzNTJxLTExNiAyNTMtMzM0LjUgNDAwdC00OTIuNSAxNDdxLTE4MiAwLTM0OC03MXQtMjg2LTE5MS0xOTEtMjg2LTcxLTM0OCA3MS0zNDggMTkxLTI4NiAyODYtMTkxIDM0OC03MXEyNjAgMCA0NzAuNSAxMzMuNXQzMzUuNSAzNjYuNXptNTEzIDNoLTM5djE2MGgtOTZ2LTM1MmgxMzZxMzIgMCA1NC41IDIwdDI4LjUgNDggMSA1Ni0yNy41IDQ4LTU3LjUgMjB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNvZGllcGllJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
