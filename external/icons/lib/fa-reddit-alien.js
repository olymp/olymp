var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zm-1374 199q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z' });

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
icon.displayName = 'FaRedditAlien';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1yZWRkaXQtYWxpZW4uZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBRXVJLDhCQUFNLEdBQUUsNHVCQUFSLEc7O0FBRHZJLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLGVBQUssTUFBTUosS0FBWCxFQUFrQixPQUFPRyxRQUFRRixLQUFqQyxFQUF3QyxRQUFRRSxRQUFRRCxNQUF4RCxJQUFvRUUsSUFBcEUsSUFBMEUsU0FBUSxlQUFsRixFQUFrRyxPQUFNLDRCQUF4RztBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGVBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1yZWRkaXQtYWxpZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE3OTIgODQ2cTAgNTgtMjkuNSAxMDUuNXQtNzkuNSA3Mi41cTEyIDQ2IDEyIDk2IDAgMTU1LTEwNi41IDI4N3QtMjkwLjUgMjA4LjUtNDAwIDc2LjUtMzk5LjUtNzYuNS0yOTAtMjA4LjUtMTA2LjUtMjg3cTAtNDcgMTEtOTQtNTEtMjUtODItNzMuNXQtMzEtMTA2LjVxMC04MiA1OC0xNDAuNXQxNDEtNTguNXE4NSAwIDE0NSA2MyAyMTgtMTUyIDUxNS0xNjJsMTE2LTUyMXEzLTEzIDE1LTIxdDI2LTVsMzY5IDgxcTE4LTM3IDU0LTU5LjV0NzktMjIuNXE2MiAwIDEwNiA0My41dDQ0IDEwNS41LTQ0IDEwNi0xMDYgNDQtMTA1LjUtNDMuNS00My41LTEwNS41bC0zMzQtNzQtMTA0IDQ3MnEzMDAgOSA1MTkgMTYwIDU4LTYxIDE0My02MSA4MyAwIDE0MSA1OC41dDU4IDE0MC41em0tMTM3NCAxOTlxMCA2MiA0My41IDEwNnQxMDUuNSA0NCAxMDYtNDQgNDQtMTA2LTQ0LTEwNS41LTEwNi00My41cS02MSAwLTEwNSA0NHQtNDQgMTA1em04MTAgMzU1cTExLTExIDExLTI2dC0xMS0yNnEtMTAtMTAtMjUtMTB0LTI2IDEwcS00MSA0Mi0xMjEgNjJ0LTE2MCAyMC0xNjAtMjAtMTIxLTYycS0xMS0xMC0yNi0xMHQtMjUgMTBxLTExIDEwLTExIDI1LjV0MTEgMjYuNXE0MyA0MyAxMTguNSA2OHQxMjIuNSAyOS41IDkxIDQuNSA5MS00LjUgMTIyLjUtMjkuNSAxMTguNS02OHptLTMtMjA1cTYyIDAgMTA1LjUtNDR0NDMuNS0xMDZxMC02MS00NC0xMDV0LTEwNS00NHEtNjIgMC0xMDYgNDMuNXQtNDQgMTA1LjUgNDQgMTA2IDEwNiA0NHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhUmVkZGl0QWxpZW4nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==
