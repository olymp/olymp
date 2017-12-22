var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Container } from '../components';
import Chart from './chart-wrapper';

var ChartsView = function (_Component) {
  _inherits(ChartsView, _Component);

  function ChartsView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChartsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartsView.__proto__ || Object.getPrototypeOf(ChartsView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dimensions: undefined,
      selected: []
    }, _this.setSelection = function (selection) {
      var selected = _this.state.selected;


      if (selection === false) {
        _this.setState({ selected: [] });
      } else {
        var index = selected.findIndex(function (s) {
          return s === selection;
        });

        if (index === -1) {
          _this.setState({ selected: [].concat(_toConsumableArray(selected), [selection]) });
        } else {
          selected.splice(index, 1);
          _this.setState({ selected: selected });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChartsView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          metrics = _props.metrics,
          range = _props.range,
          dimensions = _props.dimensions,
          sorts = _props.sorts,
          chart = _props.chart,
          sorts2 = _props.sorts2,
          chart2 = _props.chart2;
      var selected = this.state.selected;

      var dimensions2 = this.state.dimensions || this.props.dimensions2;
      var data = {
        metrics: metrics,
        range: range,
        selected: selected,
        changeRange: function changeRange(range) {
          return _this2.setState({ range: range });
        }
      };

      return React.createElement(
        Container,
        null,
        chart !== 'none' && React.createElement(Chart, _extends({}, data, {
          dimensions: [].concat(_toConsumableArray(dimensions), _toConsumableArray(selected && selected.length ? dimensions2 : [])),
          sorts: sorts,
          chart: chart,
          fullSize: chart2 === 'none'
        })),
        chart2 !== 'none' && React.createElement(Chart, _extends({}, data, {
          dimensions: dimensions2,
          changeDimensions: function changeDimensions(dimensions) {
            return _this2.setState({ dimensions: dimensions });
          },
          sorts: sorts2,
          chart: chart2,
          onSelect: this.setSelection,
          fullSize: chart === 'none'
        }))
      );
    }
  }]);

  return ChartsView;
}(Component);

