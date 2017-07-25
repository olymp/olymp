import React from 'react';
import { createComponent } from 'react-fela';
import { Pagination } from 'antd';

export default createComponent(
  ({ theme }) => ({
    hasFlex: {
      display: 'flex',
      '> .ant-pagination-options': {
        flex: '1 1 0%',
        '> .ant-select': {
          width: '100%',
        },
      },
      '> .ant-pagination-item': {
        flex: '1 1 0%',
      },
    },
    '> .ant-pagination-item:not(.ant-pagination-item-active) > a': {
      color: theme.dark2,
    },
  }),
  p => <Pagination {...p} />,
  p => Object.keys(p)
);
