var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M894.5 544v117q0 13-9.5 22t-22.5 9h-298v812q0 13-9 22.5t-22 9.5h-135q-13 0-22.5-9t-9.5-23v-812h-297q-13 0-22.5-9t-9.5-22v-117q0-14 9-23t23-9h793q13 0 22.5 9.5t9.5 22.5zm1038-3l77 961q1 13-8 24-10 10-23 10h-134q-12 0-21-8.5t-10-20.5l-46-588-189 425q-8 19-29 19h-120q-20 0-29-19l-188-427-45 590q-1 12-10 20.5t-21 8.5h-135q-13 0-23-10-9-10-9-24l78-961q1-12 10-20.5t21-8.5h142q20 0 29 19l220 520q10 24 20 51 3-7 9.5-24.5t10.5-26.5l221-520q9-19 29-19h141q13 0 22 8.5t10 20.5z' });

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
icon.displayName = 'FaTrademark';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS10cmFkZW1hcmsuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBR3dJLDhCQUFNLEdBQUUsd2RBQVIsRzs7QUFEeEksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEyRSxTQUFRLGVBQW5GLEVBQW1HLE9BQU0sNEJBQXpHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsYUFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXRyYWRlbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5cbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gIHZpZXdCb3g9XCIwIDAgMjA0OCAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODk0LjUgNTQ0djExN3EwIDEzLTkuNSAyMnQtMjIuNSA5aC0yOTh2ODEycTAgMTMtOSAyMi41dC0yMiA5LjVoLTEzNXEtMTMgMC0yMi41LTl0LTkuNS0yM3YtODEyaC0yOTdxLTEzIDAtMjIuNS05dC05LjUtMjJ2LTExN3EwLTE0IDktMjN0MjMtOWg3OTNxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXptMTAzOC0zbDc3IDk2MXExIDEzLTggMjQtMTAgMTAtMjMgMTBoLTEzNHEtMTIgMC0yMS04LjV0LTEwLTIwLjVsLTQ2LTU4OC0xODkgNDI1cS04IDE5LTI5IDE5aC0xMjBxLTIwIDAtMjktMTlsLTE4OC00MjctNDUgNTkwcS0xIDEyLTEwIDIwLjV0LTIxIDguNWgtMTM1cS0xMyAwLTIzLTEwLTktMTAtOS0yNGw3OC05NjFxMS0xMiAxMC0yMC41dDIxLTguNWgxNDJxMjAgMCAyOSAxOWwyMjAgNTIwcTEwIDI0IDIwIDUxIDMtNyA5LjUtMjQuNXQxMC41LTI2LjVsMjIxLTUyMHE5LTE5IDI5LTE5aDE0MXExMyAwIDIyIDguNXQxMCAyMC41elwiIC8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhVHJhZGVtYXJrJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=