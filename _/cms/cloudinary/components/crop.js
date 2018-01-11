'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympFela = require('olymp-fela');

var _cropper = require('./cropper');

var _cropper2 = _interopRequireDefault(_cropper);

var _cloudinaryUrl = require('../cloudinary-url');

var _cloudinaryUrl2 = _interopRequireDefault(_cloudinaryUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledCrop = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    maxHeight: 200,
    '> .ReactCrop--crop-wrapper': {
      backgroundColor: 'white'
    }
  };
}, function (p) {
  return _react2.default.createElement(_cropper2.default, p);
}, function (p) {
  return Object.keys(p);
});

var Crop = function (_Component) {
  _inherits(Crop, _Component);

  function Crop() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Crop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Crop.__proto__ || Object.getPrototypeOf(Crop)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isOpen: true
    }, _this.onChange = function (_ref3) {
      var width = _ref3.width,
          height = _ref3.height,
          x = _ref3.x,
          y = _ref3.y;

      _this.props.onChange([Math.floor(_this.props.width / 100 * width), Math.floor(_this.props.height / 100 * height), Math.floor(_this.props.width / 100 * x), Math.floor(_this.props.height / 100 * y)]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Crop, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.value;

      var crop = value || [this.props.width, this.props.height, 0, 0];
      var aspect = this.props.aspect || this.state.isSquare && 1;
      var width = crop[0] / this.props.width * 100;
      var height = crop[1] / this.props.height * 100;
      var x = crop[2] / this.props.width * 100;
      var y = crop[3] / this.props.height * 100;

      return _react2.default.createElement(
        'div',
        {
          onKeyDown: function onKeyDown(e) {
            return _this2.setState({ isSquare: e && e.shiftKey });
          },
          onKeyUp: function onKeyUp(e) {
            return _this2.setState({ isSquare: false });
          }
        },
        _react2.default.createElement(StyledCrop, {
          src: (0, _cloudinaryUrl2.default)(_extends({}, this.props, { crop: undefined })),
          onChange: this.onChange,
          crop: crop ? {
            width: width,
            height: height,
            x: x,
            y: y,
            aspect: aspect
          } : { aspect: aspect }
        })
      );
    }
  }]);

  return Crop;
}(_react.Component);

