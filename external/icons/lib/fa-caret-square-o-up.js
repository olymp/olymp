var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1273 1117q-17 35-57 35h-640q-40 0-57-35-18-35 5-66l320-448q19-27 52-27t52 27l320 448q23 31 5 66zm135 259v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zm256-960v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' });

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
icon.displayName = 'FaCaretSquareOUp';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1jYXJldC1zcXVhcmUtby11cC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSwyV0FBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixrQkFBbkI7QUFDQSxlQUFlUixPQUFPQyxJQUFQLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvbGliL2ZhLWNhcmV0LXNxdWFyZS1vLXVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVkJztcbmNvbnN0IGljb24gPSAoeyBjb2xvciwgd2lkdGgsIGhlaWdodCwgc2l6ZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxzdmcgZmlsbD17Y29sb3J9IHdpZHRoPXtzaXplIHx8IHdpZHRofSBoZWlnaHQ9e3NpemUgfHwgaGVpZ2h0fSB7Li4ucmVzdH0gdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMjczIDExMTdxLTE3IDM1LTU3IDM1aC02NDBxLTQwIDAtNTctMzUtMTgtMzUgNS02NmwzMjAtNDQ4cTE5LTI3IDUyLTI3dDUyIDI3bDMyMCA0NDhxMjMgMzEgNSA2NnptMTM1IDI1OXYtOTYwcTAtMTMtOS41LTIyLjV0LTIyLjUtOS41aC05NjBxLTEzIDAtMjIuNSA5LjV0LTkuNSAyMi41djk2MHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDk2MHExMyAwIDIyLjUtOS41dDkuNS0yMi41em0yNTYtOTYwdjk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwcTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQ2FyZXRTcXVhcmVPVXAnO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pOyJdfQ==