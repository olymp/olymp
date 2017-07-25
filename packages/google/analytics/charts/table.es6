import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';

export default class TableChart extends Component {
  state = { sortedInfo: {} };

  render() {
    const { onChange, metrics, dimensions, dataKey, items } = this.props;
    const { sortedInfo } = this.state;

    const columns = [];
    Object.keys((items && !items.lenght && items[0]) || {}).forEach(key => {
      if (key !== '__typename' && key !== 'id') {
        let title =
          ([...metrics, ...dimensions].find(item => item.key === key) || {})
            .label || key;
        if (key === 'date') title = 'Datum';

        columns.push({
          title,
          dataIndex: key,
          // fixed: dataKey === key && 'left',
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
      <Table
        pagination={false}
        size="small"
        rowKey="id"
        columns={columns}
        dataSource={items}
        onRowClick={item => onChange(item[dataKey])}
        onChange={(pagination, filters, sorter) =>
          this.setState({ sortedInfo: sorter })}
      />
    );
  }
}
