import React from 'react';
import { Dropdown, Menu, Button, Icon, Tooltip } from 'antd';
import classNames from 'classnames';

export default ({ toggle, options, type, separated, right, active, icon, tooltip }) => {
  const menu = (
    <Menu onClick={toggle}>
      {options.map(({ value, label, active }) => active ? (
        <Menu.Item key={value} style={{ fontWeight: 'bold' }}><Icon type="check" /> {label}</Menu.Item>
      ) : (
        <Menu.Item key={value}>{label}</Menu.Item>
      )
      )}
    </Menu>
  );

  return (
    <Tooltip placement="top" title={tooltip}>
      <Dropdown overlay={menu} key={type}>
        <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} data-active={active}>
          <i className={`fa fa-${icon}`} /> <i className="fa fa-caret-down" />
        </Button>
      </Dropdown>
    </Tooltip>
  );
};
