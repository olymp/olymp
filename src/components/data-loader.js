import React from 'react';
import { Spin } from 'antd';

export default ({ isEmpty, placeholder = 'Keine Daten vorhanden', children, style, className }) => {
  const containerStyle = { width: '100%', minHeight: 100, ...style };
  const text = (
    <div style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0, ...containerStyle }}>
      <h1>
        {placeholder}
      </h1>
    </div>
  );

  if (isEmpty) {
    return Array.isArray(isEmpty) && !isEmpty.length ? (
      <div style={containerStyle} className={className}>
        {text}
      </div>
    ) : (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }

  return (
    <Spin style={containerStyle} size="large" className={className}>
      {text}
    </Spin>
  );
};
