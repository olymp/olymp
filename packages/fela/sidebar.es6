import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';

export default createComponent(
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
  }) => ({
    height: '100%',
    extend: flex
      ? {
          flex: '1',
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
          },
        }
      : {
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
            zIndex: zIndex || 1,
          },
          '> section': {
            marginLeft: !pusher || collapsed ? 72 : width,
            transition: 'margin 200ms ease-out',
            height: '100%',
            position: 'relative',
          },
        },
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
  ({ pusher, top, left, right, zIndex, flex, ...p }) => Object.keys(p),
);
