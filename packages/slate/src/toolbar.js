import React from 'react';
import Portal from 'react-portal';
import { Menu, Tooltip } from 'antd';
import { createComponent } from 'react-fela';

export const Button = createComponent(
  ({ theme, active }) => ({
    paddingX: 20,
    backgroundColor: active && theme.dark2,
    color: active && theme.light,
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
  ({ className, onMouseDown, children, tooltip }) =>
    (<Tooltip placement="bottom" title={tooltip}>
      <div className={className} onMouseDown={onMouseDown}>
        {children}
      </div>
    </Tooltip>),
  p => Object.keys(p)
);

export default createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 10,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#3E3E3E',
    borderBottom: 0,
    boxShadow: theme.boxShadow,
    borderTop: 0,
    '> li': {
      padding: 0,
      color: `${theme.light1}!important`,
      '> .ant-menu-submenu-title': {
        padding: 0,
      },
      onHover: {
        color: `${theme.light}!important`,
      },
    },
  }),
  (props) => {
    const { isOpened, className, children } = props;
    return (
      <Portal isOpened={!!isOpened}>
        <Menu className={className} mode="horizontal">
          {children}
        </Menu>
      </Portal>
    );
  },
  p => Object.keys(p)
);
