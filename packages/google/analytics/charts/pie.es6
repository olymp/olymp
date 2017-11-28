import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { withTheme } from 'react-fela';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Cell from 'recharts/lib/component/Cell';
import Pie from 'recharts/lib/polar/Pie';
import PieChart from 'recharts/lib/chart/PieChart';
import { metricsObj, dimensionsObj, colors } from '../../definitions';

const PieChart2 = withTheme(({ metrics, dimensions, items, selected }) => {
  const data = items.slice(0, 5);
  const xData = metrics[0];
  const yData = dimensions[0];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} dataKey={xData} nameKey={yData} valueKey={xData} label>
          {data.map((entry, i) => {
            const index = selected.findIndex(
              selection => selection === entry[yData],
            );

            return (
              <Cell
                fill={tinycolor(index >= 0 ? colors[index] : theme.color)
                  .lighten(12)
                  .darken(8 * (index >= 0 ? 0 : i))
                  .toRgbString()}
                key={entry[xData]}
              />
            );
          })}
        </Pie>
        <Tooltip
          labelFormatter={val => dimensionsObj[yData].renderFn(val)}
          formatter={val => metricsObj[xData].renderFn(val)}
        />
        <Legend align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
});
PieChart2.contextTypes = {
  theme: PropTypes.object,
};
export default PieChart2;
