import React, { Component } from 'react';
import { graphql, gql } from 'olymp-utils';
import { BarChart } from '../../charts';
import Bottom from '../bottom';

@graphql(
  gql`
    query analyticsQuery {
      item: analyticsQuery(
        start: "180daysAgo"
        end: "today"
        metrics: [PAGEVIEWS, SESSIONS]
        dimensions: [PAGE_PATH]
      ) {
        id
        pageviews
        sessions
        rows {
          id
          pagePath
          pageviews
          sessions
          date
        }
      }
    }
  `,
  {
    options: props => ({ variables: {} }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      pages: (data.item || {}).rows || [],
    }),
  }
)
export default class PageViewsBars extends Component {
  render() {
    const { changeChart, changeRange, pages, chart, dateRange } = this.props;

    return (
      <Bottom
        dataKey="pagePath"
        items={pages}
        title={chart}
        metrics={[
          {
            name: 'Seitenaufrufe',
            key: 'pageviews',
          },
          {
            name: 'Sitzungen',
            key: 'sessions',
          },
        ]}
        dateRange={dateRange}
        changeChart={changeChart}
        changeRange={changeRange}
        onChange={changeChart}
      >
        <BarChart />
      </Bottom>
    );
  }
}
