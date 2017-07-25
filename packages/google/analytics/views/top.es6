import React, { Component, Children, cloneElement } from 'react';
import { graphql, gql } from 'olymp-utils';
import { FlexContainer, Loader } from '../components';

export const fields = [
  'id',
  'pageviews',
  'sessions',
  'timeOnPage',
  'avgTimeOnPage',
];
export const rowFields = [...fields, 'date', 'pagePath'];
export const getItemFields = (data, metrics, dimensions) =>
  ((data.item || {}).rows || []).map(item => {
    const obj = {
      id: item.id,
      date: item.date,
    };

    [...metrics, ...dimensions].forEach(x => (obj[x.output] = item[x.output]));

    return obj;
  });

@graphql(
  gql`
    query analyticsQuery(
      $metrics: [ANALYTICS_METRICS]
      $dimensions: [ANALYTICS_DIMENSIONS]
      $filters: [AnalyticsFilter]
      $start: String!
      $end: String!
    ) {
      item: analyticsQuery(
        start: $start
        end: $end
        metrics: $metrics
        dimensions: $dimensions
        filters: $filters
        time: MONTH
        sort: DATE
      ) {
        ${fields}
        rows {
          ${rowFields}
        }
      }
    }
  `,
  {
    options: ({ metrics, dimensions, filters, start, end }) => {
      const variables = {
        metrics: metrics.map(x => x.input),
        start,
        end,
      };

      if (dimensions && dimensions.length) {
        variables.dimensions = dimensions.map(x => x.input);
      }

      if (filters && filters.length) {
        variables.filters = filters;
      }

      return {
        variables,
      };
    },
    props: ({ ownProps, data }) => {
      const items = getItemFields(data, ownProps.metrics, ownProps.dimensions);

      return {
        ...ownProps,
        loading: data.loading,
        items,
      };
    },
  }
)
export default class TopView extends Component {
  render() {
    const {
      children,
      items,
      loading,
      metrics,
      dimensions,
      dataKey,
    } = this.props;

    return (
      <FlexContainer>
        <Loader loading={loading} />
        {Children.map(children, child =>
          cloneElement(child, { items, metrics, dimensions, dataKey })
        )}
      </FlexContainer>
    );
  }
}
