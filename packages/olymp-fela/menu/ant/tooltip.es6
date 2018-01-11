import React from 'react';
import Menu from 'olymp-fela/menu';
import { Tooltip } from 'antd';

export default ({ open, children, ...rest }) =>
  !open ? (
    <Tooltip placement="left" title={children}>
      <Menu.Item {...rest}>{children}</Menu.Item>
    </Tooltip>
  ) : (
    <Menu.Item {...rest}>{children}</Menu.Item>
  );
