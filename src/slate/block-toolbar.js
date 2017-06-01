import React, { Component, PropTypes, Children } from 'react';
import Portal from 'react-portal';
import { get } from 'lodash';

const Action = ({ node, state, onChange }) => ({ toggle, active, tooltip, component }, i) => {
  const setData = (data) => {
    const transform = state
      .transform()
      .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } })
      .apply();
    onChange(transform);
    return Promise.resolve();
  };
  const getData = (name, defaultValue) => {
    return node.data.get(name) || defaultValue;
  };
  if (component) {
    const Com = component;
    return <Com setData={setData} getData={getData} />;
  } return (
    <a onClick={() => toggle({ setData, state, onChange })} key={i}>
      {tooltip}
    </a>
  );
};
export default (props) => {
  const { state, blockTypes, onChange } = props;
  const block = state.blocks.size === 1 && state.blocks.get(0).kind === 'block' && blockTypes[state.blocks.get(0).type];
  const node = state.blocks.get(0);
  const actions = get(block, 'slate.actions', []);
  return (
    <Portal isOpened={!!block}>
      <div style={{ position: 'fixed', top: 0, zIndex: 10, textAlign: 'center', background: 'black', color: 'white', width: '100%' }}>
        {block && block.slate && block.slate.label} - {actions.map(Action({ ...props, node }))}
      </div>
    </Portal>
  );
};
