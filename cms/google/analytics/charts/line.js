import _groupBy from 'lodash/groupBy';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { withTheme } from 'react-fela';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Brush from 'recharts/lib/cartesian/Brush';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Line from 'recharts/lib/cartesian/Line';
import LineChart from 'recharts/lib/chart/LineChart';

import { metricsObj, dimensionsObj, colors } from '../../definitions';

var _ref2 = React.createElement(CartesianGrid, { stroke: '#ccc', strokeDasharray: '3 3' });

var _ref3 = React.createElement(Legend, { align: 'center' });

var LineChart2 = withTheme(function (_ref) {
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
      label: metricsObj[metric].label
    };
  });
  var formatter = function formatter(val) {
    return dimensionsObj[xData].renderFn(val);
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
      return _groupBy(items, dimension);
    }).forEach(function (dimGroup) {
      return Object.keys(dimGroup).forEach(function (key, i) {
        metrics.forEach(function (metric, j) {
          return lines.push({
            key: key + '-' + metric,
            label: key + ' [' + metricsObj[metric].label + ']',
            color: colors[selected.findIndex(function (s) {
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

  return React.createElement(
    ResponsiveContainer,
    null,
    React.createElement(
      LineChart,
      { data: data },
      lines.map(function (line, i) {
        return React.createElement(Line, {
          name: line.label,
          dataKey: line.key,
          key: line.key,
          type: 'monotone',
          stroke: tinycolor(line.color || theme.color).lighten(10).darken(10 * (line.index === undefined ? i : line.index)).toRgbString(),
          strokeWidth: 3
        });
      }),
      _ref2,
      React.createElement(XAxis, { dataKey: xData, tickFormatter: formatter }),
      React.createElement(YAxis, { tickFormatter: function tickFormatter(val) {
          return metricsObj[yData].renderFn(val);
        } }),
      fullSize && React.createElement(Brush, {
        dataKey: xData,
        height: 30,
        stroke: colors[0],
        tickFormatter: formatter
      }),
      _ref3,
      React.createElement(Tooltip, {
        labelFormatter: formatter,
        formatter: function formatter(val, label) {
          var start = label.search(/\[/);
          var end = label.search(/\]/);
          if (start >= 0 && end >= 0) {
            label = label.slice(start + 1, end);
          }

          var metricsArr = metrics.map(function (x) {
            return metricsObj[x];
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
  theme: PropTypes.object
};
export default LineChart2;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL2xpbmUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwidGlueWNvbG9yIiwid2l0aFRoZW1lIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIlRvb2x0aXAiLCJMZWdlbmQiLCJYQXhpcyIsIllBeGlzIiwiQnJ1c2giLCJDYXJ0ZXNpYW5HcmlkIiwiTGluZSIsIkxpbmVDaGFydCIsIm1ldHJpY3NPYmoiLCJkaW1lbnNpb25zT2JqIiwiY29sb3JzIiwiTGluZUNoYXJ0MiIsIm1ldHJpY3MiLCJkaW1lbnNpb25zIiwiaXRlbXMiLCJzZWxlY3RlZCIsImZ1bGxTaXplIiwidGhlbWUiLCJ4RGF0YSIsInlEYXRhIiwiZGF0YSIsImxpbmVzIiwibWFwIiwia2V5IiwibWV0cmljIiwibGFiZWwiLCJmb3JtYXR0ZXIiLCJyZW5kZXJGbiIsInZhbCIsImxlbmd0aCIsImRhdGFPYmoiLCJmaWx0ZXJlZERpbWVuc2lvbnMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJzcGxpY2UiLCJkaW1lbnNpb24iLCJmb3JFYWNoIiwiT2JqZWN0Iiwia2V5cyIsImRpbUdyb3VwIiwiaSIsImoiLCJwdXNoIiwiY29sb3IiLCJzIiwiaXRlbSIsImxpbmUiLCJsaWdodGVuIiwiZGFya2VuIiwidW5kZWZpbmVkIiwidG9SZ2JTdHJpbmciLCJzdGFydCIsInNlYXJjaCIsImVuZCIsInNsaWNlIiwibWV0cmljc0FyciIsIngiLCJmaW5kIiwiY29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLDRDQUFoQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsZ0NBQXBCO0FB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QUMsT0FBRDtBQUNFLHdCQUFnQkEsU0FEbEI7QUFFRSxtQkFBVyxtQkFBQ0UsR0FBRCxFQUFNSCxLQUFOLEVBQWdCO0FBQ3pCLGNBQU0yQixRQUFRM0IsTUFBTTRCLE1BQU4sQ0FBYSxJQUFiLENBQWQ7QUFDQSxjQUFNQyxNQUFNN0IsTUFBTTRCLE1BQU4sQ0FBYSxJQUFiLENBQVo7QUFDQSxjQUFJRCxTQUFTLENBQVQsSUFBY0UsT0FBTyxDQUF6QixFQUE0QjtBQUMxQjdCLG9CQUFRQSxNQUFNOEIsS0FBTixDQUFZSCxRQUFRLENBQXBCLEVBQXVCRSxHQUF2QixDQUFSO0FBQ0Q7O0FBRUQsY0FBTUUsYUFBYTVDLFFBQVFVLEdBQVIsQ0FBWTtBQUFBLG1CQUFLZCxXQUFXaUQsQ0FBWCxDQUFMO0FBQUEsV0FBWixDQUFuQjtBQUNBLGNBQU1YLE9BQU9VLFdBQVdFLElBQVgsQ0FBZ0I7QUFBQSxtQkFBVWxDLE9BQU9DLEtBQVAsS0FBaUJBLEtBQTNCO0FBQUEsV0FBaEIsQ0FBYjs7QUFFQSxpQkFBUXFCLFFBQVFBLEtBQUtuQixRQUFMLENBQWNDLEdBQWQsQ0FBVCxJQUFnQ0EsR0FBdkM7QUFDRDtBQWJIO0FBMUJGO0FBREYsR0FERjtBQThDRCxDQS9GZ0IsQ0FBbkI7QUFpR0FqQixXQUFXZ0QsWUFBWCxHQUEwQjtBQUN4QjFDLFNBQU9yQixVQUFVZ0U7QUFETyxDQUExQjtBQUdBLGVBQWVqRCxVQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL2xpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMic7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBSZXNwb25zaXZlQ29udGFpbmVyIGZyb20gJ3JlY2hhcnRzL2xpYi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L1Rvb2x0aXAnO1xuaW1wb3J0IExlZ2VuZCBmcm9tICdyZWNoYXJ0cy9saWIvY29tcG9uZW50L0xlZ2VuZCc7XG5pbXBvcnQgWEF4aXMgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9YQXhpcyc7XG5pbXBvcnQgWUF4aXMgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9ZQXhpcyc7XG5pbXBvcnQgQnJ1c2ggZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9CcnVzaCc7XG5pbXBvcnQgQ2FydGVzaWFuR3JpZCBmcm9tICdyZWNoYXJ0cy9saWIvY2FydGVzaWFuL0NhcnRlc2lhbkdyaWQnO1xuaW1wb3J0IExpbmUgZnJvbSAncmVjaGFydHMvbGliL2NhcnRlc2lhbi9MaW5lJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAncmVjaGFydHMvbGliL2NoYXJ0L0xpbmVDaGFydCc7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG1ldHJpY3NPYmosIGRpbWVuc2lvbnNPYmosIGNvbG9ycyB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgTGluZUNoYXJ0MiA9IHdpdGhUaGVtZShcbiAgKHsgbWV0cmljcywgZGltZW5zaW9ucywgaXRlbXMsIHNlbGVjdGVkLCBmdWxsU2l6ZSwgdGhlbWUgfSkgPT4ge1xuICAgIGNvbnN0IHhEYXRhID0gZGltZW5zaW9uc1swXTtcbiAgICBjb25zdCB5RGF0YSA9IG1ldHJpY3NbMF07XG4gICAgbGV0IGRhdGEgPSBpdGVtcztcbiAgICBsZXQgbGluZXMgPSBtZXRyaWNzLm1hcChtZXRyaWMgPT4gKHtcbiAgICAgIGtleTogbWV0cmljLFxuICAgICAgbGFiZWw6IG1ldHJpY3NPYmpbbWV0cmljXS5sYWJlbCxcbiAgICB9KSk7XG4gICAgY29uc3QgZm9ybWF0dGVyID0gdmFsID0+IGRpbWVuc2lvbnNPYmpbeERhdGFdLnJlbmRlckZuKHZhbCk7XG5cbiAgICBpZiAoZGltZW5zaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgICBsaW5lcyA9IFtdO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZERpbWVuc2lvbnMgPSBbLi4uZGltZW5zaW9uc107XG4gICAgICBjb25zdCBpbmRleCA9IGZpbHRlcmVkRGltZW5zaW9ucy5maW5kSW5kZXgodCA9PiB0ID09PSB4RGF0YSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXJlZERpbWVuc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWREaW1lbnNpb25zXG4gICAgICAgIC5tYXAoZGltZW5zaW9uID0+IGdyb3VwQnkoaXRlbXMsIGRpbWVuc2lvbikpXG4gICAgICAgIC5mb3JFYWNoKGRpbUdyb3VwID0+XG4gICAgICAgICAgT2JqZWN0LmtleXMoZGltR3JvdXApLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgbWV0cmljcy5mb3JFYWNoKChtZXRyaWMsIGopID0+XG4gICAgICAgICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogYCR7a2V5fS0ke21ldHJpY31gLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtrZXl9IFske21ldHJpY3NPYmpbbWV0cmljXS5sYWJlbH1dYCxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzW3NlbGVjdGVkLmZpbmRJbmRleChzID0+IHMgPT09IGtleSldLFxuICAgICAgICAgICAgICAgIGluZGV4OiBqLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRpbUdyb3VwW2tleV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFkYXRhT2JqW2l0ZW1beERhdGFdXSkge1xuICAgICAgICAgICAgICAgIGRhdGFPYmpbaXRlbVt4RGF0YV1dID0ge307XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtZXRyaWNzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgbWV0cmljID0+XG4gICAgICAgICAgICAgICAgICAoZGF0YU9ialtpdGVtW3hEYXRhXV1bYCR7a2V5fS0ke21ldHJpY31gXSA9IGl0ZW1bbWV0cmljXSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIGRhdGEgPSBPYmplY3Qua2V5cyhkYXRhT2JqKS5tYXAoa2V5ID0+IGRhdGFPYmpba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e2RhdGF9PlxuICAgICAgICAgIHtsaW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgIG5hbWU9e2xpbmUubGFiZWx9XG4gICAgICAgICAgICAgIGRhdGFLZXk9e2xpbmUua2V5fVxuICAgICAgICAgICAgICBrZXk9e2xpbmUua2V5fVxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9e3Rpbnljb2xvcihsaW5lLmNvbG9yIHx8IHRoZW1lLmNvbG9yKVxuICAgICAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgICAgIC5kYXJrZW4oMTAgKiAobGluZS5pbmRleCA9PT0gdW5kZWZpbmVkID8gaSA6IGxpbmUuaW5kZXgpKVxuICAgICAgICAgICAgICAgIC50b1JnYlN0cmluZygpfVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2NjY1wiIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XG4gICAgICAgICAgPFhBeGlzIGRhdGFLZXk9e3hEYXRhfSB0aWNrRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9IC8+XG4gICAgICAgICAgPFlBeGlzIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiBtZXRyaWNzT2JqW3lEYXRhXS5yZW5kZXJGbih2YWwpfSAvPlxuICAgICAgICAgIHtmdWxsU2l6ZSAmJiAoXG4gICAgICAgICAgICA8QnJ1c2hcbiAgICAgICAgICAgICAgZGF0YUtleT17eERhdGF9XG4gICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgIHN0cm9rZT17Y29sb3JzWzBdfVxuICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExlZ2VuZCBhbGlnbj1cImNlbnRlclwiIC8+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGxhYmVsRm9ybWF0dGVyPXtmb3JtYXR0ZXJ9XG4gICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWwsIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbGFiZWwuc2VhcmNoKC9cXFsvKTtcbiAgICAgICAgICAgICAgY29uc3QgZW5kID0gbGFiZWwuc2VhcmNoKC9cXF0vKTtcbiAgICAgICAgICAgICAgaWYgKHN0YXJ0ID49IDAgJiYgZW5kID49IDApIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnNsaWNlKHN0YXJ0ICsgMSwgZW5kKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IG1ldHJpY3NBcnIgPSBtZXRyaWNzLm1hcCh4ID0+IG1ldHJpY3NPYmpbeF0pO1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gbWV0cmljc0Fyci5maW5kKG1ldHJpYyA9PiBtZXRyaWMubGFiZWwgPT09IGxhYmVsKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5yZW5kZXJGbih2YWwpKSB8fCB2YWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICk7XG4gIH0sXG4pO1xuTGluZUNoYXJ0Mi5jb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDI7XG4iXX0=
