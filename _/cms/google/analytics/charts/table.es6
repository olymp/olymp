import React, { Component } from 'react';
import { Table } from 'antd';
import { createComponent } from 'olymp-fela';
import { metricsObj, dimensionsObj } from '../../definitions';

const AntTable = createComponent(
  ({ rowSelection }) => ({
    '& .ant-table-row': {
      cursor: !!rowSelection && 'pointer',
    },
  }),
  p => <Table {...p} />,
  p => Object.keys(p),
);

export default class TableChart extends Component {
  state = { sortedInfo: {} };

  render() {
    const { onSelect, dimensions, items, selected } = this.props;
    const { sortedInfo } = this.state;
    const xData = dimensions[0];
    const columns = [];
    Object.keys((items && !items.lenght && items[0]) || {}).forEach(key => {
      const item = { ...metricsObj, ...dimensionsObj }[key];

      columns.push({
        title: item.label,
        dataIndex: key,
        render: item.renderFn,
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
      });
    });

    return (
      <AntTable
        size="small"
        rowKey={`key-${dimensions.join('-')}`}
        columns={columns}
        dataSource={items.map((item, i) => ({
          ...item,
          [`key-${dimensions.join('-')}`]: i,
        }))}
        onRowClick={onSelect && (item => onSelect(item[xData]))}
        rowSelection={
          onSelect && {
            selectedRowKeys: selected.map(selection =>
              items.findIndex(item => item[xData] === selection),
            ),
            onSelect: item => onSelect(item[xData]),
          }
        }
        onChange={(pagination, filters, sorter) =>
          this.setState({ sortedInfo: sorter })
        }
      />
    );
  }
}
