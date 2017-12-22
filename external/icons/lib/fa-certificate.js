var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1504 896l138 135q30 28 20 70-12 41-52 51l-188 48 53 186q12 41-19 70-29 31-70 19l-186-53-48 188q-10 40-51 52-12 2-19 2-31 0-51-22l-135-138-135 138q-28 30-70 20-41-11-51-52l-48-188-186 53q-41 12-70-19-31-29-19-70l53-186-188-48q-40-10-52-51-10-42 20-70l138-135-138-135q-30-28-20-70 12-41 52-51l188-48-53-186q-12-41 19-70 29-31 70-19l186 53 48-188q10-41 51-51 41-12 70 19l135 139 135-139q29-30 70-19 41 10 51 51l48 188 186-53q41-12 70 19 31 29 19 70l-53 186 188 48q40 10 52 51 10 42-20 70z' });

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
icon.displayName = 'FaCertificate';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1jZXJ0aWZpY2F0ZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSx3ZUFBUixHOztBQUR2SSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLFNBQVEsZUFBbEYsRUFBa0csT0FBTSw0QkFBeEc7QUFBQTtBQUFBLEdBRFc7QUFBQSxDQUFiO0FBR0FMLEtBQUtNLFlBQUwsR0FBb0IsRUFBRUosT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFBcEI7QUFDQUgsS0FBS08sV0FBTCxHQUFtQixlQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtY2VydGlmaWNhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDE3OTIgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1MDQgODk2bDEzOCAxMzVxMzAgMjggMjAgNzAtMTIgNDEtNTIgNTFsLTE4OCA0OCA1MyAxODZxMTIgNDEtMTkgNzAtMjkgMzEtNzAgMTlsLTE4Ni01My00OCAxODhxLTEwIDQwLTUxIDUyLTEyIDItMTkgMi0zMSAwLTUxLTIybC0xMzUtMTM4LTEzNSAxMzhxLTI4IDMwLTcwIDIwLTQxLTExLTUxLTUybC00OC0xODgtMTg2IDUzcS00MSAxMi03MC0xOS0zMS0yOS0xOS03MGw1My0xODYtMTg4LTQ4cS00MC0xMC01Mi01MS0xMC00MiAyMC03MGwxMzgtMTM1LTEzOC0xMzVxLTMwLTI4LTIwLTcwIDEyLTQxIDUyLTUxbDE4OC00OC01My0xODZxLTEyLTQxIDE5LTcwIDI5LTMxIDcwLTE5bDE4NiA1MyA0OC0xODhxMTAtNDEgNTEtNTEgNDEtMTIgNzAgMTlsMTM1IDEzOSAxMzUtMTM5cTI5LTMwIDcwLTE5IDQxIDEwIDUxIDUxbDQ4IDE4OCAxODYtNTNxNDEtMTIgNzAgMTkgMzEgMjkgMTkgNzBsLTUzIDE4NiAxODggNDhxNDAgMTAgNTIgNTEgMTAgNDItMjAgNzB6XCIvPjwvc3ZnPlxuKTtcbmljb24uZGVmYXVsdFByb3BzID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9O1xuaWNvbi5kaXNwbGF5TmFtZSA9ICdGYUNlcnRpZmljYXRlJztcbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChpY29uKTsiXX0=
