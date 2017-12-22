import React, { Component, Children, cloneElement } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Grid, Modal } from 'olymp-fela';
import { Button, Select } from 'antd';
import {
  FlexContainer,
  PaddingContainer,
  Container,
  Loader,
  Toolbar,
  MetricSelect,
} from '../components';
import { LineChart, BarChart, TableChart, PieChart } from '../charts';
import { metricsObj, dimensionsObj } from '../../definitions';

const charts = {
  bar: <BarChart />,
  barVertical: <BarChart vertical />,
  line: <LineChart />,
  pie: <PieChart />,
  table: <TableChart />,
};

const fields = ['id', ...Object.keys(metricsObj).map(x => metricsObj[x].output)];
const rowFields = [...fields, ...Object.keys(dimensionsObj).map(x => dimensionsObj[x].output)];
const getItemFields = (data, metrics, dimensions) =>
  ((data.item || {}).rows || []).map((item) => {
    const obj = {};

    metrics.forEach(metric => (obj[metric] = item[metricsObj[metric].output]));
    dimensions.forEach(dimension => (obj[dimension] = item[dimensionsObj[dimension].output]));

    return obj;
  });

@graphql(
  gql`
    query analyticsQuery(
      $start: String!
      $end: String!
      $metrics: [ANALYTICS_METRICS]
      $dimensions: [ANALYTICS_DIMENSIONS]
      $filters: [AnalyticsFilter]
      $sorts: [ANALYTICS_SORT]
    ) {
      item: analyticsQuery(
        start: $start
        end: $end
        metrics: $metrics
        dimensions: $dimensions
        filters: $filters
        sorts: $sorts
      ) {
        ${fields}
        rows {
          ${rowFields}
        }
      }
    }
  `,
  {
    options: ({ metrics, dimensions, selected, onSelect, start, end, sorts }) => {
      const variables = {
        metrics,
        start,
        end,
      };

      if (dimensions) {
        variables.dimensions = dimensions;
      }

      if (selected && selected.length && !onSelect) {
        variables.filters = selected.map(selection => ({
          dimension: dimensions[dimensions.length - 1],
          operator: 'EQ',
          expression: selection,
        }));
      }

      if (sorts) {
        variables.sorts = sorts;
      }

      return {
        variables,
      };
    },
    props: ({ ownProps, data }) => {
      const { metrics, dimensions } = ownProps;
      const { loading } = data;
      const items = getItemFields(data, metrics, dimensions);

      return {
        ...ownProps,
        loading,
        items,
      };
    },
  },
)
export default class Chart extends Component {
  render() {
    const {
      items,
      metrics,
      dimensions,
      changeDimensions,
      chart,
      changeChart,
      sorts,
      changeSorts,
      filters,
      changeFilters,
      selected,
      onSelect,
      open,
      setOpen,
      range,
      fullSize,
    } = this.props;
    const loading = this.props.loading || !metrics.length || !dimensions.length || !range.length;

    let filteredItems = items;
    if (filters.length) {
      filteredItems = [];

      filters.forEach((filter) => {
        items.forEach((item) => {
          if (item[dimensions[0]] === filter) {
            filteredItems.push(item);
          }
        });
      });
    }

    const childProps = {
      items: filteredItems,
      metrics,
      dimensions,
      selected,
      onSelect,
    };

    const header = (
      <Toolbar size={12}>
        <Grid.Item medium={8}>
          <MetricSelect value={dimensions} onChange={changeDimensions} isDimension />
        </Grid.Item>
        <Grid.Item medium={3}>
          <Select placeholder="Chart" value={chart} onChange={changeChart}>
            <Select.Option value="line">Linie</Select.Option>
            <Select.Option value="bar">Balken</Select.Option>
            <Select.Option value="barVertical">Balken vertikal</Select.Option>
            <Select.Option value="pie">Kuchen</Select.Option>
            <Select.Option value="table">Tabelle</Select.Option>
          </Select>
        </Grid.Item>
        <Grid.Item medium={1}>
          <Button icon={open ? 'shrink' : 'arrows-alt'} onClick={setOpen} disabled={loading} />
        </Grid.Item>
      </Toolbar>
    );
    const footer = (
      <Toolbar size={6} bottom>
        <Grid.Item medium={3}>
          <Select mode="multiple" placeholder="Sortierung" onChange={changeSorts} value={sorts}>
            {[...metrics, ...dimensions].map(x => (
              <Select.OptGroup label={{ ...metricsObj, ...dimensionsObj }[x].label} key={x}>
                <Select.Option
                  value={`${x}_ASC`}
                  key={`${x}_ASC`}
                  disabled={!!sorts.find(sort => sort === `${x}_DESC`)}
                >
                  {{ ...metricsObj, ...dimensionsObj }[x].label} [Aufsteigend]
                </Select.Option>
                <Select.Option
                  value={`${x}_DESC`}
                  key={`${x}_DESC`}
                  disabled={!!sorts.find(sort => sort === `${x}_ASC`)}
                >
                  {{ ...metricsObj, ...dimensionsObj }[x].label} [Absteigend]
                </Select.Option>
              </Select.OptGroup>
            ))}
          </Select>
        </Grid.Item>
        <Grid.Item medium={3}>
          <Select mode="multiple" placeholder="Filter" onChange={changeFilters} value={filters}>
            {items.map(item => (
              <Select.Option value={`${item[dimensions[0]]}`} key={item[dimensions[0]]}>
                {dimensionsObj[dimensions[0]].renderFn(item[dimensions[0]])}
              </Select.Option>
            ))}
          </Select>
        </Grid.Item>
      </Toolbar>
    );
    const content = isFullSize => (
      <Container>
        {loading && <Loader loading />}
        {!loading &&
          Children.map(charts[chart], child =>
            cloneElement(child, {
              ...childProps,
              fullSize: fullSize || isFullSize,
            }),
          )}
      </Container>
    );

    return (
      <FlexContainer>
        {header}
        {content()}
        {footer}

        <Modal
          open={open}
          header={<PaddingContainer>{header}</PaddingContainer>}
          footer={<PaddingContainer>{footer}</PaddingContainer>}
          onClose={setOpen}
          container
        >
          {content(true)}
        </Modal>
      </FlexContainer>
    );
  }
}
