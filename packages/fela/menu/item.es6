import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

const Content = createComponent(
  ({ theme }) => ({
    ellipsis: true,
    flexGrow: 1,
    '> small': {
      display: 'block',
      marginTop: `-${theme.space1}`,
      color: theme.light2,
    },
  }),
  'div',
  p => Object.keys(p),
);

export default createComponent(
  ({ theme, large, active, icon }) => ({
    height: large ? 54 : 40,
    width: !theme.collapsed ? '100%' : large ? 54 : 40,
    marginX: 'auto',
    marginBottom: theme.space1,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    backgroundColor: active && theme.dark5,
    onHover: {
      backgroundColor: theme.dark4,
    },
  }),
  ({
    className,
    large,
    children,
    subtitle,
    icon,
    extra,
    collapsed,
    attributes = {},
    innerRef,
    style,
  }) => (
    <div className={className} ref={innerRef} style={style} {...attributes}>
      {!!icon && (
        <Image large={large} collapsed={collapsed}>
          {icon}
        </Image>
      )}
      {!collapsed && (
        <Content>
          {children}
          {!!subtitle && <small>{subtitle}</small>}
        </Content>
      )}
      {!!extra && !collapsed && <Image extra>{extra}</Image>}
    </div>
  ),
  p => Object.keys(p),
);
