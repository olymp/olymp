var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M480 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zm36-320h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zm1372 320q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zm160-96v384q0 14-9 23t-23 9h-96v128q0 80-56 136t-136 56-136-56-56-136v-128h-1024v128q0 80-56 136t-136 56-136-56-56-136v-128h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h768q98 0 179 63.5t104 157.5l105 419h28q93 0 158.5 65.5t65.5 158.5z' });

var icon = function icon(_ref) {
  var color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['color', 'width', 'height', 'size']);

  return React.createElement(
    'svg',
    _extends({
      fill: color,
      width: size || width,
      height: size || height
    }, rest, {
      viewBox: '0 0 2048 1792',
      xmlns: 'http://www.w3.org/2000/svg'
    }),
    _ref2
  );
};
icon.defaultProps = { width: 100, height: 100 };
icon.displayName = 'FaCar';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1jYXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiaWNvbiIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwicmVzdCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7O1lBV0ksOEJBQU0sR0FBRSw2ZUFBUixHOztBQVRKLElBQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLE1BQWlCQyxNQUFqQixRQUFpQkEsTUFBakI7QUFBQSxNQUF5QkMsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsTUFBa0NDLElBQWxDOztBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQ0UsWUFBTUosS0FEUjtBQUVFLGFBQU9HLFFBQVFGLEtBRmpCO0FBR0UsY0FBUUUsUUFBUUQ7QUFIbEIsT0FJTUUsSUFKTjtBQUtFLGVBQVEsZUFMVjtBQU1FLGFBQU07QUFOUjtBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFZQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLE9BQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1jYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuXG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnXG4gICAgZmlsbD17Y29sb3J9XG4gICAgd2lkdGg9e3NpemUgfHwgd2lkdGh9XG4gICAgaGVpZ2h0PXtzaXplIHx8IGhlaWdodH1cbiAgICB7Li4ucmVzdH1cbiAgICB2aWV3Qm94PVwiMCAwIDIwNDggMTc5MlwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTQ4MCAxMDg4cTAtNjYtNDctMTEzdC0xMTMtNDctMTEzIDQ3LTQ3IDExMyA0NyAxMTMgMTEzIDQ3IDExMy00NyA0Ny0xMTN6bTM2LTMyMGgxMDE2bC04OS0zNTdxLTItOC0xNC0xNy41dC0yMS05LjVoLTc2OHEtOSAwLTIxIDkuNXQtMTQgMTcuNXptMTM3MiAzMjBxMC02Ni00Ny0xMTN0LTExMy00Ny0xMTMgNDctNDcgMTEzIDQ3IDExMyAxMTMgNDcgMTEzLTQ3IDQ3LTExM3ptMTYwLTk2djM4NHEwIDE0LTkgMjN0LTIzIDloLTk2djEyOHEwIDgwLTU2IDEzNnQtMTM2IDU2LTEzNi01Ni01Ni0xMzZ2LTEyOGgtMTAyNHYxMjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2di0xMjhoLTk2cS0xNCAwLTIzLTl0LTktMjN2LTM4NHEwLTkzIDY1LjUtMTU4LjV0MTU4LjUtNjUuNWgyOGwxMDUtNDE5cTIzLTk0IDEwNC0xNTcuNXQxNzktNjMuNWg3NjhxOTggMCAxNzkgNjMuNXQxMDQgMTU3LjVsMTA1IDQxOWgyOHE5MyAwIDE1OC41IDY1LjV0NjUuNSAxNTguNXpcIiAvPlxuICA8L3N2Zz5cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnRmFDYXInO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pO1xuIl19
