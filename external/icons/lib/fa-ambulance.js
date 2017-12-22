var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M704 1408q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-512h384v-256h-158q-14 2-22 9l-195 195q-7 12-9 22v30zm1280 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm128-672v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zm256-544v1152q0 26-19 45t-45 19h-192q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-128q-26 0-45-19t-19-45 19-45 45-19v-416q0-26 13-58t32-51l198-198q19-19 51-32t58-13h160v-320q0-26 19-45t45-19h1152q26 0 45 19t19 45z' });

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
icon.displayName = 'FaAmbulance';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1hbWJ1bGFuY2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBR3dJLDhCQUFNLEdBQUUsNnFCQUFSLEc7O0FBRHhJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMkUsU0FBUSxlQUFuRixFQUFtRyxPQUFNLDRCQUF6RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGFBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1hbWJ1bGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcwNCAxNDA4cTAtNTMtMzcuNS05MC41dC05MC41LTM3LjUtOTAuNSAzNy41LTM3LjUgOTAuNSAzNy41IDkwLjUgOTAuNSAzNy41IDkwLjUtMzcuNSAzNy41LTkwLjV6bS0zODQtNTEyaDM4NHYtMjU2aC0xNThxLTE0IDItMjIgOWwtMTk1IDE5NXEtNyAxMi05IDIydjMwem0xMjgwIDUxMnEwLTUzLTM3LjUtOTAuNXQtOTAuNS0zNy41LTkwLjUgMzcuNS0zNy41IDkwLjUgMzcuNSA5MC41IDkwLjUgMzcuNSA5MC41LTM3LjUgMzcuNS05MC41em0xMjgtNjcydi0xOTJxMC0xNC05LTIzdC0yMy05aC0yMjR2LTIyNHEwLTE0LTktMjN0LTIzLTloLTE5MnEtMTQgMC0yMyA5dC05IDIzdjIyNGgtMjI0cS0xNCAwLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDIyNHYyMjRxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMtOXQ5LTIzdi0yMjRoMjI0cTE0IDAgMjMtOXQ5LTIzem0yNTYtNTQ0djExNTJxMCAyNi0xOSA0NXQtNDUgMTloLTE5MnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxaC0zODRxMCAxMDYtNzUgMTgxdC0xODEgNzUtMTgxLTc1LTc1LTE4MWgtMTI4cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NSA0NS0xOXYtNDE2cTAtMjYgMTMtNTh0MzItNTFsMTk4LTE5OHExOS0xOSA1MS0zMnQ1OC0xM2gxNjB2LTMyMHEwLTI2IDE5LTQ1dDQ1LTE5aDExNTJxMjYgMCA0NSAxOXQxOSA0NXpcIiAvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUFtYnVsYW5jZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
