import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, noBorder, color, center }) => ({
    padding: '5px 6px',
    ellipsis: true,
    borderBottom: noBorder || '1px solid #e9e9e9',
    fontSize: '1.17em',
    color: color || theme.color,
    textAlign: center ? 'center' : undefined,
    flexShrink: 0,
    '> div': {
      float: 'right',
    },
  }),
  ({ className, children, buttons }) => (
    <div className={className}>
      {children}
      <div>{buttons}</div>
    </div>
  ),
  p => Object.keys(p),
);