export { ChartsView as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3Mvdmlld3MvY2hhcnRzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkNoYXJ0IiwiQ2hhcnRzVmlldyIsInN0YXRlIiwiZGltZW5zaW9ucyIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwic2V0U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInMiLCJzcGxpY2UiLCJwcm9wcyIsIm1ldHJpY3MiLCJyYW5nZSIsInNvcnRzIiwiY2hhcnQiLCJzb3J0czIiLCJjaGFydDIiLCJkaW1lbnNpb25zMiIsImRhdGEiLCJjaGFuZ2VSYW5nZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGVBQTFCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixpQkFBbEI7O0lBRXFCQyxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWUMsU0FETjtBQUVOQyxnQkFBVTtBQUZKLEssUUFLUkMsWSxHQUFlLHFCQUFhO0FBQUEsVUFDbEJELFFBRGtCLEdBQ0wsTUFBS0gsS0FEQSxDQUNsQkcsUUFEa0I7OztBQUcxQixVQUFJRSxjQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCLGNBQUtDLFFBQUwsQ0FBYyxFQUFFSCxVQUFVLEVBQVosRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU1JLFFBQVFKLFNBQVNLLFNBQVQsQ0FBbUI7QUFBQSxpQkFBS0MsTUFBTUosU0FBWDtBQUFBLFNBQW5CLENBQWQ7O0FBRUEsWUFBSUUsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsZ0JBQUtELFFBQUwsQ0FBYyxFQUFFSCx1Q0FBY0EsUUFBZCxJQUF3QkUsU0FBeEIsRUFBRixFQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFTTyxNQUFULENBQWdCSCxLQUFoQixFQUF1QixDQUF2QjtBQUNBLGdCQUFLRCxRQUFMLENBQWMsRUFBRUgsa0JBQUYsRUFBZDtBQUNEO0FBQ0Y7QUFDRixLOzs7Ozs2QkFFUTtBQUFBOztBQUFBLG1CQVNILEtBQUtRLEtBVEY7QUFBQSxVQUVMQyxPQUZLLFVBRUxBLE9BRks7QUFBQSxVQUdMQyxLQUhLLFVBR0xBLEtBSEs7QUFBQSxVQUlMWixVQUpLLFVBSUxBLFVBSks7QUFBQSxVQUtMYSxLQUxLLFVBS0xBLEtBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxNQVBLLFVBT0xBLE1BUEs7QUFBQSxVQVFMQyxNQVJLLFVBUUxBLE1BUks7QUFBQSxVQVVDZCxRQVZELEdBVWMsS0FBS0gsS0FWbkIsQ0FVQ0csUUFWRDs7QUFXUCxVQUFNZSxjQUFjLEtBQUtsQixLQUFMLENBQVdDLFVBQVgsSUFBeUIsS0FBS1UsS0FBTCxDQUFXTyxXQUF4RDtBQUNBLFVBQU1DLE9BQU87QUFDWFAsd0JBRFc7QUFFWEMsb0JBRlc7QUFHWFYsMEJBSFc7QUFJWGlCLHFCQUFhO0FBQUEsaUJBQVMsT0FBS2QsUUFBTCxDQUFjLEVBQUVPLFlBQUYsRUFBZCxDQUFUO0FBQUE7QUFKRixPQUFiOztBQU9BLGFBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQ0dFLGtCQUFVLE1BQVYsSUFDQyxvQkFBQyxLQUFELGVBQ01JLElBRE47QUFFRSxtREFDS2xCLFVBREwsc0JBRU1FLFlBQVlBLFNBQVNrQixNQUFyQixHQUE4QkgsV0FBOUIsR0FBNEMsRUFGbEQsRUFGRjtBQU1FLGlCQUFPSixLQU5UO0FBT0UsaUJBQU9DLEtBUFQ7QUFRRSxvQkFBVUUsV0FBVztBQVJ2QixXQUZKO0FBYUdBLG1CQUFXLE1BQVgsSUFDQyxvQkFBQyxLQUFELGVBQ01FLElBRE47QUFFRSxzQkFBWUQsV0FGZDtBQUdFLDRCQUFrQjtBQUFBLG1CQUFjLE9BQUtaLFFBQUwsQ0FBYyxFQUFFTCxzQkFBRixFQUFkLENBQWQ7QUFBQSxXQUhwQjtBQUlFLGlCQUFPZSxNQUpUO0FBS0UsaUJBQU9DLE1BTFQ7QUFNRSxvQkFBVSxLQUFLYixZQU5qQjtBQU9FLG9CQUFVVyxVQUFVO0FBUHRCO0FBZEosT0FERjtBQTBCRDs7OztFQXBFcUNuQixTOztTQUFuQkcsVSIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0LXdyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGltZW5zaW9uczogdW5kZWZpbmVkLFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgfTtcblxuICBzZXRTZWxlY3Rpb24gPSBzZWxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoc2VsZWN0aW9uID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBbXSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZC5maW5kSW5kZXgocyA9PiBzID09PSBzZWxlY3Rpb24pO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogWy4uLnNlbGVjdGVkLCBzZWxlY3Rpb25dIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWV0cmljcyxcbiAgICAgIHJhbmdlLFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHNvcnRzLFxuICAgICAgY2hhcnQsXG4gICAgICBzb3J0czIsXG4gICAgICBjaGFydDIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkaW1lbnNpb25zMiA9IHRoaXMuc3RhdGUuZGltZW5zaW9ucyB8fCB0aGlzLnByb3BzLmRpbWVuc2lvbnMyO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBtZXRyaWNzLFxuICAgICAgcmFuZ2UsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGNoYW5nZVJhbmdlOiByYW5nZSA9PiB0aGlzLnNldFN0YXRlKHsgcmFuZ2UgfSksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7Y2hhcnQgIT09ICdub25lJyAmJlxuICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgey4uLmRhdGF9XG4gICAgICAgICAgICBkaW1lbnNpb25zPXtbXG4gICAgICAgICAgICAgIC4uLmRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgIC4uLihzZWxlY3RlZCAmJiBzZWxlY3RlZC5sZW5ndGggPyBkaW1lbnNpb25zMiA6IFtdKSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBzb3J0cz17c29ydHN9XG4gICAgICAgICAgICBjaGFydD17Y2hhcnR9XG4gICAgICAgICAgICBmdWxsU2l6ZT17Y2hhcnQyID09PSAnbm9uZSd9XG4gICAgICAgICAgLz59XG5cbiAgICAgICAge2NoYXJ0MiAhPT0gJ25vbmUnICYmXG4gICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICB7Li4uZGF0YX1cbiAgICAgICAgICAgIGRpbWVuc2lvbnM9e2RpbWVuc2lvbnMyfVxuICAgICAgICAgICAgY2hhbmdlRGltZW5zaW9ucz17ZGltZW5zaW9ucyA9PiB0aGlzLnNldFN0YXRlKHsgZGltZW5zaW9ucyB9KX1cbiAgICAgICAgICAgIHNvcnRzPXtzb3J0czJ9XG4gICAgICAgICAgICBjaGFydD17Y2hhcnQyfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2V0U2VsZWN0aW9ufVxuICAgICAgICAgICAgZnVsbFNpemU9e2NoYXJ0ID09PSAnbm9uZSd9XG4gICAgICAgICAgLz59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=
