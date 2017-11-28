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
    zIndex = 10,
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
          flexDirection: right ? 'row-reverse' : 'row',
          minHeight: 0,
          '> aside': {
            maxWidth: collapsed || !pusher ? 72 : width,
            minWidth: collapsed || !pusher ? 72 : width,
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
          gridTemplateColumns: right
            ? `auto ${collapsed || !pusher ? 72 : width}px`
            : `${collapsed || !pusher ? 72 : width}px auto`,
          '> aside': {
            gridColumn: right ? 2 : 1,
            zIndex,
            boxShadow: !pusher && !collapsed ? theme.boxShadow : undefined,
          },
          '> section': {
            gridColumn: right ? 1 : 2,
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
            zIndex,
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
