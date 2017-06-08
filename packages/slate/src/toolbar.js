import React from 'react';
import Portal from 'react-portal';
import { boxShadow } from 'olymp-fela';
import { Menu as AntMenu } from 'antd';
import { createComponent } from 'olymp-fela';

export const Menu = createComponent(({ theme }) => ({
  position: 'fixed',
  top: 0,
  zIndex: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(48, 48, 48, 0.9)',
  borderBottom: 0,
  boxShadow: boxShadow(theme.dark3),
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
  '> li:hover': {
    // color: theme.light1,
    color: theme.dark,
  },
}), AntMenu, p => Object.keys(p));

export const Button = createComponent(() => ({
  paddingX: 20,
}), ({ className, onMouseDown, children, innerKey, ...props }) => (
  <div className={className} onMouseDown={onMouseDown}>
    {children}
  </div>
), p => Object.keys(p));

export default createComponent(({ theme }) => ({
  /*width: '100%',
  display: 'flex',
  justifyContent: 'center',*/
}), (props) => {
  const { isOpened, className, children } = props;
  return (
    <Portal isOpened={!!isOpened}>
      <Menu mode="horizontal">
        {children}
      </Menu>
    </Portal>
  );
}, p => Object.keys(p));
