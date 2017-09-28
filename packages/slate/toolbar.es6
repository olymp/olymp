import React from 'react';
import { Menu, Tooltip } from 'antd';
import { createComponent } from 'react-fela';
import Portal from './portal';

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

const WrappedMenu = createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 1001,
    left: '50%',
    transform: 'translateX(-50%)',
    // width: '100%',
    // boxShadow: 'inset 0 -10px 10px -10px #000000',
    backgroundColor: theme.dark,
    color: theme.light,
    paddingX: theme.space2,
    hasFlex: {
      justifyContent: 'center',
      display: 'flex',
    },
    '> li': {
      padding: 0,
    },
  }),
  props => <Menu {...props} />,
  p => Object.keys(p),
);

export default (props) => {
  const { isOpened, children, show } = props;

  if (!isOpened) {
    return <div />;
  }

  return (
    <Portal>
      <WrappedMenu
        style={!show ? { display: 'none' } : null}
        selectedKeys={[]}
        mode="horizontal"
        theme="dark"
      >
        {children}
      </WrappedMenu>
    </Portal>
  );
};
