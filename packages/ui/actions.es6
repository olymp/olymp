import React from 'react';
import { createComponent } from 'olymp-fela';
import Portal from 'olymp-fela/portal';

export default createComponent(
  ({ theme, position }) => ({
    position: 'absolute',
    top: 0,
    right: position === 'left' ? undefined : 0,
    left: position === 'left' ? 60 : undefined,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '> .ant-btn': {
      backgroundColor: '#404040',
      color: 'white',
      margin: 0,
      marginY: 2,
      borderTopLeftRadius: position === 'left' ? 0 : 5,
      borderBottomLeftRadius: position === 'left' ? 0 : 5,
      borderTopRightRadius: position === 'left' ? 5 : 0,
      borderBottomRightRadius: position === 'left' ? 5 : 0,
      borderLeft: position === 'left' ? 0 : undefined,
      borderRight: position === 'left' ? undefined : 0,
      paddingTop: 8,
      width: 40,
      height: 40,
    },
  }),
  ({ className, children }) => <span className={className}>{children}</span>,
  [],
);
