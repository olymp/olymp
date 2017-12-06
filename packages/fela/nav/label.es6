import React from 'react';
import { createComponent } from 'react-fela';
import cn from 'classnames';

export default createComponent(() => ({
  // padding: theme.padding1,
  position: 'relative',
  display: 'block',
  padding: '1em 0.5em',
  transition: 'all .125s ease-in-out',
}), ({ renderLabel: Render, ...props }) => {
  if (props.href) {
    return <a href={props.href}>{props.children}</a>;
  } else if (Render && typeof renderLabel === 'function') {
    return Render(props);
  } else if (Render) {
    return <Render {...props} />;
  }
  return <a>{props.children}</a>;
}, p => Object.keys(p));
