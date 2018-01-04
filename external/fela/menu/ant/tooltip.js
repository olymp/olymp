'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var open = _ref.open,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['open', 'children']);

  return !open ? _react2.default.createElement(
    _tooltip2.default,
    { placement: 'left', title: children },
    _react2.default.createElement(
      _menu2.default.Item,
      rest,
      children
    )
  ) : _react2.default.createElement(
    _menu2.default.Item,
    rest,
    children
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbWVudS9hbnQvdG9vbHRpcC5lczYiXSwibmFtZXMiOlsib3BlbiIsImNoaWxkcmVuIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBR2U7QUFBQSxNQUFHQSxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxNQUFzQkMsSUFBdEI7O0FBQUEsU0FDYixDQUFDRixJQUFELEdBQ0U7QUFBQTtBQUFBLE1BQVMsV0FBVSxNQUFuQixFQUEwQixPQUFPQyxRQUFqQztBQUNFO0FBQUEscUJBQU0sSUFBTjtBQUFlQyxVQUFmO0FBQXNCRDtBQUF0QjtBQURGLEdBREYsR0FLRTtBQUFBLG1CQUFNLElBQU47QUFBZUMsUUFBZjtBQUFzQkQ7QUFBdEIsR0FOVztBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9tZW51L2FudC90b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+XG4gICFvcGVuID8gKFxuICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImxlZnRcIiB0aXRsZT17Y2hpbGRyZW59PlxuICAgICAgPE1lbnUuSXRlbSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvTWVudS5JdGVtPlxuICAgIDwvVG9vbHRpcD5cbiAgKSA6IChcbiAgICA8TWVudS5JdGVtIHsuLi5yZXN0fT57Y2hpbGRyZW59PC9NZW51Lkl0ZW0+XG4gICk7XG4iXX0=
