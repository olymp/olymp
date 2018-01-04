'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageImg = (0, _reactFela.createComponent)(function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      circle = _ref.circle;
  return {
    width: width,
    height: height,
    borderRadius: circle ? '50%' : 0
  };
}, function (_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      src = _ref2.src,
      srcSet = _ref2.srcSet,
      alt = _ref2.alt,
      className = _ref2.className,
      attributes = _ref2.attributes,
      onLoad = _ref2.onLoad;
  return _react2.default.createElement('img', _extends({}, attributes, {
    src: src,
    srcSet: srcSet,
    alt: alt,
    className: className,
    width: width,
    height: height,
    onLoad: onLoad
  }));
}, function (p) {
  return Object.keys(p);
});

ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  src: _propTypes2.default.string.isRequired,
  srcSet: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  circle: _propTypes2.default.bool
};
ImageImg.defaultProps = {
  alt: '',
  onClick: function onClick() {},
  circle: false,
  attributes: {}
};
exports.default = ImageImg;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvaW1nLmVzNiJdLCJuYW1lcyI6WyJJbWFnZUltZyIsIndpZHRoIiwiaGVpZ2h0IiwiY2lyY2xlIiwiYm9yZGVyUmFkaXVzIiwic3JjIiwic3JjU2V0IiwiYWx0IiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlcyIsIm9uTG9hZCIsIk9iamVjdCIsImtleXMiLCJwIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib25DbGljayIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsZ0NBQ2Y7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFFBQVVBLE1BQVY7QUFBQSxNQUFrQkMsTUFBbEIsUUFBa0JBLE1BQWxCO0FBQUEsU0FBZ0M7QUFDOUJGLGdCQUQ4QjtBQUU5QkMsa0JBRjhCO0FBRzlCRSxrQkFBY0QsU0FBUyxLQUFULEdBQWlCO0FBSEQsR0FBaEM7QUFBQSxDQURlLEVBTWY7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxNQUFWLFNBQVVBLE1BQVY7QUFBQSxNQUFrQkcsR0FBbEIsU0FBa0JBLEdBQWxCO0FBQUEsTUFBdUJDLE1BQXZCLFNBQXVCQSxNQUF2QjtBQUFBLE1BQStCQyxHQUEvQixTQUErQkEsR0FBL0I7QUFBQSxNQUFvQ0MsU0FBcEMsU0FBb0NBLFNBQXBDO0FBQUEsTUFBK0NDLFVBQS9DLFNBQStDQSxVQUEvQztBQUFBLE1BQTJEQyxNQUEzRCxTQUEyREEsTUFBM0Q7QUFBQSxTQUNFLGtEQUNNRCxVQUROO0FBRUUsU0FBS0osR0FGUDtBQUdFLFlBQVFDLE1BSFY7QUFJRSxTQUFLQyxHQUpQO0FBS0UsZUFBV0MsU0FMYjtBQU1FLFdBQU9QLEtBTlQ7QUFPRSxZQUFRQyxNQVBWO0FBUUUsWUFBUVE7QUFSVixLQURGO0FBQUEsQ0FOZSxFQWtCZjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FsQmUsQ0FBakI7O0FBcUJBYixTQUFTYyxXQUFULEdBQXVCLFdBQXZCO0FBQ0FkLFNBQVNlLFNBQVQsR0FBcUI7QUFDbkJkLFNBQU8sb0JBQVVlLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsTUFBWCxFQUFtQixvQkFBVUMsTUFBN0IsQ0FBcEIsRUFBMERDLFVBRDlDO0FBRW5CakIsVUFBUSxvQkFBVWMsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVQyxNQUE3QixDQUFwQixFQUEwREMsVUFGL0M7QUFHbkJkLE9BQUssb0JBQVVZLE1BQVYsQ0FBaUJFLFVBSEg7QUFJbkJiLFVBQVEsb0JBQVVXLE1BSkM7QUFLbkJWLE9BQUssb0JBQVVVLE1BTEk7QUFNbkJHLFdBQVMsb0JBQVVDLElBTkE7QUFPbkJsQixVQUFRLG9CQUFVbUI7QUFQQyxDQUFyQjtBQVNBdEIsU0FBU3VCLFlBQVQsR0FBd0I7QUFDdEJoQixPQUFLLEVBRGlCO0FBRXRCYSxXQUFTLG1CQUFNLENBQUUsQ0FGSztBQUd0QmpCLFVBQVEsS0FIYztBQUl0Qk0sY0FBWTtBQUpVLENBQXhCO2tCQU1lVCxRIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvaW1hZ2UvaW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgSW1hZ2VJbWcgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHdpZHRoLCBoZWlnaHQsIGNpcmNsZSB9KSA9PiAoe1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBib3JkZXJSYWRpdXM6IGNpcmNsZSA/ICc1MCUnIDogMCxcbiAgfSksXG4gICh7IHdpZHRoLCBoZWlnaHQsIHNyYywgc3JjU2V0LCBhbHQsIGNsYXNzTmFtZSwgYXR0cmlidXRlcywgb25Mb2FkIH0pID0+IChcbiAgICA8aW1nXG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3JjU2V0PXtzcmNTZXR9XG4gICAgICBhbHQ9e2FsdH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAvPlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuSW1hZ2VJbWcuZGlzcGxheU5hbWUgPSAnSW1hZ2UuSW1nJztcbkltYWdlSW1nLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3JjU2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjaXJjbGU6IFByb3BUeXBlcy5ib29sLFxufTtcbkltYWdlSW1nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWx0OiAnJyxcbiAgb25DbGljazogKCkgPT4ge30sXG4gIGNpcmNsZTogZmFsc2UsXG4gIGF0dHJpYnV0ZXM6IHt9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlSW1nO1xuIl19
