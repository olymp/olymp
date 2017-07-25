import React from 'react';
import moment from 'moment';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Line from 'recharts/lib/cartesian/Line';
import LineChart from 'recharts/lib/chart/LineChart';

const colors = ['#8884d8', '#82ca9d'];

export default ({ onChange, metrics, dimensions, dataKey, items }) =>
  <ResponsiveContainer>
    <LineChart data={items}>
      {(metrics || [])
        .map((metric, i) =>
          <Line
            name={metric.label}
            dataKey={metric.output}
            key={metric.output}
            stroke={colors[i] || colors[0]}
            onClick={item => onChange(item[dataKey])}
          />
        )}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis
        dataKey={dataKey}
        tickFormatter={v => moment(v).format('YYYY-MM')}
      />
      <YAxis />
      <Legend align="center" />
      <Tooltip labelFormatter={v => moment(v).format('YYYY-MM')} />
    </LineChart>
  </ResponsiveContainer>;
