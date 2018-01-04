'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'rc-banner-anim/assets/index.css';

var InnerComponent = void 0;
/* if (process.env.IS_WEB) {
  const BannerAnim = require('rc-banner-anim');
  const Element = require('rc-banner-anim').Element;

  InnerComponent = ({ value }) => (
    <BannerAnim
      prefixCls="custom-arrow-thumb"
      autoPlay
      type={['grid', 'gridBar']}
      key={1}
      duration={800}
    >
      {value.map((image, index) => (
        <Element prefixCls="banner-user-elem" key={image.id || image.url || index}>
          <Element.BgElement
            key="bg"
            className="bg"
            style={{
              backgroundColor: 'gray',
              backgroundImage: `url(${cloudinaryUrl(image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Element>
      ))}
    </BannerAnim>
  );
} */

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.state = { mounted: false };
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.setState({ mounted: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          height = _props.height,
          attributes = _props.attributes,
          children = _props.children,
          style = _props.style,
          className = _props.className;

      return value.length > 0 ? _react2.default.createElement(
        _image2.default,
        {
          width: '100%',
          value: value[0],
          maxHeight: height || 220,
          className: className,
          attributes: attributes,
          style: style
        },
        children
      ) : null;
      /* let inner = null;
      if (this.state.mounted) {
        inner = <InnerComponent key={2} {...this.props} />;
      } else {
      }
      return <div {...attributes}>{inner}</div>; */
    }
  }]);

  return Carousel;
}(_react.Component);

var styles = function styles(_ref) {
  var height = _ref.height;
  return {
    height: height || 220,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    '& .custom-arrow-thumb': {
      height: height || 220
    },
    '& .banner-user-elem': {
      height: height || 220,
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    },
    '& .banner-user-title': {
      fontSize: 32,
      top: '40%'
    },
    '& .banner-user-text': {
      top: '40%'
    },
    '& .bg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden'
    },
    ifMini: {
      height: 180,
      '& .custom-arrow-thumb': {
        height: 180
      },
      '& .banner-user-elem': {
        height: 180
      }
    }
  };
};

