'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _olympRouter = require('olymp-router');

var _reactFela = require('react-fela');

var _lightboxRedux = require('./lightbox-redux');

var _cloudinaryUrl = require('./cloudinary-url');

var _cloudinaryUrl2 = _interopRequireDefault(_cloudinaryUrl);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    cursor: 'pointer',
    onHover: {
      opacity: 0.85
    }
  };
}, function (p) {
  return _react2.default.createElement(_image2.default, p);
}, function (p) {
  return Object.keys(p);
});

var Lightbox = (_dec = (0, _reactRedux.connect)(null, function (dispatch) {
  return _extends({
    updateQuery: (0, _olympRouter.createUpdateQuery)(dispatch)
  }, (0, _lightboxRedux.lightboxActions)(dispatch));
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Lightbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          updateQuery = _this$props.updateQuery;

      updateQuery({ lightbox: _this.ref });
      if (onClick) {
        onClick(e);
      }
    }, _this.add = function (value) {
      var addToLightbox = _this.props.addToLightbox;
      var gallery = _this.context.gallery;

      var width = 800;
      var getSrcSet = function getSrcSet(w) {
        return (0, _cloudinaryUrl2.default)(value, {
          w: Math.floor(w)
        }) + ' ' + Math.floor(w) + 'w';
      };

      addToLightbox({
        ref: _this.ref,
        origin: value.url,
        src: (0, _cloudinaryUrl2.default)(value, { w: width }),
        srcset: [getSrcSet(width), getSrcSet(width / 4 * 3), getSrcSet(width / 2), getSrcSet(width / 4)],
        thumbnail: (0, _cloudinaryUrl2.default)(value, {
          w: 50,
          h: 50
        }),
        width: value.width,
        height: value.height,
        caption: value.caption && value.source ? value.caption + ' - ' + value.source : value.caption || value.source || ''
      }, gallery);
    }, _this.ref = Math.random().toString(36).substr(2, 9), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lightbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;


      if (value) {
        this.add(value);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3) {
      var value = _ref3.value;
      var removeFromLightbox = this.props.removeFromLightbox;
      var gallery = this.context.gallery;

      if (value.id !== this.props.value.id) {
        removeFromLightbox(this.ref, gallery);
        this.add(value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var removeFromLightbox = this.props.removeFromLightbox;
      var gallery = this.context.gallery;

      removeFromLightbox(this.ref, gallery);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onClick = _props.onClick,
          search = _props.search,
          dispatch = _props.dispatch,
          updateQuery = _props.updateQuery,
          addToLightbox = _props.addToLightbox,
          removeFromLightbox = _props.removeFromLightbox,
          rest = _objectWithoutProperties(_props, ['value', 'onClick', 'search', 'dispatch', 'updateQuery', 'addToLightbox', 'removeFromLightbox']);

      if (!value || !value.url) {
        return _react2.default.createElement(Img, _extends({}, rest, { value: value }));
      }

      return _react2.default.createElement(Img, _extends({}, rest, { onClick: this.onClick, value: value }));
    }
  }]);

  return Lightbox;
}(_react.Component), _class2.contextTypes = {
  gallery: _propTypes2.default.string
}, _class2.defaultProps = {
  attributes: {}
}, _temp2)) || _class);
exports.default = Lightbox;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LWltYWdlLmVzNiJdLCJuYW1lcyI6WyJJbWciLCJ0aGVtZSIsImN1cnNvciIsIm9uSG92ZXIiLCJvcGFjaXR5IiwicCIsIk9iamVjdCIsImtleXMiLCJMaWdodGJveCIsInVwZGF0ZVF1ZXJ5IiwiZGlzcGF0Y2giLCJvbkNsaWNrIiwicHJvcHMiLCJsaWdodGJveCIsInJlZiIsImUiLCJhZGQiLCJhZGRUb0xpZ2h0Ym94IiwiZ2FsbGVyeSIsImNvbnRleHQiLCJ3aWR0aCIsImdldFNyY1NldCIsInZhbHVlIiwidyIsIk1hdGgiLCJmbG9vciIsIm9yaWdpbiIsInVybCIsInNyYyIsInNyY3NldCIsInRodW1ibmFpbCIsImgiLCJoZWlnaHQiLCJjYXB0aW9uIiwic291cmNlIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJyZW1vdmVGcm9tTGlnaHRib3giLCJpZCIsInNlYXJjaCIsInJlc3QiLCJjb250ZXh0VHlwZXMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxnQ0FDVjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFlBQVEsU0FETTtBQUVkQyxhQUFTO0FBQ1BDLGVBQVM7QUFERjtBQUZLLEdBQWhCO0FBQUEsQ0FEVSxFQU9WO0FBQUEsU0FBSywrQ0FBV0MsQ0FBWCxDQUFMO0FBQUEsQ0FQVSxFQVFWO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQVJVLENBQVo7O0lBZXFCRyxRLFdBSnBCLHlCQUFRLElBQVIsRUFBYztBQUFBO0FBQ2JDLGlCQUFhLG9DQUFrQkMsUUFBbEI7QUFEQSxLQUVWLG9DQUFnQkEsUUFBaEIsQ0FG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LFVBTUxELFdBTkssVUFNTEEsV0FOSztBQUFBLFVBT0xRLGFBUEssVUFPTEEsYUFQSztBQUFBLFVBUUxxQixrQkFSSyxVQVFMQSxrQkFSSztBQUFBLFVBU0ZHLElBVEU7O0FBWVAsVUFBSSxDQUFDbkIsS0FBRCxJQUFVLENBQUNBLE1BQU1LLEdBQXJCLEVBQTBCO0FBQ3hCLGVBQU8sOEJBQUMsR0FBRCxlQUFTYyxJQUFULElBQWUsT0FBT25CLEtBQXRCLElBQVA7QUFDRDs7QUFFRCxhQUFPLDhCQUFDLEdBQUQsZUFBU21CLElBQVQsSUFBZSxTQUFTLEtBQUs5QixPQUE3QixFQUFzQyxPQUFPVyxLQUE3QyxJQUFQO0FBQ0Q7Ozs7NkJBL0ZNb0IsWSxHQUFlO0FBQ3BCeEIsV0FBUyxvQkFBVXlCO0FBREMsQyxVQUlmQyxZLEdBQWU7QUFDcEJDLGNBQVk7QUFEUSxDO2tCQUxIckMsUSIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9saWdodGJveC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVVwZGF0ZVF1ZXJ5IH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgbGlnaHRib3hBY3Rpb25zIH0gZnJvbSAnLi9saWdodGJveC1yZWR1eCc7XG5pbXBvcnQgY2xvdWRpbmFyeVVybCBmcm9tICcuL2Nsb3VkaW5hcnktdXJsJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcblxuY29uc3QgSW1nID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIG9wYWNpdHk6IDAuODUsXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPEltYWdlIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbkBjb25uZWN0KG51bGwsIGRpc3BhdGNoID0+ICh7XG4gIHVwZGF0ZVF1ZXJ5OiBjcmVhdGVVcGRhdGVRdWVyeShkaXNwYXRjaCksXG4gIC4uLmxpZ2h0Ym94QWN0aW9ucyhkaXNwYXRjaCksXG59KSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBnYWxsZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXR0cmlidXRlczoge30sXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgdmFsdWUgfSkge1xuICAgIGNvbnN0IHsgcmVtb3ZlRnJvbUxpZ2h0Ym94IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZ2FsbGVyeSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmICh2YWx1ZS5pZCAhPT0gdGhpcy5wcm9wcy52YWx1ZS5pZCkge1xuICAgICAgcmVtb3ZlRnJvbUxpZ2h0Ym94KHRoaXMucmVmLCBnYWxsZXJ5KTtcbiAgICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IHJlbW92ZUZyb21MaWdodGJveCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdhbGxlcnkgfSA9IHRoaXMuY29udGV4dDtcbiAgICByZW1vdmVGcm9tTGlnaHRib3godGhpcy5yZWYsIGdhbGxlcnkpO1xuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljaywgdXBkYXRlUXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgdXBkYXRlUXVlcnkoeyBsaWdodGJveDogdGhpcy5yZWYgfSk7XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIGFkZCA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7IGFkZFRvTGlnaHRib3ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBnYWxsZXJ5IH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3Qgd2lkdGggPSA4MDA7XG4gICAgY29uc3QgZ2V0U3JjU2V0ID0gdyA9PlxuICAgICAgYCR7Y2xvdWRpbmFyeVVybCh2YWx1ZSwge1xuICAgICAgICB3OiBNYXRoLmZsb29yKHcpLFxuICAgICAgfSl9ICR7TWF0aC5mbG9vcih3KX13YDtcblxuICAgIGFkZFRvTGlnaHRib3goXG4gICAgICB7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIG9yaWdpbjogdmFsdWUudXJsLFxuICAgICAgICBzcmM6IGNsb3VkaW5hcnlVcmwodmFsdWUsIHsgdzogd2lkdGggfSksXG4gICAgICAgIHNyY3NldDogW1xuICAgICAgICAgIGdldFNyY1NldCh3aWR0aCksXG4gICAgICAgICAgZ2V0U3JjU2V0KHdpZHRoIC8gNCAqIDMpLFxuICAgICAgICAgIGdldFNyY1NldCh3aWR0aCAvIDIpLFxuICAgICAgICAgIGdldFNyY1NldCh3aWR0aCAvIDQpLFxuICAgICAgICBdLFxuICAgICAgICB0aHVtYm5haWw6IGNsb3VkaW5hcnlVcmwodmFsdWUsIHtcbiAgICAgICAgICB3OiA1MCxcbiAgICAgICAgICBoOiA1MCxcbiAgICAgICAgfSksXG4gICAgICAgIHdpZHRoOiB2YWx1ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB2YWx1ZS5oZWlnaHQsXG4gICAgICAgIGNhcHRpb246XG4gICAgICAgICAgdmFsdWUuY2FwdGlvbiAmJiB2YWx1ZS5zb3VyY2VcbiAgICAgICAgICAgID8gYCR7dmFsdWUuY2FwdGlvbn0gLSAke3ZhbHVlLnNvdXJjZX1gXG4gICAgICAgICAgICA6IHZhbHVlLmNhcHRpb24gfHwgdmFsdWUuc291cmNlIHx8ICcnLFxuICAgICAgfSxcbiAgICAgIGdhbGxlcnksXG4gICAgKTtcbiAgfTtcblxuICByZWYgPSBNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zdWJzdHIoMiwgOSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgb25DbGljayxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgdXBkYXRlUXVlcnksXG4gICAgICBhZGRUb0xpZ2h0Ym94LFxuICAgICAgcmVtb3ZlRnJvbUxpZ2h0Ym94LFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSB7XG4gICAgICByZXR1cm4gPEltZyB7Li4ucmVzdH0gdmFsdWU9e3ZhbHVlfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPEltZyB7Li4ucmVzdH0gb25DbGljaz17dGhpcy5vbkNsaWNrfSB2YWx1ZT17dmFsdWV9IC8+O1xuICB9XG59XG4iXX0=
