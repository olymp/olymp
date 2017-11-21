import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

export default createComponent(
  ({ theme }) => ({
    color: theme.inverted ? theme.light1 : theme.dark1,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    marginTop: theme.space2,
    marginBottom: theme.space1,
    // paddingX: theme.collapsed ? theme.space1 : theme.space3,
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: theme.collapsed ? 'center' : 'space-between',
  }),
  ({ extra, children, inverted, collapsed, ...p }) => (
    <div {...p}>
      {children}
      {!!extra &&
        !collapsed && (
          <Image extra inverted={inverted}>
            {extra}
          </Image>
        )}
    </div>
  ),
  p => Object.keys(p),
);
