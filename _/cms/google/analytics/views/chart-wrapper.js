'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartWrapper = function (_Component) {
  _inherits(ChartWrapper, _Component);

  function ChartWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChartWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartWrapper.__proto__ || Object.getPrototypeOf(ChartWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dimensions: undefined,
      chart: undefined,
      sorts: undefined,
      filters: undefined,
      open: false
    }, _this.componentWillUpdate = function (nextProps, nextState) {
      var items = [].concat(_toConsumableArray(nextState.dimensions || nextProps.dimensions), _toConsumableArray(nextProps.metrics));
      var sorts = nextState.sorts || nextProps.sorts;

      if (sorts.find(function (sort) {
        var endAsc = sort.search(/_ASC/);
        var endDesc = sort.search(/_DESC/);

        return endAsc !== -1 && !items.find(function (item) {
          return item === sort.slice(0, endAsc);
        }) || endDesc !== -1 && !items.find(function (item) {
          return item === sort.slice(0, endDesc);
        });
      })) {
        _this.setState({ sorts: [] });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChartWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$metrics = _props.metrics,
          metrics = _props$metrics === undefined ? [] : _props$metrics,
          _props$range = _props.range,
          range = _props$range === undefined ? [] : _props$range;
      var open = this.state.open;


      var dimensions = this.state.dimensions || this.props.dimensions || [];
      var _changeDimensions = this.props.changeDimensions || function (dimensions) {
        return _this2.setState({ dimensions: dimensions });
      };
      var chart = this.state.chart || this.props.chart || 'line';
      var sorts = this.state.sorts || this.props.sorts || [];
      var filters = this.state.filters || this.props.filters || [];
      var start = (0, _format2.default)(new Date(range[0]), 'YYYY-MM-DD');
      var end = (0, _format2.default)(new Date(range[1]), 'YYYY-MM-DD');

      return _react2.default.createElement(_chart2.default, _extends({}, this.props, {
        start: start,
        end: end,
        metrics: metrics,
        dimensions: dimensions,
        changeDimensions: function changeDimensions(dimensions) {
          return dimensions && dimensions.length && _changeDimensions(dimensions);
        },
        chart: chart,
        changeChart: function changeChart(chart) {
          return _this2.setState({ chart: chart });
        },
        sorts: sorts,
        changeSorts: function changeSorts(sorts) {
          return _this2.setState({ sorts: sorts });
        },
        filters: filters,
        changeFilters: function changeFilters(filters) {
          return _this2.setState({ filters: filters });
        },
        open: open,
        setOpen: function setOpen() {
          return _this2.setState({ open: !open });
        },
        range: range
      }));
    }
  }]);

  return ChartWrapper;
}(_react.Component);

