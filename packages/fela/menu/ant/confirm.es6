import React from 'react';
import Menu from 'olymp-fela/menu';
import { Popconfirm, Popover } from 'antd';

export default ({
  placement = 'left',
  title,
  onConfirm,
  okText,
  cancelText,
  children,
  popover,
  ...rest
}) =>
  popover === true ? (
    <Popover content={children} placement={placement}>
      <Popconfirm
        placement={placement}
        title={title}
        onConfirm={onConfirm}
        okText={okText}
        cancelText={cancelText}
      >
        <Menu.Item {...rest}>{children}</Menu.Item>
      </Popconfirm>
    </Popover>
  ) : (
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
