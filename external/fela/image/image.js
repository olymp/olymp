'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _placeholder = require('./placeholder');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _img = require('./img');

var _img2 = _interopRequireDefault(_img);

var _amp = require('./amp');

var _amp2 = _interopRequireDefault(_amp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initVals = function initVals(_ref) {
  var width = _ref.width,
      height = _ref.height,
      maxResolution = _ref.maxResolution,
      ratio = _ref.ratio;

  var isPercentage = false;
  var originalWidth = width;
  var originalHeight = height;

  if (!ratio) {
    ratio = 0.75;
  }

  // width = percent
  if (typeof width === 'string') {
    width = undefined;
    isPercentage = true;
  }

  // if height is set
  if (height) {
    if (width) {
      ratio = height / width;
    } else {
      width = height / ratio;
    }
  }

  // max size, if no size is set
  if (!width && !height) {
    width = Math.sqrt(maxResolution / ratio);
  }

  return {
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    width: width,
    ratio: ratio,
    isPercentage: isPercentage
  };
};

var limitWidth = function limitWidth(_ref2) {
  var width = _ref2.width,
      ratio = _ref2.ratio,
      isPercentage = _ref2.isPercentage,
      minWidth = _ref2.minWidth,
      minHeight = _ref2.minHeight,
      maxWidth = _ref2.maxWidth,
      maxHeight = _ref2.maxHeight,
      maxResolution = _ref2.maxResolution,
      cWidth = _ref2.cWidth;

  // minWidth/minHeight
  if (minWidth && width < minWidth) {
    width = minWidth;
  }
  if (!isPercentage && minHeight && width * ratio < minHeight) {
    width = minHeight / ratio;
  }

  // maxWidth/maxHeight
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
  }
  if (!isPercentage && maxHeight && width * ratio > maxHeight) {
    width = maxHeight / ratio;
  }

  // maxResolution
  if (Math.pow(width, 2) * ratio > maxResolution) {
    width = Math.sqrt(maxResolution / ratio);
  }

  // Container-size
  if (width > cWidth) {
    width = cWidth;
  }

  return Math.round(width);
};

var getMode = function getMode(props) {
  var mode = props.mode,
      ratio = props.ratio,
      srcRatio = props.srcRatio;

  var w = limitWidth(props);

  var defaultResult = {
    layout: 'fill',
    w: w,
    h: Math.round(w * ratio)
  };

  switch (mode) {
    case 'filled':
      // kleinere Seite 100%
      return defaultResult;

    case 'padded':
      // größere Seite 100%
      return {
        layout: 'fixed-height',
        w: w,
        h: Math.round(w * (srcRatio || ratio))
      };

    default:
      return defaultResult;
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.getContext)({
  amp: _propTypes2.default.bool
}), (0, _recompose.withState)('cWidth', 'setCWidth', undefined), (0, _recompose.withState)('isLoaded', 'setIsLoaded', false), (0, _recompose.withPropsOnChange)(['width', 'height', 'maxResolution', 'ratio'], function (props) {
  return initVals(props);
}), (0, _recompose.withPropsOnChange)(['mode', 'ratio', 'srcRatio', 'cWidth'], function (props) {
  return getMode(props);
}), (0, _recompose.withProps)(function (_ref3) {
  var src = _ref3.src,
      w = _ref3.w,
      h = _ref3.h;
  return {
    url: typeof src === 'function' ? src(w, h) : src,
    lowUrl: typeof src === 'function' ? src(10, 10) : src
  };
}));

var _ref5 = _react2.default.createElement('div', null);

