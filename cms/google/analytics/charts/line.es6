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
import { groupBy } from 'lodash';
import { metricsObj, dimensionsObj, colors } from '../../definitions';

const LineChart2 = withTheme(
  ({ metrics, dimensions, items, selected, fullSize, theme }) => {
    const xData = dimensions[0];
    const yData = metrics[0];
    let data = items;
    let lines = metrics.map(metric => ({
      key: metric,
      label: metricsObj[metric].label,
    }));
    const formatter = val => dimensionsObj[xData].renderFn(val);

    if (dimensions.length > 1) {
      const dataObj = {};
      lines = [];

      const filteredDimensions = [...dimensions];
      const index = filteredDimensions.findIndex(t => t === xData);
      if (index >= 0) {
        filteredDimensions.splice(index, 1);
      }

      filteredDimensions
        .map(dimension => groupBy(items, dimension))
        .forEach(dimGroup =>
          Object.keys(dimGroup).forEach((key, i) => {
            metrics.forEach((metric, j) =>
              lines.push({
                key: `${key}-${metric}`,
                label: `${key} [${metricsObj[metric].label}]`,
                color: colors[selected.findIndex(s => s === key)],
                index: j,
              }),
            );

            dimGroup[key].forEach(item => {
              if (!dataObj[item[xData]]) {
                dataObj[item[xData]] = {};
              }

              metrics.forEach(
                metric =>
                  (dataObj[item[xData]][`${key}-${metric}`] = item[metric]),
              );
            });
          }),
        );
      data = Object.keys(dataObj).map(key => dataObj[key]);
    }

    return (
      <ResponsiveContainer>
        <LineChart data={data}>
          {lines.map((line, i) => (
            <Line
              name={line.label}
              dataKey={line.key}
              key={line.key}
              type="monotone"
              stroke={tinycolor(line.color || theme.color)
                .lighten(10)
                .darken(10 * (line.index === undefined ? i : line.index))
                .toRgbString()}
              strokeWidth={3}
            />
          ))}
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey={xData} tickFormatter={formatter} />
          <YAxis tickFormatter={val => metricsObj[yData].renderFn(val)} />
          {fullSize && (
            <Brush
              dataKey={xData}
              height={30}
              stroke={colors[0]}
              tickFormatter={formatter}
            />
          )}
          <Legend align="center" />
          <Tooltip
            labelFormatter={formatter}
            formatter={(val, label) => {
              const start = label.search(/\[/);
              const end = label.search(/\]/);
              if (start >= 0 && end >= 0) {
                label = label.slice(start + 1, end);
              }

              const metricsArr = metrics.map(x => metricsObj[x]);
              const item = metricsArr.find(metric => metric.label === label);

              return (item && item.renderFn(val)) || val;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
);
LineChart2.contextTypes = {
  theme: PropTypes.object,
};
export default LineChart2;