// export default createComponent(styles, Carousel, p => Object.keys(p));
exports.default = Carousel;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2Nhcm91c2VsLmVzNiJdLCJuYW1lcyI6WyJJbm5lckNvbXBvbmVudCIsIkNhcm91c2VsIiwicHJvcHMiLCJzdGF0ZSIsIm1vdW50ZWQiLCJ2YWx1ZSIsImhlaWdodCIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsInN0eWxlIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwic3R5bGVzIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsIndpZHRoIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsInRvcCIsImxlZnQiLCJpZk1pbmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBSUEsdUJBQUo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOEJNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsU0FBUyxLQUFYLEVBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBQ21CO0FBQ2xCO0FBQ0Q7Ozs2QkFDUTtBQUFBLG1CQVFILEtBQUtGLEtBUkY7QUFBQSxVQUVMRyxLQUZLLFVBRUxBLEtBRks7QUFBQSxVQUdMQyxNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMQyxVQUpLLFVBSUxBLFVBSks7QUFBQSxVQUtMQyxRQUxLLFVBS0xBLFFBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxTQVBLLFVBT0xBLFNBUEs7O0FBU1AsYUFBT0wsTUFBTU0sTUFBTixHQUFlLENBQWYsR0FDTDtBQUFBO0FBQUE7QUFDRSxpQkFBTSxNQURSO0FBRUUsaUJBQU9OLE1BQU0sQ0FBTixDQUZUO0FBR0UscUJBQVdDLFVBQVUsR0FIdkI7QUFJRSxxQkFBV0ksU0FKYjtBQUtFLHNCQUFZSCxVQUxkO0FBTUUsaUJBQU9FO0FBTlQ7QUFRR0Q7QUFSSCxPQURLLEdBV0gsSUFYSjtBQVlBOzs7Ozs7QUFNRDs7Ozs7O0FBRUgsSUFBTUksU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR04sTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUI7QUFDOUJBLFlBQVFBLFVBQVUsR0FEWTtBQUU5Qk8sY0FBVSxRQUZvQjtBQUc5QkMsY0FBVSxVQUhvQjtBQUk5QkMsV0FBTyxNQUp1QjtBQUs5Qiw2QkFBeUI7QUFDdkJULGNBQVFBLFVBQVU7QUFESyxLQUxLO0FBUTlCLDJCQUF1QjtBQUNyQkEsY0FBUUEsVUFBVSxHQURHO0FBRXJCVSxpQkFBVyxRQUZVO0FBR3JCQyxhQUFPLE1BSGM7QUFJckJILGdCQUFVLFVBSlc7QUFLckJELGdCQUFVO0FBTFcsS0FSTztBQWU5Qiw0QkFBd0I7QUFDdEJLLGdCQUFVLEVBRFk7QUFFdEJDLFdBQUs7QUFGaUIsS0FmTTtBQW1COUIsMkJBQXVCO0FBQ3JCQSxXQUFLO0FBRGdCLEtBbkJPO0FBc0I5QixhQUFTO0FBQ1BKLGFBQU8sTUFEQTtBQUVQVCxjQUFRLE1BRkQ7QUFHUFEsZ0JBQVUsVUFISDtBQUlQSyxXQUFLLENBSkU7QUFLUEMsWUFBTSxDQUxDO0FBTVBQLGdCQUFVO0FBTkgsS0F0QnFCO0FBOEI5QlEsWUFBUTtBQUNOZixjQUFRLEdBREY7QUFFTiwrQkFBeUI7QUFDdkJBLGdCQUFRO0FBRGUsT0FGbkI7QUFLTiw2QkFBdUI7QUFDckJBLGdCQUFRO0FBRGE7QUFMakI7QUE5QnNCLEdBQWpCO0FBQUEsQ0FBZjs7QUF5Q0E7a0JBQ2VMLFEiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuLy8gaW1wb3J0ICdyYy1iYW5uZXItYW5pbS9hc3NldHMvaW5kZXguY3NzJztcblxubGV0IElubmVyQ29tcG9uZW50O1xuLyogaWYgKHByb2Nlc3MuZW52LklTX1dFQikge1xuICBjb25zdCBCYW5uZXJBbmltID0gcmVxdWlyZSgncmMtYmFubmVyLWFuaW0nKTtcbiAgY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJ3JjLWJhbm5lci1hbmltJykuRWxlbWVudDtcblxuICBJbm5lckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IChcbiAgICA8QmFubmVyQW5pbVxuICAgICAgcHJlZml4Q2xzPVwiY3VzdG9tLWFycm93LXRodW1iXCJcbiAgICAgIGF1dG9QbGF5XG4gICAgICB0eXBlPXtbJ2dyaWQnLCAnZ3JpZEJhciddfVxuICAgICAga2V5PXsxfVxuICAgICAgZHVyYXRpb249ezgwMH1cbiAgICA+XG4gICAgICB7dmFsdWUubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPEVsZW1lbnQgcHJlZml4Q2xzPVwiYmFubmVyLXVzZXItZWxlbVwiIGtleT17aW1hZ2UuaWQgfHwgaW1hZ2UudXJsIHx8IGluZGV4fT5cbiAgICAgICAgICA8RWxlbWVudC5CZ0VsZW1lbnRcbiAgICAgICAgICAgIGtleT1cImJnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbG91ZGluYXJ5VXJsKGltYWdlKX0pYCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRWxlbWVudD5cbiAgICAgICkpfVxuICAgIDwvQmFubmVyQW5pbT5cbiAgKTtcbn0gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBtb3VudGVkOiBmYWxzZSB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBtb3VudGVkOiB0cnVlIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwID8gKFxuICAgICAgPEltYWdlXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZVswXX1cbiAgICAgICAgbWF4SGVpZ2h0PXtoZWlnaHQgfHwgMjIwfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgYXR0cmlidXRlcz17YXR0cmlidXRlc31cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0ltYWdlPlxuICAgICkgOiBudWxsO1xuICAgIC8qIGxldCBpbm5lciA9IG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUubW91bnRlZCkge1xuICAgICAgaW5uZXIgPSA8SW5uZXJDb21wb25lbnQga2V5PXsyfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgey4uLmF0dHJpYnV0ZXN9Pntpbm5lcn08L2Rpdj47ICovXG4gIH1cbn1cbmNvbnN0IHN0eWxlcyA9ICh7IGhlaWdodCB9KSA9PiAoe1xuICBoZWlnaHQ6IGhlaWdodCB8fCAyMjAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gICcmIC5jdXN0b20tYXJyb3ctdGh1bWInOiB7XG4gICAgaGVpZ2h0OiBoZWlnaHQgfHwgMjIwLFxuICB9LFxuICAnJiAuYmFubmVyLXVzZXItZWxlbSc6IHtcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCAyMjAsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbiAgJyYgLmJhbm5lci11c2VyLXRpdGxlJzoge1xuICAgIGZvbnRTaXplOiAzMixcbiAgICB0b3A6ICc0MCUnLFxuICB9LFxuICAnJiAuYmFubmVyLXVzZXItdGV4dCc6IHtcbiAgICB0b3A6ICc0MCUnLFxuICB9LFxuICAnJiAuYmcnOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIGlmTWluaToge1xuICAgIGhlaWdodDogMTgwLFxuICAgICcmIC5jdXN0b20tYXJyb3ctdGh1bWInOiB7XG4gICAgICBoZWlnaHQ6IDE4MCxcbiAgICB9LFxuICAgICcmIC5iYW5uZXItdXNlci1lbGVtJzoge1xuICAgICAgaGVpZ2h0OiAxODAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoc3R5bGVzLCBDYXJvdXNlbCwgcCA9PiBPYmplY3Qua2V5cyhwKSk7XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiJdfQ==
