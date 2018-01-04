'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _nodes = require('./nodes');

var _nodes2 = _interopRequireDefault(_nodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOutlinedOnSelected = function getOutlinedOnSelected(Wrapped) {
  return (0, _reactFela.createComponent)(function (_ref) {
    var isSelected = _ref.isSelected,
        theme = _ref.theme;
    return {
      outline: isSelected && '2px solid ' + theme.color
    };
  }, function (p) {
    return _react2.default.createElement(Wrapped, p);
  }, function (p) {
    return Object.keys(p);
  });
};

exports.default = Object.keys(_nodes2.default).reduce(function (result, key) {
  return _extends({}, result, _defineProperty({}, key, getOutlinedOnSelected(_nodes2.default[key])));
}, {});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2RlZmF1bHRzL25vZGVzLXNlbGVjdGVkLmVzNiJdLCJuYW1lcyI6WyJnZXRPdXRsaW5lZE9uU2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwidGhlbWUiLCJvdXRsaW5lIiwiY29sb3IiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInJlc3VsdCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixTQUF4QkEscUJBQXdCO0FBQUEsU0FDNUIsZ0NBQ0U7QUFBQSxRQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxRQUFlQyxLQUFmLFFBQWVBLEtBQWY7QUFBQSxXQUE0QjtBQUMxQkMsZUFBU0YsNkJBQTJCQyxNQUFNRTtBQURoQixLQUE1QjtBQUFBLEdBREYsRUFJRTtBQUFBLFdBQUssOEJBQUMsT0FBRCxFQUFhQyxDQUFiLENBQUw7QUFBQSxHQUpGLEVBS0U7QUFBQSxXQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLEdBTEYsQ0FENEI7QUFBQSxDQUE5Qjs7a0JBU2VDLE9BQU9DLElBQVAsa0JBQW1CQyxNQUFuQixDQUNiLFVBQUNDLE1BQUQsRUFBU0MsR0FBVDtBQUFBLHNCQUNLRCxNQURMLHNCQUVHQyxHQUZILEVBRVNWLHNCQUFzQixnQkFBTVUsR0FBTixDQUF0QixDQUZUO0FBQUEsQ0FEYSxFQUtiLEVBTGEsQyIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS9kZWZhdWx0cy9ub2Rlcy1zZWxlY3RlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBub2RlcyBmcm9tICcuL25vZGVzJztcblxuY29uc3QgZ2V0T3V0bGluZWRPblNlbGVjdGVkID0gV3JhcHBlZCA9PlxuICBjcmVhdGVDb21wb25lbnQoXG4gICAgKHsgaXNTZWxlY3RlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICAgIG91dGxpbmU6IGlzU2VsZWN0ZWQgJiYgYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yfWAsXG4gICAgfSksXG4gICAgcCA9PiA8V3JhcHBlZCB7Li4ucH0gLz4sXG4gICAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmtleXMobm9kZXMpLnJlZHVjZShcbiAgKHJlc3VsdCwga2V5KSA9PiAoe1xuICAgIC4uLnJlc3VsdCxcbiAgICBba2V5XTogZ2V0T3V0bGluZWRPblNlbGVjdGVkKG5vZGVzW2tleV0pLFxuICB9KSxcbiAge30sXG4pO1xuIl19
