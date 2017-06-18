import React from 'react';
import { Dropdown, Menu, Button, Icon, Tooltip } from 'antd';
import classNames from 'classnames';

export default ({ toggle, options, separated, right, active, icon, label }) => {
  const menu = (
    <Menu onClick={toggle} style={{ minWidth: 200 }}>
      {options.map(
        ({ value, label, active }) =>
          active
            ? <Menu.Item key={value} style={{ fontWeight: 'bold' }}>
                <Icon type="check" /> {label}
              </Menu.Item>
            : <Menu.Item key={value}>{label}</Menu.Item>
      )}
    </Menu>
  );

  const button = (
    <Button
      type="ghost"
      size="small"
      className={classNames('slate-toolbar-button', { separated, right })}
      data-active={active}
    >
      <i className={`fa fa-${icon}`} /> <i className="fa fa-caret-down" />
    </Button>
  );

  return label
    ? <Dropdown overlay={menu}>
        <Tooltip placement="top" overlay={<span>{label}</span>}>
          {button}
        </Tooltip>
      </Dropdown>
    : <Dropdown overlay={menu}>
        {button}
      </Dropdown>;
};