var Image = enhance(_class = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref4, [this].concat(args))), _this), _this.onResize = function (width) {
      var setCWidth = _this.props.setCWidth;

      setCWidth(width);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = _reactDom2.default.findDOMNode(this);
      if (this.node) {
        this.onResize(this.node.getBoundingClientRect().width);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          lazy = _props.lazy,
          mode = _props.mode,
          amp = _props.amp,
          src = _props.src,
          srcSet = _props.srcSet,
          alt = _props.alt,
          onClick = _props.onClick,
          circle = _props.circle,
          children = _props.children,
          attributes = _props.attributes,
          width = _props.width,
          ratio = _props.ratio,
          isPercentage = _props.isPercentage,
          layout = _props.layout,
          w = _props.w,
          h = _props.h,
          url = _props.url,
          lowUrl = _props.lowUrl,
          originalWidth = _props.originalWidth,
          originalHeight = _props.originalHeight,
          cWidth = _props.cWidth,
          setCWidth = _props.setCWidth,
          isLoaded = _props.isLoaded,
          setIsLoaded = _props.setIsLoaded,
          containerProps = _objectWithoutProperties(_props, ['className', 'lazy', 'mode', 'amp', 'src', 'srcSet', 'alt', 'onClick', 'circle', 'children', 'attributes', 'width', 'ratio', 'isPercentage', 'layout', 'w', 'h', 'url', 'lowUrl', 'originalWidth', 'originalHeight', 'cWidth', 'setCWidth', 'isLoaded', 'setIsLoaded']);

      if (!w) {
        return _ref5;
      }

      var image = url ? _react2.default.createElement(_img2.default, {
        src: url,
        srcSet: srcSet,
        alt: alt,
        width: w >= h ? '100%' : 'auto',
        height: w < h ? '100%' : 'auto',
        circle: circle
        // onLoad={() => setIsLoaded(true)}
      }) : _react2.default.createElement(_placeholder2.default, { height: '100%', width: '100%', circle: circle });
      return _react2.default.createElement(
        _container2.default,
        _extends({}, containerProps, {
          attributes: attributes,
          className: className,
          width: isPercentage ? originalWidth : w,
          ratio: ratio,
          onClick: onClick
        }),
        !isLoaded && null
        // <Placeholder height="100%" width="100%" circle={circle} />
        ,
        amp && image ? _react2.default.createElement(
          _amp2.default,
          { layout: layout, src: url, alt: alt, width: w, height: h },
          image
        ) : image,
        children
      );
    }
  }]);

  return Image;
}(_react.Component)) || _class;

