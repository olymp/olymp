import React from 'react';
import { createComponent } from 'react-fela';
import Sidebar from './sidebar';
import Button from './button';

Sidebar.Button = Button;
Sidebar.Container = createComponent(
  ({ width }) => ({
    height: '100%',
    '> aside': {
      position: 'fixed',
      height: '100%',
      width,
    },
    '> nav': {
      position: 'fixed',
      width,
    },
    '> section': {
      marginLeft: width || 350,
      height: '100%',
      position: 'relative',
    },
  }),
  ({ children, className, menu, ...rest }) => (
    <div className={className}>
      <aside {...rest}>{menu}</aside>
      <section>{children}</section>
    </div>
  ),
  p => Object.keys(p),
);

export default Sidebar;
