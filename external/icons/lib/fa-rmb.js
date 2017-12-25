var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M985.5 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z' });

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
icon.displayName = 'FaRmb';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1ybWIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsbWNBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsT0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXJtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOTg1LjUgMTUzNmgtMTcycS0xMyAwLTIyLjUtOXQtOS41LTIzdi0zMzBoLTI4OHEtMTMgMC0yMi41LTl0LTkuNS0yM3YtMTAzcTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMjg4di04NWgtMjg4cS0xMyAwLTIyLjUtOXQtOS41LTIzdi0xMDRxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgyMTRsLTMyMS01NzhxLTgtMTYgMC0zMiAxMC0xNiAyOC0xNmgxOTRxMTkgMCAyOSAxOGwyMTUgNDI1cTE5IDM4IDU2IDEyNSAxMC0yNCAzMC41LTY4dDI3LjUtNjFsMTkxLTQyMHE4LTE5IDI5LTE5aDE5MXExNyAwIDI3IDE2IDkgMTQgMSAzMWwtMzEzIDU3OWgyMTVxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXYxMDRxMCAxNC05LjUgMjN0LTIyLjUgOWgtMjkwdjg1aDI5MHExMyAwIDIyLjUgOS41dDkuNSAyMi41djEwM3EwIDE0LTkuNSAyM3QtMjIuNSA5aC0yOTB2MzMwcTAgMTMtOS41IDIyLjV0LTIyLjUgOS41elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFSbWInO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==