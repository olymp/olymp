import React, { Component } from 'react';
import { withState, graphql, gql } from 'olymp-utils';
import { Container } from 'olymp-ui';
import { createComponent } from 'react-fela';
import moment from 'moment';
import ResponsiveContainer from 'recharts/es6/component/ResponsiveContainer';
import Tooltip from 'recharts/es6/component/Tooltip';
import Legend from 'recharts/es6/component/Legend';
import XAxis from 'recharts/es6/cartesian/XAxis';
import YAxis from 'recharts/es6/cartesian/YAxis';
import CartesianGrid from 'recharts/es6/cartesian/CartesianGrid';
import LineChart from 'recharts/es6/chart/LineChart';
import Line from 'recharts/es6/cartesian/Line';

const StyledLineChart = createComponent(
  () => ({
    '& svg': {},
  }),
  LineChart,
  p => Object.keys(p)
);

export const queryTemplate = graphql(
  gql`
    query analyticsPageviews {
      item: analyticsPageviews(
        start: "180daysAgo"
        end: "today"
        time: MONTH
        sort: DATE
      ) {
        id
        pageviews
        sessions
        rows {
          id
          pageTitle
          pageviews
          sessions
          date
        }
      }
    }
  `,
  {
    options: ({ id }) => ({ variables: {} }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      item: data.item || {},
    }),
  }
);

@withState('text')
@queryTemplate
class AnalyticsRoute extends Component {
  state = {
    search: undefined,
  };

  render() {
    const { item } = this.props;
    const { search } = this.state;
    const text = this.props.text || item.text;

    return (
      <Container height={350}>
        Pageviews: {item.pageviews}
        <br />
        Sessions: {item.sessions}
        <ResponsiveContainer>
          <StyledLineChart data={item.rows}>
            <Line name="Pageviews" dataKey="pageviews" stroke="#8884d8" />
            <Line name="Sessions" dataKey="sessions" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="date"
              tickFormatter={v => moment(v).format('YYYY-MM')}
            />
            <YAxis />
            <Legend align="center" />
            <Tooltip labelFormatter={v => moment(v).format('YYYY-MM')} />
          </StyledLineChart>
        </ResponsiveContainer>
      </Container>
    );
  }
}
export default AnalyticsRoute;
