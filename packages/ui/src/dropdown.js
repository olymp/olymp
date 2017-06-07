import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { styled } from 'olymp';

const dropdown = styled(({ float }) => ({
  float,
  '> i': {
    marginLeft: 3,
  },
}), ({ onSelect, value, children, content, style, className }) => (
  <Dropdown overlay={(
    <Menu selectedKeys={[value]} onSelect={({ selectedKeys }) => onSelect(selectedKeys[0])}>
      {children}
    </Menu>
  )}>
    <span style={style} className={className}>
      {content}
      <Icon type="down" />
    </span>
  </Dropdown>
), p => p);
dropdown.Item = Menu.Item;
export default dropdown;
