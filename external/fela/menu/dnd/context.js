'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      onDragEnd = _ref.onDragEnd;
  return _react2.default.createElement(
    _reactBeautifulDnd.DragDropContext,
    { onDragEnd: onDragEnd },
    children
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9kbmQvY29udGV4dC5lczYiXSwibmFtZXMiOlsiY2hpbGRyZW4iLCJvbkRyYWdFbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7a0JBRWU7QUFBQSxNQUFHQSxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxTQUFiLFFBQWFBLFNBQWI7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFpQixXQUFXQSxTQUE1QjtBQUF3Q0Q7QUFBeEMsR0FEYTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2RuZC9jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgb25EcmFnRW5kIH0pID0+IChcbiAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+e2NoaWxkcmVufTwvRHJhZ0Ryb3BDb250ZXh0PlxuKTtcbiJdfQ==
