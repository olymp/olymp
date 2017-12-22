var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M704 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm896-32v320q0 16-12 25-8 7-20 7-4 0-7-1l-448-96q-11-2-18-11t-7-20h-256v102q111 23 183.5 111t72.5 203v800q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-800q0-106 62.5-190.5t161.5-114.5v-111h-32q-59 0-115 23.5t-91.5 53-66 66.5-40.5 53.5-14 24.5q-17 35-57 35-16 0-29-7-23-12-31.5-37t3.5-49q5-10 14.5-26t37.5-53.5 60.5-70 85-67 108.5-52.5q-25-42-25-86 0-66 47-113t113-47 113 47 47 113q0 33-14 64h302q0-11 7-20t18-11l448-96q3-1 7-1 12 0 20 7 12 9 12 25z' });

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
icon.displayName = 'FaFireExtinguisher';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1maXJlLWV4dGluZ3Vpc2hlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSw4ZkFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixvQkFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWZpcmUtZXh0aW5ndWlzaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03MDQgMTkycTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em04OTYtMzJ2MzIwcTAgMTYtMTIgMjUtOCA3LTIwIDctNCAwLTctMWwtNDQ4LTk2cS0xMS0yLTE4LTExdC03LTIwaC0yNTZ2MTAycTExMSAyMyAxODMuNSAxMTF0NzIuNSAyMDN2ODAwcTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1di04MDBxMC0xMDYgNjIuNS0xOTAuNXQxNjEuNS0xMTQuNXYtMTExaC0zMnEtNTkgMC0xMTUgMjMuNXQtOTEuNSA1My02NiA2Ni41LTQwLjUgNTMuNS0xNCAyNC41cS0xNyAzNS01NyAzNS0xNiAwLTI5LTctMjMtMTItMzEuNS0zN3QzLjUtNDlxNS0xMCAxNC41LTI2dDM3LjUtNTMuNSA2MC41LTcwIDg1LTY3IDEwOC41LTUyLjVxLTI1LTQyLTI1LTg2IDAtNjYgNDctMTEzdDExMy00NyAxMTMgNDcgNDcgMTEzcTAgMzMtMTQgNjRoMzAycTAtMTEgNy0yMHQxOC0xMWw0NDgtOTZxMy0xIDctMSAxMiAwIDIwIDcgMTIgOSAxMiAyNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhRmlyZUV4dGluZ3Vpc2hlcic7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
