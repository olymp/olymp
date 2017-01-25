import React from 'react';
import { Spin, Button } from 'antd';

export default ({ trigger = true, loading = false, data = {}, placeholder = 'Keine Daten vorhanden', children, style, className }) => {
  let triggerFn;
  switch (typeof trigger) {
    case 'string':
      triggerFn = data => data[trigger] && !!((Array.isArray(data[trigger]) && data[trigger].length) || !Array.isArray(data[trigger]));
      break;

    case 'object':
      triggerFn = data => trigger.reduce(
        (result, type) => result && data[type] && !!((Array.isArray(data[trigger]) && data[trigger].length) || !Array.isArray(data[trigger])), true
      );
      break;

    case 'boolean':
      triggerFn = () => trigger;
      break;

    default:
      triggerFn = () => true;
  }

  if (triggerFn(data) === true) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }

  const text = (
    <div className={className} style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0, ...style }}>
      <h1>
        {placeholder}
      </h1>
      {/* <p>
        <Button>Item erstellen</Button>
      </p> */}
    </div>
  );
  const containerStyle = { width: '100%', minHeight: 100, ...style };

  return loading || data.loading ? (
    <Spin style={containerStyle} size="large" className={className}>
      {text}
    </Spin>
  ) : (
    <div style={containerStyle} className={className}>
      {text}
    </div>
  );
};
