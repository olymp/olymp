'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _pagination = require('antd/lib/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/pagination/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ResponsiveContainer = require('recharts/lib/component/ResponsiveContainer');

var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);

var _Tooltip = require('recharts/lib/component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _XAxis = require('recharts/lib/cartesian/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('recharts/lib/cartesian/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _Bar = require('recharts/lib/cartesian/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _BarChart = require('recharts/lib/chart/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _components = require('../components');

var _definitions = require('../../definitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    fill: theme.dark
  };
}, function (_ref2) {
  var className = _ref2.className,
      value = _ref2.value,
      x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height,
      cursor = _ref2.cursor,
      item = _ref2.item;
  return _react2.default.createElement(
    'text',
    {
      x: x + width / 2,
      y: y + height / 2,
      width: width,
      height: height,
      cursor: cursor,
      fill: 'black',
      className: (0, _classnames2.default)('recharts-text recharts-label', className),
      textAnchor: 'middle'
    },
    _react2.default.createElement(
      'tspan',
      { x: x + width / 2, dy: '0.355em' },
      item.renderFn(value)
    )
  );
}, function (p) {
  return Object.keys(p);
});

var Balken = (0, _olympFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme,
      index = _ref3.index,
      count = _ref3.count,
      clickable = _ref3.clickable,
      dataKey = _ref3.dataKey,
      selected = _ref3.selected,
      rest = _objectWithoutProperties(_ref3, ['theme', 'index', 'count', 'clickable', 'dataKey', 'selected']);

  var i = selected.findIndex(function (item) {
    return item === rest[dataKey];
  });
  var color = i >= 0 && _definitions.colors[i] || theme.color;

  return {
    fill: (0, _tinycolor2.default)(color).lighten(10).darken(10 * count).spin(5 * (i === -1 && index)).toRgbString(),
    cursor: clickable && 'pointer'
  };
}, function (_ref4) {
  var className = _ref4.className,
      x = _ref4.x,
      y = _ref4.y,
      width = _ref4.width,
      height = _ref4.height,
      cursor = _ref4.cursor;
  return _react2.default.createElement('path', {
    width: width,
    height: height,
    x: x,
    y: y,
    cursor: cursor,
    className: (0, _classnames2.default)('recharts-rectangle', className),
    d: 'M ' + x + ',' + y + ' h ' + width + ' v ' + height + ' h -' + width + ' Z'
  });
}, function (p) {
  return Object.keys(p);
});

var BarChart2 = function (_Component) {
  _inherits(BarChart2, _Component);

  function BarChart2() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, BarChart2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = BarChart2.__proto__ || Object.getPrototypeOf(BarChart2)).call.apply(_ref5, [this].concat(args))), _this), _this.state = { page: 1 }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BarChart2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onSelect = _props.onSelect,
          metrics = _props.metrics,
          dimensions = _props.dimensions,
          selected = _props.selected,
          fullSize = _props.fullSize,
          vertical = _props.vertical;
      var page = this.state.page;

      var pageSize = fullSize ? 10 : 5;
      var items = this.props.items.slice((page - 1) * pageSize, page * pageSize);

      var xData = dimensions[0];
      var xProps = {
        type: 'category',
        dataKey: xData,
        axisLine: false,
        tickLine: false,
        width: 120,
        tickFormatter: function tickFormatter(val) {
          return _definitions.dimensionsObj[xData].renderFn(val);
        }
      };
      var yProps = {
        type: 'number',
        axisLine: false,
        tickLine: false,
        hide: true
      };

      return _react2.default.createElement(
        _components.Container,
        null,
        _react2.default.createElement(
          _ResponsiveContainer2.default,
          null,
          _react2.default.createElement(
            _BarChart2.default,
            { layout: vertical && 'vertical', data: items },
            _react2.default.createElement(_Tooltip2.default, {
              labelFormatter: function labelFormatter(val) {
                return _definitions.dimensionsObj[xData].renderFn(val);
              },
              formatter: function formatter(val, label) {
                var metricsArr = metrics.map(function (x) {
                  return _definitions.metricsObj[x];
                });
                var render = metricsArr.find(function (metric) {
                  return metric.label === label;
                }).renderFn;

                return render(val);
              }
            }),
            (metrics || []).map(function (metric, i) {
              return _react2.default.createElement(_Bar2.default, {
                name: _definitions.metricsObj[metric].label,
                dataKey: metric,
                key: metric,
                onClick: onSelect && function (item) {
                  return onSelect(item[xData]);
                },
                label: _react2.default.createElement(Label, { item: _definitions.metricsObj[metric] }),
                shape: _react2.default.createElement(Balken, { clickable: !!onSelect, dataKey: xData, selected: selected, count: i })
              });
            }),
            _react2.default.createElement(_XAxis2.default, vertical ? yProps : xProps),
            _react2.default.createElement(_YAxis2.default, _extends({}, vertical ? xProps : yProps, { orientation: vertical && 'right' }))
          )
        ),
        _react2.default.createElement(_pagination2.default, {
          current: page,
          defaultPageSize: pageSize,
          pageSize: pageSize,
          total: this.props.items.length,
          onChange: function onChange(page) {
            return _this2.setState({ page: page });
          }
        })
      );
    }
  }]);

  return BarChart2;
}(_react.Component);