Image.displayName = 'Image';
Image.propTypes = {
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  ratio: _propTypes2.default.number.isRequired,
  srcRatio: _propTypes2.default.number.isRequired,
  mode: _propTypes2.default.oneOf(['filled', 'padded']),
  circle: _propTypes2.default.bool,

  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.number,

  minWidth: _propTypes2.default.number,
  minHeight: _propTypes2.default.number,
  maxWidth: _propTypes2.default.number,
  maxHeight: _propTypes2.default.number,
  maxResolution: _propTypes2.default.number,

  lazy: _propTypes2.default.bool,
  alt: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
Image.defaultProps = {
  src: undefined,
  // ratio: 0.75,
  // srcRatio: 0.75,
  mode: 'filled',
  circle: false,

  width: undefined,
  height: undefined,

  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxResolution: 111000, // 333*333px

  lazy: true,
  alt: '',
  onClick: undefined
};
Image.Placeholder = _placeholder2.default;
exports.default = Image;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvaW1hZ2UuZXM2Il0sIm5hbWVzIjpbImluaXRWYWxzIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhSZXNvbHV0aW9uIiwicmF0aW8iLCJpc1BlcmNlbnRhZ2UiLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJ1bmRlZmluZWQiLCJNYXRoIiwic3FydCIsImxpbWl0V2lkdGgiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiY1dpZHRoIiwicm91bmQiLCJnZXRNb2RlIiwibW9kZSIsInByb3BzIiwic3JjUmF0aW8iLCJ3IiwiZGVmYXVsdFJlc3VsdCIsImxheW91dCIsImgiLCJlbmhhbmNlIiwiYW1wIiwiYm9vbCIsInNyYyIsInVybCIsImxvd1VybCIsIkltYWdlIiwib25SZXNpemUiLCJzZXRDV2lkdGgiLCJub2RlIiwiZmluZERPTU5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGFzc05hbWUiLCJsYXp5Iiwic3JjU2V0IiwiYWx0Iiwib25DbGljayIsImNpcmNsZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJjb250YWluZXJQcm9wcyIsImltYWdlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiUGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxPQUE2QztBQUFBLE1BQTFDQyxLQUEwQyxRQUExQ0EsS0FBMEM7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLGFBQTJCLFFBQTNCQSxhQUEyQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDNUQsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQU1DLGdCQUFnQkwsS0FBdEI7QUFDQSxNQUFNTSxpQkFBaUJMLE1BQXZCOztBQUVBLE1BQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1ZBLFlBQVEsSUFBUjtBQUNEOztBQUVEO0FBQ0EsTUFBSSxPQUFPSCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCQSxZQUFRTyxTQUFSO0FBQ0FILG1CQUFlLElBQWY7QUFDRDs7QUFFRDtBQUNBLE1BQUlILE1BQUosRUFBWTtBQUNWLFFBQUlELEtBQUosRUFBVztBQUNURyxjQUFRRixTQUFTRCxLQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQSxjQUFRQyxTQUFTRSxLQUFqQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxNQUFJLENBQUNILEtBQUQsSUFBVSxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCRCxZQUFRUSxLQUFLQyxJQUFMLENBQVVQLGdCQUFnQkMsS0FBMUIsQ0FBUjtBQUNEOztBQUVELFNBQU87QUFDTEUsZ0NBREs7QUFFTEMsa0NBRks7QUFHTE4sZ0JBSEs7QUFJTEcsZ0JBSks7QUFLTEM7QUFMSyxHQUFQO0FBT0QsQ0FwQ0Q7O0FBc0NBLElBQU1NLGFBQWEsU0FBYkEsVUFBYSxRQVViO0FBQUEsTUFUSlYsS0FTSSxTQVRKQSxLQVNJO0FBQUEsTUFSSkcsS0FRSSxTQVJKQSxLQVFJO0FBQUEsTUFQSkMsWUFPSSxTQVBKQSxZQU9JO0FBQUEsTUFOSk8sUUFNSSxTQU5KQSxRQU1JO0FBQUEsTUFMSkMsU0FLSSxTQUxKQSxTQUtJO0FBQUEsTUFKSkMsUUFJSSxTQUpKQSxRQUlJO0FBQUEsTUFISkMsU0FHSSxTQUhKQSxTQUdJO0FBQUEsTUFGSlosYUFFSSxTQUZKQSxhQUVJO0FBQUEsTUFESmEsTUFDSSxTQURKQSxNQUNJOztBQUNKO0FBQ0EsTUFBSUosWUFBWVgsUUFBUVcsUUFBeEIsRUFBa0M7QUFDaENYLFlBQVFXLFFBQVI7QUFDRDtBQUNELE1BQUksQ0FBQ1AsWUFBRCxJQUFpQlEsU0FBakIsSUFBOEJaLFFBQVFHLEtBQVIsR0FBZ0JTLFNBQWxELEVBQTZEO0FBQzNEWixZQUFRWSxZQUFZVCxLQUFwQjtBQUNEOztBQUVEO0FBQ0EsTUFBSVUsWUFBWWIsUUFBUWEsUUFBeEIsRUFBa0M7QUFDaENiLFlBQVFhLFFBQVI7QUFDRDtBQUNELE1BQUksQ0FBQ1QsWUFBRCxJQUFpQlUsU0FBakIsSUFBOEJkLFFBQVFHLEtBQVIsR0FBZ0JXLFNBQWxELEVBQTZEO0FBQzNEZCxZQUFRYyxZQUFZWCxLQUFwQjtBQUNEOztBQUVEO0FBQ0EsTUFBSSxnQkFBUyxDQUFULElBQWFBLEtBQWIsR0FBcUJELGFBQXpCLEVBQXdDO0FBQ3RDRixZQUFRUSxLQUFLQyxJQUFMLENBQVVQLGdCQUFnQkMsS0FBMUIsQ0FBUjtBQUNEOztBQUVEO0FBQ0EsTUFBSUgsUUFBUWUsTUFBWixFQUFvQjtBQUNsQmYsWUFBUWUsTUFBUjtBQUNEOztBQUVELFNBQU9QLEtBQUtRLEtBQUwsQ0FBV2hCLEtBQVgsQ0FBUDtBQUNELENBdENEOztBQXdDQSxJQUFNaUIsVUFBVSxTQUFWQSxPQUFVLFFBQVM7QUFBQSxNQUNmQyxJQURlLEdBQ1dDLEtBRFgsQ0FDZkQsSUFEZTtBQUFBLE1BQ1RmLEtBRFMsR0FDV2dCLEtBRFgsQ0FDVGhCLEtBRFM7QUFBQSxNQUNGaUIsUUFERSxHQUNXRCxLQURYLENBQ0ZDLFFBREU7O0FBRXZCLE1BQU1DLElBQUlYLFdBQVdTLEtBQVgsQ0FBVjs7QUFFQSxNQUFNRyxnQkFBZ0I7QUFDcEJDLFlBQVEsTUFEWTtBQUVwQkYsUUFGb0I7QUFHcEJHLE9BQUdoQixLQUFLUSxLQUFMLENBQVdLLElBQUlsQixLQUFmO0FBSGlCLEdBQXRCOztBQU1BLFVBQVFlLElBQVI7QUFDRSxTQUFLLFFBQUw7QUFDRTtBQUNBLGFBQU9JLGFBQVA7O0FBRUYsU0FBSyxRQUFMO0FBQ0U7QUFDQSxhQUFPO0FBQ0xDLGdCQUFRLGNBREg7QUFFTEYsWUFGSztBQUdMRyxXQUFHaEIsS0FBS1EsS0FBTCxDQUFXSyxLQUFLRCxZQUFZakIsS0FBakIsQ0FBWDtBQUhFLE9BQVA7O0FBTUY7QUFDRSxhQUFPbUIsYUFBUDtBQWRKO0FBZ0JELENBMUJEOztBQTRCQSxJQUFNRyxVQUFVLHdCQUNkLDJCQUFXO0FBQ1RDLE9BQUssb0JBQVVDO0FBRE4sQ0FBWCxDQURjLEVBSWQsMEJBQVUsUUFBVixFQUFvQixXQUFwQixFQUFpQ3BCLFNBQWpDLENBSmMsRUFLZCwwQkFBVSxVQUFWLEVBQXNCLGFBQXRCLEVBQXFDLEtBQXJDLENBTGMsRUFNZCxrQ0FBa0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixlQUFwQixFQUFxQyxPQUFyQyxDQUFsQixFQUFpRTtBQUFBLFNBQy9EUixTQUFTb0IsS0FBVCxDQUQrRDtBQUFBLENBQWpFLENBTmMsRUFTZCxrQ0FBa0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixVQUFsQixFQUE4QixRQUE5QixDQUFsQixFQUEyRDtBQUFBLFNBQ3pERixRQUFRRSxLQUFSLENBRHlEO0FBQUEsQ0FBM0QsQ0FUYyxFQVlkLDBCQUFVO0FBQUEsTUFBR1MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsTUFBUVAsQ0FBUixTQUFRQSxDQUFSO0FBQUEsTUFBV0csQ0FBWCxTQUFXQSxDQUFYO0FBQUEsU0FBb0I7QUFDNUJLLFNBQUssT0FBT0QsR0FBUCxLQUFlLFVBQWYsR0FBNEJBLElBQUlQLENBQUosRUFBT0csQ0FBUCxDQUE1QixHQUF3Q0ksR0FEakI7QUFFNUJFLFlBQVEsT0FBT0YsR0FBUCxLQUFlLFVBQWYsR0FBNEJBLElBQUksRUFBSixFQUFRLEVBQVIsQ0FBNUIsR0FBMENBO0FBRnRCLEdBQXBCO0FBQUEsQ0FBVixDQVpjLENBQWhCOztZQStEYSwwQzs7SUE1Q1BHLEssR0FETE4sTzs7Ozs7Ozs7Ozs7Ozs7c0xBU0NPLFEsR0FBVyxpQkFBUztBQUFBLFVBQ1ZDLFNBRFUsR0FDSSxNQUFLZCxLQURULENBQ1ZjLFNBRFU7O0FBRWxCQSxnQkFBVWpDLEtBQVY7QUFDRCxLOzs7Ozt3Q0FWbUI7QUFDbEIsV0FBS2tDLElBQUwsR0FBWSxtQkFBU0MsV0FBVCxDQUFxQixJQUFyQixDQUFaO0FBQ0EsVUFBSSxLQUFLRCxJQUFULEVBQWU7QUFDYixhQUFLRixRQUFMLENBQWMsS0FBS0UsSUFBTCxDQUFVRSxxQkFBVixHQUFrQ3BDLEtBQWhEO0FBQ0Q7QUFDRjs7OzZCQU9RO0FBQUEsbUJBNEJILEtBQUttQixLQTVCRjtBQUFBLFVBRUxrQixTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUdMQyxJQUhLLFVBR0xBLElBSEs7QUFBQSxVQUlMcEIsSUFKSyxVQUlMQSxJQUpLO0FBQUEsVUFLTFEsR0FMSyxVQUtMQSxHQUxLO0FBQUEsVUFNTEUsR0FOSyxVQU1MQSxHQU5LO0FBQUEsVUFPTFcsTUFQSyxVQU9MQSxNQVBLO0FBQUEsVUFRTEMsR0FSSyxVQVFMQSxHQVJLO0FBQUEsVUFTTEMsT0FUSyxVQVNMQSxPQVRLO0FBQUEsVUFVTEMsTUFWSyxVQVVMQSxNQVZLO0FBQUEsVUFXTEMsUUFYSyxVQVdMQSxRQVhLO0FBQUEsVUFZTEMsVUFaSyxVQVlMQSxVQVpLO0FBQUEsVUFhTDVDLEtBYkssVUFhTEEsS0FiSztBQUFBLFVBY0xHLEtBZEssVUFjTEEsS0FkSztBQUFBLFVBZUxDLFlBZkssVUFlTEEsWUFmSztBQUFBLFVBZ0JMbUIsTUFoQkssVUFnQkxBLE1BaEJLO0FBQUEsVUFpQkxGLENBakJLLFVBaUJMQSxDQWpCSztBQUFBLFVBa0JMRyxDQWxCSyxVQWtCTEEsQ0FsQks7QUFBQSxVQW1CTEssR0FuQkssVUFtQkxBLEdBbkJLO0FBQUEsVUFvQkxDLE1BcEJLLFVBb0JMQSxNQXBCSztBQUFBLFVBcUJMekIsYUFyQkssVUFxQkxBLGFBckJLO0FBQUEsVUFzQkxDLGNBdEJLLFVBc0JMQSxjQXRCSztBQUFBLFVBdUJMUyxNQXZCSyxVQXVCTEEsTUF2Qks7QUFBQSxVQXdCTGtCLFNBeEJLLFVBd0JMQSxTQXhCSztBQUFBLFVBeUJMWSxRQXpCSyxVQXlCTEEsUUF6Qks7QUFBQSxVQTBCTEMsV0ExQkssVUEwQkxBLFdBMUJLO0FBQUEsVUEyQkZDLGNBM0JFOztBQThCUCxVQUFJLENBQUMxQixDQUFMLEVBQVE7QUFDTjtBQUNEOztBQUVELFVBQU0yQixRQUFRbkIsTUFDWjtBQUNFLGFBQUtBLEdBRFA7QUFFRSxnQkFBUVUsTUFGVjtBQUdFLGFBQUtDLEdBSFA7QUFJRSxlQUFPbkIsS0FBS0csQ0FBTCxHQUFTLE1BQVQsR0FBa0IsTUFKM0I7QUFLRSxnQkFBUUgsSUFBSUcsQ0FBSixHQUFRLE1BQVIsR0FBaUIsTUFMM0I7QUFNRSxnQkFBUWtCO0FBQ1I7QUFQRixRQURZLEdBV1osdURBQWEsUUFBTyxNQUFwQixFQUEyQixPQUFNLE1BQWpDLEVBQXdDLFFBQVFBLE1BQWhELEdBWEY7QUFhQSxhQUNFO0FBQUE7QUFBQSxxQkFDTUssY0FETjtBQUVFLHNCQUFZSCxVQUZkO0FBR0UscUJBQVdQLFNBSGI7QUFJRSxpQkFBT2pDLGVBQWVDLGFBQWYsR0FBK0JnQixDQUp4QztBQUtFLGlCQUFPbEIsS0FMVDtBQU1FLG1CQUFTc0M7QUFOWDtBQVFHLFNBQUNJLFFBQUQsSUFDQztBQUNBO0FBVko7QUFZR25CLGVBQU9zQixLQUFQLEdBQ0M7QUFBQTtBQUFBLFlBQUssUUFBUXpCLE1BQWIsRUFBcUIsS0FBS00sR0FBMUIsRUFBK0IsS0FBS1csR0FBcEMsRUFBeUMsT0FBT25CLENBQWhELEVBQW1ELFFBQVFHLENBQTNEO0FBQ0d3QjtBQURILFNBREQsR0FLQ0EsS0FqQko7QUFtQkdMO0FBbkJILE9BREY7QUF1QkQ7Ozs7OztBQUVIWixNQUFNa0IsV0FBTixHQUFvQixPQUFwQjtBQUNBbEIsTUFBTW1CLFNBQU4sR0FBa0I7QUFDaEJ0QixPQUFLLG9CQUFVdUIsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVQyxJQUE3QixDQUFwQixDQURXO0FBRWhCbEQsU0FBTyxvQkFBVW1ELE1BQVYsQ0FBaUJDLFVBRlI7QUFHaEJuQyxZQUFVLG9CQUFVa0MsTUFBVixDQUFpQkMsVUFIWDtBQUloQnJDLFFBQU0sb0JBQVVzQyxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEIsQ0FKVTtBQUtoQmQsVUFBUSxvQkFBVWYsSUFMRjs7QUFPaEIzQixTQUFPLG9CQUFVbUQsU0FBVixDQUFvQixDQUFDLG9CQUFVQyxNQUFYLEVBQW1CLG9CQUFVRSxNQUE3QixDQUFwQixDQVBTO0FBUWhCckQsVUFBUSxvQkFBVXFELE1BUkY7O0FBVWhCM0MsWUFBVSxvQkFBVTJDLE1BVko7QUFXaEIxQyxhQUFXLG9CQUFVMEMsTUFYTDtBQVloQnpDLFlBQVUsb0JBQVV5QyxNQVpKO0FBYWhCeEMsYUFBVyxvQkFBVXdDLE1BYkw7QUFjaEJwRCxpQkFBZSxvQkFBVW9ELE1BZFQ7O0FBZ0JoQmhCLFFBQU0sb0JBQVVYLElBaEJBO0FBaUJoQmEsT0FBSyxvQkFBVVksTUFqQkM7QUFrQmhCWCxXQUFTLG9CQUFVWTtBQWxCSCxDQUFsQjtBQW9CQXRCLE1BQU0wQixZQUFOLEdBQXFCO0FBQ25CN0IsT0FBS3JCLFNBRGM7QUFFbkI7QUFDQTtBQUNBVyxRQUFNLFFBSmE7QUFLbkJ3QixVQUFRLEtBTFc7O0FBT25CMUMsU0FBT08sU0FQWTtBQVFuQk4sVUFBUU0sU0FSVzs7QUFVbkJJLFlBQVVKLFNBVlM7QUFXbkJLLGFBQVdMLFNBWFE7QUFZbkJNLFlBQVVOLFNBWlM7QUFhbkJPLGFBQVdQLFNBYlE7QUFjbkJMLGlCQUFlLE1BZEksRUFjSTs7QUFFdkJvQyxRQUFNLElBaEJhO0FBaUJuQkUsT0FBSyxFQWpCYztBQWtCbkJDLFdBQVNsQztBQWxCVSxDQUFyQjtBQW9CQXdCLE1BQU0yQixXQUFOO2tCQUNlM0IsSyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2ltYWdlL2ltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUsIHdpdGhQcm9wcywgZ2V0Q29udGV4dCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCBJbWcgZnJvbSAnLi9pbWcnO1xuaW1wb3J0IEFtcCBmcm9tICcuL2FtcCc7XG5cbmNvbnN0IGluaXRWYWxzID0gKHsgd2lkdGgsIGhlaWdodCwgbWF4UmVzb2x1dGlvbiwgcmF0aW8gfSkgPT4ge1xuICBsZXQgaXNQZXJjZW50YWdlID0gZmFsc2U7XG4gIGNvbnN0IG9yaWdpbmFsV2lkdGggPSB3aWR0aDtcbiAgY29uc3Qgb3JpZ2luYWxIZWlnaHQgPSBoZWlnaHQ7XG5cbiAgaWYgKCFyYXRpbykge1xuICAgIHJhdGlvID0gMC43NTtcbiAgfVxuXG4gIC8vIHdpZHRoID0gcGVyY2VudFxuICBpZiAodHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJykge1xuICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuICAgIGlzUGVyY2VudGFnZSA9IHRydWU7XG4gIH1cblxuICAvLyBpZiBoZWlnaHQgaXMgc2V0XG4gIGlmIChoZWlnaHQpIHtcbiAgICBpZiAod2lkdGgpIHtcbiAgICAgIHJhdGlvID0gaGVpZ2h0IC8gd2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0IC8gcmF0aW87XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4IHNpemUsIGlmIG5vIHNpemUgaXMgc2V0XG4gIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xuICAgIHdpZHRoID0gTWF0aC5zcXJ0KG1heFJlc29sdXRpb24gLyByYXRpbyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsV2lkdGgsXG4gICAgb3JpZ2luYWxIZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgcmF0aW8sXG4gICAgaXNQZXJjZW50YWdlLFxuICB9O1xufTtcblxuY29uc3QgbGltaXRXaWR0aCA9ICh7XG4gIHdpZHRoLFxuICByYXRpbyxcbiAgaXNQZXJjZW50YWdlLFxuICBtaW5XaWR0aCxcbiAgbWluSGVpZ2h0LFxuICBtYXhXaWR0aCxcbiAgbWF4SGVpZ2h0LFxuICBtYXhSZXNvbHV0aW9uLFxuICBjV2lkdGgsXG59KSA9PiB7XG4gIC8vIG1pbldpZHRoL21pbkhlaWdodFxuICBpZiAobWluV2lkdGggJiYgd2lkdGggPCBtaW5XaWR0aCkge1xuICAgIHdpZHRoID0gbWluV2lkdGg7XG4gIH1cbiAgaWYgKCFpc1BlcmNlbnRhZ2UgJiYgbWluSGVpZ2h0ICYmIHdpZHRoICogcmF0aW8gPCBtaW5IZWlnaHQpIHtcbiAgICB3aWR0aCA9IG1pbkhlaWdodCAvIHJhdGlvO1xuICB9XG5cbiAgLy8gbWF4V2lkdGgvbWF4SGVpZ2h0XG4gIGlmIChtYXhXaWR0aCAmJiB3aWR0aCA+IG1heFdpZHRoKSB7XG4gICAgd2lkdGggPSBtYXhXaWR0aDtcbiAgfVxuICBpZiAoIWlzUGVyY2VudGFnZSAmJiBtYXhIZWlnaHQgJiYgd2lkdGggKiByYXRpbyA+IG1heEhlaWdodCkge1xuICAgIHdpZHRoID0gbWF4SGVpZ2h0IC8gcmF0aW87XG4gIH1cblxuICAvLyBtYXhSZXNvbHV0aW9uXG4gIGlmICh3aWR0aCAqKiAyICogcmF0aW8gPiBtYXhSZXNvbHV0aW9uKSB7XG4gICAgd2lkdGggPSBNYXRoLnNxcnQobWF4UmVzb2x1dGlvbiAvIHJhdGlvKTtcbiAgfVxuXG4gIC8vIENvbnRhaW5lci1zaXplXG4gIGlmICh3aWR0aCA+IGNXaWR0aCkge1xuICAgIHdpZHRoID0gY1dpZHRoO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgucm91bmQod2lkdGgpO1xufTtcblxuY29uc3QgZ2V0TW9kZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBtb2RlLCByYXRpbywgc3JjUmF0aW8gfSA9IHByb3BzO1xuICBjb25zdCB3ID0gbGltaXRXaWR0aChwcm9wcyk7XG5cbiAgY29uc3QgZGVmYXVsdFJlc3VsdCA9IHtcbiAgICBsYXlvdXQ6ICdmaWxsJyxcbiAgICB3LFxuICAgIGg6IE1hdGgucm91bmQodyAqIHJhdGlvKSxcbiAgfTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdmaWxsZWQnOlxuICAgICAgLy8ga2xlaW5lcmUgU2VpdGUgMTAwJVxuICAgICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG5cbiAgICBjYXNlICdwYWRkZWQnOlxuICAgICAgLy8gZ3LDtsOfZXJlIFNlaXRlIDEwMCVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dDogJ2ZpeGVkLWhlaWdodCcsXG4gICAgICAgIHcsXG4gICAgICAgIGg6IE1hdGgucm91bmQodyAqIChzcmNSYXRpbyB8fCByYXRpbykpLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdldENvbnRleHQoe1xuICAgIGFtcDogUHJvcFR5cGVzLmJvb2wsXG4gIH0pLFxuICB3aXRoU3RhdGUoJ2NXaWR0aCcsICdzZXRDV2lkdGgnLCB1bmRlZmluZWQpLFxuICB3aXRoU3RhdGUoJ2lzTG9hZGVkJywgJ3NldElzTG9hZGVkJywgZmFsc2UpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3dpZHRoJywgJ2hlaWdodCcsICdtYXhSZXNvbHV0aW9uJywgJ3JhdGlvJ10sIHByb3BzID0+XG4gICAgaW5pdFZhbHMocHJvcHMpLFxuICApLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ21vZGUnLCAncmF0aW8nLCAnc3JjUmF0aW8nLCAnY1dpZHRoJ10sIHByb3BzID0+XG4gICAgZ2V0TW9kZShwcm9wcyksXG4gICksXG4gIHdpdGhQcm9wcygoeyBzcmMsIHcsIGggfSkgPT4gKHtcbiAgICB1cmw6IHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicgPyBzcmModywgaCkgOiBzcmMsXG4gICAgbG93VXJsOiB0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nID8gc3JjKDEwLCAxMCkgOiBzcmMsXG4gIH0pKSxcbik7XG5cbkBlbmhhbmNlXG5jbGFzcyBJbWFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHRoaXMub25SZXNpemUodGhpcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSA9IHdpZHRoID0+IHtcbiAgICBjb25zdCB7IHNldENXaWR0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRDV2lkdGgod2lkdGgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsYXp5LFxuICAgICAgbW9kZSxcbiAgICAgIGFtcCxcbiAgICAgIHNyYyxcbiAgICAgIHNyY1NldCxcbiAgICAgIGFsdCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBjaXJjbGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICB3aWR0aCxcbiAgICAgIHJhdGlvLFxuICAgICAgaXNQZXJjZW50YWdlLFxuICAgICAgbGF5b3V0LFxuICAgICAgdyxcbiAgICAgIGgsXG4gICAgICB1cmwsXG4gICAgICBsb3dVcmwsXG4gICAgICBvcmlnaW5hbFdpZHRoLFxuICAgICAgb3JpZ2luYWxIZWlnaHQsXG4gICAgICBjV2lkdGgsXG4gICAgICBzZXRDV2lkdGgsXG4gICAgICBpc0xvYWRlZCxcbiAgICAgIHNldElzTG9hZGVkLFxuICAgICAgLi4uY29udGFpbmVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdykge1xuICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSB1cmwgPyAoXG4gICAgICA8SW1nXG4gICAgICAgIHNyYz17dXJsfVxuICAgICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIHdpZHRoPXt3ID49IGggPyAnMTAwJScgOiAnYXV0byd9XG4gICAgICAgIGhlaWdodD17dyA8IGggPyAnMTAwJScgOiAnYXV0byd9XG4gICAgICAgIGNpcmNsZT17Y2lyY2xlfVxuICAgICAgICAvLyBvbkxvYWQ9eygpID0+IHNldElzTG9hZGVkKHRydWUpfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPFBsYWNlaG9sZGVyIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBjaXJjbGU9e2NpcmNsZX0gLz5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHdpZHRoPXtpc1BlcmNlbnRhZ2UgPyBvcmlnaW5hbFdpZHRoIDogd31cbiAgICAgICAgcmF0aW89e3JhdGlvfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICB7IWlzTG9hZGVkICYmXG4gICAgICAgICAgbnVsbFxuICAgICAgICAgIC8vIDxQbGFjZWhvbGRlciBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgY2lyY2xlPXtjaXJjbGV9IC8+XG4gICAgICAgIH1cbiAgICAgICAge2FtcCAmJiBpbWFnZSA/IChcbiAgICAgICAgICA8QW1wIGxheW91dD17bGF5b3V0fSBzcmM9e3VybH0gYWx0PXthbHR9IHdpZHRoPXt3fSBoZWlnaHQ9e2h9PlxuICAgICAgICAgICAge2ltYWdlfVxuICAgICAgICAgIDwvQW1wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGltYWdlXG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbkltYWdlLmRpc3BsYXlOYW1lID0gJ0ltYWdlJztcbkltYWdlLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICByYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzcmNSYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAncGFkZGVkJ10pLFxuICBjaXJjbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWluSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhSZXNvbHV0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIGxhenk6IFByb3BUeXBlcy5ib29sLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3JjOiB1bmRlZmluZWQsXG4gIC8vIHJhdGlvOiAwLjc1LFxuICAvLyBzcmNSYXRpbzogMC43NSxcbiAgbW9kZTogJ2ZpbGxlZCcsXG4gIGNpcmNsZTogZmFsc2UsXG5cbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG5cbiAgbWluV2lkdGg6IHVuZGVmaW5lZCxcbiAgbWluSGVpZ2h0OiB1bmRlZmluZWQsXG4gIG1heFdpZHRoOiB1bmRlZmluZWQsXG4gIG1heEhlaWdodDogdW5kZWZpbmVkLFxuICBtYXhSZXNvbHV0aW9uOiAxMTEwMDAsIC8vIDMzMyozMzNweFxuXG4gIGxhenk6IHRydWUsXG4gIGFsdDogJycsXG4gIG9uQ2xpY2s6IHVuZGVmaW5lZCxcbn07XG5JbWFnZS5QbGFjZWhvbGRlciA9IFBsYWNlaG9sZGVyO1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXX0=
