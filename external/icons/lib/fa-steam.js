var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1582 582q0 101-71.5 172.5t-172.5 71.5-172.5-71.5-71.5-172.5 71.5-172.5 172.5-71.5 172.5 71.5 71.5 172.5zm-770 742q0-104-73-177t-177-73q-27 0-54 6l104 42q77 31 109.5 106.5t1.5 151.5q-31 77-107 109t-152 1q-21-8-62-24.5t-61-24.5q32 60 91 96.5t130 36.5q104 0 177-73t73-177zm830-741q0-126-89.5-215.5t-215.5-89.5q-127 0-216.5 89.5t-89.5 215.5q0 127 89.5 216t216.5 89q126 0 215.5-89t89.5-216zm150 0q0 189-133.5 322t-321.5 133l-437 319q-12 129-109 218t-229 89q-121 0-214-76t-118-192l-230-92v-429l389 157q79-48 173-48 13 0 35 2l284-407q2-187 135.5-319t320.5-132q188 0 321.5 133.5t133.5 321.5z' });

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
icon.displayName = 'FaSteam';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1zdGVhbS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSwwa0JBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXN0ZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNTgyIDU4MnEwIDEwMS03MS41IDE3Mi41dC0xNzIuNSA3MS41LTE3Mi41LTcxLjUtNzEuNS0xNzIuNSA3MS41LTE3Mi41IDE3Mi41LTcxLjUgMTcyLjUgNzEuNSA3MS41IDE3Mi41em0tNzcwIDc0MnEwLTEwNC03My0xNzd0LTE3Ny03M3EtMjcgMC01NCA2bDEwNCA0MnE3NyAzMSAxMDkuNSAxMDYuNXQxLjUgMTUxLjVxLTMxIDc3LTEwNyAxMDl0LTE1MiAxcS0yMS04LTYyLTI0LjV0LTYxLTI0LjVxMzIgNjAgOTEgOTYuNXQxMzAgMzYuNXExMDQgMCAxNzctNzN0NzMtMTc3em04MzAtNzQxcTAtMTI2LTg5LjUtMjE1LjV0LTIxNS41LTg5LjVxLTEyNyAwLTIxNi41IDg5LjV0LTg5LjUgMjE1LjVxMCAxMjcgODkuNSAyMTZ0MjE2LjUgODlxMTI2IDAgMjE1LjUtODl0ODkuNS0yMTZ6bTE1MCAwcTAgMTg5LTEzMy41IDMyMnQtMzIxLjUgMTMzbC00MzcgMzE5cS0xMiAxMjktMTA5IDIxOHQtMjI5IDg5cS0xMjEgMC0yMTQtNzZ0LTExOC0xOTJsLTIzMC05MnYtNDI5bDM4OSAxNTdxNzktNDggMTczLTQ4IDEzIDAgMzUgMmwyODQtNDA3cTItMTg3IDEzNS41LTMxOXQzMjAuNS0xMzJxMTg4IDAgMzIxLjUgMTMzLjV0MTMzLjUgMzIxLjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYVN0ZWFtJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
