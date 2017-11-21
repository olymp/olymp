import React, { Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';

const VerticalNav = createComponent(
  ({ right = true }) => ({
    display: 'flex',
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: !right && 0,
    right: right && 0,
    height: '100%',
    zIndex: 300,
  }),
  'div',
);

const Inner = createComponent(
  () => ({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  'div',
);

const Header = createComponent(
  ({ theme }) => ({
    height: 80,
    paddingBottom: theme.space3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '> svg': {
      size: 40,
    },
    '> img': {
      size: 60,
      borderRadius: theme.borderRadius,
    },
  }),
  'div',
);

const Nav = createComponent(
  ({ theme, collapsed, color, inverted = true }) => ({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    width: collapsed ? 64 : 240,
    height: '100%',
    backgroundColor: !!color && (theme[color] || color),
    color: inverted ? theme.light : theme.dark,
    paddingY: theme.space3,
    paddingX: collapsed ? 5 : theme.space3,
    overflowY: 'auto',
    transition: 'all 200ms ease-out',
  }),
  ({ className, children, collapsed, header, inverted = true, ...p }) => (
    <div className={className} {...p}>
      {header && <Header>{header}</Header>}

      <Inner>
        {Children.map(
          children,
          child =>
            child ? cloneElement(child, { collapsed, inverted }) : child,
        )}
      </Inner>
    </div>
  ),
  ({ color, ...p }) => Object.keys(p),
);
VerticalNav.Nav = Nav;

export default VerticalNav;
