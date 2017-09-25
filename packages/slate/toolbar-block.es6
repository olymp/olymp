import React from 'react';
import Toolbar, { Button } from './toolbar';
import { Menu } from 'antd';
import { get } from 'lodash';

const Action = ({ node, state, onChange }) => (
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
      toggle({ setData, getData, state, onChange });
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
export default (props) => {
  const { state, blockTypes, onChange, show } = props;
  let sel = state.blocks.size === 1 && blockTypes[state.blocks.get(0).type];
  let node = state.blocks.get(0);
  if (!sel) {
    sel = state.inlines.size === 1 && blockTypes[state.inlines.get(0).type];
    node = state.inlines.get(0);
  }
  const actions = get(sel, 'slate.actions', []);

  return (
    <Toolbar show={show} isOpened={!!sel && actions && actions.length}>
      {actions.map(Action({ ...props, node }))}
    </Toolbar>
  );
};
