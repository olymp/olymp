import React from 'react';
import Portal from 'react-portal';
// import { Gateway } from 'react-gateway';
import { Menu, Tooltip, Icon } from 'antd';
import { createComponent } from 'react-fela';

export const Button = createComponent(
  ({ theme, active }) => ({
    paddingX: 20,
    '> svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4,
    },
    '> div > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4,
    },
  }),
  ({ onMouseDown, tooltip, children, className }) => (
    <div onMouseDown={onMouseDown} className={className}>
      <Tooltip placement="top" title={tooltip || ''}>
        {children}
      </Tooltip>
    </div>
  ),
  p => Object.keys(p),
);

export default createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 1001,
    left: '50%',
    transform: 'translateX(-50%)',
    // width: '100%',
    // boxShadow: 'inset 0 -10px 10px -10px #000000',
    backgroundColor: 'black',
    paddingX: theme.space2,
    hasFlex: {
      justifyContent: 'center',
      display: 'flex',
    },
    '> li': {
      padding: 0,
    },
  }),
  (props) => {
    const { isOpened, className, children, show } = props;

    if (!isOpened) {
      return <div />;
    }

    /* return (
      <Gateway into="toolbar">
        {children}
      </Gateway>
    );*/
    return (
      <Portal isOpened={!!isOpened}>
        <Menu
          style={!show ? { display: 'none' } : null}
          selectedKeys={[]}
          className={className}
          mode="horizontal"
          theme="dark"
        >
          {children}
        </Menu>
      </Portal>
    );
  },
  p => Object.keys(p),
);
