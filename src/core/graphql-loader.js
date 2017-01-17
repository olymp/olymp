import React from 'react';
import { Spin } from 'antd';

export default (trigger, placeholder = 'Keine Daten vorhanden') => (Block) => {
  let triggerFn;
  switch (typeof trigger) {
    case 'string':
      triggerFn = props => props.data[trigger] && props.data[trigger];
      break;

    case 'object':
      triggerFn = props => trigger.reduce(
        (result, type) => result && props.data[type] && props.data[type].length, true
      );
      break;

    case 'function':
      triggerFn = trigger;
      break;

    default:
      triggerFn = () => true;
  }

  const LoaderDecorator = (props) => {
    if (triggerFn(props)) {
      return <Block {...props} />;
    }

    const text = (
      <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
        {placeholder}
      </h1>
    );
    const style = { width: '100%', minHeight: 100, ...props.style };

    return props.data.loading ? (
      <Spin style={style} size="large">
        {text}
      </Spin>
    ) : (
      <div style={style}>
        {text}
      </div>
    );
  };

  return LoaderDecorator;
};
