import React from 'react';
import { createComponent } from 'olymp-fela';

const Subtitle = createComponent(
  ({ theme }) => ({
    color: theme.dark2,
    marginTop: '-6px',
    fontSize: '1rem',
  }),
  'div',
  p => Object.keys(p)
);

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
  ({ className, children, color, bordered = true, subtitle }) =>
    (<h1 className={className}>
      {children}
      <Subtitle>
        {subtitle}
      </Subtitle>
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
  ({ color, right, ...p }) => Object.keys(p)
);
