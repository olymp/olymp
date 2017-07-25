import React from 'react';
import { Table } from 'antd';

export default ({ columns, items, onRowClick, onSort }) =>
  <Table
    pagination={false}
    size="small"
    rowKey="id"
    columns={columns}
    dataSource={items}
    onRowClick={onRowClick}
    onChange={(pagination, filters, sorter) => {
      onSort(sorter);
    }}
  />;
