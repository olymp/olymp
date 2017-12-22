import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';

const dropdown = createComponent(
  ({ float }) => ({
    float,
    '> i': {
      marginLeft: 3,
    },
  }),
  ({ onSelect, value, children, content, style, className, hideIcon }) =>
    (<Dropdown
      overlay={
        <Menu selectedKeys={[value]} onSelect={({ selectedKeys }) => onSelect(selectedKeys[0])}>
          {children}
        </Menu>
      }
    >
      <span style={style} className={className}>
        {content}
        {!hideIcon && <Icon type="down" />}
      </span>
    </Dropdown>),
  p => Object.keys(p),
);
dropdown.Item = Menu.Item;
export default dropdown;
