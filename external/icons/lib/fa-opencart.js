var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1524 1561q0 68-48 116t-116 48-116.5-48-48.5-116 48.5-116.5 116.5-48.5 116 48.5 48 116.5zm-749 0q0 68-48.5 116t-116.5 48-116-48-48-116 48-116.5 116-48.5 116.5 48.5 48.5 116.5zm-775-1494q57 60 110.5 104.5t121 82 136 63 166 45.5 200 31.5 250 18.5 304 9.5 372.5 2.5q139 0 244.5 5t181 16.5 124 27.5 71 39.5 24 51.5-19.5 64-56.5 76.5-89.5 91-116 104.5-139 119q-185 157-286 247 29-51 76.5-109t94-105.5 94.5-98.5 83-91.5 54-80.5 13-70-45.5-55.5-116.5-41-204-23.5-304-5q-168 2-314-6t-256-23-204.5-41-159.5-51.5-122.5-62.5-91.5-66.5-68-71.5-50.5-69.5-40-68-36.5-59.5z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({ fill: color, width: size || width, height: size || height }, rest, { width: '2304', viewBox: '0 0 2304 1792', xmlns: 'http://www.w3.org/2000/svg' }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaOpencart';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1vcGVuY2FydC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFb0osOEJBQU0sR0FBRSxnakJBQVIsRzs7QUFEcEosSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxPQUFNLE1BQWhGLEVBQXVGLFNBQVEsZUFBL0YsRUFBK0csT0FBTSw0QkFBckg7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixZQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtb3BlbmNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB3aWR0aD1cIjIzMDRcIiB2aWV3Qm94PVwiMCAwIDIzMDQgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1MjQgMTU2MXEwIDY4LTQ4IDExNnQtMTE2IDQ4LTExNi41LTQ4LTQ4LjUtMTE2IDQ4LjUtMTE2LjUgMTE2LjUtNDguNSAxMTYgNDguNSA0OCAxMTYuNXptLTc0OSAwcTAgNjgtNDguNSAxMTZ0LTExNi41IDQ4LTExNi00OC00OC0xMTYgNDgtMTE2LjUgMTE2LTQ4LjUgMTE2LjUgNDguNSA0OC41IDExNi41em0tNzc1LTE0OTRxNTcgNjAgMTEwLjUgMTA0LjV0MTIxIDgyIDEzNiA2MyAxNjYgNDUuNSAyMDAgMzEuNSAyNTAgMTguNSAzMDQgOS41IDM3Mi41IDIuNXExMzkgMCAyNDQuNSA1dDE4MSAxNi41IDEyNCAyNy41IDcxIDM5LjUgMjQgNTEuNS0xOS41IDY0LTU2LjUgNzYuNS04OS41IDkxLTExNiAxMDQuNS0xMzkgMTE5cS0xODUgMTU3LTI4NiAyNDcgMjktNTEgNzYuNS0xMDl0OTQtMTA1LjUgOTQuNS05OC41IDgzLTkxLjUgNTQtODAuNSAxMy03MC00NS41LTU1LjUtMTE2LjUtNDEtMjA0LTIzLjUtMzA0LTVxLTE2OCAyLTMxNC02dC0yNTYtMjMtMjA0LjUtNDEtMTU5LjUtNTEuNS0xMjIuNS02Mi41LTkxLjUtNjYuNS02OC03MS41LTUwLjUtNjkuNS00MC02OC0zNi41LTU5LjV6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYU9wZW5jYXJ0JztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=