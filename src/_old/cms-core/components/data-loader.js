import React from 'react';
import { Spin } from 'antd';

export default ({
  isEmpty,
  placeholder = 'Keine Daten vorhanden',
  loading = 'Daten werden geladen',
  children,
  style,
  className,
}) => {
  const containerStyle = { width: '100%', minHeight: 100, ...style };
  const text = content =>
    <div
      style={{
        textAlign: 'center',
        display: 'block',
        padding: '2rem',
        margin: 0,
        ...containerStyle,
      }}
    >
      <h1>
        {content}
      </h1>
    </div>;

  if (isEmpty) {
    return Array.isArray(isEmpty) && !isEmpty.length
      ? <div style={containerStyle} className={className}>
          {text(placeholder)}
        </div>
      : <div style={style} className={className}>
          {children}
        </div>;
  }

  return (
    <Spin style={containerStyle} size="large" className={className}>
      {text(loading)}
    </Spin>
  );
};
