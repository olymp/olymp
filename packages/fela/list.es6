import React, { Children, cloneElement } from 'react';
import { createComponent, border } from 'olymp-fela';

const Image = createComponent(
  ({ theme, large, collapsed }) => ({
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
      borderRadius: collapsed ? '50%' : theme.borderRadius,
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, ...p }) => Object.keys(p),
);

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

const List = ({ children, className, ...p }) => (
  <div className={className}>
    {Children.map(children, child => (child ? cloneElement(child, p) : child))}
  </div>
);

const Divider = createComponent(
  ({ theme }) => ({
    width: '100%',
    border: 'none',
    borderTop: border(theme, theme.dark4),
  }),
  'hr',
  [],
);

const Title = createComponent(
  ({ theme, collapsed }) => ({
    color: theme.light1,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    textAlign: collapsed && 'center',
    marginTop: theme.space2,
    marginBottom: theme.space1,
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
    borderRadius: collapsed ? '50%' : theme.borderRadius,
    backgroundColor: active && theme.dark5,
    onHover: {
      backgroundColor: theme.dark4,
    },
  }),
  ({ className, large, children, subtitle, logo, extra, collapsed }) => (
    <div className={className}>
      {!!logo && (
        <Image large={large} collapsed={collapsed}>
          {logo}
        </Image>
      )}
      {!collapsed && (
        <Content>
          {children}
          {!!subtitle && <small>{subtitle}</small>}
        </Content>
      )}
      {!!extra && !collapsed && <Image>{extra}</Image>}
    </div>
  ),
  p => Object.keys(p),
);

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
