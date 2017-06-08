import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';

const Toggler = createComponent(({ hasLogo }) => ({
  width: '100%',
  ifMini: {
    '> div': {
      display: 'none',
      clear: hasLogo && 'both',
    },
    onHover: {
      '> div': {
        display: 'block',
      },
    },
    onAfter: {
      content: '""',
      clear: 'both',
      display: 'block',
      visibility: 'hidden',
      height: 0,
    },
  },
}), ({ className, children, ...props }) => (
  <div className={className}>
    <Button {...props} />

    {Children.map(children, child => cloneElement(child, props))}
  </div>
), p => Object.keys(p));
export default Toggler;

const Button = createComponent(({ theme, inverse }) => ({
  float: 'right',
  border: border(theme, theme.color),
  backgroundColor: inverse ? theme.dark4 : theme.light,
  padding: theme.space2,
  margin: theme.space1,
  borderRadius: theme.borderRadius,
  ifSmallUp: {
    display: 'none',
  },
}), ({ className, inverse }) => (
  <button className={className}>
    <Icon inverse={inverse} />
  </button>
), ['inverse']);

const Icon = createComponent(({ theme, inverse }) => ({
  display: 'block',
  fill: inverse ? theme.light : theme.color,
}), ({ className }) => (
  <svg className={className} width={20} height={20} viewBox="0 0 1792 1792">
    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
  </svg>
), p => Object.keys(p));
