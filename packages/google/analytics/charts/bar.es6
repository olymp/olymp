import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Tooltip from 'recharts/lib/component/Tooltip';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Bar from 'recharts/lib/cartesian/Bar';
import BarChart from 'recharts/lib/chart/BarChart';

const colors = ['#8884d8', '#82ca9d'];

export default ({ onChange, metrics, dimensions, dataKey, items }) =>
  <ResponsiveContainer>
    <BarChart layout="vertical" data={items}>
      <Tooltip cursor={false} />
      {(metrics || [])
        .map((metric, i) =>
          <Bar
            name={metric.label}
            dataKey={metric.output}
            key={metric.output}
            fill={colors[i] || colors[0]}
            label
            onClick={item => onChange(item[dataKey])}
          />
        )}
      <XAxis type="number" axisLine={false} tickLine={false} hide />
      <YAxis
        type="category"
        dataKey={dataKey}
        orientation="right"
        axisLine={false}
        tickLine={false}
        width={120}
      />
    </BarChart>
  </ResponsiveContainer>;
