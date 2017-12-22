var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M558 311q-64 0-110-45.5t-46-110.5q0-64 46-109.5t110-45.5 109.5 45.5 45.5 109.5q0 65-45.5 110.5t-109.5 45.5zm551 642q0 50-30 67.5t-63.5 6.5-47.5-34l-367-438q-7-12-14-15.5t-11-1.5l-3 3q-7 8 4 21l122 139 1 354-161 457q-67 192-92 234-15 26-28 32-50 26-103 1-29-13-41.5-43t-9.5-57q2-17 197-618l5-416-85 164 35 222q4 24-1 42t-14 27.5-19 16-17 7.5l-7 2q-19 3-34.5-3t-24-16-14-22-7.5-19.5-2-9.5l-46-299 211-381q23-34 113-34 75 0 107 40l424 521q7 5 14 17l3 3-1 1q7 13 7 29zm-403 150q43 113 88.5 225t69.5 168l24 55q36 93 42 125 11 70-36 97-35 22-66 16t-51-22-29-35h-1q-6-16-8-25l-124-351zm824 592q31 49 31 57 0 5-3 7-9 5-14.5-.5t-15.5-26-16-30.5q-114-172-423-661 3 1 7-1t7-4l3-2q11-9 11-17z' });

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
icon.displayName = 'FaBlind';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1ibGluZC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSwwcUJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWJsaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk01NTggMzExcS02NCAwLTExMC00NS41dC00Ni0xMTAuNXEwLTY0IDQ2LTEwOS41dDExMC00NS41IDEwOS41IDQ1LjUgNDUuNSAxMDkuNXEwIDY1LTQ1LjUgMTEwLjV0LTEwOS41IDQ1LjV6bTU1MSA2NDJxMCA1MC0zMCA2Ny41dC02My41IDYuNS00Ny41LTM0bC0zNjctNDM4cS03LTEyLTE0LTE1LjV0LTExLTEuNWwtMyAzcS03IDggNCAyMWwxMjIgMTM5IDEgMzU0LTE2MSA0NTdxLTY3IDE5Mi05MiAyMzQtMTUgMjYtMjggMzItNTAgMjYtMTAzIDEtMjktMTMtNDEuNS00M3QtOS41LTU3cTItMTcgMTk3LTYxOGw1LTQxNi04NSAxNjQgMzUgMjIycTQgMjQtMSA0MnQtMTQgMjcuNS0xOSAxNi0xNyA3LjVsLTcgMnEtMTkgMy0zNC41LTN0LTI0LTE2LTE0LTIyLTcuNS0xOS41LTItOS41bC00Ni0yOTkgMjExLTM4MXEyMy0zNCAxMTMtMzQgNzUgMCAxMDcgNDBsNDI0IDUyMXE3IDUgMTQgMTdsMyAzLTEgMXE3IDEzIDcgMjl6bS00MDMgMTUwcTQzIDExMyA4OC41IDIyNXQ2OS41IDE2OGwyNCA1NXEzNiA5MyA0MiAxMjUgMTEgNzAtMzYgOTctMzUgMjItNjYgMTZ0LTUxLTIyLTI5LTM1aC0xcS02LTE2LTgtMjVsLTEyNC0zNTF6bTgyNCA1OTJxMzEgNDkgMzEgNTcgMCA1LTMgNy05IDUtMTQuNS0uNXQtMTUuNS0yNi0xNi0zMC41cS0xMTQtMTcyLTQyMy02NjEgMyAxIDctMXQ3LTRsMy0ycTExLTkgMTEtMTd6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUJsaW5kJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
