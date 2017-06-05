import React from 'react';
import Portal from 'react-portal';
import { styled } from 'olymp';
import { border, boxShadow } from 'olymp-fela';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(({ theme }) => ({
  position: 'fixed',
  top: 0,
  zIndex: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  background: theme.light1,
  borderBottom: 0,
  boxShadow: boxShadow(theme.dark3),
  border: border(theme, theme.dark4),
  borderTop: 0,
  '> li': {
    padding: 0,
    color: `${theme.dark1}!important`,
    '> .ant-menu-submenu-title': {
      padding: 0,
    },
  },
  '> li:hover': {
    color: theme.light1,
  },
}), AntMenu, p => p);

export const Button = styled(() => ({
  paddingX: 20,
}), ({ className, onMouseDown, children, innerKey, ...props }) => (
  <div className={className} onMouseDown={onMouseDown}>
    {children}
  </div>
), p => p);

export default styled(({ theme }) => ({
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
}, p => p);
