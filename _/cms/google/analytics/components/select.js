'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _definitions = require('../../definitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Muss Klasse sein, sonst klappt der getFieldDecorator nicht!!!
var MetricSelet = function (_Component) {
  _inherits(MetricSelet, _Component);

  function MetricSelet() {
    _classCallCheck(this, MetricSelet);

    return _possibleConstructorReturn(this, (MetricSelet.__proto__ || Object.getPrototypeOf(MetricSelet)).apply(this, arguments));
  }

  _createClass(MetricSelet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDimension = _props.isDimension,
          rest = _objectWithoutProperties(_props, ['isDimension']);

      var obj = isDimension ? _definitions.dimensionsObj : _definitions.metricsObj;

      var categories = {};
      Object.keys(obj).forEach(function (key) {
        var category = obj[key].category;


        if (!categories[category]) {
          categories[category] = [];
        }

        categories[category].push(_extends({}, obj[key], {
          key: key
        }));
      });

      return _react2.default.createElement(
        _select2.default,
        _extends({
          mode: 'multiple',
          placeholder: isDimension ? 'Dimensionen' : 'Messwerte',
          filterOption: function filterOption(val, _ref) {
            var props = _ref.props;
            return props.children.toLowerCase().includes(val.toLowerCase());
          },
          style: { width: '100%' }
        }, rest),
        Object.keys(categories).map(function (category) {
          return _react2.default.createElement(
            _select2.default.OptGroup,
            { label: category, key: category },
            categories[category].map(function (x) {
              return _react2.default.createElement(
                _select2.default.Option,
                { value: x.key, key: x.key },
                x.label
              );
            })
          );
        })
      );
    }
  }]);

  return MetricSelet;
}(_react.Component);

exports.default = MetricSelet;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvc2VsZWN0LmVzNiJdLCJuYW1lcyI6WyJNZXRyaWNTZWxldCIsInByb3BzIiwiaXNEaW1lbnNpb24iLCJyZXN0Iiwib2JqIiwiY2F0ZWdvcmllcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJrZXkiLCJwdXNoIiwidmFsIiwiY2hpbGRyZW4iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwid2lkdGgiLCJtYXAiLCJ4IiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDcUJBLFc7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsbUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQ0MsV0FERCxVQUNDQSxXQUREO0FBQUEsVUFDaUJDLElBRGpCOztBQUVQLFVBQU1DLE1BQU1GLGtFQUFaOztBQUVBLFVBQU1HLGFBQWEsRUFBbkI7QUFDQUMsYUFBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixlQUFPO0FBQUEsWUFDdEJDLFFBRHNCLEdBQ1RMLElBQUlNLEdBQUosQ0FEUyxDQUN0QkQsUUFEc0I7OztBQUc5QixZQUFJLENBQUNKLFdBQVdJLFFBQVgsQ0FBTCxFQUEyQjtBQUN6QkoscUJBQVdJLFFBQVgsSUFBdUIsRUFBdkI7QUFDRDs7QUFFREosbUJBQVdJLFFBQVgsRUFBcUJFLElBQXJCLGNBQ0tQLElBQUlNLEdBQUosQ0FETDtBQUVFQTtBQUZGO0FBSUQsT0FYRDs7QUFhQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFLLFVBRFA7QUFFRSx1QkFBYVIsY0FBYyxhQUFkLEdBQThCLFdBRjdDO0FBR0Usd0JBQWMsc0JBQUNVLEdBQUQ7QUFBQSxnQkFBUVgsS0FBUixRQUFRQSxLQUFSO0FBQUEsbUJBQ1pBLE1BQU1ZLFFBQU4sQ0FBZUMsV0FBZixHQUE2QkMsUUFBN0IsQ0FBc0NILElBQUlFLFdBQUosRUFBdEMsQ0FEWTtBQUFBLFdBSGhCO0FBS0UsaUJBQU8sRUFBRUUsT0FBTyxNQUFUO0FBTFQsV0FNTWIsSUFOTjtBQVFHRyxlQUFPQyxJQUFQLENBQVlGLFVBQVosRUFBd0JZLEdBQXhCLENBQTRCO0FBQUEsaUJBQzNCO0FBQUEsNkJBQVEsUUFBUjtBQUFBLGNBQWlCLE9BQU9SLFFBQXhCLEVBQWtDLEtBQUtBLFFBQXZDO0FBQ0dKLHVCQUFXSSxRQUFYLEVBQXFCUSxHQUFyQixDQUF5QjtBQUFBLHFCQUN4QjtBQUFBLGlDQUFRLE1BQVI7QUFBQSxrQkFBZSxPQUFPQyxFQUFFUixHQUF4QixFQUE2QixLQUFLUSxFQUFFUixHQUFwQztBQUNHUSxrQkFBRUM7QUFETCxlQUR3QjtBQUFBLGFBQXpCO0FBREgsV0FEMkI7QUFBQSxTQUE1QjtBQVJILE9BREY7QUFvQkQ7Ozs7OztrQkF2Q2tCbkIsVyIsImZpbGUiOiJjbXMvZ29vZ2xlL2FuYWx5dGljcy9jb21wb25lbnRzL3NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IG1ldHJpY3NPYmosIGRpbWVuc2lvbnNPYmogfSBmcm9tICcuLi8uLi9kZWZpbml0aW9ucyc7XG5cbi8vIE11c3MgS2xhc3NlIHNlaW4sIHNvbnN0IGtsYXBwdCBkZXIgZ2V0RmllbGREZWNvcmF0b3IgbmljaHQhISFcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldHJpY1NlbGV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNEaW1lbnNpb24sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb2JqID0gaXNEaW1lbnNpb24gPyBkaW1lbnNpb25zT2JqIDogbWV0cmljc09iajtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG4gICAgICAgIGNhdGVnb3JpZXNbY2F0ZWdvcnldID0gW107XG4gICAgICB9XG5cbiAgICAgIGNhdGVnb3JpZXNbY2F0ZWdvcnldLnB1c2goe1xuICAgICAgICAuLi5vYmpba2V5XSxcbiAgICAgICAga2V5LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj17aXNEaW1lbnNpb24gPyAnRGltZW5zaW9uZW4nIDogJ01lc3N3ZXJ0ZSd9XG4gICAgICAgIGZpbHRlck9wdGlvbj17KHZhbCwgeyBwcm9wcyB9KSA9PlxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7T2JqZWN0LmtleXMoY2F0ZWdvcmllcykubWFwKGNhdGVnb3J5ID0+XG4gICAgICAgICAgPFNlbGVjdC5PcHRHcm91cCBsYWJlbD17Y2F0ZWdvcnl9IGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAge2NhdGVnb3JpZXNbY2F0ZWdvcnldLm1hcCh4ID0+XG4gICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXt4LmtleX0ga2V5PXt4LmtleX0+XG4gICAgICAgICAgICAgICAge3gubGFiZWx9XG4gICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TZWxlY3QuT3B0R3JvdXA+XG4gICAgICAgICl9XG4gICAgICA8L1NlbGVjdD5cbiAgICApO1xuICB9XG59XG4iXX0=
