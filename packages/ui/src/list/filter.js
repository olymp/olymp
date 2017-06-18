import React from 'react';
import { createComponent } from 'olymp-fela';
import { Input, Icon } from 'antd';

export default createComponent(
  () => ({
    padding: 6,
    borderTop: '1px solid #eee',
    backgroundColor: 'rgba(233, 233, 233, 0.47)',
  }),
  ({ className, onChange, children, value, placeholder, ...props }) => {
    const suffix = value
      ? <Icon type="close-circle" onClick={() => onChange(null)} />
      : null;
    return (
      <div className={className}>
        {children}
        <Input
          placeholder={placeholder || 'Filter ...'}
          suffix={suffix}
          value={value}
          onChange={e => onChange(e.target.value)}
          {...props}
        />
      </div>
    );
  },
  p => Object.keys(p)
);
