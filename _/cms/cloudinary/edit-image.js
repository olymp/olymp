'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _edit = require('./edit');

var _edit2 = _interopRequireDefault(_edit);

var _thumb = require('./components/thumb');

var _thumb2 = _interopRequireDefault(_thumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _edit2.default)(function (v, _ref) {
  var onChange = _ref.onChange;
  return _react2.default.createElement(_thumb2.default, {
    item: v[0] || { width: 300, height: 300 },
    height: 100,
    isActive: !!v[0],
    onRemove: function onRemove(e) {
      e.stopPropagation();
      onChange([]);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2VkaXQtaW1hZ2UuZXM2Il0sIm5hbWVzIjpbInYiLCJvbkNoYW5nZSIsIndpZHRoIiwiaGVpZ2h0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsb0JBQVcsVUFBQ0EsQ0FBRDtBQUFBLE1BQU1DLFFBQU4sUUFBTUEsUUFBTjtBQUFBLFNBQ3hCO0FBQ0UsVUFBTUQsRUFBRSxDQUFGLEtBQVEsRUFBRUUsT0FBTyxHQUFULEVBQWNDLFFBQVEsR0FBdEIsRUFEaEI7QUFFRSxZQUFRLEdBRlY7QUFHRSxjQUFVLENBQUMsQ0FBQ0gsRUFBRSxDQUFGLENBSGQ7QUFJRSxjQUFVLHFCQUFLO0FBQ2JJLFFBQUVDLGVBQUY7QUFDQUosZUFBUyxFQUFUO0FBQ0Q7QUFQSCxJQUR3QjtBQUFBLENBQVgsQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9lZGl0LWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgVGh1bWIgZnJvbSAnLi9jb21wb25lbnRzL3RodW1iJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdCgodiwgeyBvbkNoYW5nZSB9KSA9PiAoXG4gIDxUaHVtYlxuICAgIGl0ZW09e3ZbMF0gfHwgeyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCB9fVxuICAgIGhlaWdodD17MTAwfVxuICAgIGlzQWN0aXZlPXshIXZbMF19XG4gICAgb25SZW1vdmU9e2UgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uQ2hhbmdlKFtdKTtcbiAgICB9fVxuICAvPlxuKSk7XG4iXX0=
