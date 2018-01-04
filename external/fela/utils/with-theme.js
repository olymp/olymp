'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (getThemeFromProps) {
  return function (WrappedComponent) {
    var _class, _class2, _temp, _initialiseProps;

    var WithThemeComponent = (0, _reactFela.withTheme)(_class = (_temp = _class2 = function (_Component) {
      _inherits(WithThemeComponent, _Component);

      function WithThemeComponent(props) {
        _classCallCheck(this, WithThemeComponent);

        var _this = _possibleConstructorReturn(this, (WithThemeComponent.__proto__ || Object.getPrototypeOf(WithThemeComponent)).call(this, props));

        _initialiseProps.call(_this);

        _this.skip = (0, _get3.default)(props.editor, 'props.prefetch', false);
        _this.setTheme(props);
        return _this;
      }

      _createClass(WithThemeComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this.setTheme(props);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var theme = this.props.theme;


          if (this.skip || !theme) {
            return;
          }

          theme.update({});
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return WithThemeComponent;
    }(_react.Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.setTheme = function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props;
        var theme = props.theme;


        if (_this2.skip || !theme) {
          return;
        }

        var newTheme = getThemeFromProps(props) || {};
        if (!(0, _recompose.shallowEqual)(newTheme, _this2.theme)) {
          theme.update(newTheme);
          _this2.theme = newTheme;
        }
      };
    }, _temp)) || _class;

    return WithThemeComponent;
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvd2l0aC10aGVtZS5lczYiXSwibmFtZXMiOlsiV2l0aFRoZW1lQ29tcG9uZW50IiwicHJvcHMiLCJza2lwIiwiZWRpdG9yIiwic2V0VGhlbWUiLCJ0aGVtZSIsInVwZGF0ZSIsIm5ld1RoZW1lIiwiZ2V0VGhlbWVGcm9tUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7a0JBR2U7QUFBQSxTQUFxQiw0QkFBb0I7QUFBQTs7QUFBQSxRQUVoREEsa0JBRmdEO0FBQUE7O0FBR3BELGtDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNElBQ1hBLEtBRFc7O0FBQUE7O0FBRWpCLGNBQUtDLElBQUwsR0FBWSxtQkFBSUQsTUFBTUUsTUFBVixFQUFrQixnQkFBbEIsRUFBb0MsS0FBcEMsQ0FBWjtBQUNBLGNBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUhpQjtBQUlsQjs7QUFQbUQ7QUFBQTtBQUFBLGtEQVMxQkEsS0FUMEIsRUFTbkI7QUFDL0IsZUFBS0csUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7QUFYbUQ7QUFBQTtBQUFBLCtDQWE3QjtBQUFBLGNBQ2JJLEtBRGEsR0FDSCxLQUFLSixLQURGLENBQ2JJLEtBRGE7OztBQUdyQixjQUFJLEtBQUtILElBQUwsSUFBYSxDQUFDRyxLQUFsQixFQUF5QjtBQUN2QjtBQUNEOztBQUVEQSxnQkFBTUMsTUFBTixDQUFhLEVBQWI7QUFDRDtBQXJCbUQ7QUFBQTtBQUFBLGlDQXFDM0M7QUFDUCxpQkFBTyw4QkFBQyxnQkFBRCxFQUFzQixLQUFLTCxLQUEzQixDQUFQO0FBQ0Q7QUF2Q21EOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQXVCcERHLFFBdkJvRCxHQXVCekMsWUFBd0I7QUFBQSxZQUF2QkgsS0FBdUIsdUVBQWYsT0FBS0EsS0FBVTtBQUFBLFlBQ3pCSSxLQUR5QixHQUNmSixLQURlLENBQ3pCSSxLQUR5Qjs7O0FBR2pDLFlBQUksT0FBS0gsSUFBTCxJQUFhLENBQUNHLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsWUFBTUUsV0FBV0Msa0JBQWtCUCxLQUFsQixLQUE0QixFQUE3QztBQUNBLFlBQUksQ0FBQyw2QkFBYU0sUUFBYixFQUF1QixPQUFLRixLQUE1QixDQUFMLEVBQXlDO0FBQ3ZDQSxnQkFBTUMsTUFBTixDQUFhQyxRQUFiO0FBQ0EsaUJBQUtGLEtBQUwsR0FBYUUsUUFBYjtBQUNEO0FBQ0YsT0FuQ21EO0FBQUE7O0FBeUN0RCxXQUFPUCxrQkFBUDtBQUNELEdBMUNjO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3V0aWxzL3dpdGgtdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGhlbWVGcm9tUHJvcHMgPT4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gIEB3aXRoVGhlbWVcbiAgY2xhc3MgV2l0aFRoZW1lQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5za2lwID0gZ2V0KHByb3BzLmVkaXRvciwgJ3Byb3BzLnByZWZldGNoJywgZmFsc2UpO1xuICAgICAgdGhpcy5zZXRUaGVtZShwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5zZXRUaGVtZShwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAodGhpcy5za2lwIHx8ICF0aGVtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoZW1lLnVwZGF0ZSh7fSk7XG4gICAgfVxuXG4gICAgc2V0VGhlbWUgPSAocHJvcHMgPSB0aGlzLnByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IHRoZW1lIH0gPSBwcm9wcztcblxuICAgICAgaWYgKHRoaXMuc2tpcCB8fCAhdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUaGVtZSA9IGdldFRoZW1lRnJvbVByb3BzKHByb3BzKSB8fCB7fTtcbiAgICAgIGlmICghc2hhbGxvd0VxdWFsKG5ld1RoZW1lLCB0aGlzLnRoZW1lKSkge1xuICAgICAgICB0aGVtZS51cGRhdGUobmV3VGhlbWUpO1xuICAgICAgICB0aGlzLnRoZW1lID0gbmV3VGhlbWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiBXaXRoVGhlbWVDb21wb25lbnQ7XG59O1xuIl19
