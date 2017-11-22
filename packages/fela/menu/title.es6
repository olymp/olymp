import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

export default createComponent(
  ({ theme }) => ({
    color: theme.inverted ? theme.light2 : theme.dark2,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    marginTop: theme.space2,
    marginBottom: theme.space1,
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-in-out',
  }),
  ({ extra, children, ...p }) => (
    <div {...p}>
      {children}
      {!!extra && <Image extra>{extra}</Image>}
    </div>
  ),
  p => Object.keys(p),
);
