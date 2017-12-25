var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M384 832h160v-224h-160v224zm837 332v-92q-104 36-243 38-135 1-259.5-46.5t-220.5-122.5l1 96q88 80 212 128.5t272 47.5q129 0 238-49zm-581-332h640v-224h-640v224zm1152-32q0 187-99 352 89 102 89 229 0 157-129.5 268t-313.5 111q-122 0-225-52.5t-161-140.5q-19 1-57 1t-57-1q-58 88-161 140.5t-225 52.5q-184 0-313.5-111t-129.5-268q0-127 89-229-99-165-99-352 0-209 120-385.5t326.5-279.5 449.5-103 449.5 103 326.5 279.5 120 385.5z' });

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
icon.displayName = 'FaWpbeginner';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS13cGJlZ2lubmVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImljb24iLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsInJlc3QiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFdBQW5COztZQUV1SSw4QkFBTSxHQUFFLGlhQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGNBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS13cGJlZ2lubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zODQgODMyaDE2MHYtMjI0aC0xNjB2MjI0em04MzcgMzMydi05MnEtMTA0IDM2LTI0MyAzOC0xMzUgMS0yNTkuNS00Ni41dC0yMjAuNS0xMjIuNWwxIDk2cTg4IDgwIDIxMiAxMjguNXQyNzIgNDcuNXExMjkgMCAyMzgtNDl6bS01ODEtMzMyaDY0MHYtMjI0aC02NDB2MjI0em0xMTUyLTMycTAgMTg3LTk5IDM1MiA4OSAxMDIgODkgMjI5IDAgMTU3LTEyOS41IDI2OHQtMzEzLjUgMTExcS0xMjIgMC0yMjUtNTIuNXQtMTYxLTE0MC41cS0xOSAxLTU3IDF0LTU3LTFxLTU4IDg4LTE2MSAxNDAuNXQtMjI1IDUyLjVxLTE4NCAwLTMxMy41LTExMXQtMTI5LjUtMjY4cTAtMTI3IDg5LTIyOS05OS0xNjUtOTktMzUyIDAtMjA5IDEyMC0zODUuNXQzMjYuNS0yNzkuNSA0NDkuNS0xMDMgNDQ5LjUgMTAzIDMyNi41IDI3OS41IDEyMCAzODUuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhV3BiZWdpbm5lcic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19