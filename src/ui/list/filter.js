import React, { Component } from 'react';
import { styled } from 'olymp';
import { Input, Icon } from 'antd';

export default styled(() => ({
  padding: 6,
  borderTop: '1px solid #eee',
  backgroundColor: 'rgba(233, 233, 233, 0.47)',
}), ({ className, onChange, children, value, ...props }) => {
  const suffix = value ? <Icon type="close-circle" onClick={() => onChange(null)} /> : null;
  return (
    <div className={className}>
      {children}
      <Input suffix={suffix} value={value} onChange={e => onChange(e.target.value)} {...props} />
    </div>
  );
}, p => p);
