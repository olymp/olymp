'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    'div',
    _extends({
      className: className,
      ref: _ref || innerRef || ref,
      style: style
    }, rest),
    title && _react2.default.createElement(
      _title2.default,
      { extra: extra },
      title
    ),
    children
  );
};

List.Title = _title2.default;
List.Item = _item2.default;
List.Divider = _divider2.default;

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9saXN0LmVzNiJdLCJuYW1lcyI6WyJMaXN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJfcmVmIiwiaW5uZXJSZWYiLCJyZWYiLCJzdHlsZSIsImV4dHJhIiwidGl0bGUiLCJyZXN0IiwiVGl0bGUiLCJJdGVtIiwiRGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFDWEMsUUFEVyxTQUNYQSxRQURXO0FBQUEsTUFFWEMsU0FGVyxTQUVYQSxTQUZXO0FBQUEsTUFHWEMsSUFIVyxTQUdYQSxJQUhXO0FBQUEsTUFJWEMsUUFKVyxTQUlYQSxRQUpXO0FBQUEsTUFLWEMsR0FMVyxTQUtYQSxHQUxXO0FBQUEsTUFNWEMsS0FOVyxTQU1YQSxLQU5XO0FBQUEsTUFPWEMsS0FQVyxTQU9YQSxLQVBXO0FBQUEsTUFRWEMsS0FSVyxTQVFYQSxLQVJXO0FBQUEsTUFTWEMsSUFUVyxTQVNYQSxJQVRXO0FBQUEsU0FXWDtBQUFBO0FBQUE7QUFDRSxpQkFBV1AsU0FEYjtBQUVFLFdBQUtDLFFBQVFDLFFBQVIsSUFBb0JDLEdBRjNCO0FBR0UsYUFBT0M7QUFIVCxPQUlNRyxJQUpOO0FBTUdELGFBQVM7QUFBQTtBQUFBLFFBQU8sT0FBT0QsS0FBZDtBQUFzQkM7QUFBdEIsS0FOWjtBQU9HUDtBQVBILEdBWFc7QUFBQSxDQUFiOztBQXNCQUQsS0FBS1UsS0FBTDtBQUNBVixLQUFLVyxJQUFMO0FBQ0FYLEtBQUtZLE9BQUw7O2tCQUVlWixJIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbWVudS9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL2RpdmlkZXInO1xuXG5jb25zdCBMaXN0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgX3JlZixcbiAgaW5uZXJSZWYsXG4gIHJlZixcbiAgc3R5bGUsXG4gIGV4dHJhLFxuICB0aXRsZSxcbiAgcmVzdCxcbn0pID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgIHJlZj17X3JlZiB8fCBpbm5lclJlZiB8fCByZWZ9XG4gICAgc3R5bGU9e3N0eWxlfVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge3RpdGxlICYmIDxUaXRsZSBleHRyYT17ZXh0cmF9Pnt0aXRsZX08L1RpdGxlPn1cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuTGlzdC5UaXRsZSA9IFRpdGxlO1xuTGlzdC5JdGVtID0gSXRlbTtcbkxpc3QuRGl2aWRlciA9IERpdmlkZXI7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0=
