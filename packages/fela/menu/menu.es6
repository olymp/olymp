import React from 'react';
import { createComponent } from 'olymp-fela';
import Theme from './theme';
import Header from './header';
import Divider from './divider';
import Image from './image';
import List from './list';
import Item from './item';
import Title from './title';
import Space from './space';

const Inner = createComponent(
  () => ({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
  }),
  'div',
);

const Menu = createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    width: theme.collapsed ? 72 : theme.width,
    height: '100%',
    color: theme.inverted ? theme.light1 : theme.dark1,
    backgroundColor: theme.color,
    paddingY: theme.space2,
    paddingX: 9,
    overflowY: 'auto',
    transition: 'all 200ms ease-out',
  }),
  ({ className, children, header, ...p }) => (
    <div className={className} {...p}>
      {header && <Header>{header}</Header>}
      <Inner>{children}</Inner>
    </div>
  ),
  ({ color, ...p }) => Object.keys(p),
);

const Component = ({ inverted, color, collapsed, width, ...props }) => (
  <Theme width={width} inverted={inverted} color={color} collapsed={collapsed}>
    <Menu {...props} />
  </Theme>
);

Component.Header = Header;
Component.Divider = Divider;
Component.Item = Item;
Component.List = List;
Component.Title = Title;
Component.Image = Image;
Component.Space = Space;
export default Component;
