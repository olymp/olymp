var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1893 392l155 1272q-131 0-257-57-200-91-393-91-226 0-374 148-148-148-374-148-193 0-393 91-128 57-252 57h-5l155-1272q224-127 482-127 233 0 387 106 154-106 387-106 258 0 482 127zm-495 987q129 0 232 28.5t260 93.5l-124-1021q-171-78-368-78-224 0-374 141-150-141-374-141-197 0-368 78l-124 1021q105-43 165.5-65t148.5-39.5 178-17.5q202 0 374 108 172-108 374-108zm40-34l-55-907q-211 4-359 155-152-155-374-155-176 0-336 66l-114 941q124-51 228.5-76t221.5-25q209 0 374 102 172-107 374-102z' });

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
icon.displayName = 'FaLeanpub';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1sZWFucHViLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUd3SSw4QkFBTSxHQUFFLCtkQUFSLEc7O0FBRHhJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1sZWFucHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcblxuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAgdmlld0JveD1cIjAgMCAyMDQ4IDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xODkzIDM5MmwxNTUgMTI3MnEtMTMxIDAtMjU3LTU3LTIwMC05MS0zOTMtOTEtMjI2IDAtMzc0IDE0OC0xNDgtMTQ4LTM3NC0xNDgtMTkzIDAtMzkzIDkxLTEyOCA1Ny0yNTIgNTdoLTVsMTU1LTEyNzJxMjI0LTEyNyA0ODItMTI3IDIzMyAwIDM4NyAxMDYgMTU0LTEwNiAzODctMTA2IDI1OCAwIDQ4MiAxMjd6bS00OTUgOTg3cTEyOSAwIDIzMiAyOC41dDI2MCA5My41bC0xMjQtMTAyMXEtMTcxLTc4LTM2OC03OC0yMjQgMC0zNzQgMTQxLTE1MC0xNDEtMzc0LTE0MS0xOTcgMC0zNjggNzhsLTEyNCAxMDIxcTEwNS00MyAxNjUuNS02NXQxNDguNS0zOS41IDE3OC0xNy41cTIwMiAwIDM3NCAxMDggMTcyLTEwOCAzNzQtMTA4em00MC0zNGwtNTUtOTA3cS0yMTEgNC0zNTkgMTU1LTE1Mi0xNTUtMzc0LTE1NS0xNzYgMC0zMzYgNjZsLTExNCA5NDFxMTI0LTUxIDIyOC41LTc2dDIyMS41LTI1cTIwOSAwIDM3NCAxMDIgMTcyLTEwNyAzNzQtMTAyelwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhTGVhbnB1Yic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
