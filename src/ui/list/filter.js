import React, { Component } from 'react';
import { styled } from 'olymp';
import { Input, Icon } from 'antd';

export default styled(() => ({
  padding: 6,
  backgroundColor: 'rgba(233, 233, 233, 0.47)',
  '> input': {
    width: '100%',
    borderRadius: 11,
    padding: '0 7px',
    border: '1px solid #e9e9e9',
  },
}), ({ className, onChange, children, value, ...props }) => {
  const suffix = value ? <Icon type="close-circle" onClick={() => onChange(null)} /> : null;
  return (
    <div className={className}>
      {children}
      <Input suffix={suffix} value={value} onChange={e => onChange(e.target.value)} {...props} />
    </div>
  );
}, p => p);
