var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

var Container = createComponent(function (_ref) {
  var ratio = _ref.ratio,
      width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      maxHeight = _ref.maxHeight,
      rounded = _ref.rounded,
      onClick = _ref.onClick;
  return {
    position: 'relative',
    overflow: 'hidden',
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
    minHeight: minHeight,
    maxHeight: maxHeight,
    borderRadius: rounded && '50%',
    cursor: onClick ? 'pointer' : undefined,
    onBefore: {
      display: 'block',
      content: '""',
      width: '100%',
      height: 0,
      paddingTop: ratio * 100 + '%'
    },
    '> *': {
      center: true,
      borderRadius: rounded && '50%'
    }
  };
}, 'div', function (_ref2) {
  var ratio = _ref2.ratio,
      rounded = _ref2.rounded,
      width = _ref2.width,
      maxResolution = _ref2.maxResolution,
      srcRatio = _ref2.srcRatio,
      minWidth = _ref2.minWidth,
      minHeight = _ref2.minHeight,
      maxWidth = _ref2.maxWidth,
      maxHeight = _ref2.maxHeight,
      p = _objectWithoutProperties(_ref2, ['ratio', 'rounded', 'width', 'maxResolution', 'srcRatio', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight']);

  return Object.keys(p);
});

var ImageContainer = (_temp = _class = function (_Component) {
  _inherits(ImageContainer, _Component);

  function ImageContainer() {
    _classCallCheck(this, ImageContainer);

    return _possibleConstructorReturn(this, (ImageContainer.__proto__ || Object.getPrototypeOf(ImageContainer)).apply(this, arguments));
  }

  _createClass(ImageContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          width = _props.width,
          height = _props.height,
          ratio = _props.ratio,
          rounded = _props.rounded,
          lazy = _props.lazy,
          attributes = _props.attributes,
          containerProps = _objectWithoutProperties(_props, ['className', 'children', 'width', 'height', 'ratio', 'rounded', 'lazy', 'attributes']);

      return React.createElement(
        Container,
        _extends({}, containerProps, attributes, {
          className: className,
          height: height,
          width: width,
          ratio: ratio,
          rounded: rounded
        }),
        children
      );
    }
  }]);

  return ImageContainer;
}(Component), _class.defaultProps = { attributes: {} }, _temp);

