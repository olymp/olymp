import React from 'react';
import Toolbar, { Button } from './toolbar';
import { Menu } from 'antd';
import { sortBy } from 'lodash';
import addBlock from './utils/add-block';

export default (props) => {
  const { state, blockTypes, onChange, defaultNode, show } = props;
  const node = state.blocks.get(0);
  const display = !state.isBlurred && state.isCollapsed && node.isEmpty;

  const categories = {};
  const menuItems = [];
  const types = Object.keys(blockTypes).map(key => ({
    ...blockTypes[key].slate,
    type: key,
  }));
  sortBy(types, ['category', 'label']).forEach((action) => {
    if (!action.category) {
      return;
    }
    const onMouseDown = (e) => {
      e.preventDefault();
      onChange(addBlock(state, action, { defaultNode }));
    };
    const item = (
      <Menu.Item key={action.type}>
        <Button onMouseDown={onMouseDown}>{action.label || action.type}</Button>
      </Menu.Item>
    );
    if (action.category) {
      if (!categories[action.category]) {
        categories[action.category] = [];
      }
      categories[action.category].push(item);
    } else {
      menuItems.push(item);
    }
  });

  return (
    <Toolbar isOpened={!!display} show={show}>
      {Object.keys(categories).map(key => (
        <Menu.SubMenu title={<Button>{key}</Button>} key={key}>
          {categories[key]}
        </Menu.SubMenu>
      ))}
      {menuItems}
    </Toolbar>
  );
};
