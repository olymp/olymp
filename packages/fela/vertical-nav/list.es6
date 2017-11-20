import React, { Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';

const Image = createComponent(
  ({ theme, large }) => ({
    width: 54,
    '> *': {
      size: large ? 40 : 20,
      display: 'block',
      margin: '0 auto',
    },
    '> svg': {
      fill: theme.light,
    },
    '> img': {
      borderRadius: theme.borderRadius,
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, ...p }) => Object.keys(p),
);

const Content = createComponent(
  ({ theme }) => ({
    ellipsis: true,
    '> small': {
      display: 'block',
      marginTop: `-${theme.space1}`,
    },
  }),
  'div',
  p => Object.keys(p),
);

const Group = ({ children, className, ...p }) => (
  <div className={className}>
    {Children.map(children, child => (child ? cloneElement(child, p) : child))}
  </div>
);

const Title = createComponent(
  ({ theme, collapsed }) => ({
    color: theme.light1,
    fontWeight: 600,
    overflowX: 'hidden',
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    textAlign: collapsed && 'center',
    marginTop: theme.space2,
    marginBottom: theme.space1,
    marginX: 'auto',
    paddingX: theme.space1,
    width: '100%',
  }),
  'div',
  ({ collapsed, ...p }) => Object.keys(p),
);

const Item = createComponent(
  ({ theme, large, active, collapsed }) => ({
    height: large ? 54 : 40,
    width: !collapsed ? '100%' : large ? 54 : 40,
    marginX: 'auto',
    marginBottom: theme.space1,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: !large && collapsed ? '50%' : theme.borderRadius,
    backgroundColor: active && theme.dark5,
    onHover: {
      backgroundColor: theme.dark4,
    },
  }),
  ({ className, large, children, subtitle, logo, collapsed }) => (
    <div className={className}>
      {!!logo && <Image large={large}>{logo}</Image>}
      {!collapsed && (
        <Content>
          {children}
          {!!subtitle && <small>{subtitle}</small>}
        </Content>
      )}
    </div>
  ),
  p => Object.keys(p),
);

export default {
  Title,
  Item,
  Group,
};
