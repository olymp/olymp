import React from 'react';
import { Button as AntButton, Collapse } from 'antd';
import { createComponent } from 'olymp-fela';

export const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 },
};

export const Button = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
    marginRight: theme.space1,
  }),
  p => <AntButton {...p} />,
  p => Object.keys(p),
);

export const CollapsePanel = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
    '> .ant-collapse-content': {
      '> .ant-collapse-content-box': {
        padding: `${theme.space2} ${theme.space2} 0 ${theme.space2} !important`,
      },
    },
  }),
  p => <Collapse.Panel {...p} />,
  p => Object.keys(p),
);
