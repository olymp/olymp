import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { withState } from 'recompose';

const Sidebar = createComponent(
  ({
    theme,
    width = 240,
    right,
    left = 0,
    top,
    collapsed,
    pusher,
    zIndex,
    flex,
    grid,
    sectionStyle = {},
  }) => ({
    height: '100%',
    extend: [
      {
        condition: !!flex,
        style: {
          flex: '1',
          marginLeft: left,
          display: 'flex',
          minHeight: 0,
          '> aside': {
            maxWidth: width,
            minWidth: width,
            display: 'flex',
          },
          '> section': {
            flex: 1,
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
            ...sectionStyle,
          },
        },
      },
      {
        condition: !!grid,
        style: {
          display: 'grid',
          marginLeft: left,
          gridTemplateColumns: `${width}px auto`,
          '> aside': {
            gridColumn: 1,
          },
          '> section': {
            gridColumn: 2,
            ...sectionStyle,
          },
        },
      },
      {
        condition: !flex && !grid,
        style: {
          '> aside': {
            position: 'fixed',
            top: 0,
            paddingTop: top,
            left: !right && left,
            right: right && 0,
            height: '100%',
            bottom: 0,
            width: collapsed ? 72 : width,
            boxShadow: !pusher && !collapsed ? theme.boxShadow : undefined,
            transition: 'all 200ms ease-out',
            zIndex: 10,
          },
          '> section': {
            marginLeft: !right && (!pusher || collapsed ? 72 : width),
            marginRight: right && (!pusher || collapsed ? 72 : width),
            transition: 'margin 200ms ease-out',
            height: '100%',
            position: 'relative',
            ...sectionStyle,
          },
        },
      },
    ],
  }),
  ({ children, className, menu, collapsed, width = 240, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          menu,
          child => (child ? cloneElement(child, { collapsed, width }) : child),
        )}
      </aside>
      <section>{children}</section>
    </div>
  ),
  ({ pusher, top, left, right, zIndex, flex, grid, sectionStyle, ...p }) =>
    Object.keys(p),
);

export default Sidebar;
export const AutoSidebar = withState(
  'collapsed',
  'setCollapsed',
  true,
)(({ setCollapsed, ...props }) => (
  <Sidebar
    {...props}
    onMouseEnter={() => setCollapsed(false)}
    onMouseLeave={() => setCollapsed(true)}
  />
));
