'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addMinutes = require('date-fns/addMinutes');

var _addMinutes2 = _interopRequireDefault(_addMinutes);

var _startOfDay = require('date-fns/startOfDay');

var _startOfDay2 = _interopRequireDefault(_startOfDay);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _multirangeslider = require('multirangeslider');

var _multirangeslider2 = _interopRequireDefault(_multirangeslider);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Elessar = function (_Component) {
  _inherits(Elessar, _Component);

  function Elessar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Elessar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Elessar.__proto__ || Object.getPrototypeOf(Elessar)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      if (_this.dontChange) {
        return;
      }
      var onChange = _this.props.onChange;

      var keys = Object.keys(e.data);
      var array = keys.map(function (key) {
        return [e.data[key].val[0], e.data[key].val[1]];
      });
      onChange(array);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Elessar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.slider = new _multirangeslider2.default({
        min: 7 * 60,
        max: 21 * 60,
        minWidth: 60,
        step: 30,
        label: function label(value) {
          var start = (0, _addMinutes2.default)((0, _startOfDay2.default)(new Date()), value[0]);
          var end = (0, _addMinutes2.default)((0, _startOfDay2.default)(new Date()), value[1]);
          return (0, _format2.default)(start, 'HH:mm') + '-' + (0, _format2.default)(end, 'HH:mm');
        }
      });
      this.slider.on('change', this.onChange);
      _reactDom2.default.findDOMNode(this).appendChild(this.slider.el);
      this.resetValues();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.dontChange) {
        return;
      }
      this.resetValues(newProps);
    }
  }, {
    key: 'resetValues',
    value: function resetValues() {
      var _this2 = this;

      var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      this.dontChange = true;
      this.slider.removeAll();
      var value = newProps.value;

      if (!value) {
        value = [];
      } else if (!Array.isArray(value)) {
        value = [];
      }
      value.filter(function (item) {
        return Array.isArray(item);
      }).forEach(function (item) {
        _this2.slider.add(item);
      });
      this.dontChange = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = this.props.className;

      return _react2.default.createElement('div', { className: className, ref: function ref(x) {
          return _this3.dev = x;
        } });
    }
  }]);

  return Elessar;
}(_react.Component);

