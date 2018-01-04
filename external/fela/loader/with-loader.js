'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Wrapped) {
  return function (props) {
    return _react2.default.createElement(
      _content2.default,
      { height: 600, isLoading: props.isLoading },
      _react2.default.createElement(Wrapped, props)
    );
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbG9hZGVyL3dpdGgtbG9hZGVyLmVzNiJdLCJuYW1lcyI6WyJwcm9wcyIsImlzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FBVztBQUFBLFdBQ3hCO0FBQUE7QUFBQSxRQUFRLFFBQVEsR0FBaEIsRUFBcUIsV0FBV0EsTUFBTUMsU0FBdEM7QUFDRSxvQ0FBQyxPQUFELEVBQWFELEtBQWI7QUFERixLQUR3QjtBQUFBLEdBQVg7QUFBQSxDIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbG9hZGVyL3dpdGgtbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZCA9PiBwcm9wcyA9PiAoXG4gIDxMb2FkZXIgaGVpZ2h0PXs2MDB9IGlzTG9hZGluZz17cHJvcHMuaXNMb2FkaW5nfT5cbiAgICA8V3JhcHBlZCB7Li4ucHJvcHN9IC8+XG4gIDwvTG9hZGVyPlxuKTtcbiJdfQ==
