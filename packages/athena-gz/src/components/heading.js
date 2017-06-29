import React from 'react';
import { createComponent, border } from 'olymp-fela';

export const H1 = createComponent(
  ({ theme }) => ({
    textAlign: 'left',
    position: 'relative',
    borderBottom: border(theme),
    marginTop: theme.space3,
    marginBottom: theme.space2,
    ifSmallDown: {
      marginY: theme.space1,
    },
  }),
  ({ className, children, color, bordered = true }) =>
    (<h1 className={className}>
      {children}
      <Border color={color}>{bordered === true ? children : bordered}</Border>
    </h1>),
  p => Object.keys(p)
);

export const H2 = createComponent(
  ({ theme }) => ({
    textAlign: 'left',
    position: 'relative',
    borderBottom: border(theme),
    marginTop: theme.space3,
    marginBottom: theme.space2,
    ifSmallDown: {
      marginY: theme.space1,
    },
  }),
  ({ className, children, color, bordered = true }) =>
    (<h2 className={className}>
      {children}
      <Border color={color}>{bordered === true ? children : bordered}</Border>
    </h2>),
  p => Object.keys(p)
);

export const Border = createComponent(
  ({ theme, color }) => ({
    bottom: -1,
    display: 'block',
    overflow: 'hidden',
    height: 1,
    left: 0,
    position: 'absolute',
    minWidth: 75,
    backgroundColor: color || theme.color,
  }),
  'span',
  ({ color, ...p }) => Object.keys(p)
);
