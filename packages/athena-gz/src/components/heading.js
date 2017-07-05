import React from 'react';
import { createComponent } from 'olymp-fela';

export const H1 = createComponent(
  ({ theme }) => ({
    textAlign: 'left',
    position: 'relative',
    // borderBottom: border(theme),
    marginTop: theme.space3,
    marginBottom: theme.space3,
    ifSmallDown: {
      marginY: theme.space1,
    },
  }),
  ({ className, children, color, bordered = true }) =>
    (<h1 className={className}>
      {children}
      <Border color={color}>
        {bordered === true ? children : bordered}
      </Border>
    </h1>),
  p => Object.keys(p)
);

export const H2 = createComponent(
  ({ theme, right }) => ({
    textAlign: right ? 'right' : 'left',
    position: 'relative',
    // borderBottom: border(theme),
    marginTop: theme.space3,
    marginBottom: theme.space3,
    ifSmallDown: {
      marginY: theme.space1,
    },
  }),
  ({ className, children, color, bordered = true, right }) =>
    (<h2 className={className}>
      {children}
      <Border color={color} right={right}>
        {bordered === true ? children : bordered}
      </Border>
    </h2>),
  p => Object.keys(p)
);

export const Border = createComponent(
  ({ theme, color, right }) => ({
    bottom: -1,
    display: 'block',
    overflow: 'hidden',
    height: 1,
    left: 0,
    position: 'absolute',
    minWidth: 75,
    width: '100%', // macht bordered-prop eigentlich überflüssig
    background: `linear-gradient(to ${right ? 'left' : 'right'}, ${color ||
      theme.color}, #FFF)`,
  }),
  'span',
  ({ color, ...p }) => Object.keys(p)
);
