import React, { Children, cloneElement } from 'react';
import { createComponent, border } from 'olymp-fela';

const Image = createComponent(
  ({ theme, large, collapsed, extra, inverted }) => ({
    width: !extra ? 54 : 40,
    textAlign: extra && 'right',
    ellipsis: true,
    '> *': {
      display: 'block',
      margin: '0 auto',
    },
    '> svg': {
      size: large ? 32 : !extra ? 20 : 14,
      fill: inverted ? theme.light : theme.dark,
    },
    '> img': {
      size: large ? 40 : !extra ? 32 : 20,
      borderRadius: collapsed ? '50%' : theme.borderRadius,
    },
  }),
  ({ children, className }) => <div className={className}>{children}</div>,
  ({ large, inverted, ...p }) => Object.keys(p),
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
  ({ theme, collapsed, inverted }) => ({
    color: inverted ? theme.light1 : theme.dark1,
    ellipsis: true,
    textTransform: 'uppercase',
    fontSize: theme.fontSizeSmall,
    marginTop: theme.space2,
    marginBottom: theme.space1,
    paddingX: collapsed ? theme.space1 : theme.space3,
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: collapsed ? 'center' : 'space-between',
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

const Item = createComponent(
  ({ theme, large, active, collapsed, icon }) => ({
    height: large ? 54 : 40,
    width: !collapsed ? '100%' : large ? 54 : 40,
    marginX: 'auto',
    marginBottom: theme.space1,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: collapsed ? '50%' : theme.borderRadius,
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
    inverted,
  }) => (
    <div className={className}>
      {!!icon && (
        <Image large={large} collapsed={collapsed} inverted={inverted}>
          {icon}
        </Image>
      )}
      {!collapsed && (
        <Content>
          {children}
          {!!subtitle && <small>{subtitle}</small>}
        </Content>
      )}
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

List.Title = Title;
List.Item = Item;
List.Divider = Divider;

export default List;
