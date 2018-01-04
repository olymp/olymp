'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

require('antd/lib/popover/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var open = _ref.open,
      children = _ref.children,
      content = _ref.content,
      _ref$placement = _ref.placement,
      placement = _ref$placement === undefined ? 'left' : _ref$placement,
      rest = _objectWithoutProperties(_ref, ['open', 'children', 'content', 'placement']);

  return _react2.default.createElement(
    _popover2.default,
    {
      placement: placement,
      title: content && children,
      content: content || children
    },
    _react2.default.createElement(
      _menu2.default.Item,
      rest,
      children
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9hbnQvcG9wb3Zlci5lczYiXSwibmFtZXMiOlsib3BlbiIsImNoaWxkcmVuIiwiY29udGVudCIsInBsYWNlbWVudCIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUdlO0FBQUEsTUFBR0EsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxRQUFUO0FBQUEsTUFBbUJDLE9BQW5CLFFBQW1CQSxPQUFuQjtBQUFBLDRCQUE0QkMsU0FBNUI7QUFBQSxNQUE0QkEsU0FBNUIsa0NBQXdDLE1BQXhDO0FBQUEsTUFBbURDLElBQW5EOztBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0UsaUJBQVdELFNBRGI7QUFFRSxhQUFPRCxXQUFXRCxRQUZwQjtBQUdFLGVBQVNDLFdBQVdEO0FBSHRCO0FBS0U7QUFBQSxxQkFBTSxJQUFOO0FBQWVHLFVBQWY7QUFBc0JIO0FBQXRCO0FBTEYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2FudC9wb3BvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9wZW4sIGNoaWxkcmVuLCBjb250ZW50LCBwbGFjZW1lbnQgPSAnbGVmdCcsIC4uLnJlc3QgfSkgPT4gKFxuICA8UG9wb3ZlclxuICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgIHRpdGxlPXtjb250ZW50ICYmIGNoaWxkcmVufVxuICAgIGNvbnRlbnQ9e2NvbnRlbnQgfHwgY2hpbGRyZW59XG4gID5cbiAgICA8TWVudS5JdGVtIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9NZW51Lkl0ZW0+XG4gIDwvUG9wb3Zlcj5cbik7XG4iXX0=
