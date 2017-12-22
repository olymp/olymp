var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M896 816q-104-196-160-278-139-202-347-318-34-19-70-36-89-40-94-32t34 38l39 31q62 43 112.5 93.5t94.5 116.5 70.5 113 70.5 131q9 17 13 25 44 84 84 153t98 154 115.5 150 131 123.5 148.5 90.5q153 66 154 60 1-3-49-37-53-36-81-57-77-58-179-211t-185-310zm-347 543q-76-60-132.5-125t-98-143.5-71-154.5-58.5-186-52-209-60.5-252-76.5-289q273 0 497.5 36t379 92 271 144.5 185.5 172.5 110 198.5 56 199.5 12.5 198.5-9.5 173-20 143.5-13 107l323 327h-104l-281-285q-22 2-91.5 14t-121.5 19-138 6-160.5-17-167.5-59-179-111z' });

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
icon.displayName = 'FaEnvira';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1lbnZpcmEuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsdWZBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsVUFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWVudmlyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODk2IDgxNnEtMTA0LTE5Ni0xNjAtMjc4LTEzOS0yMDItMzQ3LTMxOC0zNC0xOS03MC0zNi04OS00MC05NC0zMnQzNCAzOGwzOSAzMXE2MiA0MyAxMTIuNSA5My41dDk0LjUgMTE2LjUgNzAuNSAxMTMgNzAuNSAxMzFxOSAxNyAxMyAyNSA0NCA4NCA4NCAxNTN0OTggMTU0IDExNS41IDE1MCAxMzEgMTIzLjUgMTQ4LjUgOTAuNXExNTMgNjYgMTU0IDYwIDEtMy00OS0zNy01My0zNi04MS01Ny03Ny01OC0xNzktMjExdC0xODUtMzEwem0tMzQ3IDU0M3EtNzYtNjAtMTMyLjUtMTI1dC05OC0xNDMuNS03MS0xNTQuNS01OC41LTE4Ni01Mi0yMDktNjAuNS0yNTItNzYuNS0yODlxMjczIDAgNDk3LjUgMzZ0Mzc5IDkyIDI3MSAxNDQuNSAxODUuNSAxNzIuNSAxMTAgMTk4LjUgNTYgMTk5LjUgMTIuNSAxOTguNS05LjUgMTczLTIwIDE0My41LTEzIDEwN2wzMjMgMzI3aC0xMDRsLTI4MS0yODVxLTIyIDItOTEuNSAxNHQtMTIxLjUgMTktMTM4IDYtMTYwLjUtMTctMTY3LjUtNTktMTc5LTExMXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhRW52aXJhJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
