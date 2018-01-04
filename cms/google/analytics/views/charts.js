'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

var _chartWrapper = require('./chart-wrapper');

var _chartWrapper2 = _interopRequireDefault(_chartWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return _react2.default.createElement(
        _components.Container,
        null,
        chart !== 'none' && _react2.default.createElement(_chartWrapper2.default, _extends({}, data, {
          dimensions: [].concat(_toConsumableArray(dimensions), _toConsumableArray(selected && selected.length ? dimensions2 : [])),
          sorts: sorts,
          chart: chart,
          fullSize: chart2 === 'none'
        })),
        chart2 !== 'none' && _react2.default.createElement(_chartWrapper2.default, _extends({}, data, {
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
}(_react.Component);

exports.default = ChartsView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0cy5lczYiXSwibmFtZXMiOlsiQ2hhcnRzVmlldyIsInN0YXRlIiwiZGltZW5zaW9ucyIsInVuZGVmaW5lZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwic2V0U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInMiLCJzcGxpY2UiLCJwcm9wcyIsIm1ldHJpY3MiLCJyYW5nZSIsInNvcnRzIiwiY2hhcnQiLCJzb3J0czIiLCJjaGFydDIiLCJkaW1lbnNpb25zMiIsImRhdGEiLCJjaGFuZ2VSYW5nZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVlDLFNBRE47QUFFTkMsZ0JBQVU7QUFGSixLLFFBS1JDLFksR0FBZSxxQkFBYTtBQUFBLFVBQ2xCRCxRQURrQixHQUNMLE1BQUtILEtBREEsQ0FDbEJHLFFBRGtCOzs7QUFHMUIsVUFBSUUsY0FBYyxLQUFsQixFQUF5QjtBQUN2QixjQUFLQyxRQUFMLENBQWMsRUFBRUgsVUFBVSxFQUFaLEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNSSxRQUFRSixTQUFTSyxTQUFULENBQW1CO0FBQUEsaUJBQUtDLE1BQU1KLFNBQVg7QUFBQSxTQUFuQixDQUFkOztBQUVBLFlBQUlFLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGdCQUFLRCxRQUFMLENBQWMsRUFBRUgsdUNBQWNBLFFBQWQsSUFBd0JFLFNBQXhCLEVBQUYsRUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBU08sTUFBVCxDQUFnQkgsS0FBaEIsRUFBdUIsQ0FBdkI7QUFDQSxnQkFBS0QsUUFBTCxDQUFjLEVBQUVILGtCQUFGLEVBQWQ7QUFDRDtBQUNGO0FBQ0YsSzs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxtQkFTSCxLQUFLUSxLQVRGO0FBQUEsVUFFTEMsT0FGSyxVQUVMQSxPQUZLO0FBQUEsVUFHTEMsS0FISyxVQUdMQSxLQUhLO0FBQUEsVUFJTFosVUFKSyxVQUlMQSxVQUpLO0FBQUEsVUFLTGEsS0FMSyxVQUtMQSxLQUxLO0FBQUEsVUFNTEMsS0FOSyxVQU1MQSxLQU5LO0FBQUEsVUFPTEMsTUFQSyxVQU9MQSxNQVBLO0FBQUEsVUFRTEMsTUFSSyxVQVFMQSxNQVJLO0FBQUEsVUFVQ2QsUUFWRCxHQVVjLEtBQUtILEtBVm5CLENBVUNHLFFBVkQ7O0FBV1AsVUFBTWUsY0FBYyxLQUFLbEIsS0FBTCxDQUFXQyxVQUFYLElBQXlCLEtBQUtVLEtBQUwsQ0FBV08sV0FBeEQ7QUFDQSxVQUFNQyxPQUFPO0FBQ1hQLHdCQURXO0FBRVhDLG9CQUZXO0FBR1hWLDBCQUhXO0FBSVhpQixxQkFBYTtBQUFBLGlCQUFTLE9BQUtkLFFBQUwsQ0FBYyxFQUFFTyxZQUFGLEVBQWQsQ0FBVDtBQUFBO0FBSkYsT0FBYjs7QUFPQSxhQUNFO0FBQUE7QUFBQTtBQUNHRSxrQkFBVSxNQUFWLElBQ0MsbUVBQ01JLElBRE47QUFFRSxtREFDS2xCLFVBREwsc0JBRU1FLFlBQVlBLFNBQVNrQixNQUFyQixHQUE4QkgsV0FBOUIsR0FBNEMsRUFGbEQsRUFGRjtBQU1FLGlCQUFPSixLQU5UO0FBT0UsaUJBQU9DLEtBUFQ7QUFRRSxvQkFBVUUsV0FBVztBQVJ2QixXQUZKO0FBYUdBLG1CQUFXLE1BQVgsSUFDQyxtRUFDTUUsSUFETjtBQUVFLHNCQUFZRCxXQUZkO0FBR0UsNEJBQWtCO0FBQUEsbUJBQWMsT0FBS1osUUFBTCxDQUFjLEVBQUVMLHNCQUFGLEVBQWQsQ0FBZDtBQUFBLFdBSHBCO0FBSUUsaUJBQU9lLE1BSlQ7QUFLRSxpQkFBT0MsTUFMVDtBQU1FLG9CQUFVLEtBQUtiLFlBTmpCO0FBT0Usb0JBQVVXLFVBQVU7QUFQdEI7QUFkSixPQURGO0FBMEJEOzs7Ozs7a0JBcEVrQmhCLFUiLCJmaWxlIjoiY21zL2dvb2dsZS9hbmFseXRpY3Mvdmlld3MvY2hhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQtd3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0c1ZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaW1lbnNpb25zOiB1bmRlZmluZWQsXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICB9O1xuXG4gIHNldFNlbGVjdGlvbiA9IHNlbGVjdGlvbiA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChzZWxlY3Rpb24gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IFtdIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkLmZpbmRJbmRleChzID0+IHMgPT09IHNlbGVjdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBbLi4uc2VsZWN0ZWQsIHNlbGVjdGlvbl0gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtZXRyaWNzLFxuICAgICAgcmFuZ2UsXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgc29ydHMsXG4gICAgICBjaGFydCxcbiAgICAgIHNvcnRzMixcbiAgICAgIGNoYXJ0MixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMyID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zIHx8IHRoaXMucHJvcHMuZGltZW5zaW9uczI7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG1ldHJpY3MsXG4gICAgICByYW5nZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgY2hhbmdlUmFuZ2U6IHJhbmdlID0+IHRoaXMuc2V0U3RhdGUoeyByYW5nZSB9KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtjaGFydCAhPT0gJ25vbmUnICYmXG4gICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICB7Li4uZGF0YX1cbiAgICAgICAgICAgIGRpbWVuc2lvbnM9e1tcbiAgICAgICAgICAgICAgLi4uZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgLi4uKHNlbGVjdGVkICYmIHNlbGVjdGVkLmxlbmd0aCA/IGRpbWVuc2lvbnMyIDogW10pLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHNvcnRzPXtzb3J0c31cbiAgICAgICAgICAgIGNoYXJ0PXtjaGFydH1cbiAgICAgICAgICAgIGZ1bGxTaXplPXtjaGFydDIgPT09ICdub25lJ31cbiAgICAgICAgICAvPn1cblxuICAgICAgICB7Y2hhcnQyICE9PSAnbm9uZScgJiZcbiAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgIHsuLi5kYXRhfVxuICAgICAgICAgICAgZGltZW5zaW9ucz17ZGltZW5zaW9uczJ9XG4gICAgICAgICAgICBjaGFuZ2VEaW1lbnNpb25zPXtkaW1lbnNpb25zID0+IHRoaXMuc2V0U3RhdGUoeyBkaW1lbnNpb25zIH0pfVxuICAgICAgICAgICAgc29ydHM9e3NvcnRzMn1cbiAgICAgICAgICAgIGNoYXJ0PXtjaGFydDJ9XG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZXRTZWxlY3Rpb259XG4gICAgICAgICAgICBmdWxsU2l6ZT17Y2hhcnQgPT09ICdub25lJ31cbiAgICAgICAgICAvPn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
