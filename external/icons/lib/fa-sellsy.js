var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1500 1371v-733q0-21-15-36t-35-15h-93q-20 0-35 15t-15 36v733q0 20 15 35t35 15h93q20 0 35-15t15-35zm-284 0v-531q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v531q0 20 15 35t35 15h101q20 0 35-15t15-35zm-292 0v-429q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v429q0 20 15 35t35 15h101q20 0 35-15t15-35zm-292 0v-362q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v362q0 20 15 35t35 15h101q20 0 35-15t15-35zm1416-146q0 166-118 284t-284 118h-1244q-166 0-284-118t-118-284q0-116 63-214.5t168-148.5q-10-34-10-73 0-113 80.5-193.5t193.5-80.5q102 0 180 67 45-183 194-300t338-117q149 0 275 73.5t199.5 199.5 73.5 275q0 66-14 122 135 33 221 142.5t86 247.5z' });

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
icon.displayName = 'FaSellsy';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zZWxsc3kuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBR3dJLDhCQUFNLEdBQUUsc25CQUFSLEc7O0FBRHhJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFVBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1zZWxsc3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1MDAgMTM3MXYtNzMzcTAtMjEtMTUtMzZ0LTM1LTE1aC05M3EtMjAgMC0zNSAxNXQtMTUgMzZ2NzMzcTAgMjAgMTUgMzV0MzUgMTVoOTNxMjAgMCAzNS0xNXQxNS0zNXptLTI4NCAwdi01MzFxMC0yMC0xNS0zNXQtMzUtMTVoLTEwMXEtMjAgMC0zNSAxNXQtMTUgMzV2NTMxcTAgMjAgMTUgMzV0MzUgMTVoMTAxcTIwIDAgMzUtMTV0MTUtMzV6bS0yOTIgMHYtNDI5cTAtMjAtMTUtMzV0LTM1LTE1aC0xMDFxLTIwIDAtMzUgMTV0LTE1IDM1djQyOXEwIDIwIDE1IDM1dDM1IDE1aDEwMXEyMCAwIDM1LTE1dDE1LTM1em0tMjkyIDB2LTM2MnEwLTIwLTE1LTM1dC0zNS0xNWgtMTAxcS0yMCAwLTM1IDE1dC0xNSAzNXYzNjJxMCAyMCAxNSAzNXQzNSAxNWgxMDFxMjAgMCAzNS0xNXQxNS0zNXptMTQxNi0xNDZxMCAxNjYtMTE4IDI4NHQtMjg0IDExOGgtMTI0NHEtMTY2IDAtMjg0LTExOHQtMTE4LTI4NHEwLTExNiA2My0yMTQuNXQxNjgtMTQ4LjVxLTEwLTM0LTEwLTczIDAtMTEzIDgwLjUtMTkzLjV0MTkzLjUtODAuNXExMDIgMCAxODAgNjcgNDUtMTgzIDE5NC0zMDB0MzM4LTExN3ExNDkgMCAyNzUgNzMuNXQxOTkuNSAxOTkuNSA3My41IDI3NXEwIDY2LTE0IDEyMiAxMzUgMzMgMjIxIDE0Mi41dDg2IDI0Ny41elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhU2VsbHN5JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
