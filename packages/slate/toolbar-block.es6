import React from 'react';
import Toolbar, { Button } from './toolbar';
import { Menu } from 'antd';
import { get } from 'lodash';

const Action = ({ node, state, onChange, blockTypes }) => (
  { toggle, active, label, component, ...rest },
  i,
) => {
  const setData = (data) => {
    const transform = state
      .change()
      .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } });
    onChange(transform);
    return Promise.resolve();
  };

  const getData = (name, defaultValue) => node.data.get(name) || defaultValue;

  const tooltip = typeof rest.tooltip === 'function' ? rest.tooltip(getData) : rest.tooltip;

  const onClick = (e) => {
    e.preventDefault();
    if (toggle) {
      toggle({ setData, getData, state, onChange, blockTypes, node });
    }
  };

  if (component) {
    const Com = component;
    return (
      <Menu.Item key={i}>
        <Button onMouseDown={onClick} tooltip={tooltip}>
          <Com setData={setData} getData={getData} />
        </Button>
      </Menu.Item>
    );
  }
  return (
    <Menu.Item key={i}>
      <Button
        active={!!active && active({ getData, state })}
        onMouseDown={onClick}
        tooltip={tooltip}
      >
        {label}
      </Button>
    </Menu.Item>
  );
};

const getActionsByBlock = (props, node, actions = []) => {
  const { blockTypes, state } = props;
  const type = blockTypes[node.type];
  if (type && get(type, 'slate.actions', []).length) {
    actions.push(get(type, 'slate.actions', []).map(Action({ ...props, node })));
  }
  const parent = state.document.getParent(node.key);
  if (parent) {
    getActionsByBlock(props, parent, actions);
  }
  return actions;
};
export default (props) => {
  const { state, blockTypes, show } = props;
  let actions = [];
  if (state.blocks.size === 1 && blockTypes[state.blocks.get(0).type]) {
    actions = getActionsByBlock(props, state.blocks.get(0));
  } else if (state.inlines.size === 1 && blockTypes[state.inlines.get(0).type]) {
    actions = getActionsByBlock(props, state.inlines.get(0));
  } else {
    actions = getActionsByBlock(props, state.blocks.get(0));
  }

  return (
    <Toolbar show={show} isOpened={actions.length}>
      {actions}
    </Toolbar>
  );
};
