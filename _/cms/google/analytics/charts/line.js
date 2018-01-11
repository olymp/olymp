'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _reactFela = require('react-fela');

var _ResponsiveContainer = require('recharts/lib/component/ResponsiveContainer');

var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);

var _Tooltip = require('recharts/lib/component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Legend = require('recharts/lib/component/Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _XAxis = require('recharts/lib/cartesian/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('recharts/lib/cartesian/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _Brush = require('recharts/lib/cartesian/Brush');

var _Brush2 = _interopRequireDefault(_Brush);

var _CartesianGrid = require('recharts/lib/cartesian/CartesianGrid');

var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);

var _Line = require('recharts/lib/cartesian/Line');

var _Line2 = _interopRequireDefault(_Line);

var _LineChart = require('recharts/lib/chart/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _definitions = require('../../definitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ref2 = _react2.default.createElement(_CartesianGrid2.default, { stroke: '#ccc', strokeDasharray: '3 3' });

var _ref3 = _react2.default.createElement(_Legend2.default, { align: 'center' });

var LineChart2 = (0, _reactFela.withTheme)(function (_ref) {
  var metrics = _ref.metrics,
      dimensions = _ref.dimensions,
      items = _ref.items,
      selected = _ref.selected,
      fullSize = _ref.fullSize,
      theme = _ref.theme;

  var xData = dimensions[0];
  var yData = metrics[0];
  var data = items;
  var lines = metrics.map(function (metric) {
    return {
      key: metric,
      label: _definitions.metricsObj[metric].label
    };
  });
  var formatter = function formatter(val) {
    return _definitions.dimensionsObj[xData].renderFn(val);
  };

  if (dimensions.length > 1) {
    var dataObj = {};
    lines = [];

    var filteredDimensions = [].concat(_toConsumableArray(dimensions));
    var index = filteredDimensions.findIndex(function (t) {
      return t === xData;
    });
    if (index >= 0) {
      filteredDimensions.splice(index, 1);
    }

    filteredDimensions.map(function (dimension) {
      return (0, _groupBy3.default)(items, dimension);
    }).forEach(function (dimGroup) {
      return Object.keys(dimGroup).forEach(function (key, i) {
        metrics.forEach(function (metric, j) {
          return lines.push({
            key: key + '-' + metric,
            label: key + ' [' + _definitions.metricsObj[metric].label + ']',
            color: _definitions.colors[selected.findIndex(function (s) {
              return s === key;
            })],
            index: j
          });
        });

        dimGroup[key].forEach(function (item) {
          if (!dataObj[item[xData]]) {
            dataObj[item[xData]] = {};
          }

          metrics.forEach(function (metric) {
            return dataObj[item[xData]][key + '-' + metric] = item[metric];
          });
        });
      });
    });
    data = Object.keys(dataObj).map(function (key) {
      return dataObj[key];
    });
  }

  return _react2.default.createElement(
    _ResponsiveContainer2.default,
    null,
    _react2.default.createElement(
      _LineChart2.default,
      { data: data },
      lines.map(function (line, i) {
        return _react2.default.createElement(_Line2.default, {
          name: line.label,
          dataKey: line.key,
          key: line.key,
          type: 'monotone',
          stroke: (0, _tinycolor2.default)(line.color || theme.color).lighten(10).darken(10 * (line.index === undefined ? i : line.index)).toRgbString(),
          strokeWidth: 3
        });
      }),
      _ref2,
      _react2.default.createElement(_XAxis2.default, { dataKey: xData, tickFormatter: formatter }),
      _react2.default.createElement(_YAxis2.default, { tickFormatter: function tickFormatter(val) {
          return _definitions.metricsObj[yData].renderFn(val);
        } }),
      fullSize && _react2.default.createElement(_Brush2.default, {
        dataKey: xData,
        height: 30,
        stroke: _definitions.colors[0],
        tickFormatter: formatter
      }),
      _ref3,
      _react2.default.createElement(_Tooltip2.default, {
        labelFormatter: formatter,
        formatter: function formatter(val, label) {
          var start = label.search(/\[/);
          var end = label.search(/\]/);
          if (start >= 0 && end >= 0) {
            label = label.slice(start + 1, end);
          }

          var metricsArr = metrics.map(function (x) {
            return _definitions.metricsObj[x];
          });
          var item = metricsArr.find(function (metric) {
            return metric.label === label;
          });

          return item && item.renderFn(val) || val;
        }
      })
    )
  );
});
LineChart2.contextTypes = {
  theme: _propTypes2.default.object
};
exports.default = LineChart2;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NoYXJ0cy9saW5lLmVzNiJdLCJuYW1lcyI6WyJMaW5lQ2hhcnQyIiwibWV0cmljcyIsImRpbWVuc2lvbnMiLCJpdGVtcyIsInNlbGVjdGVkIiwiZnVsbFNpemUiLCJ0aGVtZSIsInhEYXRhIiwieURhdGEiLCJkYXRhIiwibGluZXMiLCJtYXAiLCJrZXkiLCJtZXRyaWMiLCJsYWJlbCIsImZvcm1hdHRlciIsInJlbmRlckZuIiwidmFsIiwibGVuZ3RoIiwiZGF0YU9iaiIsImZpbHRlcmVkRGltZW5zaW9ucyIsImluZGV4IiwiZmluZEluZGV4IiwidCIsInNwbGljZSIsImRpbWVuc2lvbiIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwiZGltR3JvdXAiLCJpIiwiaiIsInB1c2giLCJjb2xvciIsInMiLCJpdGVtIiwibGluZSIsImxpZ2h0ZW4iLCJkYXJrZW4iLCJ1bmRlZmluZWQiLCJ0b1JnYlN0cmluZyIsInN0YXJ0Iiwic2VhcmNoIiwiZW5kIiwic2xpY2UiLCJtZXRyaWNzQXJyIiwieCIsImZpbmQiLCJjb250ZXh0VHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O1lBbUVVLHlEQUFlLFFBQU8sTUFBdEIsRUFBNkIsaUJBQWdCLEtBQTdDLEc7O1lBV0Esa0RBQVEsT0FBTSxRQUFkLEc7O0FBNUVWLElBQU1BLGFBQWEsMEJBQ2pCLGdCQUErRDtBQUFBLE1BQTVEQyxPQUE0RCxRQUE1REEsT0FBNEQ7QUFBQSxNQUFuREMsVUFBbUQsUUFBbkRBLFVBQW1EO0FBQUEsTUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsUUFBc0Is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QUFETyxDQUExQjtrQkFHZWpELFUiLCJmaWxlIjoiY21zL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL2xpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBSZXNwb25zaXZlQ29udGFpbmVyIGZyb20gJ3JlY2hhcnRzL2xpYi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L1Rvb2x0aXAnO1xuaW1wb3J0IExlZ2VuZCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L0xlZ2VuZCc7XG5pbXBvcnQgWEF4aXMgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9YQXhpcyc7XG5pbXBvcnQgWUF4aXMgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9ZQXhpcyc7XG5pbXBvcnQgQnJ1c2ggZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9CcnVzaCc7XG5pbXBvcnQgQ2FydGVzaWFuR3JpZCBmcm9tICdyZWNoYXJ0cy9saWIvY2FydGVzaWFuL0NhcnRlc2lhbkdyaWQnO1xuaW1wb3J0IExpbmUgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9MaW5lJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAncmVjaGFydHMvbGliL2NoYXJ0L0xpbmVDaGFydCc7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG1ldHJpY3NPYmosIGRpbWVuc2lvbnNPYmosIGNvbG9ycyB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgTGluZUNoYXJ0MiA9IHdpdGhUaGVtZShcbiAgKHsgbWV0cmljcywgZGltZW5zaW9ucywgaXRlbXMsIHNlbGVjdGVkLCBmdWxsU2l6ZSwgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnN0IHhEYXRhID0gZGltZW5zaW9uc1swXTtcbiAgICBjb25zdCB5RGF0YSA9IG1ldHJpY3NbMF07XG4gICAgbGV0IGRhdGEgPSBpdGVtcztcbiAgICBsZXQgbGluZXMgPSBtZXRyaWNzLm1hcChtZXRyaWMgPT4gKHtcbiAgICAgIGtleTogbWV0cmljLFxuICAgICAgbGFiZWw6IG1ldHJpY3NPYmpbbWV0cmljXS5sYWJlbCxcbiAgICB9KSk7XG4gICAgY29uc3QgZm9ybWF0dGVyID0gdmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCk7XG5cbiAgICBpZiAoZGltZW5zaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgICBsaW5lcyA9IFtdO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERpbWVuc2lvbnMgPSBbLi4uZGltZW5zaW9uc107XG4gICAgICBjb25zdCBpbmRleCA9IGZpbHRlcmVkRGltZW5zaW9ucy5maW5kSW5kZXgodCA9PiB0ID09PSB4RGF0YSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXJlZERpbWVuc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWREaW1lbnNpb25zXG4gICAgICAgIC5tYXAoZGltZW5zaW9uID0+IGdyb3VwQnkoaXRlbXMsIGRpbWVuc2lvbikpXG4gICAgICAgIC5mb3JFYWNoKGRpbUdyb3VwID0+XG4gICAgICAgICAgT2JqZWN0LmtleXMoZGltR3JvdXApLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgbWV0cmljcy5mb3JFYWNoKChtZXRyaWMsIGopID0+XG4gICAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogYCR7a2V5fS0ke21ldHJpY31gLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtrZXl9IFske21ldHJpY3NPYmpbbWV0cmljXS5sYWJlbH1dYCxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzW3NlbGVjdGVkLmZpbmRJbmRleChzID0+IHMgPT09IGtleSldLFxuICAgICAgICAgICAgICAgIGluZGV4OiBqLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRpbUdyb3VwW2tleV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFkYXRhT2JqW2l0ZW1beERhdGFdXSkge1xuICAgICAgICAgICAgICAgIGRhdGFPYmpbaXRlbVt4RGF0YV1dID0ge307XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtZXRyaWNzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgbWV0cmljID0+XG4gICAgICAgICAgICAgICAgICAoZGF0YU9ialtpdGVtW3hEYXRhXV1bYCR7a2V5fS0ke21ldHJpY31gXSA9IGl0ZW1bbWV0cmljXSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhT2JqKS5tYXAoa2V5ID0+IGRhdGFPYmpba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e2RhdGF9PlxuICAgICAgICAgIHtsaW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgIG5hbWU9e2xpbmUubGFiZWx9XG4gICAgICAgICAgICAgIGRhdGFLZXk9e2xpbmUua2V5fVxuICAgICAgICAgICAgICBrZXk9e2xpbmUua2V5fVxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9e3Rpbnljb2xvcihsaW5lLmNvbG9yIHx8IHRoZW1lLmNvbG9yKVxuICAgICAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgICAgIC5kYXJrZW4oMTAgKiAobGluZS5pbmRleCA9PT0gdW5kZWZpbmVkID8gaSA6IGxpbmUuaW5kZXgpKVxuICAgICAgICAgICAgICAgIC50b1JnYlN0cmluZygpfVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2NjY1wiIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hEYXRhfSB0aWNrRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9IC8+XG4gICAgICAgICAgPFlBeGlzIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiBtZXRyaWNzT2JqW3lEYXRhXS5yZW5kZXJGbih2YWwpfSAvPlxuICAgICAgICAgIHtmdWxsU2l6ZSAmJiAoXG4gICAgICAgICAgICA8QnJ1c2hcbiAgICAgICAgICAgICAgZGF0YUtleT17eERhdGF9XG4gICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgIHN0cm9rZT17Y29sb3JzWzBdfVxuICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExlZ2VuZCBhbGlnbj1cImNlbnRlclwiIC8+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGxhYmVsRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9XG4gICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWwsIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbGFiZWwuc2VhcmNoKC9cXFsvKTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kID0gbGFiZWwuc2VhcmNoKC9cXF0vKTtcbiAgICAgICAgICAgICAgaWYgKHN0YXJ0ID49IDAgJiYgZW5kID49IDApIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKHN0YXJ0ICsgMSwgZW5kKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IG1ldHJpY3NBcnIgPSBtZXRyaWNzLm1hcCh4ID0+IG1ldHJpY3NPYmpbeF0pO1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gbWV0cmljc0Fyci5maW5kKG1ldHJpYyA9PiBtZXRyaWMubGFiZWwgPT09IGxhYmVsKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5yZW5kZXJGbih2YWwpKSB8fCB2YWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICk7XG4gIH0sXG4pO1xuTGluZUNoYXJ0Mi5jb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDI7XG4iXX0=
