import React from 'react';
import { createComponent, border } from 'olymp-fela';

const style = {
  fontWeight: 200,
  // fontStyle: 'italic',
};

const coloredBorder = (theme) => ({
  position: 'relative',
  borderBottom: border(theme),
  /* onBefore: {
    bottom: -1,
    content: '""',
    display: 'block',
    height: 1,
    left: 0,
    position: 'absolute',
    minWidth: '20%',
    backgroundColor: color || '#ffa210',
  } */
});

export const H1 = createComponent(({ theme }) => ({
  ...style,
  ...coloredBorder(theme)
}), ({ className, children, color, bordered }) => (
  <h1 className={className}>
    {children}
    <Border color={color}>{bordered}</Border>
  </h1>
), p => Object.keys(p));

export const H2 = createComponent(({ theme }) => ({
  ...style,
  ...coloredBorder(theme)
}), ({ className, children, color, bordered }) => (
  <h2 className={className}>
    {children}
    <Border color={color}>{bordered}</Border>
  </h2>
), p => Object.keys(p));

export const Border = createComponent(({ theme, color }) => ({
  bottom: -1,
  display: 'block',
  overflow: 'hidden',
  height: 1,
  left: 0,
  position: 'absolute',
  minWidth: 75,
  backgroundColor: color || theme.color,
}), 'span', ({ color, ...p }) => Object.keys(p));
