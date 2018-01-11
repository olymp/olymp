import React, { Component } from 'react';
import { Pagination } from 'antd';
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

const Label = createComponent(
  ({ theme }) => ({
    fill: theme.dark,
  }),
  ({ className, value, x, y, width, height, cursor, item }) => (
    <text
      x={x + width / 2}
      y={y + height / 2}
      width={width}
      height={height}
      cursor={cursor}
      fill="black"
      className={cn('recharts-text recharts-label', className)}
      textAnchor="middle"
    >
      <tspan x={x + width / 2} dy="0.355em">
        {item.renderFn(value)}
      </tspan>
    </text>
  ),
  p => Object.keys(p),
);

const Balken = createComponent(
  ({ theme, index, count, clickable, dataKey, selected, ...rest }) => {
    const i = selected.findIndex(item => item === rest[dataKey]);
    const color = (i >= 0 && colors[i]) || theme.color;

    return {
      fill: tinycolor(color)
        .lighten(10)
        .darken(10 * count)
        .spin(5 * (i === -1 && index))
        .toRgbString(),
      cursor: clickable && 'pointer',
    };
  },
  ({ className, x, y, width, height, cursor }) => (
    <path
      width={width}
      height={height}
      x={x}
      y={y}
      cursor={cursor}
      className={cn('recharts-rectangle', className)}
      d={`M ${x},${y} h ${width} v ${height} h -${width} Z`}
    />
  ),
  p => Object.keys(p),
);

export default class BarChart2 extends Component {
  state = { page: 1 };

  render() {
    const { onSelect, metrics, dimensions, selected, fullSize, vertical } = this.props;
    const { page } = this.state;
    const pageSize = fullSize ? 10 : 5;
    const items = this.props.items.slice((page - 1) * pageSize, page * pageSize);

    const xData = dimensions[0];
    const xProps = {
      type: 'category',
      dataKey: xData,
      axisLine: false,
      tickLine: false,
      width: 120,
      tickFormatter: val => dimensionsObj[xData].renderFn(val),
    };
    const yProps = {
      type: 'number',
      axisLine: false,
      tickLine: false,
      hide: true,
    };

    return (
      <Container>
        <ResponsiveContainer>
          <BarChart layout={vertical && 'vertical'} data={items}>
            <Tooltip
              labelFormatter={val => dimensionsObj[xData].renderFn(val)}
              formatter={(val, label) => {
                const metricsArr = metrics.map(x => metricsObj[x]);
                const render = metricsArr.find(metric => metric.label === label).renderFn;

                return render(val);
              }}
            />
            {(metrics || []).map((metric, i) => (
              <Bar
                name={metricsObj[metric].label}
                dataKey={metric}
                key={metric}
                onClick={onSelect && (item => onSelect(item[xData]))}
                label={<Label item={metricsObj[metric]} />}
                shape={
                  <Balken clickable={!!onSelect} dataKey={xData} selected={selected} count={i} />
                }
              />
            ))}
            <XAxis {...(vertical ? yProps : xProps)} />
            <YAxis {...(vertical ? xProps : yProps)} orientation={vertical && 'right'} />
          </BarChart>
        </ResponsiveContainer>
        <Pagination
          current={page}
          defaultPageSize={pageSize}
          pageSize={pageSize}
          total={this.props.items.length}
          onChange={page => this.setState({ page })}
        />
      </Container>
    );
  }
}
