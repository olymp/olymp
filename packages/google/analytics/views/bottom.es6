import React, { Component, Children, cloneElement } from 'react';
import { Input, Radio, Button } from 'antd';
import { DateRangeEditor } from 'olymp-ui';
import moment from 'moment';
import { FlexContainer, Toolbar, Pagination } from '../components';
import { TableChart } from '../charts';

export default class BottomView extends Component {
  state = {
    page: 1,
    search: undefined,
    table: false,
    sortedInfo: {},
  };

  render() {
    const {
      children,
      dataKey,
      title,
      metrics,
      changeChart,
      changeRange,
      dateRange,
      onChange,
    } = this.props;
    let { items } = this.props;
    const { page, search, table, sortedInfo } = this.state;
    const pageSize = table ? items.length : 5;
    const onSearch = search => this.setState({ search });

    if (search) {
      items = items.filter(item => item[dataKey].includes(search));
    }
    items = items.slice((page - 1) * pageSize, page * pageSize);

    const columns = [];
    Object.keys((items && !items.lenght && items[0]) || {}).forEach(key => {
      if (key !== '__typename' && key !== 'id') {
        const metric = metrics.find(metric => metric.key === key);

        columns.push({
          title: (metric && metric.name) || key,
          dataIndex: key,
          fixed: dataKey === key && 'left',
          sorter: (a, b) => {
            switch (typeof a[key]) {
              case 'number':
                return a[key] - b[key];

              default:
                if (a[key].toUpperCase() < b[key].toUpperCase()) {
                  return -1;
                }
                if (a[key].toUpperCase() > b[key].toUpperCase()) {
                  return 1;
                }
                return 0;
            }
          },
          sortOrder: sortedInfo.columnKey === key && sortedInfo.order,
          render: data =>
            key !== 'date' ? data : moment(data).format('YYYY-MM'),
        });
      }
    });

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

        {table
          ? <TableChart
              items={items}
              columns={columns}
              onRowClick={item => onChange(item[dataKey])}
              onSort={sorter =>
                this.setState({
                  sortedInfo: sorter,
                })}
            />
          : Children.map(children, child =>
              cloneElement(child, { items, dataKey, metrics, onChange })
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