exports.default = ChartWrapper;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0LXdyYXBwZXIuZXM2Il0sIm5hbWVzIjpbIkNoYXJ0V3JhcHBlciIsInN0YXRlIiwiZGltZW5zaW9ucyIsInVuZGVmaW5lZCIsImNoYXJ0Iiwic29ydHMiLCJmaWx0ZXJzIiwib3BlbiIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpdGVtcyIsIm1ldHJpY3MiLCJmaW5kIiwiZW5kQXNjIiwic29ydCIsInNlYXJjaCIsImVuZERlc2MiLCJpdGVtIiwic2xpY2UiLCJzZXRTdGF0ZSIsInByb3BzIiwicmFuZ2UiLCJjaGFuZ2VEaW1lbnNpb25zIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZQyxTQUROO0FBRU5DLGFBQU9ELFNBRkQ7QUFHTkUsYUFBT0YsU0FIRDtBQUlORyxlQUFTSCxTQUpIO0FBS05JLFlBQU07QUFMQSxLLFFBUVJDLG1CLEdBQXNCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUM5QyxVQUFNQyxxQ0FDQUQsVUFBVVIsVUFBVixJQUF3Qk8sVUFBVVAsVUFEbEMsc0JBRURPLFVBQVVHLE9BRlQsRUFBTjtBQUlBLFVBQU1QLFFBQVFLLFVBQVVMLEtBQVYsSUFBbUJJLFVBQVVKLEtBQTNDOztBQUVBLFVBQ0VBLE1BQU1RLElBQU4sQ0FBVyxnQkFBUTtBQUNqQixZQUFNQyxTQUFTQyxLQUFLQyxNQUFMLENBQVksTUFBWixDQUFmO0FBQ0EsWUFBTUMsVUFBVUYsS0FBS0MsTUFBTCxDQUFZLE9BQVosQ0FBaEI7O0FBRUEsZUFDR0YsV0FBVyxDQUFDLENBQVosSUFDQyxDQUFDSCxNQUFNRSxJQUFOLENBQVc7QUFBQSxpQkFBUUssU0FBU0gsS0FBS0ksS0FBTCxDQUFXLENBQVgsRUFBY0wsTUFBZCxDQUFqQjtBQUFBLFNBQVgsQ0FESCxJQUVDRyxZQUFZLENBQUMsQ0FBYixJQUNDLENBQUNOLE1BQU1FLElBQU4sQ0FBVztBQUFBLGlCQUFRSyxTQUFTSCxLQUFLSSxLQUFMLENBQVcsQ0FBWCxFQUFjRixPQUFkLENBQWpCO0FBQUEsU0FBWCxDQUpMO0FBTUQsT0FWRCxDQURGLEVBWUU7QUFDQSxjQUFLRyxRQUFMLENBQWMsRUFBRWYsT0FBTyxFQUFULEVBQWQ7QUFDRDtBQUNGLEs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQzhCLEtBQUtnQixLQURuQztBQUFBLGtDQUNDVCxPQUREO0FBQUEsVUFDQ0EsT0FERCxrQ0FDVyxFQURYO0FBQUEsZ0NBQ2VVLEtBRGY7QUFBQSxVQUNlQSxLQURmLGdDQUN1QixFQUR2QjtBQUFBLFVBRUNmLElBRkQsR0FFVSxLQUFLTixLQUZmLENBRUNNLElBRkQ7OztBQUlQLFVBQU1MLGFBQWEsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLElBQXlCLEtBQUttQixLQUFMLENBQVduQixVQUFwQyxJQUFrRCxFQUFyRTtBQUNBLFVBQU1xQixvQkFDSixLQUFLRixLQUFMLENBQVdFLGdCQUFYLElBQ0M7QUFBQSxlQUFjLE9BQUtILFFBQUwsQ0FBYyxFQUFFbEIsc0JBQUYsRUFBZCxDQUFkO0FBQUEsT0FGSDtBQUdBLFVBQU1FLFFBQVEsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLElBQW9CLEtBQUtpQixLQUFMLENBQVdqQixLQUEvQixJQUF3QyxNQUF0RDtBQUNBLFVBQU1DLFFBQVEsS0FBS0osS0FBTCxDQUFXSSxLQUFYLElBQW9CLEtBQUtnQixLQUFMLENBQVdoQixLQUEvQixJQUF3QyxFQUF0RDtBQUNBLFVBQU1DLFVBQVUsS0FBS0wsS0FBTCxDQUFXSyxPQUFYLElBQXNCLEtBQUtlLEtBQUwsQ0FBV2YsT0FBakMsSUFBNEMsRUFBNUQ7QUFDQSxVQUFNa0IsUUFBUSxzQkFBUSxJQUFJQyxJQUFKLENBQVNILE1BQU0sQ0FBTixDQUFULENBQVIsRUFBNEIsWUFBNUIsQ0FBZDtBQUNBLFVBQU1JLE1BQU0sc0JBQU8sSUFBSUQsSUFBSixDQUFTSCxNQUFNLENBQU4sQ0FBVCxDQUFQLEVBQTJCLFlBQTNCLENBQVo7O0FBRUEsYUFDRSw0REFDTSxLQUFLRCxLQURYO0FBRUUsZUFBT0csS0FGVDtBQUdFLGFBQUtFLEdBSFA7QUFJRSxpQkFBU2QsT0FKWDtBQUtFLG9CQUFZVixVQUxkO0FBTUUsMEJBQWtCO0FBQUEsaUJBQ2hCQSxjQUFjQSxXQUFXeUIsTUFBekIsSUFBbUNKLGtCQUFpQnJCLFVBQWpCLENBRG5CO0FBQUEsU0FOcEI7QUFRRSxlQUFPRSxLQVJUO0FBU0UscUJBQWE7QUFBQSxpQkFBUyxPQUFLZ0IsUUFBTCxDQUFjLEVBQUVoQixZQUFGLEVBQWQsQ0FBVDtBQUFBLFNBVGY7QUFVRSxlQUFPQyxLQVZUO0FBV0UscUJBQWE7QUFBQSxpQkFBUyxPQUFLZSxRQUFMLENBQWMsRUFBRWYsWUFBRixFQUFkLENBQVQ7QUFBQSxTQVhmO0FBWUUsaUJBQVNDLE9BWlg7QUFhRSx1QkFBZTtBQUFBLGlCQUFXLE9BQUtjLFFBQUwsQ0FBYyxFQUFFZCxnQkFBRixFQUFkLENBQVg7QUFBQSxTQWJqQjtBQWNFLGNBQU1DLElBZFI7QUFlRSxpQkFBUztBQUFBLGlCQUFNLE9BQUthLFFBQUwsQ0FBYyxFQUFFYixNQUFNLENBQUNBLElBQVQsRUFBZCxDQUFOO0FBQUEsU0FmWDtBQWdCRSxlQUFPZTtBQWhCVCxTQURGO0FBb0JEOzs7Ozs7a0JBbkVrQnRCLFkiLCJmaWxlIjoiY21zL2dvb2dsZS9hbmFseXRpY3Mvdmlld3MvY2hhcnQtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGltZW5zaW9uczogdW5kZWZpbmVkLFxuICAgIGNoYXJ0OiB1bmRlZmluZWQsXG4gICAgc29ydHM6IHVuZGVmaW5lZCxcbiAgICBmaWx0ZXJzOiB1bmRlZmluZWQsXG4gICAgb3BlbjogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSA9IChuZXh0UHJvcHMsIG5leHRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgLi4uKG5leHRTdGF0ZS5kaW1lbnNpb25zIHx8IG5leHRQcm9wcy5kaW1lbnNpb25zKSxcbiAgICAgIC4uLm5leHRQcm9wcy5tZXRyaWNzLFxuICAgIF07XG4gICAgY29uc3Qgc29ydHMgPSBuZXh0U3RhdGUuc29ydHMgfHwgbmV4dFByb3BzLnNvcnRzO1xuXG4gICAgaWYgKFxuICAgICAgc29ydHMuZmluZChzb3J0ID0+IHtcbiAgICAgICAgY29uc3QgZW5kQXNjID0gc29ydC5zZWFyY2goL19BU0MvKTtcbiAgICAgICAgY29uc3QgZW5kRGVzYyA9IHNvcnQuc2VhcmNoKC9fREVTQy8pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGVuZEFzYyAhPT0gLTEgJiZcbiAgICAgICAgICAgICFpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gc29ydC5zbGljZSgwLCBlbmRBc2MpKSkgfHxcbiAgICAgICAgICAoZW5kRGVzYyAhPT0gLTEgJiZcbiAgICAgICAgICAgICFpdGVtcy5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gc29ydC5zbGljZSgwLCBlbmREZXNjKSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRzOiBbXSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWV0cmljcyA9IFtdLCByYW5nZSA9IFtdIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnMgfHwgdGhpcy5wcm9wcy5kaW1lbnNpb25zIHx8IFtdO1xuICAgIGNvbnN0IGNoYW5nZURpbWVuc2lvbnMgPVxuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VEaW1lbnNpb25zIHx8XG4gICAgICAoZGltZW5zaW9ucyA9PiB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9ucyB9KSk7XG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLnN0YXRlLmNoYXJ0IHx8IHRoaXMucHJvcHMuY2hhcnQgfHwgJ2xpbmUnO1xuICAgIGNvbnN0IHNvcnRzID0gdGhpcy5zdGF0ZS5zb3J0cyB8fCB0aGlzLnByb3BzLnNvcnRzIHx8IFtdO1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnN0YXRlLmZpbHRlcnMgfHwgdGhpcy5wcm9wcy5maWx0ZXJzIHx8IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gZm9ybWF0KCBuZXcgRGF0ZShyYW5nZVswXSksICdZWVlZLU1NLUREJyk7XG4gICAgY29uc3QgZW5kID0gZm9ybWF0KG5ldyBEYXRlKHJhbmdlWzFdKSwgJ1lZWVktTU0tREQnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnRcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHN0YXJ0PXtzdGFydH1cbiAgICAgICAgZW5kPXtlbmR9XG4gICAgICAgIG1ldHJpY3M9e21ldHJpY3N9XG4gICAgICAgIGRpbWVuc2lvbnM9e2RpbWVuc2lvbnN9XG4gICAgICAgIGNoYW5nZURpbWVuc2lvbnM9e2RpbWVuc2lvbnMgPT5cbiAgICAgICAgICBkaW1lbnNpb25zICYmIGRpbWVuc2lvbnMubGVuZ3RoICYmIGNoYW5nZURpbWVuc2lvbnMoZGltZW5zaW9ucyl9XG4gICAgICAgIGNoYXJ0PXtjaGFydH1cbiAgICAgICAgY2hhbmdlQ2hhcnQ9e2NoYXJ0ID0+IHRoaXMuc2V0U3RhdGUoeyBjaGFydCB9KX1cbiAgICAgICAgc29ydHM9e3NvcnRzfVxuICAgICAgICBjaGFuZ2VTb3J0cz17c29ydHMgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRzIH0pfVxuICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICBjaGFuZ2VGaWx0ZXJzPXtmaWx0ZXJzID0+IHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJzIH0pfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBzZXRPcGVuPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogIW9wZW4gfSl9XG4gICAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19
