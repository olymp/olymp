import React, { Children, cloneElement, Fragment } from 'react';
import { createComponent } from 'react-fela';
import { withState } from 'recompose';

export const Aside = createComponent(
  ({
    theme,
    width = 240,
    right,
    left = 0,
    top,
    collapsed,
    overlap,
    zIndex = 10
  }) => ({
    position: 'fixed',
    top: 0,
    paddingTop: top,
    left: !right && left,
    right: right && 0,
    height: '100%',
    bottom: 0,
    width: collapsed ? 72 : width,
    boxShadow: overlap && !collapsed ? theme.boxShadow : undefined,
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    zIndex
  }),
  ({ children, collapsed, ...rest }) => (
    <aside {...rest}>
      {Children.map(
        children,
        child =>
          child ? cloneElement(child, { collapsed, width: '100%' }) : child
      )}
    </aside>
  ),
  ({ top, left, right, zIndex, flex, grid, sectionStyle, overlap, ...p }) =>
    Object.keys(p)
);

export const Section = createComponent(
  ({ left = 240, right, collapsed, overlap }) => ({
    marginLeft: !right && (overlap || collapsed ? 72 : left),
    marginRight: right && (overlap || collapsed ? 72 : left),
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    height: '100%',
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column'
    }
  }),
  'section',
  ({
    top,
    left,
    right,
    zIndex,
    flex,
    grid,
    sectionStyle,
    overlap,
    collapsed,
    ...p
  }) => Object.keys(p)
);

const Sidebar = ({
  children,
  className,
  menu,
  collapsed,
  right,
  overlap,
  width,
  left,
  zIndex
}) => (
  <Fragment>
    <Aside
      className={className}
      right={right}
      collapsed={collapsed}
      overlap={overlap}
      width={width}
      left={left}
      zIndex={zIndex}
    >
      {menu}
    </Aside>
    <Section
      className={className}
      right={right}
      collapsed={collapsed}
      overlap={overlap}
      left={width}
    >
      {children}
    </Section>
  </Fragment>
);

export default Sidebar;
export const AutoSidebar = withState('collapsed', 'setCollapsed', true)(
  ({ setCollapsed, ...props }) => (
    <Sidebar
      {...props}
      overlap
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    />
  )
);