ImageContainer.displayName = 'ImageContainer';
ImageContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ratio: PropTypes.number.isRequired,
  lazy: PropTypes.bool,
  rounded: PropTypes.bool
};
ImageContainer.defaultProps = {
  lazy: true,
  rounded: false
};
export default ImageContainer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaW1hZ2UvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIkNvbnRhaW5lciIsInJhdGlvIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Iiwicm91bmRlZCIsIm9uQ2xpY2siLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidW5kZWZpbmVkIiwib25CZWZvcmUiLCJkaXNwbGF5IiwiY29udGVudCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJjZW50ZXIiLCJtYXhSZXNvbHV0aW9uIiwic3JjUmF0aW8iLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkltYWdlQ29udGFpbmVyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImxhenkiLCJhdHRyaWJ1dGVzIiwiY29udGFpbmVyUHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsWUFBWUQsZ0JBQ2hCO0FBQUEsTUFDRUUsS0FERixRQUNFQSxLQURGO0FBQUEsTUFFRUMsS0FGRixRQUVFQSxLQUZGO0FBQUEsTUFHRUMsUUFIRixRQUdFQSxRQUhGO0FBQUEsTUFJRUMsUUFKRixRQUlFQSxRQUpGO0FBQUEsTUFLRUMsU0FMRixRQUtFQSxTQUxGO0FBQUEsTUFNRUMsU0FORixRQU1FQSxTQU5GO0FBQUEsTUFPRUMsT0FQRixRQU9FQSxPQVBGO0FBQUEsTUFRRUMsT0FSRixRQVFFQSxPQVJGO0FBQUEsU0FTTztBQUNMQyxjQUFVLFVBREw7QUFFTEMsY0FBVSxRQUZMO0FBR0xSLGdCQUhLO0FBSUxDLHNCQUpLO0FBS0xDLHNCQUxLO0FBTUxDLHdCQU5LO0FBT0xDLHdCQVBLO0FBUUxLLGtCQUFjSixXQUFXLEtBUnBCO0FBU0xLLFlBQVFKLFVBQVUsU0FBVixHQUFzQkssU0FUekI7QUFVTEMsY0FBVTtBQUNSQyxlQUFTLE9BREQ7QUFFUkMsZUFBUyxJQUZEO0FBR1JkLGFBQU8sTUFIQztBQUlSZSxjQUFRLENBSkE7QUFLUkMsa0JBQWVqQixRQUFRLEdBQXZCO0FBTFEsS0FWTDtBQWlCTCxXQUFPO0FBQ0xrQixjQUFRLElBREg7QUFFTFIsb0JBQWNKLFdBQVc7QUFGcEI7QUFqQkYsR0FUUDtBQUFBLENBRGdCLEVBZ0NoQixLQWhDZ0IsRUFpQ2hCO0FBQUEsTUFDRU4sS0FERixTQUNFQSxLQURGO0FBQUEsTUFFRU0sT0FGRixTQUVFQSxPQUZGO0FBQUEsTUFHRUwsS0FIRixTQUdFQSxLQUhGO0FBQUEsTUFJRWtCLGFBSkYsU0FJRUEsYUFKRjtBQUFBLE1BS0VDLFFBTEYsU0FLRUEsUUFMRjtBQUFBLE1BTUVsQixRQU5GLFNBTUVBLFFBTkY7QUFBQSxNQU9FRSxTQVBGLFNBT0VBLFNBUEY7QUFBQSxNQVFFRCxRQVJGLFNBUUVBLFFBUkY7QUFBQSxNQVNFRSxTQVRGLFNBU0VBLFNBVEY7QUFBQSxNQVVLZ0IsQ0FWTDs7QUFBQSxTQVdNQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FYTjtBQUFBLENBakNnQixDQUFsQjs7SUErQ01HLGM7Ozs7Ozs7Ozs7OzZCQUdLO0FBQUEsbUJBV0gsS0FBS0MsS0FYRjtBQUFBLFVBRUxDLFNBRkssVUFFTEEsU0FGSztBQUFBLFVBR0xDLFFBSEssVUFHTEEsUUFISztBQUFBLFVBSUwxQixLQUpLLFVBSUxBLEtBSks7QUFBQSxVQUtMZSxNQUxLLFVBS0xBLE1BTEs7QUFBQSxVQU1MaEIsS0FOSyxVQU1MQSxLQU5LO0FBQUEsVUFPTE0sT0FQSyxVQU9MQSxPQVBLO0FBQUEsVUFRTHNCLElBUkssVUFRTEEsSUFSSztBQUFBLFVBU0xDLFVBVEssVUFTTEEsVUFUSztBQUFBLFVBVUZDLGNBVkU7O0FBWVAsYUFDRTtBQUFDLGlCQUFEO0FBQUEscUJBQ01BLGNBRE4sRUFFTUQsVUFGTjtBQUdFLHFCQUFXSCxTQUhiO0FBSUUsa0JBQVFWLE1BSlY7QUFLRSxpQkFBT2YsS0FMVDtBQU1FLGlCQUFPRCxLQU5UO0FBT0UsbUJBQVNNO0FBUFg7QUFTR3FCO0FBVEgsT0FERjtBQWFEOzs7O0VBNUIwQi9CLFMsVUFDcEJtQyxZLEdBQWUsRUFBRUYsWUFBWSxFQUFkLEU7O0FBNkJ4QkwsZUFBZVEsV0FBZixHQUE2QixnQkFBN0I7QUFDQVIsZUFBZVMsU0FBZixHQUEyQjtBQUN6QmhDLFNBQU9KLFVBQVVxQyxTQUFWLENBQW9CLENBQUNyQyxVQUFVc0MsTUFBWCxFQUFtQnRDLFVBQVV1QyxNQUE3QixDQUFwQixFQUEwREMsVUFEeEM7QUFFekJyQyxTQUFPSCxVQUFVdUMsTUFBVixDQUFpQkMsVUFGQztBQUd6QlQsUUFBTS9CLFVBQVV5QyxJQUhTO0FBSXpCaEMsV0FBU1QsVUFBVXlDO0FBSk0sQ0FBM0I7QUFNQWQsZUFBZU8sWUFBZixHQUE4QjtBQUM1QkgsUUFBTSxJQURzQjtBQUU1QnRCLFdBQVM7QUFGbUIsQ0FBOUI7QUFJQSxlQUFla0IsY0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2ltYWdlL2NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHtcbiAgICByYXRpbyxcbiAgICB3aWR0aCxcbiAgICBtaW5XaWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtaW5IZWlnaHQsXG4gICAgbWF4SGVpZ2h0LFxuICAgIHJvdW5kZWQsXG4gICAgb25DbGljayxcbiAgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lkdGgsXG4gICAgbWluV2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWluSGVpZ2h0LFxuICAgIG1heEhlaWdodCxcbiAgICBib3JkZXJSYWRpdXM6IHJvdW5kZWQgJiYgJzUwJScsXG4gICAgY3Vyc29yOiBvbkNsaWNrID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkLFxuICAgIG9uQmVmb3JlOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHBhZGRpbmdUb3A6IGAke3JhdGlvICogMTAwfSVgLFxuICAgIH0sXG4gICAgJz4gKic6IHtcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgIGJvcmRlclJhZGl1czogcm91bmRlZCAmJiAnNTAlJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7XG4gICAgcmF0aW8sXG4gICAgcm91bmRlZCxcbiAgICB3aWR0aCxcbiAgICBtYXhSZXNvbHV0aW9uLFxuICAgIHNyY1JhdGlvLFxuICAgIG1pbldpZHRoLFxuICAgIG1pbkhlaWdodCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXhIZWlnaHQsXG4gICAgLi4ucFxuICB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNsYXNzIEltYWdlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgYXR0cmlidXRlczoge30gfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhdGlvLFxuICAgICAgcm91bmRlZCxcbiAgICAgIGxhenksXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgLi4uY29udGFpbmVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgcmF0aW89e3JhdGlvfVxuICAgICAgICByb3VuZGVkPXtyb3VuZGVkfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5JbWFnZUNvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdJbWFnZUNvbnRhaW5lcic7XG5JbWFnZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgcmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbGF6eTogUHJvcFR5cGVzLmJvb2wsXG4gIHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcbkltYWdlQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGF6eTogdHJ1ZSxcbiAgcm91bmRlZDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXI7XG4iXX0=
