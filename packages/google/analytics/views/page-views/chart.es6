import React, { Component } from 'react';
import { graphql, gql } from 'olymp-utils';
import { LineChart } from '../../charts';

@graphql(
  gql`
    query analyticsQuery(
      $dim: [ANALYTICS_DIMENSIONS]
      $fil: [AnalyticsFilter]
      $start: String!
      $end: String!
    ) {
      item: analyticsQuery(
        start: $start
        end: $end
        time: MONTH
        sort: DATE
        metrics: [PAGEVIEWS, SESSIONS]
        dimensions: $dim
        filters: $fil
      ) {
        id
        pageviews
        sessions
        rows {
          id
          pageviews
          sessions
          date
        }
      }
    }
  `,
  {
    options: ({ chart, start, end }) => {
      if (chart) {
        return {
          variables: {
            dim: ['PAGE_PATH'],
            fil: [
              { dimension: 'PAGE_PATH', operator: 'EQ', expression: chart },
            ],
            start,
            end,
          },
        };
      }

      return {
        variables: {
          start,
          end,
        },
      };
    },
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      item: data.item || {},
    }),
  }
)
export default class PageViewsChart extends Component {
  render() {
    const { item, data } = this.props;

    return (
      <LineChart
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
        dataKey="date"
        data={item.rows}
        loading={data.loading}
      />
    );
  }
}
