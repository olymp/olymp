import React from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
  ({ theme }) => ({
    marginTop: 3,
    marginBottom: -3,
    display: 'block',
    '> svg': {
      fill: theme.light2,
    },
    onHover: {
      '> svg': {
        fill: theme.light,
      },
    },
  }),
  ({ className, icon: Icon }) =>
    (<span className={className}>
      <Icon size={14} color="" />
    </span>),
  p => Object.keys(p)
);
