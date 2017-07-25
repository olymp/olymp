import React, { Component } from 'react';
import moment from 'moment';
import { Container } from '../components';
import { LineChart, BarChart } from '../charts';
import Top from './top';
import Bottom from './bottom';

export default class PageViewsView extends Component {
  state = {
    chart: undefined,
    dateRange: [moment().subtract(180, 'days').valueOf(), moment().valueOf()],
  };
  render() {
    const { chart, dateRange } = this.state;
    const start = moment(dateRange[0]).format('YYYY-MM-DD');
    const end = moment(dateRange[1]).format('YYYY-MM-DD');
    const metrics = [
      {
        name: 'TIME_ON_PAGE',
        output: 'timeOnPage',
        input: 'TIME_ON_PAGE',
      },
      {
        name: 'AVG_TIME_ON_PAGE',
        output: 'avgTimeOnPage',
        input: 'AVG_TIME_ON_PAGE',
      },
    ];
    const dimensions = [
      {
        name: 'Seite',
        output: 'pagePath',
        input: 'PAGE_PATH',
      },
    ];
    const filters = [
      { dimension: 'PAGE_PATH', operator: 'EQ', expression: chart },
    ];

    return (
      <Container>
        <Top
          dataKey="date"
          start={start}
          end={end}
          metrics={metrics}
          dimensions={chart ? dimensions : []}
          filters={chart ? filters : []}
        >
          <LineChart />
        </Top>

        <Bottom
          dataKey="pagePath"
          start={start}
          end={end}
          metrics={metrics}
          dimensions={dimensions}
          title={chart}
          dateRange={dateRange}
          changeChart={chart => this.setState({ chart })}
          changeRange={dateRange => this.setState({ dateRange })}
          onChange={chart => this.setState({ chart })}
        >
          <BarChart />
        </Bottom>
      </Container>
    );
  }
}
