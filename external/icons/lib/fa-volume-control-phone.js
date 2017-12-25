var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M809 1689q0-11-13-58t-31-107-20-69q-1-4-5-26.5t-8.5-36-13.5-21.5q-15-14-51-14-23 0-70 5.5t-71 5.5q-34 0-47-11-6-5-11-15.5t-7.5-20-6.5-24-5-18.5q-37-128-37-255t37-255q1-4 5-18.5t6.5-24 7.5-20 11-15.5q13-11 47-11 24 0 71 5.5t70 5.5q36 0 51-14 9-8 13.5-21.5t8.5-36 5-26.5q2-9 20-69t31-107 13-58q0-22-43.5-52.5t-75.5-42.5q-20-8-45-8-34 0-98 18-57 17-96.5 40.5t-71 66-46 70-45.5 94.5q-6 12-9 19-49 107-68 216t-19 244 19 244 68 216q56 122 83 161 63 91 179 127l6 2q64 18 98 18 25 0 45-8 32-12 75.5-42.5t43.5-52.5zm159-913q-26 0-45-19t-19-45.5 19-45.5q37-37 37-90 0-52-37-91-19-19-19-45t19-45 45-19 45 19q75 75 75 181t-75 181q-21 19-45 19zm181 181q-27 0-45-19-19-19-19-45t19-45q112-114 112-272t-112-272q-19-19-19-45t19-45 45-19 45 19q150 150 150 362t-150 362q-18 19-45 19zm181 181q-27 0-45-19-19-19-19-45t19-45q90-91 138.5-208t48.5-245-48.5-245-138.5-208q-19-19-19-45t19-45 45-19 45 19q109 109 167 249t58 294-58 294-167 249q-18 19-45 19z' });

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
icon.displayName = 'FaVolumeControlPhone';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS12b2x1bWUtY29udHJvbC1waG9uZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSxtNkJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsc0JBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS12b2x1bWUtY29udHJvbC1waG9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNODA5IDE2ODlxMC0xMS0xMy01OHQtMzEtMTA3LTIwLTY5cS0xLTQtNS0yNi41dC04LjUtMzYtMTMuNS0yMS41cS0xNS0xNC01MS0xNC0yMyAwLTcwIDUuNXQtNzEgNS41cS0zNCAwLTQ3LTExLTYtNS0xMS0xNS41dC03LjUtMjAtNi41LTI0LTUtMTguNXEtMzctMTI4LTM3LTI1NXQzNy0yNTVxMS00IDUtMTguNXQ2LjUtMjQgNy41LTIwIDExLTE1LjVxMTMtMTEgNDctMTEgMjQgMCA3MSA1LjV0NzAgNS41cTM2IDAgNTEtMTQgOS04IDEzLjUtMjEuNXQ4LjUtMzYgNS0yNi41cTItOSAyMC02OXQzMS0xMDcgMTMtNThxMC0yMi00My41LTUyLjV0LTc1LjUtNDIuNXEtMjAtOC00NS04LTM0IDAtOTggMTgtNTcgMTctOTYuNSA0MC41dC03MSA2Ni00NiA3MC00NS41IDk0LjVxLTYgMTItOSAxOS00OSAxMDctNjggMjE2dC0xOSAyNDQgMTkgMjQ0IDY4IDIxNnE1NiAxMjIgODMgMTYxIDYzIDkxIDE3OSAxMjdsNiAycTY0IDE4IDk4IDE4IDI1IDAgNDUtOCAzMi0xMiA3NS41LTQyLjV0NDMuNS01Mi41em0xNTktOTEzcS0yNiAwLTQ1LTE5dC0xOS00NS41IDE5LTQ1LjVxMzctMzcgMzctOTAgMC01Mi0zNy05MS0xOS0xOS0xOS00NXQxOS00NSA0NS0xOSA0NSAxOXE3NSA3NSA3NSAxODF0LTc1IDE4MXEtMjEgMTktNDUgMTl6bTE4MSAxODFxLTI3IDAtNDUtMTktMTktMTktMTktNDV0MTktNDVxMTEyLTExNCAxMTItMjcydC0xMTItMjcycS0xOS0xOS0xOS00NXQxOS00NSA0NS0xOSA0NSAxOXExNTAgMTUwIDE1MCAzNjJ0LTE1MCAzNjJxLTE4IDE5LTQ1IDE5em0xODEgMTgxcS0yNyAwLTQ1LTE5LTE5LTE5LTE5LTQ1dDE5LTQ1cTkwLTkxIDEzOC41LTIwOHQ0OC41LTI0NS00OC41LTI0NS0xMzguNS0yMDhxLTE5LTE5LTE5LTQ1dDE5LTQ1IDQ1LTE5IDQ1IDE5cTEwOSAxMDkgMTY3IDI0OXQ1OCAyOTQtNTggMjk0LTE2NyAyNDlxLTE4IDE5LTQ1IDE5elwiLz48L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFWb2x1bWVDb250cm9sUGhvbmUnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==