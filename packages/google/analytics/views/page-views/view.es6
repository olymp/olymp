import React, { Component } from 'react';
import moment from 'moment';
import { Container } from '../../components';
import Bars from './bars';
import Chart from './chart';

export default class PageViewsView extends Component {
  state = {
    chart: undefined,
    dateRange: [moment().subtract(180, 'days').valueOf(), moment().valueOf()],
  };
  render() {
    const { chart, dateRange } = this.state;
    const start = moment(dateRange[0]).format('YYYY-MM-DD');
    const end = moment(dateRange[1]).format('YYYY-MM-DD');

    return (
      <Container>
        <Chart chart={chart} start={start} end={end} />
        <Bars
          chart={chart}
          start={start}
          end={end}
          dateRange={dateRange}
          changeChart={chart => this.setState({ chart })}
          changeRange={dateRange => this.setState({ dateRange })}
        />
      </Container>
    );
  }
}
