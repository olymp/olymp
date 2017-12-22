var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from '../styled';

var _ref2 = React.createElement('path', { d: 'M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm-749 367h-371v787h382q117 0 197-57.5t80-170.5q0-158-143-200 107-52 107-164 0-57-19.5-96.5t-56.5-60.5-79-29.5-97-8.5zm-22 318h-176v-184h163q119 0 119 90 0 94-106 94zm9 335h-185v-217h189q124 0 124 113 0 104-128 104zm650 32q-68 0-104-38t-36-107h411q1-10 1-30 0-132-74.5-220.5t-203.5-88.5q-128 0-210 86t-82 216q0 135 79 217t213 82q205 0 267-191h-138q-11 34-47.5 54t-75.5 20zm-10-366q113 0 124 122h-254q4-56 39-89t91-33zm-162-266h319v77h-319v-77z' });

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
icon.displayName = 'FaBehanceSquare';
export default styled(icon);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL2xpYi9mYS1iZWhhbmNlLXNxdWFyZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJpY29uIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJyZXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7WUFFdUksOEJBQU0sR0FBRSwya0JBQVIsRzs7QUFEdkksSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLE1BQWpCLFFBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxNQUFrQ0MsSUFBbEM7O0FBQUEsU0FDWDtBQUFBO0FBQUEsZUFBSyxNQUFNSixLQUFYLEVBQWtCLE9BQU9HLFFBQVFGLEtBQWpDLEVBQXdDLFFBQVFFLFFBQVFELE1BQXhELElBQW9FRSxJQUFwRSxJQUEwRSxTQUFRLGVBQWxGLEVBQWtHLE9BQU0sNEJBQXhHO0FBQUE7QUFBQSxHQURXO0FBQUEsQ0FBYjtBQUdBTCxLQUFLTSxZQUFMLEdBQW9CLEVBQUVKLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQXBCO0FBQ0FILEtBQUtPLFdBQUwsR0FBbUIsaUJBQW5CO0FBQ0EsZUFBZVIsT0FBT0MsSUFBUCxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL2xpYi9mYS1iZWhhbmNlLXNxdWFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICA8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9IHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTM3NiAxMjhxMTE5IDAgMjAzLjUgODQuNXQ4NC41IDIwMy41djk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwem0tNzQ5IDM2N2gtMzcxdjc4N2gzODJxMTE3IDAgMTk3LTU3LjV0ODAtMTcwLjVxMC0xNTgtMTQzLTIwMCAxMDctNTIgMTA3LTE2NCAwLTU3LTE5LjUtOTYuNXQtNTYuNS02MC41LTc5LTI5LjUtOTctOC41em0tMjIgMzE4aC0xNzZ2LTE4NGgxNjNxMTE5IDAgMTE5IDkwIDAgOTQtMTA2IDk0em05IDMzNWgtMTg1di0yMTdoMTg5cTEyNCAwIDEyNCAxMTMgMCAxMDQtMTI4IDEwNHptNjUwIDMycS02OCAwLTEwNC0zOHQtMzYtMTA3aDQxMXExLTEwIDEtMzAgMC0xMzItNzQuNS0yMjAuNXQtMjAzLjUtODguNXEtMTI4IDAtMjEwIDg2dC04MiAyMTZxMCAxMzUgNzkgMjE3dDIxMyA4MnEyMDUgMCAyNjctMTkxaC0xMzhxLTExIDM0LTQ3LjUgNTR0LTc1LjUgMjB6bS0xMC0zNjZxMTEzIDAgMTI0IDEyMmgtMjU0cTQtNTYgMzktODl0OTEtMzN6bS0xNjItMjY2aDMxOXY3N2gtMzE5di03N3pcIi8+PC9zdmc+XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJ0ZhQmVoYW5jZVNxdWFyZSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7Il19