exports.default = BarChart2;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NoYXJ0cy9iYXIuZXM2Il0sIm5hbWVzIjpbIkxhYmVsIiwidGhlbWUiLCJmaWxsIiwiZGFyayIsImNsYXNzTmFtZSIsInZhbHVlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImN1cnNvciIsIml0ZW0iLCJyZW5kZXJGbiIsIk9iamVjdCIsImtleXMiLCJwIiwiQmFsa2VuIiwiaW5kZXgiLCJjb3VudCIsImNsaWNrYWJsZSIsImRhdGFLZXkiLCJzZWxlY3RlZCIsInJlc3QiLCJpIiwiZmluZEluZGV4IiwiY29sb3IiLCJsaWdodGVuIiwiZGFya2VuIiwic3BpbiIsInRvUmdiU3RyaW5nIiwiQmFyQ2hhcnQyIiwic3RhdGUiLCJwYWdlIiwicHJvcHMiLCJvblNlbGVjdCIsIm1ldHJpY3MiLCJkaW1lbnNpb25zIiwiZnVsbFNpemUiLCJ2ZXJ0aWNhbCIsInBhZ2VTaXplIiwiaXRlbXMiLCJzbGljZSIsInhEYXRhIiwieFByb3BzIiwidHlwZSIsImF4aXNMaW5lIiwidGlja0xpbmUiLCJ0aWNrRm9ybWF0dGVyIiwidmFsIiwieVByb3BzIiwiaGlkZSIsImxhYmVsIiwibWV0cmljc0FyciIsIm1hcCIsInJlbmRlciIsImZpbmQiLCJtZXRyaWMiLCJsZW5ndGgiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxnQ0FDWjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFVBQU1ELE1BQU1FO0FBREUsR0FBaEI7QUFBQSxDQURZLEVBSVo7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxNQUFxQkMsQ0FB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dCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZXNwb25zaXZlQ29udGFpbmVyIGZyb20gJ3JlY2hhcnRzL2xpYi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L1Rvb2x0aXAnO1xuaW1wb3J0IFhBeGlzIGZyb20gJ3JlY2hhcnRzL2xpYi9jYXJ0ZXNpYW4vWEF4aXMnO1xuaW1wb3J0IFlBeGlzIGZyb20gJ3JlY2hhcnRzL2xpYi9jYXJ0ZXNpYW4vWUF4aXMnO1xuaW1wb3J0IEJhciBmcm9tICdyZWNoYXJ0cy9saWIvY2FydGVzaWFuL0Jhcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAncmVjaGFydHMvbGliL2NoYXJ0L0JhckNoYXJ0JztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IG1ldHJpY3NPYmosIGRpbWVuc2lvbnNPYmosIGNvbG9ycyB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmlsbDogdGhlbWUuZGFyayxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdmFsdWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGN1cnNvciwgaXRlbSB9KSA9PiAoXG4gICAgPHRleHRcbiAgICAgIHg9e3ggKyB3aWR0aCAvIDJ9XG4gICAgICB5PXt5ICsgaGVpZ2h0IC8gMn1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgY2xhc3NOYW1lPXtjbigncmVjaGFydHMtdGV4dCByZWNoYXJ0cy1sYWJlbCcsIGNsYXNzTmFtZSl9XG4gICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICA+XG4gICAgICA8dHNwYW4geD17eCArIHdpZHRoIC8gMn0gZHk9XCIwLjM1NWVtXCI+XG4gICAgICAgIHtpdGVtLnJlbmRlckZuKHZhbHVlKX1cbiAgICAgIDwvdHNwYW4+XG4gICAgPC90ZXh0PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgQmFsa2VuID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW5kZXgsIGNvdW50LCBjbGlja2FibGUsIGRhdGFLZXksIHNlbGVjdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCBpID0gc2VsZWN0ZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gcmVzdFtkYXRhS2V5XSk7XG4gICAgY29uc3QgY29sb3IgPSAoaSA+PSAwICYmIGNvbG9yc1tpXSkgfHwgdGhlbWUuY29sb3I7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlsbDogdGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAubGlnaHRlbigxMClcbiAgICAgICAgLmRhcmtlbigxMCAqIGNvdW50KVxuICAgICAgICAuc3Bpbig1ICogKGkgPT09IC0xICYmIGluZGV4KSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCksXG4gICAgICBjdXJzb3I6IGNsaWNrYWJsZSAmJiAncG9pbnRlcicsXG4gICAgfTtcbiAgfSxcbiAgKHsgY2xhc3NOYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjdXJzb3IgfSkgPT4gKFxuICAgIDxwYXRoXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHg9e3h9XG4gICAgICB5PXt5fVxuICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICBjbGFzc05hbWU9e2NuKCdyZWNoYXJ0cy1yZWN0YW5nbGUnLCBjbGFzc05hbWUpfVxuICAgICAgZD17YE0gJHt4fSwke3l9IGggJHt3aWR0aH0gdiAke2hlaWdodH0gaCAtJHt3aWR0aH0gWmB9XG4gICAgLz5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0MiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBwYWdlOiAxIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25TZWxlY3QsIG1ldHJpY3MsIGRpbWVuc2lvbnMsIHNlbGVjdGVkLCBmdWxsU2l6ZSwgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBhZ2VTaXplID0gZnVsbFNpemUgPyAxMCA6IDU7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zLnNsaWNlKChwYWdlIC0gMSkgKiBwYWdlU2l6ZSwgcGFnZSAqIHBhZ2VTaXplKTtcblxuICAgIGNvbnN0IHhEYXRhID0gZGltZW5zaW9uc1swXTtcbiAgICBjb25zdCB4UHJvcHMgPSB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgZGF0YUtleTogeERhdGEsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICB3aWR0aDogMTIwLFxuICAgICAgdGlja0Zvcm1hdHRlcjogdmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCksXG4gICAgfTtcbiAgICBjb25zdCB5UHJvcHMgPSB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGF4aXNMaW5lOiBmYWxzZSxcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSxcbiAgICAgIGhpZGU6IHRydWUsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICA8QmFyQ2hhcnQgbGF5b3V0PXt2ZXJ0aWNhbCAmJiAndmVydGljYWwnfSBkYXRhPXtpdGVtc30+XG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBsYWJlbEZvcm1hdHRlcj17dmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCl9XG4gICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbCwgbGFiZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRyaWNzQXJyID0gbWV0cmljcy5tYXAoeCA9PiBtZXRyaWNzT2JqW3hdKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXIgPSBtZXRyaWNzQXJyLmZpbmQobWV0cmljID0+IG1ldHJpYy5sYWJlbCA9PT0gbGFiZWwpLnJlbmRlckZuO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcih2YWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsobWV0cmljcyB8fCBbXSkubWFwKChtZXRyaWMsIGkpID0+IChcbiAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgIG5hbWU9e21ldHJpY3NPYmpbbWV0cmljXS5sYWJlbH1cbiAgICAgICAgICAgICAgICBkYXRhS2V5PXttZXRyaWN9XG4gICAgICAgICAgICAgICAga2V5PXttZXRyaWN9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25TZWxlY3QgJiYgKGl0ZW0gPT4gb25TZWxlY3QoaXRlbVt4RGF0YV0pKX1cbiAgICAgICAgICAgICAgICBsYWJlbD17PExhYmVsIGl0ZW09e21ldHJpY3NPYmpbbWV0cmljXX0gLz59XG4gICAgICAgICAgICAgICAgc2hhcGU9e1xuICAgICAgICAgICAgICAgICAgPEJhbGtlbiBjbGlja2FibGU9eyEhb25TZWxlY3R9IGRhdGFLZXk9e3hEYXRhfSBzZWxlY3RlZD17c2VsZWN0ZWR9IGNvdW50PXtpfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPFhBeGlzIHsuLi4odmVydGljYWwgPyB5UHJvcHMgOiB4UHJvcHMpfSAvPlxuICAgICAgICAgICAgPFlBeGlzIHsuLi4odmVydGljYWwgPyB4UHJvcHMgOiB5UHJvcHMpfSBvcmllbnRhdGlvbj17dmVydGljYWwgJiYgJ3JpZ2h0J30gLz5cbiAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgY3VycmVudD17cGFnZX1cbiAgICAgICAgICBkZWZhdWx0UGFnZVNpemU9e3BhZ2VTaXplfVxuICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy5pdGVtcy5sZW5ndGh9XG4gICAgICAgICAgb25DaGFuZ2U9e3BhZ2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhZ2UgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=
