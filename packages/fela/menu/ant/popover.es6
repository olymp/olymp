import React from 'react';
import Menu from 'olymp-fela/menu';
import { Popover } from 'antd';

export default ({ open, children, content, placement = 'left', ...rest }) => (
  <Popover
    placement={placement}
    title={content && children}
    content={content || children}
  >
    <Menu.Item {...rest}>{children}</Menu.Item>
  </Popover>
);
