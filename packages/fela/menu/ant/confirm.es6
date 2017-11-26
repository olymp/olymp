import React from 'react';
import { Menu } from 'olymp-fela';
import { Popconfirm } from 'antd';

export default ({
  placement,
  title,
  onConfirm,
  okText,
  cancelText,
  children,
  ...rest
}) => (
  <Popconfirm
    placement={placement}
    title={title}
    onConfirm={onConfirm}
    okText={okText}
    cancelText={cancelText}
  >
    <Menu.Item {...rest}>{children}</Menu.Item>
  </Popconfirm>
);
