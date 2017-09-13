import React from 'react';
import { createComponent } from 'olymp-fela';

export default createComponent(
  ({ theme, noBorder, color, center, thin = true, bold }) => ({
    padding: '5px 6px',
    borderBottom: noBorder || '1px solid #e9e9e9',
    fontSize: '1.17em',
    fontWeight: bold ? 'bold' : thin ? 200 : undefined,
    color: color || theme.color,
    textAlign: center ? 'center' : undefined,
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
