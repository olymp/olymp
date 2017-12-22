var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Title from './title';
import Item from './item';
import Divider from './divider';

var List = function List(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref = _ref2._ref,
      innerRef = _ref2.innerRef,
      ref = _ref2.ref,
      style = _ref2.style,
      extra = _ref2.extra,
      title = _ref2.title,
      rest = _ref2.rest;
  return React.createElement(
    'div',
    _extends({
      className: className,
      ref: _ref || innerRef || ref,
      style: style
    }, rest),
    title && React.createElement(
      Title,
      { extra: extra },
      title
    ),
    children
  );
};

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9saXN0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRpdGxlIiwiSXRlbSIsIkRpdmlkZXIiLCJMaXN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJfcmVmIiwiaW5uZXJSZWYiLCJyZWYiLCJzdHlsZSIsImV4dHJhIiwidGl0bGUiLCJyZXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFDWEMsUUFEVyxTQUNYQSxRQURXO0FBQUEsTUFFWEMsU0FGVyxTQUVYQSxTQUZXO0FBQUEsTUFHWEMsSUFIVyxTQUdYQSxJQUhXO0FBQUEsTUFJWEMsUUFKVyxTQUlYQSxRQUpXO0FBQUEsTUFLWEMsR0FMVyxTQUtYQSxHQUxXO0FBQUEsTUFNWEMsS0FOVyxTQU1YQSxLQU5XO0FBQUEsTUFPWEMsS0FQVyxTQU9YQSxLQVBXO0FBQUEsTUFRWEMsS0FSVyxTQVFYQSxLQVJXO0FBQUEsTUFTWEMsSUFUVyxTQVNYQSxJQVRXO0FBQUEsU0FXWDtBQUFBO0FBQUE7QUFDRSxpQkFBV1AsU0FEYjtBQUVFLFdBQUtDLFFBQVFDLFFBQVIsSUFBb0JDLEdBRjNCO0FBR0UsYUFBT0M7QUFIVCxPQUlNRyxJQUpOO0FBTUdELGFBQVM7QUFBQyxXQUFEO0FBQUEsUUFBTyxPQUFPRCxLQUFkO0FBQXNCQztBQUF0QixLQU5aO0FBT0dQO0FBUEgsR0FYVztBQUFBLENBQWI7O0FBc0JBRCxLQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQUcsS0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0FFLEtBQUtELE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxlQUFlQyxJQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbWVudS9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL2RpdmlkZXInO1xuXG5jb25zdCBMaXN0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgX3JlZixcbiAgaW5uZXJSZWYsXG4gIHJlZixcbiAgc3R5bGUsXG4gIGV4dHJhLFxuICB0aXRsZSxcbiAgcmVzdCxcbn0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgIHJlZj17X3JlZiB8fCBpbm5lclJlZiB8fCByZWZ9XG4gICAgc3R5bGU9e3N0eWxlfVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge3RpdGxlICYmIDxUaXRsZSBleHRyYT17ZXh0cmF9Pnt0aXRsZX08L1RpdGxlPn1cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuTGlzdC5UaXRsZSA9IFRpdGxlO1xuTGlzdC5JdGVtID0gSXRlbTtcbkxpc3QuRGl2aWRlciA9IERpdmlkZXI7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=
