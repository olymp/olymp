import React, { Component } from 'react';
import format from 'date-fns/format'
import Chart from './chart';

export default class ChartWrapper extends Component {
  state = {
    dimensions: undefined,
    chart: undefined,
    sorts: undefined,
    filters: undefined,
    open: false,
  };

  componentWillUpdate = (nextProps, nextState) => {
    const items = [
      ...(nextState.dimensions || nextProps.dimensions),
      ...nextProps.metrics,
    ];
    const sorts = nextState.sorts || nextProps.sorts;

    if (
      sorts.find(sort => {
        const endAsc = sort.search(/_ASC/);
        const endDesc = sort.search(/_DESC/);

        return (
          (endAsc !== -1 &&
            !items.find(item => item === sort.slice(0, endAsc))) ||
          (endDesc !== -1 &&
            !items.find(item => item === sort.slice(0, endDesc)))
        );
      })
    ) {
      this.setState({ sorts: [] });
    }
  };

  render() {
    const { metrics = [], range = [] } = this.props;
    const { open } = this.state;

    const dimensions = this.state.dimensions || this.props.dimensions || [];
    const changeDimensions =
      this.props.changeDimensions ||
      (dimensions => this.setState({ dimensions }));
    const chart = this.state.chart || this.props.chart || 'line';
    const sorts = this.state.sorts || this.props.sorts || [];
    const filters = this.state.filters || this.props.filters || [];
    const start = format( new Date(range[0]), 'YYYY-MM-DD');
    const end = format(new Date(range[1]), 'YYYY-MM-DD');

    return (
      <Chart
        {...this.props}
        start={start}
        end={end}
        metrics={metrics}
        dimensions={dimensions}
        changeDimensions={dimensions =>
          dimensions && dimensions.length && changeDimensions(dimensions)}
        chart={chart}
        changeChart={chart => this.setState({ chart })}
        sorts={sorts}
        changeSorts={sorts => this.setState({ sorts })}
        filters={filters}
        changeFilters={filters => this.setState({ filters })}
        open={open}
        setOpen={() => this.setState({ open: !open })}
        range={range}
      />
    );
  }
}
