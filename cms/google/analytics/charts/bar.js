import 'antd/lib/pagination/style';
import _Pagination from 'antd/lib/pagination';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';

import { createComponent } from 'olymp-fela';
import cn from 'classnames';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Tooltip from 'recharts/lib/component/Tooltip';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Bar from 'recharts/lib/cartesian/Bar';
import BarChart from 'recharts/lib/chart/BarChart';
import tinycolor from 'tinycolor2';
import { Container } from '../components';
import { metricsObj, dimensionsObj, colors } from '../../definitions';

var Label = createComponent(function (_ref) {
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
  return React.createElement(
    'text',
    {
      x: x + width / 2,
      y: y + height / 2,
      width: width,
      height: height,
      cursor: cursor,
      fill: 'black',
      className: cn('recharts-text recharts-label', className),
      textAnchor: 'middle'
    },
    React.createElement(
      'tspan',
      { x: x + width / 2, dy: '0.355em' },
      item.renderFn(value)
    )
  );
}, function (p) {
  return Object.keys(p);
});

var Balken = createComponent(function (_ref3) {
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
  var color = i >= 0 && colors[i] || theme.color;

  return {
    fill: tinycolor(color).lighten(10).darken(10 * count).spin(5 * (i === -1 && index)).toRgbString(),
    cursor: clickable && 'pointer'
  };
}, function (_ref4) {
  var className = _ref4.className,
      x = _ref4.x,
      y = _ref4.y,
      width = _ref4.width,
      height = _ref4.height,
      cursor = _ref4.cursor;
  return React.createElement('path', {
    width: width,
    height: height,
    x: x,
    y: y,
    cursor: cursor,
    className: cn('recharts-rectangle', className),
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
          return dimensionsObj[xData].renderFn(val);
        }
      };
      var yProps = {
        type: 'number',
        axisLine: false,
        tickLine: false,
        hide: true
      };

      return React.createElement(
        Container,
        null,
        React.createElement(
          ResponsiveContainer,
          null,
          React.createElement(
            BarChart,
            { layout: vertical && 'vertical', data: items },
            React.createElement(Tooltip, {
              labelFormatter: function labelFormatter(val) {
                return dimensionsObj[xData].renderFn(val);
              },
              formatter: function formatter(val, label) {
                var metricsArr = metrics.map(function (x) {
                  return metricsObj[x];
                });
                var render = metricsArr.find(function (metric) {
                  return metric.label === label;
                }).renderFn;

                return render(val);
              }
            }),
            (metrics || []).map(function (metric, i) {
              return React.createElement(Bar, {
                name: metricsObj[metric].label,
                dataKey: metric,
                key: metric,
                onClick: onSelect && function (item) {
                  return onSelect(item[xData]);
                },
                label: React.createElement(Label, { item: metricsObj[metric] }),
                shape: React.createElement(Balken, { clickable: !!onSelect, dataKey: xData, selected: selected, count: i })
              });
            }),
            React.createElement(XAxis, vertical ? yProps : xProps),
            React.createElement(YAxis, _extends({}, vertical ? xProps : yProps, { orientation: vertical && 'right' }))
          )
        ),
        React.createElement(_Pagination, {
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
}(Component);

export { BarChart2 as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL2Jhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjbiIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJUb29sdGlwIiwiWEF4aXMiLCJZQXhpcyIsIkJhciIsIkJhckNoYXJ0IiwidGlueWNvbG9yIiwiQ29udGFpbmVyIiwibWV0cmljc09iaiIsImRpbWVuc2lvbnNPYmoiLCJjb2xvcnMiLCJMYWJlbCIsInRoZW1lIiwiZmlsbCIsImRhcmsiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjdXJzb3IiLCJpdGVtIiwicmVuZGVyRm4iLCJPYmplY3QiLCJrZXlzIiwicCIsIkJhbGtlbiIsImluZGV4IiwiY291bnQiLCJjbGlja2FibGUiLCJkYXRhS2V5Iiwic2VsZWN0ZWQiLCJyZXN0IiwiaSIsImZpbmRJbmRleCIsImNvbG9yIiwibGlnaHRlbiIsImRhcmtlbiIsInNwaW4iLCJ0b1JnYlN0cmluZyIsIkJhckNoYXJ0MiIsInN0YXRlIiwicGFnZSIsInByb3BzIiwib25TZWxlY3QiLCJtZXRyaWNzIiwiZGltZW5zaW9ucyIsImZ1bGxTaXplIiwidmVydGljYWwiLCJwYWdlU2l6ZSIsIml0ZW1zIiwic2xpY2UiLCJ4RGF0YSIsInhQcm9wcyIsInR5cGUiLCJheGlzTGluZSIsInRpY2tMaW5lIiwidGlja0Zvcm1hdHRlciIsInZhbCIsInlQcm9wcyIsImhpZGUiLCJsYWJlbCIsIm1ldHJpY3NBcnIiLCJtYXAiLCJyZW5kZXIiLCJmaW5kIiwibWV0cmljIiwibGVuZ3RoIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNB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QUFELElBQVEsV0FBVyxDQUFDLENBQUN0QixRQUFyQixFQUErQixTQUFTUSxLQUF4QyxFQUErQyxVQUFVckIsUUFBekQsRUFBbUUsT0FBT0UsQ0FBMUU7QUFQSixnQkFEbUI7QUFBQSxhQUFwQixDQVZIO0FBc0JFLGdDQUFDLEtBQUQsRUFBWWUsV0FBV1csTUFBWCxHQUFvQk4sTUFBaEMsQ0F0QkY7QUF1QkUsZ0NBQUMsS0FBRCxlQUFZTCxXQUFXSyxNQUFYLEdBQW9CTSxNQUFoQyxJQUF5QyxhQUFhWCxZQUFZLE9BQWxFO0FBdkJGO0FBREYsU0FERjtBQTRCRTtBQUNFLG1CQUFTTixJQURYO0FBRUUsMkJBQWlCTyxRQUZuQjtBQUdFLG9CQUFVQSxRQUhaO0FBSUUsaUJBQU8sS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCaUIsTUFKMUI7QUFLRSxvQkFBVTtBQUFBLG1CQUFRLE9BQUtDLFFBQUwsQ0FBYyxFQUFFMUIsVUFBRixFQUFkLENBQVI7QUFBQTtBQUxaO0FBNUJGLE9BREY7QUFzQ0Q7Ozs7RUEvRG9DOUMsUzs7U0FBbEI0QyxTIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZXNwb25zaXZlQ29udGFpbmVyIGZyb20gJ3JlY2hhcnRzL2xpYi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L1Rvb2x0aXAnO1xuaW1wb3J0IFhBeGlzIGZyb20gJ3JlY2hhcnRzL2xpYi9jYXJ0ZXNpYW4vWEF4aXMnO1xuaW1wb3J0IFlBeGlzIGZyb20gJ3JlY2hhcnRzL2xpYi9jYXJ0ZXNpYW4vWUF4aXMnO1xuaW1wb3J0IEJhciBmcm9tICdyZWNoYXJ0cy9saWIvY2FydGVzaWFuL0Jhcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAncmVjaGFydHMvbGliL2NoYXJ0L0JhckNoYXJ0JztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IG1ldHJpY3NPYmosIGRpbWVuc2lvbnNPYmosIGNvbG9ycyB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgTGFiZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmlsbDogdGhlbWUuZGFyayxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdmFsdWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGN1cnNvciwgaXRlbSB9KSA9PiAoXG4gICAgPHRleHRcbiAgICAgIHg9e3ggKyB3aWR0aCAvIDJ9XG4gICAgICB5PXt5ICsgaGVpZ2h0IC8gMn1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgY2xhc3NOYW1lPXtjbigncmVjaGFydHMtdGV4dCByZWNoYXJ0cy1sYWJlbCcsIGNsYXNzTmFtZSl9XG4gICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICA+XG4gICAgICA8dHNwYW4geD17eCArIHdpZHRoIC8gMn0gZHk9XCIwLjM1NWVtXCI+XG4gICAgICAgIHtpdGVtLnJlbmRlckZuKHZhbHVlKX1cbiAgICAgIDwvdHNwYW4+XG4gICAgPC90ZXh0PlxuICApLFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgQmFsa2VuID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgaW5kZXgsIGNvdW50LCBjbGlja2FibGUsIGRhdGFLZXksIHNlbGVjdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCBpID0gc2VsZWN0ZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gcmVzdFtkYXRhS2V5XSk7XG4gICAgY29uc3QgY29sb3IgPSAoaSA+PSAwICYmIGNvbG9yc1tpXSkgfHwgdGhlbWUuY29sb3I7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmlsbDogdGlueWNvbG9yKGNvbG9yKVxuICAgICAgICAubGlnaHRlbigxMClcbiAgICAgICAgLmRhcmtlbigxMCAqIGNvdW50KVxuICAgICAgICAuc3Bpbig1ICogKGkgPT09IC0xICYmIGluZGV4KSlcbiAgICAgICAgLnRvUmdiU3RyaW5nKCksXG4gICAgICBjdXJzb3I6IGNsaWNrYWJsZSAmJiAncG9pbnRlcicsXG4gICAgfTtcbiAgfSxcbiAgKHsgY2xhc3NOYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjdXJzb3IgfSkgPT4gKFxuICAgIDxwYXRoXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHg9e3h9XG4gICAgICB5PXt5fVxuICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICBjbGFzc05hbWU9e2NuKCdyZWNoYXJ0cy1yZWN0YW5nbGUnLCBjbGFzc05hbWUpfVxuICAgICAgZD17YE0gJHt4fSwke3l9IGggJHt3aWR0aH0gdiAke2hlaWdodH0gaCAtJHt3aWR0aH0gWmB9XG4gICAgLz5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0MiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBwYWdlOiAxIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25TZWxlY3QsIG1ldHJpY3MsIGRpbWVuc2lvbnMsIHNlbGVjdGVkLCBmdWxsU2l6ZSwgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBhZ2VTaXplID0gZnVsbFNpemUgPyAxMCA6IDU7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zLnNsaWNlKChwYWdlIC0gMSkgKiBwYWdlU2l6ZSwgcGFnZSAqIHBhZ2VTaXplKTtcblxuICAgIGNvbnN0IHhEYXRhID0gZGltZW5zaW9uc1swXTtcbiAgICBjb25zdCB4UHJvcHMgPSB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgZGF0YUtleTogeERhdGEsXG4gICAgICBheGlzTGluZTogZmFsc2UsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgICB3aWR0aDogMTIwLFxuICAgICAgdGlja0Zvcm1hdHRlcjogdmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCksXG4gICAgfTtcbiAgICBjb25zdCB5UHJvcHMgPSB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGF4aXNMaW5lOiBmYWxzZSxcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSxcbiAgICAgIGhpZGU6IHRydWUsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICA8QmFyQ2hhcnQgbGF5b3V0PXt2ZXJ0aWNhbCAmJiAndmVydGljYWwnfSBkYXRhPXtpdGVtc30+XG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBsYWJlbEZvcm1hdHRlcj17dmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCl9XG4gICAgICAgICAgICAgIGZvcm1hdHRlcj17KHZhbCwgbGFiZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRyaWNzQXJyID0gbWV0cmljcy5tYXAoeCA9PiBtZXRyaWNzT2JqW3hdKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXIgPSBtZXRyaWNzQXJyLmZpbmQobWV0cmljID0+IG1ldHJpYy5sYWJlbCA9PT0gbGFiZWwpLnJlbmRlckZuO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcih2YWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsobWV0cmljcyB8fCBbXSkubWFwKChtZXRyaWMsIGkpID0+IChcbiAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgIG5hbWU9e21ldHJpY3NPYmpbbWV0cmljXS5sYWJlbH1cbiAgICAgICAgICAgICAgICBkYXRhS2V5PXttZXRyaWN9XG4gICAgICAgICAgICAgICAga2V5PXttZXRyaWN9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25TZWxlY3QgJiYgKGl0ZW0gPT4gb25TZWxlY3QoaXRlbVt4RGF0YV0pKX1cbiAgICAgICAgICAgICAgICBsYWJlbD17PExhYmVsIGl0ZW09e21ldHJpY3NPYmpbbWV0cmljXX0gLz59XG4gICAgICAgICAgICAgICAgc2hhcGU9e1xuICAgICAgICAgICAgICAgICAgPEJhbGtlbiBjbGlja2FibGU9eyEhb25TZWxlY3R9IGRhdGFLZXk9e3hEYXRhfSBzZWxlY3RlZD17c2VsZWN0ZWR9IGNvdW50PXtpfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPFhBeGlzIHsuLi4odmVydGljYWwgPyB5UHJvcHMgOiB4UHJvcHMpfSAvPlxuICAgICAgICAgICAgPFlBeGlzIHsuLi4odmVydGljYWwgPyB4UHJvcHMgOiB5UHJvcHMpfSBvcmllbnRhdGlvbj17dmVydGljYWwgJiYgJ3JpZ2h0J30gLz5cbiAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgY3VycmVudD17cGFnZX1cbiAgICAgICAgICBkZWZhdWx0UGFnZVNpemU9e3BhZ2VTaXplfVxuICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy5pdGVtcy5sZW5ndGh9XG4gICAgICAgICAgb25DaGFuZ2U9e3BhZ2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhZ2UgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=