exports.default = (0, _olympFela.createComponent)(function (_ref2) {
  var theme = _ref2.theme;

  var height = 32;
  return {
    '> .multirangeslider-slider': {
      display: 'block',
      userSelect: 'none',
      '> .multirangeslider-allowChangeFalse': {
        '> .multirangeslider-range': {
          cursor: 'default',
          '> .multirangeslider-left-handler': {
            cursor: 'default'
          },
          '> .multirangeslider-right-handler': {
            cursor: 'default'
          }
        }
      },
      '> .multirangeslider-bar': {
        height: height,
        border: '1px solid #d9d9d9',
        borderRadius: 4,
        width: '100%',
        display: 'block',
        background: theme.light,
        position: 'relative',
        boxSizing: 'border-box',

        '> .multirangeslider-ghost': {
          position: 'absolute',
          height: '100%',
          textAlign: 'center',
          lineHeight: height + 'px',
          top: 0,
          color: theme.color,
          background: 'rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        },
        '> .multirangeslider-pressed': {
          background: theme.light2
        },
        '> .multirangeslider-zero-width.multirangeslider-pressed-right': {
          '> .multirangeslider-right-handler': {
            left: -8
          }
        },
        '> .multirangeslider-zero-width.multirangeslider-pressed-left': {
          '> .multirangeslider-left-handler': {
            left: -8
          }
        },
        '> .multirangeslider-zero-width.multirangeslider-remove-popup': {
          left: -12
        },
        '> .multirangeslider-range': {
          position: 'absolute',
          height: '100%',
          top: 0,
          cursor: 'move',
          '-webkit-user-drag': 'none',
          color: theme.light,
          backgroundColor: theme.color,

          '> .multirangeslider-label': {
            position: 'absolute',
            textAlign: 'center',
            lineHeight: height + 'px',
            width: '100%',
            display: 'inline'
          },
          '> .multirangeslider-left-handler': {
            position: 'absolute',
            width: 8,
            background: theme.light2,
            height: '100%',
            cursor: 'ew-resize',
            '-webkit-user-drag': 'none',
            left: 0
          },
          '> .multirangeslider-right-handler': {
            position: 'absolute',
            width: 8,
            background: theme.light2,
            height: '100%',
            cursor: 'ew-resize',
            '-webkit-user-drag': 'none',
            right: 0
          },
          '> .multirangeslider-remove-popup': {
            transition: '0.5s',
            position: 'absolute',
            top: -30,
            textAlign: 'center',
            width: '100%',
            '> .multirangeslider-remove-label': {
              width: 20,
              height: 20,
              lineHeight: '20px',
              background: theme.color,
              color: theme.light,
              opacity: '0.5',
              display: 'inline-block'
            }
          }
        }
      }
    }
  };
}, function (x) {
  return _react2.default.createElement(Elessar, x);
}, function (x) {
  return Object.keys(x);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL3RpbWUtcmFuZ2UuZXM2Il0sIm5hbWVzIjpbIkVsZXNzYXIiLCJvbkNoYW5nZSIsImRvbnRDaGFuZ2UiLCJwcm9wcyIsImtleXMiLCJPYmplY3QiLCJlIiwiZGF0YSIsImFycmF5IiwibWFwIiwia2V5IiwidmFsIiwic2xpZGVyIiwibWluIiwibWF4IiwibWluV2lkdGgiLCJzdGVwIiwibGFiZWwiLCJzdGFydCIsIkRhdGUiLCJ2YWx1ZSIsImVuZCIsIm9uIiwiZmluZERPTU5vZGUiLCJhcHBlbmRDaGlsZCIsImVsIiwicmVzZXRWYWx1ZXMiLCJuZXdQcm9wcyIsInJlbW92ZUFsbCIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIml0ZW0iLCJmb3JFYWNoIiwiYWRkIiwiY2xhc3NOYW1lIiwiZGV2IiwieCIsInRoZW1lIiwiaGVpZ2h0IiwiZGlzcGxheSIsInVzZXJTZWxlY3QiLCJjdXJzb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJsaWdodCIsInBvc2l0aW9uIiwiYm94U2l6aW5nIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsInRvcCIsImNvbG9yIiwibGlnaHQyIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsInJpZ2h0IiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBeUJKQyxRLEdBQVcsYUFBSztBQUNkLFVBQUksTUFBS0MsVUFBVCxFQUFxQjtBQUNuQjtBQUNEO0FBSGEsVUFJTkQsUUFKTSxHQUlPLE1BQUtFLEtBSlosQ0FJTkYsUUFKTTs7QUFLZCxVQUFNRyxPQUFPQyxPQUFPRCxJQUFQLENBQVlFLEVBQUVDLElBQWQsQ0FBYjtBQUNBLFVBQU1DLFFBQVFKLEtBQUtLLEdBQUwsQ0FBUztBQUFBLGVB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QjtBQUVuQ0gsbUJBQU8sQ0FGNEI7QUFHbkNDLHdCQUFZUixNQUFNZ0IsTUFIaUI7QUFJbkNmLG9CQUFRLE1BSjJCO0FBS25DRyxvQkFBUSxXQUwyQjtBQU1uQyxpQ0FBcUIsTUFOYztBQU9uQ2UsbUJBQU87QUFQNEIsV0F6QlY7QUFrQzNCLDhDQUFvQztBQUNsQ0Msd0JBQVksTUFEc0I7QUFFbENWLHNCQUFVLFVBRndCO0FBR2xDSSxpQkFBSyxDQUFDLEVBSDRCO0FBSWxDRix1QkFBVyxRQUp1QjtBQUtsQ0wsbUJBQU8sTUFMMkI7QUFNbEMsZ0RBQW9DO0FBQ2xDQSxxQkFBTyxFQUQyQjtBQUVsQ04sc0JBQVEsRUFGMEI7QUFHbENZLDBCQUFZLE1BSHNCO0FBSWxDTCwwQkFBWVIsTUFBTWUsS0FKZ0I7QUFLbENBLHFCQUFPZixNQUFNUyxLQUxxQjtBQU1sQ1ksdUJBQVMsS0FOeUI7QUFPbENuQix1QkFBUztBQVB5QjtBQU5GO0FBbENUO0FBcENKO0FBZEM7QUFEekIsR0FBUDtBQXlHRCxDQTVHWSxFQTZHYjtBQUFBLFNBQUssOEJBQUMsT0FBRCxFQUFhSCxDQUFiLENBQUw7QUFBQSxDQTdHYSxFQThHYjtBQUFBLFNBQUtoQyxPQUFPRCxJQUFQLENBQVlpQyxDQUFaLENBQUw7QUFBQSxDQTlHYSxDIiwiZmlsZSI6ImV4dGVybmFsL3VpL2VkaXRzL3RpbWUtcmFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBhZGRNaW51dGVzLCBzdGFydE9mRGF5LCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ211bHRpcmFuZ2VzbGlkZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNsYXNzIEVsZXNzYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoe1xuICAgICAgbWluOiA3ICogNjAsXG4gICAgICBtYXg6IDIxICogNjAsXG4gICAgICBtaW5XaWR0aDogNjAsXG4gICAgICBzdGVwOiAzMCxcbiAgICAgIGxhYmVsOiB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gYWRkTWludXRlcyhzdGFydE9mRGF5KG5ldyBEYXRlKCkpLCB2YWx1ZVswXSk7XG4gICAgICAgIGNvbnN0IGVuZCA9IGFkZE1pbnV0ZXMoc3RhcnRPZkRheShuZXcgRGF0ZSgpKSwgdmFsdWVbMV0pO1xuICAgICAgICByZXR1cm4gYCR7Zm9ybWF0KHN0YXJ0LCAnSEg6bW0nKX0tJHtmb3JtYXQoZW5kLCAnSEg6bW0nKX1gO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSk7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXIuZWwpO1xuICAgIHRoaXMucmVzZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAodGhpcy5kb250Q2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVzZXRWYWx1ZXMobmV3UHJvcHMpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAodGhpcy5kb250Q2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGUuZGF0YSk7XG4gICAgY29uc3QgYXJyYXkgPSBrZXlzLm1hcChrZXkgPT4gW2UuZGF0YVtrZXldLnZhbFswXSwgZS5kYXRhW2tleV0udmFsWzFdXSk7XG4gICAgb25DaGFuZ2UoYXJyYXkpO1xuICB9O1xuXG4gIHJlc2V0VmFsdWVzKG5ld1Byb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMuZG9udENoYW5nZSA9IHRydWU7XG4gICAgdGhpcy5zbGlkZXIucmVtb3ZlQWxsKCk7XG4gICAgbGV0IHsgdmFsdWUgfSA9IG5ld1Byb3BzO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gW107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gW107XG4gICAgfVxuICAgIHZhbHVlLmZpbHRlcihpdGVtID0+IEFycmF5LmlzQXJyYXkoaXRlbSkpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLnNsaWRlci5hZGQoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5kb250Q2hhbmdlID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHJlZj17eCA9PiAodGhpcy5kZXYgPSB4KX0gLz47XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IDMyO1xuICAgIHJldHVybiB7XG4gICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1zbGlkZXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItYWxsb3dDaGFuZ2VGYWxzZSc6IHtcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yYW5nZSc6IHtcbiAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItbGVmdC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yaWdodC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItYmFyJzoge1xuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5saWdodCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcblxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWdob3N0Jzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1wcmVzc2VkJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUubGlnaHQyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItemVyby13aWR0aC5tdWx0aXJhbmdlc2xpZGVyLXByZXNzZWQtcmlnaHQnOiB7XG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yaWdodC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBsZWZ0OiAtOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci16ZXJvLXdpZHRoLm11bHRpcmFuZ2VzbGlkZXItcHJlc3NlZC1sZWZ0Jzoge1xuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItbGVmdC1oYW5kbGVyJzoge1xuICAgICAgICAgICAgICBsZWZ0OiAtOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci16ZXJvLXdpZHRoLm11bHRpcmFuZ2VzbGlkZXItcmVtb3ZlLXBvcHVwJzoge1xuICAgICAgICAgICAgbGVmdDogLTEyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmFuZ2UnOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICAgICAgICAnLXdlYmtpdC11c2VyLWRyYWcnOiAnbm9uZScsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1sYWJlbCc6IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWxlZnQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5saWdodDIsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdldy1yZXNpemUnLFxuICAgICAgICAgICAgICAnLXdlYmtpdC11c2VyLWRyYWcnOiAnbm9uZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmlnaHQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5saWdodDIsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdldy1yZXNpemUnLFxuICAgICAgICAgICAgICAnLXdlYmtpdC11c2VyLWRyYWcnOiAnbm9uZScsXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJlbW92ZS1wb3B1cCc6IHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJzAuNXMnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgdG9wOiAtMzAsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJlbW92ZS1sYWJlbCc6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICB4ID0+IDxFbGVzc2FyIHsuLi54fSAvPixcbiAgeCA9PiBPYmplY3Qua2V5cyh4KSxcbik7XG4iXX0=
