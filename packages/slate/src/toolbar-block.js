import React from 'react';
import Toolbar, { Button } from './toolbar';
import { Menu } from 'antd';
import { get } from 'lodash';

const Action = ({ node, state, onChange }) => (
  { toggle, active, label, component },
  i
) => {
  const setData = (data) => {
    const transform = state
      .transform()
      .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } })
      .apply();
    onChange(transform);
    return Promise.resolve();
  };

  const getData = (name, defaultValue) => node.data.get(name) || defaultValue;

  if (component) {
    const Com = component;
    return (
      <Menu.Item key={i}>
        <Button
          onMouseDown={
            toggle
              ? () => toggle({ setData, getData, state, onChange })
              : undefined
          }
        >
          <Com setData={setData} getData={getData} />
        </Button>
      </Menu.Item>
    );
  }
  return (
    <Menu.Item key={i}>
      <Button
        active={!!active && active({ getData, state })}
        onMouseDown={() => toggle({ setData, getData, state, onChange })}
      >
        {label}
      </Button>
    </Menu.Item>
  );
};
export default (props) => {
  const { state, blockTypes, onChange } = props;
  const block =
    state.blocks.size === 1 &&
    state.blocks.get(0).kind === 'block' &&
    blockTypes[state.blocks.get(0).type];
  const node = state.blocks.get(0);
  const actions = get(block, 'slate.actions', []);

  return (
    <Toolbar isOpened={!!block}>
      {actions.map(Action({ ...props, node }))}
    </Toolbar>
  );
};
