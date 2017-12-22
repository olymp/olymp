var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M2304 768h-128v640h128v384h-384v-128h-896v128h-384v-384h128v-128h-384v128h-384v-384h128v-640h-128v-384h384v128h896v-128h384v384h-128v128h384v-128h384v384zm-256-256v128h128v-128h-128zm-640-384v128h128v-128h-128zm-1280 0v128h128v-128h-128zm128 1152v-128h-128v128h128zm1280-128h-128v128h128v-128zm-1152 0h896v-128h128v-640h-128v-128h-896v128h-128v640h128v128zm512 512v-128h-128v128h128zm1280 0v-128h-128v128h128zm-128-256v-640h-128v-128h-384v384h128v384h-384v-128h-384v128h128v128h896v-128h128z' });

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
icon.displayName = 'FaObjectUngroup';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1vYmplY3QtdW5ncm91cC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFb0osOEJBQU0sR0FBRSw2ZUFBUixHOztBQURwSixJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsTUFBakIsUUFBaUJBLE1BQWpCO0FBQUEsTUFBeUJDLElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLE1BQWtDQyxJQUFsQzs7QUFBQSxTQUNYO0FBQUE7QUFBQSxlQUFLLE1BQU1KLEtBQVgsRUFBa0IsT0FBT0csUUFBUUYsS0FBakMsRUFBd0MsUUFBUUUsUUFBUUQsTUFBeEQsSUFBb0VFLElBQXBFLElBQTBFLE9BQU0sTUFBaEYsRUFBdUYsU0FBUSxlQUEvRixFQUErRyxPQUFNLDRCQUFySDtBQUFBO0FBQUEsR0FEVztBQUFBLENBQWI7QUFHQUwsS0FBS00sWUFBTCxHQUFvQixFQUFFSixPQUFPLEdBQVQsRUFBY0MsUUFBUSxHQUF0QixFQUFwQjtBQUNBSCxLQUFLTyxXQUFMLEdBQW1CLGlCQUFuQjtBQUNBLGVBQWVSLE9BQU9DLElBQVAsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9pY29ucy9saWIvZmEtb2JqZWN0LXVuZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSB3aWR0aD1cIjIzMDRcIiB2aWV3Qm94PVwiMCAwIDIzMDQgMTc5MlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIzMDQgNzY4aC0xMjh2NjQwaDEyOHYzODRoLTM4NHYtMTI4aC04OTZ2MTI4aC0zODR2LTM4NGgxMjh2LTEyOGgtMzg0djEyOGgtMzg0di0zODRoMTI4di02NDBoLTEyOHYtMzg0aDM4NHYxMjhoODk2di0xMjhoMzg0djM4NGgtMTI4djEyOGgzODR2LTEyOGgzODR2Mzg0em0tMjU2LTI1NnYxMjhoMTI4di0xMjhoLTEyOHptLTY0MC0zODR2MTI4aDEyOHYtMTI4aC0xMjh6bS0xMjgwIDB2MTI4aDEyOHYtMTI4aC0xMjh6bTEyOCAxMTUydi0xMjhoLTEyOHYxMjhoMTI4em0xMjgwLTEyOGgtMTI4djEyOGgxMjh2LTEyOHptLTExNTIgMGg4OTZ2LTEyOGgxMjh2LTY0MGgtMTI4di0xMjhoLTg5NnYxMjhoLTEyOHY2NDBoMTI4djEyOHptNTEyIDUxMnYtMTI4aC0xMjh2MTI4aDEyOHptMTI4MCAwdi0xMjhoLTEyOHYxMjhoMTI4em0tMTI4LTI1NnYtNjQwaC0xMjh2LTEyOGgtMzg0djM4NGgxMjh2Mzg0aC0zODR2LTEyOGgtMzg0djEyOGgxMjh2MTI4aDg5NnYtMTI4aDEyOHpcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhT2JqZWN0VW5ncm91cCc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