Crop.propTypes = {
  url: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  value: _propTypes2.default.arrayOf(_propTypes2.default.number),
  aspect: _propTypes2.default.number,
  onChange: _propTypes2.default.func
};
Crop.defaultProps = {
  aspect: 0,
  onChange: function onChange() {}
};
exports.default = Crop;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvY3JvcC5lczYiXSwibmFtZXMiOlsiU3R5bGVkQ3JvcCIsInRoZW1lIiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicCIsIk9iamVjdCIsImtleXMiLCJDcm9wIiwic3RhdGUiLCJpc09wZW4iLCJvbkNoYW5nZSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwcm9wcyIsIk1hdGgiLCJmbG9vciIsInZhbHVlIiwiY3JvcCIsImFzcGVjdCIsImlzU3F1YXJlIiwic2V0U3RhdGUiLCJlIiwic2hpZnRLZXkiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJ1cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYXJyYXlPZiIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxnQ0FDakI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxlQUFXLEdBREc7QUFFZCxrQ0FBOEI7QUFDNUJDLHVCQUFpQjtBQURXO0FBRmhCLEdBQWhCO0FBQUEsQ0FEaUIsRUFPakI7QUFBQSxTQUFLLGlEQUFlQyxDQUFmLENBQUw7QUFBQSxDQVBpQixFQVFqQjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FSaUIsQ0FBbkI7O0lBV01HLEk7Ozs7Ozs7Ozs7Ozs7O29MQUNKQyxLLEdBQVE7QUFDTkMsY0FBUTtBQURGLEssUUFJUkMsUSxHQUFXLGlCQUE2QjtBQUFBLFVBQTFCQyxLQUEwQixTQUExQkEsS0FBMEI7QUFBQSxVQUFuQkMsTUFBbUIsU0FBbkJBLE1BQW1CO0FBQUEsVUFBWEMsQ0FBVyxTQUFYQSxDQUFXO0FBQUEsVUFBUkMsQ0FBUSxTQUFSQSxDQUFROztBQUN0QyxZQUFLQyxLQUFMLENBQVdMLFFBQVgsQ0FBb0IsQ0FDbEJNLEtBQUtDLEtBQUwsQ0FBVyxNQUFLRixLQUFMLENBQVdKLEtBQVgsR0FBbUIsR0FBbkIsR0FBeUJBLEtBQXBDLENBRGtCLEVBRWxCSyxLQUFLQyxLQUFMLENBQVcsTUFBS0YsS0FBTCxDQUFXSCxNQUFYLEdBQW9CLEdBQXBCLEdBQTBCQSxNQUFyQyxDQUZrQixFQUdsQkksS0FBS0MsS0FBTCxDQUFXLE1BQUtGLEtBQUwsQ0FBV0osS0FBWCxHQUFtQixHQUFuQixHQUF5QkUsQ0FBcEMsQ0FIa0IsRUFJbEJHLEtBQUtDLEtBQUwsQ0FBVyxNQUFLRixLQUFMLENBQVdILE1BQVgsR0FBb0IsR0FBcEIsR0FBMEJFLENBQXJDLENBSmtCLENBQXBCO0FBTUQsSzs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDSSxLQURELEdBQ1csS0FBS0gsS0FEaEIsQ0FDQ0csS0FERDs7QUFFUCxVQUFNQyxPQUFPRCxTQUFTLENBQUMsS0FBS0gsS0FBTCxDQUFXSixLQUFaLEVBQW1CLEtBQUtJLEtBQUwsQ0FBV0gsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsQ0FBdEI7QUFDQSxVQUFNUSxTQUFTLEtBQUtMLEtBQUwsQ0FBV0ssTUFBWCxJQUFzQixLQUFLWixLQUFMLENBQVdhLFFBQVgsSUFBdUIsQ0FBNUQ7QUFDQSxVQUFNVixRQUFRUSxLQUFLLENBQUwsSUFBVSxLQUFLSixLQUFMLENBQVdKLEtBQXJCLEdBQTZCLEdBQTNDO0FBQ0EsVUFBTUMsU0FBU08sS0FBSyxDQUFMLElBQVUsS0FBS0osS0FBTCxDQUFXSCxNQUFyQixHQUE4QixHQUE3QztBQUNBLFVBQU1DLElBQUlNLEtBQUssQ0FBTCxJQUFVLEtBQUtKLEtBQUwsQ0FBV0osS0FBckIsR0FBNkIsR0FBdkM7QUFDQSxVQUFNRyxJQUFJSyxLQUFLLENBQUwsSUFBVSxLQUFLSixLQUFMLENBQVdILE1BQXJCLEdBQThCLEdBQXhDOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVc7QUFBQSxtQkFBSyxPQUFLVSxRQUFMLENBQWMsRUFBRUQsVUFBVUUsS0FBS0EsRUFBRUMsUUFBbkIsRUFBZCxDQUFMO0FBQUEsV0FEYjtBQUVFLG1CQUFTO0FBQUEsbUJBQUssT0FBS0YsUUFBTCxDQUFjLEVBQUVELFVBQVUsS0FBWixFQUFkLENBQUw7QUFBQTtBQUZYO0FBSUUsc0NBQUMsVUFBRDtBQUNFLGVBQUssMENBQW1CLEtBQUtOLEtBQXhCLElBQStCSSxNQUFNTSxTQUFyQyxJQURQO0FBRUUsb0JBQVUsS0FBS2YsUUFGakI7QUFHRSxnQkFDRVMsT0FDSTtBQUNFUix3QkFERjtBQUVFQywwQkFGRjtBQUdFQyxnQkFIRjtBQUlFQyxnQkFKRjtBQUtFTTtBQUxGLFdBREosR0FRSSxFQUFFQSxjQUFGO0FBWlI7QUFKRixPQURGO0FBc0JEOzs7Ozs7QUFFSGIsS0FBS21CLFNBQUwsR0FBaUI7QUFDZkMsT0FBSyxvQkFBVUMsTUFBVixDQUFpQkMsVUFEUDtBQUVmbEIsU0FBTyxvQkFBVW1CLE1BQVYsQ0FBaUJELFVBRlQ7QUFHZmpCLFVBQVEsb0JBQVVrQixNQUFWLENBQWlCRCxVQUhWO0FBSWZYLFNBQU8sb0JBQVVhLE9BQVYsQ0FBa0Isb0JBQVVELE1BQTVCLENBSlE7QUFLZlYsVUFBUSxvQkFBVVUsTUFMSDtBQU1mcEIsWUFBVSxvQkFBVXNCO0FBTkwsQ0FBakI7QUFRQXpCLEtBQUswQixZQUFMLEdBQW9CO0FBQ2xCYixVQUFRLENBRFU7QUFFbEJWLFlBQVUsb0JBQU0sQ0FBRTtBQUZBLENBQXBCO2tCQUllSCxJIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvY3JvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gJy4vY3JvcHBlcic7XG5pbXBvcnQgY2xvdWRpbmFyeVVybCBmcm9tICcuLi9jbG91ZGluYXJ5LXVybCc7XG5cbmNvbnN0IFN0eWxlZENyb3AgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgJz4gLlJlYWN0Q3JvcC0tY3JvcC13cmFwcGVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxSZWFjdENyb3Agey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY2xhc3MgQ3JvcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogdHJ1ZSxcbiAgfTtcblxuICBvbkNoYW5nZSA9ICh7IHdpZHRoLCBoZWlnaHQsIHgsIHkgfSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoW1xuICAgICAgTWF0aC5mbG9vcih0aGlzLnByb3BzLndpZHRoIC8gMTAwICogd2lkdGgpLFxuICAgICAgTWF0aC5mbG9vcih0aGlzLnByb3BzLmhlaWdodCAvIDEwMCAqIGhlaWdodCksXG4gICAgICBNYXRoLmZsb29yKHRoaXMucHJvcHMud2lkdGggLyAxMDAgKiB4KSxcbiAgICAgIE1hdGguZmxvb3IodGhpcy5wcm9wcy5oZWlnaHQgLyAxMDAgKiB5KSxcbiAgICBdKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjcm9wID0gdmFsdWUgfHwgW3RoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMuaGVpZ2h0LCAwLCAwXTtcbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLnByb3BzLmFzcGVjdCB8fCAodGhpcy5zdGF0ZS5pc1NxdWFyZSAmJiAxKTtcbiAgICBjb25zdCB3aWR0aCA9IGNyb3BbMF0gLyB0aGlzLnByb3BzLndpZHRoICogMTAwO1xuICAgIGNvbnN0IGhlaWdodCA9IGNyb3BbMV0gLyB0aGlzLnByb3BzLmhlaWdodCAqIDEwMDtcbiAgICBjb25zdCB4ID0gY3JvcFsyXSAvIHRoaXMucHJvcHMud2lkdGggKiAxMDA7XG4gICAgY29uc3QgeSA9IGNyb3BbM10gLyB0aGlzLnByb3BzLmhlaWdodCAqIDEwMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnNldFN0YXRlKHsgaXNTcXVhcmU6IGUgJiYgZS5zaGlmdEtleSB9KX1cbiAgICAgICAgb25LZXlVcD17ZSA9PiB0aGlzLnNldFN0YXRlKHsgaXNTcXVhcmU6IGZhbHNlIH0pfVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkQ3JvcFxuICAgICAgICAgIHNyYz17Y2xvdWRpbmFyeVVybCh7IC4uLnRoaXMucHJvcHMsIGNyb3A6IHVuZGVmaW5lZCB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBjcm9wPXtcbiAgICAgICAgICAgIGNyb3BcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgYXNwZWN0LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB7IGFzcGVjdCB9XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuQ3JvcC5wcm9wVHlwZXMgPSB7XG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICBhc3BlY3Q6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5Dcm9wLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXNwZWN0OiAwLFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ3JvcDtcbiJdfQ==
