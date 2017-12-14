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
    overlap,
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
            maxWidth: collapsed || overlap ? 72 : width,
            minWidth: collapsed || overlap ? 72 : width,
            transition: 'min-width 200ms ease-out, max-width 200ms ease-out',
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
            ? `auto ${collapsed ? 72 : width}px`
            : `${collapsed ? 72 : width}px auto`,
          '> aside': {
            gridColumn: right ? 2 : 1,
            zIndex,
            boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
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
            boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
            transition: 'all 200ms ease-out',
            zIndex,
            ifSmallDown: {
              width: !collapsed && '100%',
            },
          },
          '> section': {
            marginLeft: !right && (overlap || collapsed ? 72 : width),
            marginRight: right && (overlap || collapsed ? 72 : width),
            transition: 'margin 200ms ease-out',
            height: '100%',
            position: 'relative',
            ...sectionStyle,
          },
        },
      },
    ],
  }),
  ({ children, className, menu, collapsed, ...rest }) => (
    <div className={className}>
      <aside {...rest}>
        {Children.map(
          menu,
          child => (child ? cloneElement(child, { collapsed, width: '100%' }) : child),
        )}
      </aside>
      <section>{children}</section>
    </div>
  ),
  ({ top, left, right, zIndex, flex, grid, sectionStyle, overlap, ...p }) =>
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
    overlap
    onMouseEnter={() => setCollapsed(false)}
    onMouseLeave={() => setCollapsed(true)}
  />
));
