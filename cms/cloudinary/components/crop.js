var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import ReactCrop from './cropper';
import cloudinaryUrl from '../cloudinary-url';

var StyledCrop = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    maxHeight: 200,
    '> .ReactCrop--crop-wrapper': {
      backgroundColor: 'white'
    }
  };
}, function (p) {
  return React.createElement(ReactCrop, p);
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

      return React.createElement(
        'div',
        {
          onKeyDown: function onKeyDown(e) {
            return _this2.setState({ isSquare: e && e.shiftKey });
          },
          onKeyUp: function onKeyUp(e) {
            return _this2.setState({ isSquare: false });
          }
        },
        React.createElement(StyledCrop, {
          src: cloudinaryUrl(_extends({}, this.props, { crop: undefined })),
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
}(Component);

Crop.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number),
  aspect: PropTypes.number,
  onChange: PropTypes.func
};
Crop.defaultProps = {
  aspect: 0,
  onChange: function onChange() {}
};
export default Crop;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9jcm9wLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImNyZWF0ZUNvbXBvbmVudCIsIlJlYWN0Q3JvcCIsImNsb3VkaW5hcnlVcmwiLCJTdHlsZWRDcm9wIiwidGhlbWUiLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIkNyb3AiLCJzdGF0ZSIsImlzT3BlbiIsIm9uQ2hhbmdlIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInByb3BzIiwiTWF0aCIsImZsb29yIiwidmFsdWUiLCJjcm9wIiwiYXNwZWN0IiwiaXNTcXVhcmUiLCJzZXRTdGF0ZSIsImUiLCJzaGlmdEtleSIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInVybCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJhcnJheU9mIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFdBQXRCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixtQkFBMUI7O0FBRUEsSUFBTUMsYUFBYUgsZ0JBQ2pCO0FBQUEsTUFBR0ksS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZEMsZUFBVyxHQURHO0FBRWQsa0NBQThCO0FBQzVCQyx1QkFBaUI7QUFEVztBQUZoQixHQUFoQjtBQUFBLENBRGlCLEVBT2pCO0FBQUEsU0FBSyxvQkFBQyxTQUFELEVBQWVDLENBQWYsQ0FBTDtBQUFBLENBUGlCLEVBUWpCO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQVJpQixDQUFuQjs7SUFXTUcsSTs7Ozs7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InBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9jcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBSZWFjdENyb3AgZnJvbSAnLi9jcm9wcGVyJztcbmltcG9ydCBjbG91ZGluYXJ5VXJsIGZyb20gJy4uL2Nsb3VkaW5hcnktdXJsJztcblxuY29uc3QgU3R5bGVkQ3JvcCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAnPiAuUmVhY3RDcm9wLS1jcm9wLXdyYXBwZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPFJlYWN0Q3JvcCB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jbGFzcyBDcm9wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0cnVlLFxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHsgd2lkdGgsIGhlaWdodCwgeCwgeSB9KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShbXG4gICAgICBNYXRoLmZsb29yKHRoaXMucHJvcHMud2lkdGggLyAxMDAgKiB3aWR0aCksXG4gICAgICBNYXRoLmZsb29yKHRoaXMucHJvcHMuaGVpZ2h0IC8gMTAwICogaGVpZ2h0KSxcbiAgICAgIE1hdGguZmxvb3IodGhpcy5wcm9wcy53aWR0aCAvIDEwMCAqIHgpLFxuICAgICAgTWF0aC5mbG9vcih0aGlzLnByb3BzLmhlaWdodCAvIDEwMCAqIHkpLFxuICAgIF0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNyb3AgPSB2YWx1ZSB8fCBbdGhpcy5wcm9wcy53aWR0aCwgdGhpcy5wcm9wcy5oZWlnaHQsIDAsIDBdO1xuICAgIGNvbnN0IGFzcGVjdCA9IHRoaXMucHJvcHMuYXNwZWN0IHx8ICh0aGlzLnN0YXRlLmlzU3F1YXJlICYmIDEpO1xuICAgIGNvbnN0IHdpZHRoID0gY3JvcFswXSAvIHRoaXMucHJvcHMud2lkdGggKiAxMDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gY3JvcFsxXSAvIHRoaXMucHJvcHMuaGVpZ2h0ICogMTAwO1xuICAgIGNvbnN0IHggPSBjcm9wWzJdIC8gdGhpcy5wcm9wcy53aWR0aCAqIDEwMDtcbiAgICBjb25zdCB5ID0gY3JvcFszXSAvIHRoaXMucHJvcHMuaGVpZ2h0ICogMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc1NxdWFyZTogZSAmJiBlLnNoaWZ0S2V5IH0pfVxuICAgICAgICBvbktleVVwPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBpc1NxdWFyZTogZmFsc2UgfSl9XG4gICAgICA+XG4gICAgICAgIDxTdHlsZWRDcm9wXG4gICAgICAgICAgc3JjPXtjbG91ZGluYXJ5VXJsKHsgLi4udGhpcy5wcm9wcywgY3JvcDogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGNyb3A9e1xuICAgICAgICAgICAgY3JvcFxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgICBhc3BlY3QsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHsgYXNwZWN0IH1cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5Dcm9wLnByb3BUeXBlcyA9IHtcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIGFzcGVjdDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcbkNyb3AuZGVmYXVsdFByb3BzID0ge1xuICBhc3BlY3Q6IDAsXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbn07XG5leHBvcnQgZGVmYXVsdCBDcm9wO1xuIl19
