'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Container = (0, _reactFela.createComponent)(function (_ref) {
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

      return _react2.default.createElement(
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
}(_react.Component), _class.defaultProps = { attributes: {} }, _temp);

ImageContainer.displayName = 'ImageContainer';
ImageContainer.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  ratio: _propTypes2.default.number.isRequired,
  lazy: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool
};
ImageContainer.defaultProps = {
  lazy: true,
  rounded: false
};
exports.default = ImageContainer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvY29udGFpbmVyLmVzNiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJyYXRpbyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInJvdW5kZWQiLCJvbkNsaWNrIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsInVuZGVmaW5lZCIsIm9uQmVmb3JlIiwiZGlzcGxheSIsImNvbnRlbnQiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiY2VudGVyIiwibWF4UmVzb2x1dGlvbiIsInNyY1JhdGlvIiwicCIsIk9iamVjdCIsImtleXMiLCJJbWFnZUNvbnRhaW5lciIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJsYXp5IiwiYXR0cmlidXRlcyIsImNvbnRhaW5lclByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLGdDQUNoQjtBQUFBLE1BQ0VDLEtBREYsUUFDRUEsS0FERjtBQUFBLE1BRUVDLEtBRkYsUUFFRUEsS0FGRjtBQUFBLE1BR0VDLFFBSEYsUUFHRUEsUUFIRjtBQUFBLE1BSUVDLFFBSkYsUUFJRUEsUUFKRjtBQUFBLE1BS0VDLFNBTEYsUUFLRUEsU0FMRjtBQUFBLE1BTUVDLFNBTkYsUUFNRUEsU0FORjtBQUFBLE1BT0VDLE9BUEYsUUFPRUEsT0FQRjtBQUFBLE1BUUVDLE9BUkYsUUFRRUEsT0FSRjtBQUFBLFNBU087QUFDTEMsY0FBVSxVQURMO0FBRUxDLGNBQVUsUUFGTDtBQUdMUixnQkFISztBQUlMQyxzQkFKSztBQUtMQyxzQkFMSztBQU1MQyx3QkFOSztBQU9MQyx3QkFQSztBQVFMSyxrQkFBY0osV0FBVyxLQVJwQjtBQVNMSyxZQUFRSixVQUFVLFNBQVYsR0FBc0JLLFNBVHpCO0FBVUxDLGNBQVU7QUFDUkMsZUFBUyxPQUREO0FBRVJDLGVBQVMsSUFGRDtBQUdSZCxhQUFPLE1BSEM7QUFJUmUsY0FBUSxDQUpBO0FBS1JDLGtCQUFlakIsUUFBUSxHQUF2QjtBQUxRLEtBVkw7QUFpQkwsV0FBTztBQUNMa0IsY0FBUSxJQURIO0FBRUxSLG9CQUFjSixXQUFXO0FBRnBCO0FBakJGLEdBVFA7QUFBQSxDQURnQixFQWdDaEIsS0FoQ2dCLEVBaUNoQjtBQUFBLE1BQ0VOLEtBREYsU0FDRUEsS0FERjtBQUFBLE1BRUVNLE9BRkYsU0FFRUEsT0FGRjtBQUFBLE1BR0VMLEtBSEYsU0FHRUEsS0FIRjtBQUFBLE1BSUVrQixhQUpGLFNBSUVBLGFBSkY7QUFBQSxNQUtFQyxRQUxGLFNBS0VBLFFBTEY7QUFBQSxNQU1FbEIsUUFORixTQU1FQSxRQU5GO0FBQUEsTUFPRUUsU0FQRixTQU9FQSxTQVBGO0FBQUEsTUFRRUQsUUFSRixTQVFFQSxRQVJGO0FBQUEsTUFTRUUsU0FURixTQVNFQSxTQVRGO0FBQUEsTUFVS2dCLENBVkw7O0FBQUEsU0FXTUMsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBWE47QUFBQSxDQWpDZ0IsQ0FBbEI7O0lBK0NNRyxjOzs7Ozs7Ozs7Ozs2QkFHSztBQUFBLG1CQVdILEtBQUtDLEtBWEY7QUFBQSxVQUVMQyxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUdMQyxRQUhLLFVBR0xBLFFBSEs7QUFBQSxVQUlMMUIsS0FKSyxVQUlMQSxLQUpLO0FBQUEsVUFLTGUsTUFMSyxVQUtMQSxNQUxLO0FBQUEsVUFNTGhCLEtBTkssVUFNTEEsS0FOSztBQUFBLFVBT0xNLE9BUEssVUFPTEEsT0FQSztBQUFBLFVBUUxzQixJQVJLLFVBUUxBLElBUks7QUFBQSxVQVNMQyxVQVRLLFVBU0xBLFVBVEs7QUFBQSxVQVVGQyxjQVZFOztBQVlQLGFBQ0U7QUFBQyxpQkFBRDtBQUFBLHFCQUNNQSxjQUROLEVBRU1ELFVBRk47QUFHRSxxQkFBV0gsU0FIYjtBQUlFLGtCQUFRVixNQUpWO0FBS0UsaUJBQU9mLEtBTFQ7QUFNRSxpQkFBT0QsS0FOVDtBQU9FLG1CQUFTTTtBQVBYO0FBU0dxQjtBQVRILE9BREY7QUFhRDs7Ozs0QkEzQk1JLFksR0FBZSxFQUFFRixZQUFZLEVBQWQsRTs7QUE2QnhCTCxlQUFlUSxXQUFmLEdBQTZCLGdCQUE3QjtBQUNBUixlQUFlUyxTQUFmLEdBQTJCO0FBQ3pCaEMsU0FBTyxvQkFBVWlDLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVUMsTUFBWCxFQUFtQixvQkFBVUMsTUFBN0IsQ0FBcEIsRUFBMERDLFVBRHhDO0FBRXpCckMsU0FBTyxvQkFBVW9DLE1BQVYsQ0FBaUJDLFVBRkM7QUFHekJULFFBQU0sb0JBQVVVLElBSFM7QUFJekJoQyxXQUFTLG9CQUFVZ0M7QUFKTSxDQUEzQjtBQU1BZCxlQUFlTyxZQUFmLEdBQThCO0FBQzVCSCxRQUFNLElBRHNCO0FBRTVCdEIsV0FBUztBQUZtQixDQUE5QjtrQkFJZWtCLGMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9pbWFnZS9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7XG4gICAgcmF0aW8sXG4gICAgd2lkdGgsXG4gICAgbWluV2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWluSGVpZ2h0LFxuICAgIG1heEhlaWdodCxcbiAgICByb3VuZGVkLFxuICAgIG9uQ2xpY2ssXG4gIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdpZHRoLFxuICAgIG1pbldpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1pbkhlaWdodCxcbiAgICBtYXhIZWlnaHQsXG4gICAgYm9yZGVyUmFkaXVzOiByb3VuZGVkICYmICc1MCUnLFxuICAgIGN1cnNvcjogb25DbGljayA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZCxcbiAgICBvbkJlZm9yZToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBwYWRkaW5nVG9wOiBgJHtyYXRpbyAqIDEwMH0lYCxcbiAgICB9LFxuICAgICc+IConOiB7XG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBib3JkZXJSYWRpdXM6IHJvdW5kZWQgJiYgJzUwJScsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICAoe1xuICAgIHJhdGlvLFxuICAgIHJvdW5kZWQsXG4gICAgd2lkdGgsXG4gICAgbWF4UmVzb2x1dGlvbixcbiAgICBzcmNSYXRpbyxcbiAgICBtaW5XaWR0aCxcbiAgICBtaW5IZWlnaHQsXG4gICAgbWF4V2lkdGgsXG4gICAgbWF4SGVpZ2h0LFxuICAgIC4uLnBcbiAgfSkgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jbGFzcyBJbWFnZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IGF0dHJpYnV0ZXM6IHt9IH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYXRpbyxcbiAgICAgIHJvdW5kZWQsXG4gICAgICBsYXp5LFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIC4uLmNvbnRhaW5lclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIHJhdGlvPXtyYXRpb31cbiAgICAgICAgcm91bmRlZD17cm91bmRlZH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuSW1hZ2VDb250YWluZXIuZGlzcGxheU5hbWUgPSAnSW1hZ2VDb250YWluZXInO1xuSW1hZ2VDb250YWluZXIucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIHJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGxhenk6IFByb3BUeXBlcy5ib29sLFxuICByb3VuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5JbWFnZUNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhenk6IHRydWUsXG4gIHJvdW5kZWQ6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udGFpbmVyO1xuIl19
