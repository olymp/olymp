var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1255 787q0-318-105-474.5t-330-156.5q-222 0-326 157t-104 474q0 316 104 471.5t326 155.5q74 0 131-17-22-43-39-73t-44-65-53.5-56.5-63-36-77.5-14.5q-46 0-79 16l-49-97q105-91 276-91 132 0 215.5 54t150.5 155q67-149 67-402zm390 632h117q3 27-2 67t-26.5 95-58 100.5-107 78-162.5 32.5q-71 0-130.5-19t-105.5-56-79-78-66-96q-97 27-205 27-150 0-292.5-58t-253-158.5-178-249-67.5-317.5q0-170 67.5-319.5t178.5-250.5 253.5-159 291.5-58q121 0 238.5 36t217 106 176 164.5 119.5 219 43 261.5q0 190-80.5 347.5t-218.5 264.5q47 70 93.5 106.5t104.5 36.5q61 0 94-37.5t38-85.5z' });

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
icon.displayName = 'FaQuora';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1xdW9yYS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSx3aUJBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLXF1b3JhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMjU1IDc4N3EwLTMxOC0xMDUtNDc0LjV0LTMzMC0xNTYuNXEtMjIyIDAtMzI2IDE1N3QtMTA0IDQ3NHEwIDMxNiAxMDQgNDcxLjV0MzI2IDE1NS41cTc0IDAgMTMxLTE3LTIyLTQzLTM5LTczdC00NC02NS01My41LTU2LjUtNjMtMzYtNzcuNS0xNC41cS00NiAwLTc5IDE2bC00OS05N3ExMDUtOTEgMjc2LTkxIDEzMiAwIDIxNS41IDU0dDE1MC41IDE1NXE2Ny0xNDkgNjctNDAyem0zOTAgNjMyaDExN3EzIDI3LTIgNjd0LTI2LjUgOTUtNTggMTAwLjUtMTA3IDc4LTE2Mi41IDMyLjVxLTcxIDAtMTMwLjUtMTl0LTEwNS41LTU2LTc5LTc4LTY2LTk2cS05NyAyNy0yMDUgMjctMTUwIDAtMjkyLjUtNTh0LTI1My0xNTguNS0xNzgtMjQ5LTY3LjUtMzE3LjVxMC0xNzAgNjcuNS0zMTkuNXQxNzguNS0yNTAuNSAyNTMuNS0xNTkgMjkxLjUtNThxMTIxIDAgMjM4LjUgMzZ0MjE3IDEwNiAxNzYgMTY0LjUgMTE5LjUgMjE5IDQzIDI2MS41cTAgMTkwLTgwLjUgMzQ3LjV0LTIxOC41IDI2NC41cTQ3IDcwIDkzLjUgMTA2LjV0MTA0LjUgMzYuNXE2MSAwIDk0LTM3LjV0MzgtODUuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhUXVvcmEnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
