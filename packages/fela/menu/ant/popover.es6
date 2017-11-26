import React from 'react';
import { Menu } from 'olymp-fela';
import { Popover } from 'antd';

export default ({ open, children, content, ...rest }) => (
  <Popover
    placement="left"
    title={content && children}
    content={content || children}
  >
    <Menu.Item {...rest}>{children}</Menu.Item>
  </Popover>
);
