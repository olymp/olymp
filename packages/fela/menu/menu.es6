import React from 'react';
import { createComponent } from 'olymp-fela';
import { ThemeProvider } from 'react-fela';
import useTheme from './theme';
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
    flexDirection: 'column',
    overflowY: 'auto',
    // justifyContent: 'space-between',
  }),
  'div',
);

const Menu = createComponent(
  ({ theme, color }) => ({
    display: 'flex',
    flexGrow: theme.collapsed ? 0 : 1,
    flexDirection: 'column',
    width: theme.collapsed ? 72 : theme.width,
    height: '100%',
    color: theme.inverted ? theme.light1 : theme.dark1,
    backgroundColor: color,
    paddingY: theme.space2,
    paddingLeft: 9,
    paddingRight: 10,
    overflowY: 'auto',
    transition: 'all 200ms ease-out',
  }),
  ({ className, children, header, headerColor, ...p }) => (
    <div className={className} {...p}>
      {header && <Header color={headerColor}>{header}</Header>}
      <Inner>{children}</Inner>
    </div>
  ),
  ({ color, ...p }) => Object.keys(p),
);

const Component = useTheme(
  ({ inverted, color, collapsed, theme, width, ...props }) => (
    <ThemeProvider theme={theme}>
      <Menu color={color} {...props} />
    </ThemeProvider>
  ),
);

Component.Header = Header;
Component.Divider = Divider;
Component.Item = Item;
Component.List = List;
Component.Title = Title;
Component.Image = Image;
Component.Space = Space;
export default Component;
