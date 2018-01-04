'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getListStyle = function getListStyle(isDraggingOver) {
  return {
    backgroundColor: isDraggingOver ? '#88888878' : undefined,
    borderRadius: 5
  };
};

var list = function list(_ref) {
  var children = _ref.children,
      _ref$group = _ref.group,
      group = _ref$group === undefined ? 'dnd' : _ref$group,
      props = _objectWithoutProperties(_ref, ['children', 'group']);

  return _react2.default.createElement(
    _reactBeautifulDnd.Droppable,
    { droppableId: group },
    function (provided, snapshot) {
      return _react2.default.createElement(
        _list2.default,
        _extends({
          _ref: provided.innerRef,
          style: getListStyle(snapshot.isDraggingOver)
        }, props),
        children,
        provided.placeholder
      );
    }
  );
};

list.Item = _item2.default;
list.Context = _context2.default;
exports.default = list;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9kbmQvbGlzdC5lczYiXSwibmFtZXMiOlsiZ2V0TGlzdFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEcmFnZ2luZ092ZXIiLCJ1bmRlZmluZWQiLCJib3JkZXJSYWRpdXMiLCJsaXN0IiwiY2hpbGRyZW4iLCJncm91cCIsInByb3BzIiwicHJvdmlkZWQiLCJzbmFwc2hvdCIsImlubmVyUmVmIiwicGxhY2Vob2xkZXIiLCJJdGVtIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFtQjtBQUN0Q0MscUJBQWlCQyxpQkFBaUIsV0FBakIsR0FBK0JDLFNBRFY7QUFFdENDLGtCQUFjO0FBRndCLEdBQW5CO0FBQUEsQ0FBckI7O0FBS0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsd0JBQWFDLEtBQWI7QUFBQSxNQUFhQSxLQUFiLDhCQUFxQixLQUFyQjtBQUFBLE1BQStCQyxLQUEvQjs7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFXLGFBQWFELEtBQXhCO0FBQ0csY0FBQ0UsUUFBRCxFQUFXQyxRQUFYO0FBQUEsYUFDQztBQUFBO0FBQUE7QUFDRSxnQkFBTUQsU0FBU0UsUUFEakI7QUFFRSxpQkFBT1gsYUFBYVUsU0FBU1IsY0FBdEI7QUFGVCxXQUdNTSxLQUhOO0FBS0dGLGdCQUxIO0FBTUdHLGlCQUFTRztBQU5aLE9BREQ7QUFBQTtBQURILEdBRFc7QUFBQSxDQUFiOztBQWVBUCxLQUFLUSxJQUFMO0FBQ0FSLEtBQUtTLE9BQUw7a0JBQ2VULEkiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2RuZC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyb3BwYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vbGlzdCc7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcblxuY29uc3QgZ2V0TGlzdFN0eWxlID0gaXNEcmFnZ2luZ092ZXIgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiBpc0RyYWdnaW5nT3ZlciA/ICcjODg4ODg4NzgnIDogdW5kZWZpbmVkLFxuICBib3JkZXJSYWRpdXM6IDUsXG59KTtcblxuY29uc3QgbGlzdCA9ICh7IGNoaWxkcmVuLCBncm91cCA9ICdkbmQnLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9e2dyb3VwfT5cbiAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgPExpc3RcbiAgICAgICAgX3JlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgIHN0eWxlPXtnZXRMaXN0U3R5bGUoc25hcHNob3QuaXNEcmFnZ2luZ092ZXIpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgPC9MaXN0PlxuICAgICl9XG4gIDwvRHJvcHBhYmxlPlxuKTtcblxubGlzdC5JdGVtID0gSXRlbTtcbmxpc3QuQ29udGV4dCA9IENvbnRleHQ7XG5leHBvcnQgZGVmYXVsdCBsaXN0O1xuIl19
