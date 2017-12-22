var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1408 1600q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-764q0-189-167-189-26 0-56 5-16-30-52.5-47.5t-73.5-17.5-69 18q-50-53-119-53-25 0-55.5 10t-47.5 25v-331q0-52-38-90t-90-38q-51 0-89.5 39t-38.5 89v576q-20 0-48.5-15t-55-33-68-33-84.5-15q-67 0-97.5 44.5t-30.5 115.5q0 24 139 90 44 24 65 37 64 40 145 112 81 71 106 101 57 69 57 140v32h640v-32q0-72 32-167t64-193.5 32-179.5zm128-5q0 133-69 322-59 164-59 223v288q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5v-288q0-10-4.5-21.5t-14-23.5-18-22.5-22.5-24-21.5-20.5-21.5-19-17-14q-74-65-129-100-21-13-62-33t-72-37-63-40.5-49.5-55-17.5-69.5q0-125 67-206.5t189-81.5q68 0 128 22v-374q0-104 76-180t179-76q105 0 181 75.5t76 180.5v169q62 4 119 37 21-3 43-3 101 0 178 60 139-1 219.5 85t80.5 227z' });

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
icon.displayName = 'FaHandOUp';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1oYW5kLW8tdXAuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsd3ZCQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1oYW5kLW8tdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0MDggMTYwMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTc2NHEwLTE4OS0xNjctMTg5LTI2IDAtNTYgNS0xNi0zMC01Mi41LTQ3LjV0LTczLjUtMTcuNS02OSAxOHEtNTAtNTMtMTE5LTUzLTI1IDAtNTUuNSAxMHQtNDcuNSAyNXYtMzMxcTAtNTItMzgtOTB0LTkwLTM4cS01MSAwLTg5LjUgMzl0LTM4LjUgODl2NTc2cS0yMCAwLTQ4LjUtMTV0LTU1LTMzLTY4LTMzLTg0LjUtMTVxLTY3IDAtOTcuNSA0NC41dC0zMC41IDExNS41cTAgMjQgMTM5IDkwIDQ0IDI0IDY1IDM3IDY0IDQwIDE0NSAxMTIgODEgNzEgMTA2IDEwMSA1NyA2OSA1NyAxNDB2MzJoNjQwdi0zMnEwLTcyIDMyLTE2N3Q2NC0xOTMuNSAzMi0xNzkuNXptMTI4LTVxMCAxMzMtNjkgMzIyLTU5IDE2NC01OSAyMjN2Mjg4cTAgNTMtMzcuNSA5MC41dC05MC41IDM3LjVoLTY0MHEtNTMgMC05MC41LTM3LjV0LTM3LjUtOTAuNXYtMjg4cTAtMTAtNC41LTIxLjV0LTE0LTIzLjUtMTgtMjIuNS0yMi41LTI0LTIxLjUtMjAuNS0yMS41LTE5LTE3LTE0cS03NC02NS0xMjktMTAwLTIxLTEzLTYyLTMzdC03Mi0zNy02My00MC41LTQ5LjUtNTUtMTcuNS02OS41cTAtMTI1IDY3LTIwNi41dDE4OS04MS41cTY4IDAgMTI4IDIydi0zNzRxMC0xMDQgNzYtMTgwdDE3OS03NnExMDUgMCAxODEgNzUuNXQ3NiAxODAuNXYxNjlxNjIgNCAxMTkgMzcgMjEtMyA0My0zIDEwMSAwIDE3OCA2MCAxMzktMSAyMTkuNSA4NXQ4MC41IDIyN3pcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhSGFuZE9VcCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
