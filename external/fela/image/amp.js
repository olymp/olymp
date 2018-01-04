'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmpImage = function AmpImage(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src,
      alt = _ref.alt,
      layout = _ref.layout,
      children = _ref.children;
  return _react2.default.createElement(
    'amp-img',
    { layout: layout, src: src, alt: alt, width: width, height: height },
    _react2.default.createElement(
      'noscript',
      null,
      children
    )
  );
};
AmpImage.displayName = 'AmpImage';
AmpImage.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  src: _propTypes2.default.string.isRequired,
  layout: _propTypes2.default.oneOf(['fill', 'fixed-height', 'responsive']),
  alt: _propTypes2.default.string
};
AmpImage.defaultProps = {
  alt: '',
  layout: 'responsive'
};
exports.default = AmpImage;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvYW1wLmVzNiJdLCJuYW1lcyI6WyJBbXBJbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwibGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsTUFBa0JDLEdBQWxCLFFBQWtCQSxHQUFsQjtBQUFBLE1BQXVCQyxHQUF2QixRQUF1QkEsR0FBdkI7QUFBQSxNQUE0QkMsTUFBNUIsUUFBNEJBLE1BQTVCO0FBQUEsTUFBb0NDLFFBQXBDLFFBQW9DQSxRQUFwQztBQUFBLFNBQ2Y7QUFBQTtBQUFBLE1BQVMsUUFBUUQsTUFBakIsRUFBeUIsS0FBS0YsR0FBOUIsRUFBbUMsS0FBS0MsR0FBeEMsRUFBNkMsT0FBT0gsS0FBcEQsRUFBMkQsUUFBUUMsTUFBbkU7QUFDRTtBQUFBO0FBQUE7QUFBV0k7QUFBWDtBQURGLEdBRGU7QUFBQSxDQUFqQjtBQUtBTixTQUFTTyxXQUFULEdBQXVCLFVBQXZCO0FBQ0FQLFNBQVNRLFNBQVQsR0FBcUI7QUFDbkJQLFNBQU8sb0JBQVVRLE1BQVYsQ0FBaUJDLFVBREw7QUFFbkJSLFVBQVEsb0JBQVVPLE1BQVYsQ0FBaUJDLFVBRk47QUFHbkJQLE9BQUssb0JBQVVRLE1BQVYsQ0FBaUJELFVBSEg7QUFJbkJMLFVBQVEsb0JBQVVPLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsY0FBVCxFQUF5QixZQUF6QixDQUFoQixDQUpXO0FBS25CUixPQUFLLG9CQUFVTztBQUxJLENBQXJCO0FBT0FYLFNBQVNhLFlBQVQsR0FBd0I7QUFDdEJULE9BQUssRUFEaUI7QUFFdEJDLFVBQVE7QUFGYyxDQUF4QjtrQkFJZUwsUSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2ltYWdlL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBBbXBJbWFnZSA9ICh7IHdpZHRoLCBoZWlnaHQsIHNyYywgYWx0LCBsYXlvdXQsIGNoaWxkcmVuIH0pID0+IChcbiAgPGFtcC1pbWcgbGF5b3V0PXtsYXlvdXR9IHNyYz17c3JjfSBhbHQ9e2FsdH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgPG5vc2NyaXB0PntjaGlsZHJlbn08L25vc2NyaXB0PlxuICA8L2FtcC1pbWc+XG4pO1xuQW1wSW1hZ2UuZGlzcGxheU5hbWUgPSAnQW1wSW1hZ2UnO1xuQW1wSW1hZ2UucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxheW91dDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbCcsICdmaXhlZC1oZWlnaHQnLCAncmVzcG9uc2l2ZSddKSxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkFtcEltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgbGF5b3V0OiAncmVzcG9uc2l2ZScsXG59O1xuZXhwb3J0IGRlZmF1bHQgQW1wSW1hZ2U7XG4iXX0=
