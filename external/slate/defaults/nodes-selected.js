var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { createComponent } from 'react-fela';
import nodes from './nodes';

var getOutlinedOnSelected = function getOutlinedOnSelected(Wrapped) {
  return createComponent(function (_ref) {
    var isSelected = _ref.isSelected,
        theme = _ref.theme;
    return {
      outline: isSelected && '2px solid ' + theme.color
    };
  }, function (p) {
    return React.createElement(Wrapped, p);
  }, function (p) {
    return Object.keys(p);
  });
};

export default Object.keys(nodes).reduce(function (result, key) {
  return _extends({}, result, _defineProperty({}, key, getOutlinedOnSelected(nodes[key])));
}, {});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL25vZGVzLXNlbGVjdGVkLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsIm5vZGVzIiwiZ2V0T3V0bGluZWRPblNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsInRoZW1lIiwib3V0bGluZSIsImNvbG9yIiwicCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxTQUM1QkYsZ0JBQ0U7QUFBQSxRQUFHRyxVQUFILFFBQUdBLFVBQUg7QUFBQSxRQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxXQUE0QjtBQUMxQkMsZUFBU0YsNkJBQTJCQyxNQUFNRTtBQURoQixLQUE1QjtBQUFBLEdBREYsRUFJRTtBQUFBLFdBQUssb0JBQUMsT0FBRCxFQUFhQyxDQUFiLENBQUw7QUFBQSxHQUpGLEVBS0U7QUFBQSxXQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLEdBTEYsQ0FENEI7QUFBQSxDQUE5Qjs7QUFTQSxlQUFlQyxPQUFPQyxJQUFQLENBQVlSLEtBQVosRUFBbUJTLE1BQW5CLENBQ2IsVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsc0JBQ0tELE1BREwsc0JBRUdDLEdBRkgsRUFFU1Ysc0JBQXNCRCxNQUFNVyxHQUFOLENBQXRCLENBRlQ7QUFBQSxDQURhLEVBS2IsRUFMYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL2RlZmF1bHRzL25vZGVzLXNlbGVjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IG5vZGVzIGZyb20gJy4vbm9kZXMnO1xuXG5jb25zdCBnZXRPdXRsaW5lZE9uU2VsZWN0ZWQgPSBXcmFwcGVkID0+XG4gIGNyZWF0ZUNvbXBvbmVudChcbiAgICAoeyBpc1NlbGVjdGVkLCB0aGVtZSB9KSA9PiAoe1xuICAgICAgb3V0bGluZTogaXNTZWxlY3RlZCAmJiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3J9YCxcbiAgICB9KSxcbiAgICBwID0+IDxXcmFwcGVkIHsuLi5wfSAvPixcbiAgICBwID0+IE9iamVjdC5rZXlzKHApLFxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3Qua2V5cyhub2RlcykucmVkdWNlKFxuICAocmVzdWx0LCBrZXkpID0+ICh7XG4gICAgLi4ucmVzdWx0LFxuICAgIFtrZXldOiBnZXRPdXRsaW5lZE9uU2VsZWN0ZWQobm9kZXNba2V5XSksXG4gIH0pLFxuICB7fSxcbik7XG4iXX0=
