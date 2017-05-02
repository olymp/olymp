import React, { Component } from 'react';
import { styled } from 'olymp';

export default styled(({ theme, center }) => ({
  padding: '5px 6px',
  borderBottom: '1px solid #e9e9e9',
  fontSize: '1.17em',
  fontWeight: 200,
  color: theme.color,
  textAlign: center ? 'center' : undefined,
  '> div': {
    float: 'right',
  },
}), ({ className, children, buttons }) => (
  <div className={className}>
    {children}
    <div>
      {buttons}
    </div>
  </div>
), p => p);
