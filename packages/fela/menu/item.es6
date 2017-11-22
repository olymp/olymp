import React from 'react';
import { createComponent } from 'olymp-fela';
import Image from './image';

const Content = createComponent(
  ({ theme }) => ({
    ellipsis: true,
    flexGrow: 1,
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    overflowY: 'hidden',
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
  ({ theme, large, active, icon, onClick }) => ({
    height: large ? 54 : 40,
    width: !theme.collapsed ? '100%' : large ? 54 : 40,
    marginBottom: theme.space1,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: !!onClick && 'pointer',
    borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    backgroundColor: active && theme.dark5,
    onHover: {
      backgroundColor: !!onClick && theme.dark4,
    },
  }),
  ({
    className,
    large,
    children,
    subtitle,
    icon,
    extra,
    attributes = {},
    _ref,
    style,
    onClick,
  }) => (
    <div
      className={className}
      ref={_ref}
      style={style}
      onClick={onClick}
      {...attributes}
    >
      {!!icon && <Image large={large}>{icon}</Image>}
      <Content>
        {children}
        {!!subtitle && <small>{subtitle}</small>}
      </Content>
      {!!extra && <Image extra>{extra}</Image>}
    </div>
  ),
  p => Object.keys(p),
);
