var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import format from 'date-fns/format';
import Chart from './chart';

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
      var start = format(new Date(range[0]), 'YYYY-MM-DD');
      var end = format(new Date(range[1]), 'YYYY-MM-DD');

      return React.createElement(Chart, _extends({}, this.props, {
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
}(Component);

export { ChartWrapper as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3Mvdmlld3MvY2hhcnQtd3JhcHBlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmb3JtYXQiLCJDaGFydCIsIkNoYXJ0V3JhcHBlciIsInN0YXRlIiwiZGltZW5zaW9ucyIsInVuZGVmaW5lZCIsImNoYXJ0Iiwic29ydHMiLCJmaWx0ZXJzIiwib3BlbiIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpdGVtcyIsIm1ldHJpY3MiLCJmaW5kIiwiZW5kQXNjIiwic29ydCIsInNlYXJjaCIsImVuZERlc2MiLCJpdGVtIiwic2xpY2UiLCJzZXRTdGF0ZSIsInByb3BzIiwicmFuZ2UiLCJjaGFuZ2VEaW1lbnNpb25zIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsaUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjs7SUFFcUJDLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZQyxTQUROO0FBRU5DLGFBQU9ELFNBRkQ7QUFHTkUsYUFBT0YsU0FIRDtBQUlORyxlQUFTSCxTQUpIO0FBS05JLFlBQU07QUFMQSxLLFFBUVJDLG1CLEdBQXNCLFVBQUNDLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUM5QyxVQUFNQyxxQ0FDQUQsVUFBVVIsVUFBVixJQUF3Qk8sVUFBVVAsVUFEbEMsc0JBRURPLFVBQVVHLE9BRlQsRUFBTjtBQUlBLFVBQU1QLFFBQVFLLFVBQVVMLEtBQVYsSUFBbUJJLFVBQVVKLEtBQTNDOztBQUVBLFVBQ0VBLE1BQU1RLElBQU4sQ0FBVyxnQkFBUTtBQUNqQixZQUFNQyxTQUFTQyxLQUFLQyxNQUFMLENBQVksTUFBWixDQUFmO0FBQ0EsWUFBTUMsVUFBVUYsS0FBS0MsTUFBTCxDQUFZLE9BQVosQ0FBaEI7O0FBRUEsZUFDR0YsV0FBVyxDQUFDLENBQVosSUFDQyxDQUFDSCxNQUFNRSxJQUFOLENBQVc7QUFBQSxpQkFBUUssU0FBU0gsS0FBS0ksS0FBTCxDQUFXLENBQVgsRUFBY0wsTUFBZCxDQUFqQjtBQUFBLFNBQVgsQ0FESCxJQUVDRyxZQUFZLENBQUMsQ0FBYixJQUNDLENBQUNOLE1BQU1FLElBQU4sQ0FBVztBQUFBLGlCQUFRSyxTQUFTSCxLQUFLSSxLQUFMLENBQVcsQ0FBWCxFQUFjRixPQUFkLENBQWpCO0FBQUEsU0FBWCxDQUpMO0FBTUQsT0FWRCxDQURGLEVBWUU7QUFDQSxjQUFLRyxRQUFMLENBQWMsRUFBRWYsT0FBTyxFQUFULEVBQWQ7QUFDRDtBQUNGLEs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQzhCLEtBQUtnQixLQURuQztBQUFBLGtDQUNDVCxPQUREO0FBQUEsVUFDQ0EsT0FERCxrQ0FDVyxFQURYO0FBQUEsZ0NBQ2VVLEtBRGY7QUFBQSxVQUNlQSxLQURmLGdDQUN1QixFQUR2QjtBQUFBLFVBRUNmLElBRkQsR0FFVSxLQUFLTixLQUZmLENBRUNNLElBRkQ7OztBQUlQLFVBQU1MLGFBQWEsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLElBQXlCLEtBQUttQixLQUFMLENBQVduQixVQUFwQyxJQUFrRCxFQUFyRTtBQUNBLFVBQU1xQixvQkFDSixLQUFLRixLQUFMLENBQVdFLGdCQUFYLElBQ0M7QUFBQSxlQUFjLE9BQUtILFFBQUwsQ0FBYyxFQUFFbEIsc0JBQUYsRUFBZCxDQUFkO0FBQUEsT0FGSDtBQUdBLFVBQU1FLFFBQVEsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLElBQW9CLEtBQUtpQixLQUFMLENBQVdqQixLQUEvQixJQUF3QyxNQUF0RDtBQUNBLFVBQU1DLFFBQVEsS0FBS0osS0FBTCxDQUFXSSxLQUFYLElBQW9CLEtBQUtnQixLQUFMLENBQVdoQixLQUEvQixJQUF3QyxFQUF0RDtBQUNBLFVBQU1DLFVBQVUsS0FBS0wsS0FBTCxDQUFXSyxPQUFYLElBQXNCLEtBQUtlLEtBQUwsQ0FBV2YsT0FBakMsSUFBNEMsRUFBNUQ7QUFDQSxVQUFNa0IsUUFBUTFCLE9BQVEsSUFBSTJCLElBQUosQ0FBU0gsTUFBTSxDQUFOLENBQVQsQ0FBUixFQUE0QixZQUE1QixDQUFkO0FBQ0EsVUFBTUksTUFBTTVCLE9BQU8sSUFBSTJCLElBQUosQ0FBU0gsTUFBTSxDQUFOLENBQVQsQ0FBUCxFQUEyQixZQUEzQixDQUFaOztBQUVBLGFBQ0Usb0JBQUMsS0FBRCxlQUNNLEtBQUtELEtBRFg7QUFFRSxlQUFPRyxLQUZUO0FBR0UsYUFBS0UsR0FIUDtBQUlFLGlCQUFTZCxPQUpYO0FBS0Usb0JBQVlWLFVBTGQ7QUFNRSwwQkFBa0I7QUFBQSxpQkFDaEJBLGNBQWNBLFdBQVd5QixNQUF6QixJQUFtQ0osa0JBQWlCckIsVUFBakIsQ0FEbkI7QUFBQSxTQU5wQjtBQVFFLGVBQU9FLEtBUlQ7QUFTRSxxQkFBYTtBQUFBLGlCQUFTLE9BQUtnQixRQUFMLENBQWMsRUFBRWhCLFlBQUYsRUFBZCxDQUFUO0FBQUEsU0FUZjtBQVVFLGVBQU9DLEtBVlQ7QUFXRSxxQkFBYTtBQUFBLGlCQUFTLE9BQUtlLFFBQUwsQ0FBYyxFQUFFZixZQUFGLEVBQWQsQ0FBVDtBQUFBLFNBWGY7QUFZRSxpQkFBU0MsT0FaWDtBQWFFLHVCQUFlO0FBQUEsaUJBQVcsT0FBS2MsUUFBTCxDQUFjLEVBQUVkLGdCQUFGLEVBQWQsQ0FBWDtBQUFBLFNBYmpCO0FBY0UsY0FBTUMsSUFkUjtBQWVFLGlCQUFTO0FBQUEsaUJBQU0sT0FBS2EsUUFBTCxDQUFjLEVBQUViLE1BQU0sQ0FBQ0EsSUFBVCxFQUFkLENBQU47QUFBQSxTQWZYO0FBZ0JFLGVBQU9lO0FBaEJULFNBREY7QUFvQkQ7Ozs7RUFuRXVDekIsUzs7U0FBckJHLFkiLCJmaWxlIjoicGFja2FnZXMvZ29vZ2xlL2FuYWx5dGljcy92aWV3cy9jaGFydC13cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaW1lbnNpb25zOiB1bmRlZmluZWQsXG4gICAgY2hhcnQ6IHVuZGVmaW5lZCxcbiAgICBzb3J0czogdW5kZWZpbmVkLFxuICAgIGZpbHRlcnM6IHVuZGVmaW5lZCxcbiAgICBvcGVuOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVXBkYXRlID0gKG5leHRQcm9wcywgbmV4dFN0YXRlKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAuLi4obmV4dFN0YXRlLmRpbWVuc2lvbnMgfHwgbmV4dFByb3BzLmRpbWVuc2lvbnMpLFxuICAgICAgLi4ubmV4dFByb3BzLm1ldHJpY3MsXG4gICAgXTtcbiAgICBjb25zdCBzb3J0cyA9IG5leHRTdGF0ZS5zb3J0cyB8fCBuZXh0UHJvcHMuc29ydHM7XG5cbiAgICBpZiAoXG4gICAgICBzb3J0cy5maW5kKHNvcnQgPT4ge1xuICAgICAgICBjb25zdCBlbmRBc2MgPSBzb3J0LnNlYXJjaCgvX0FTQy8pO1xuICAgICAgICBjb25zdCBlbmREZXNjID0gc29ydC5zZWFyY2goL19ERVNDLyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoZW5kQXNjICE9PSAtMSAmJlxuICAgICAgICAgICAgIWl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtID09PSBzb3J0LnNsaWNlKDAsIGVuZEFzYykpKSB8fFxuICAgICAgICAgIChlbmREZXNjICE9PSAtMSAmJlxuICAgICAgICAgICAgIWl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtID09PSBzb3J0LnNsaWNlKDAsIGVuZERlc2MpKSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc29ydHM6IFtdIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXRyaWNzID0gW10sIHJhbmdlID0gW10gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuc3RhdGUuZGltZW5zaW9ucyB8fCB0aGlzLnByb3BzLmRpbWVuc2lvbnMgfHwgW107XG4gICAgY29uc3QgY2hhbmdlRGltZW5zaW9ucyA9XG4gICAgICB0aGlzLnByb3BzLmNoYW5nZURpbWVuc2lvbnMgfHxcbiAgICAgIChkaW1lbnNpb25zID0+IHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zIH0pKTtcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuc3RhdGUuY2hhcnQgfHwgdGhpcy5wcm9wcy5jaGFydCB8fCAnbGluZSc7XG4gICAgY29uc3Qgc29ydHMgPSB0aGlzLnN0YXRlLnNvcnRzIHx8IHRoaXMucHJvcHMuc29ydHMgfHwgW107XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycyB8fCB0aGlzLnByb3BzLmZpbHRlcnMgfHwgW107XG4gICAgY29uc3Qgc3RhcnQgPSBmb3JtYXQoIG5ldyBEYXRlKHJhbmdlWzBdKSwgJ1lZWVktTU0tREQnKTtcbiAgICBjb25zdCBlbmQgPSBmb3JtYXQobmV3IERhdGUocmFuZ2VbMV0pLCAnWVlZWS1NTS1ERCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydFxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgc3RhcnQ9e3N0YXJ0fVxuICAgICAgICBlbmQ9e2VuZH1cbiAgICAgICAgbWV0cmljcz17bWV0cmljc31cbiAgICAgICAgZGltZW5zaW9ucz17ZGltZW5zaW9uc31cbiAgICAgICAgY2hhbmdlRGltZW5zaW9ucz17ZGltZW5zaW9ucyA9PlxuICAgICAgICAgIGRpbWVuc2lvbnMgJiYgZGltZW5zaW9ucy5sZW5ndGggJiYgY2hhbmdlRGltZW5zaW9ucyhkaW1lbnNpb25zKX1cbiAgICAgICAgY2hhcnQ9e2NoYXJ0fVxuICAgICAgICBjaGFuZ2VDaGFydD17Y2hhcnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0IH0pfVxuICAgICAgICBzb3J0cz17c29ydHN9XG4gICAgICAgIGNoYW5nZVNvcnRzPXtzb3J0cyA9PiB0aGlzLnNldFN0YXRlKHsgc29ydHMgfSl9XG4gICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgIGNoYW5nZUZpbHRlcnM9e2ZpbHRlcnMgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcnMgfSl9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIHNldE9wZW49eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhb3BlbiB9KX1cbiAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
