import React, { Component, Children, cloneElement } from 'react';
import { graphql, gql } from 'olymp-utils';
import { Input, Radio, Button } from 'antd';
import { DateRangeEditor } from 'olymp-ui';
import { FlexContainer, Toolbar, Pagination } from '../components';
import { TableChart } from '../charts';
import { fields, rowFields, getItemFields } from './top';

@graphql(
  gql`
    query analyticsQuery(
      $metrics: [ANALYTICS_METRICS]
      $dimensions: [ANALYTICS_DIMENSIONS]
      $start: String!
      $end: String!
    ) {
      item: analyticsQuery(
        start: $start
        end: $end
        metrics: $metrics
        dimensions: $dimensions
      ) {
        ${fields}
        rows {
          ${rowFields}
        }
      }
    }
  `,
  {
    options: ({ metrics, dimensions, start, end }) => {
      const variables = {
        metrics: metrics.map(x => x.input),
        start,
        end,
      };

      if (dimensions && dimensions.length) {
        variables.dimensions = dimensions.map(x => x.input);
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
export default class BottomView extends Component {
  state = {
    page: 1,
    search: undefined,
    table: false,
  };

  render() {
    const {
      children,
      dataKey,
      title,
      metrics,
      dimensions,
      changeChart,
      changeRange,
      dateRange,
      onChange,
    } = this.props;
    let { items } = this.props;
    const { page, search, table } = this.state;
    const pageSize = table ? items.length : 5;
    const onSearch = search => this.setState({ search });
    const chart = table ? <TableChart /> : children;

    if (search) {
      items = items.filter(item => item[dataKey].includes(search));
    }
    items = items.slice((page - 1) * pageSize, page * pageSize);

    return (
      <FlexContainer>
        <Toolbar>
          <Radio.Group
            defaultValue="chart"
            onChange={e => this.setState({ table: e.target.value === 'table' })}
          >
            <Radio.Button value="chart">Chart</Radio.Button>
            <Radio.Button value="table">Tabelle</Radio.Button>
          </Radio.Group>
          <Button
            type="primary"
            icon={title && 'close'}
            onClick={() => changeChart(undefined)}
          >
            {title ? `Nur '${title}'` : 'Alle Daten'}
          </Button>
          <Input.Search
            placeholder="Suche"
            onChange={e => onSearch(e.target.value)}
            onSearch={onSearch}
          />
        </Toolbar>

        {Children.map(chart, child =>
          cloneElement(child, { items, dataKey, metrics, dimensions, onChange })
        )}

        <Toolbar>
          <Pagination
            current={table ? 1 : page}
            defaultPageSize={pageSize}
            pageSize={pageSize}
            total={this.props.items.length}
            onChange={page => this.setState({ page })}
          />
          <DateRangeEditor
            format="DD.MM.YYYY"
            onChange={changeRange}
            value={dateRange}
          />
        </Toolbar>
      </FlexContainer>
    );
  }
}
