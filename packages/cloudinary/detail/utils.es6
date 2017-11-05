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
    padding: theme.space2,
    paddingBottom: 0,
    backgroundColor: theme.light,
  }),
  p => <Collapse.Panel {...p} />,
  p => Object.keys(p),
);
