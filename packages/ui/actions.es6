import React from 'react';
import { createComponent } from 'olymp-fela';
import Portal from 'olymp-fela/portal';

export default createComponent(
  ({ theme, position }) => ({
    position: 'absolute',
    top: 0,
    right: position === 'left' ? undefined : 0,
    left: position === 'left' ? 0 : undefined,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '> .ant-btn': {
      margin: 0,
      marginY: 2,
      borderTopLeftRadius: position === 'left' ? 0 : 5,
      borderBottomLeftRadius: position === 'left' ? 0 : 5,
      borderTopRightRadius: position === 'left' ? 5 : 0,
      borderBottomRightRadius: position === 'left' ? 5 : 0,
      borderLeft: position === 'left' ? 0 : undefined,
      borderRight: position === 'left' ? undefined : 0,
      paddingTop: 2,
      width: 40,
      height: 40,
    },
  }),
  ({ className, children }) => <span className={className}>{children}</span>,
  [],
);
