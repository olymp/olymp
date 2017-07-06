import React from 'react';
import Portal from 'react-portal';
import { Gateway } from 'react-gateway';
import { Menu, Tooltip, Icon } from 'antd';
import { createComponent } from 'react-fela';

export const Button = ({ onMouseDown, tooltip, children }) =>
  (<div onMouseDown={onMouseDown}>
    <Tooltip placement="bottom" title={tooltip || ''}>
      {children}
    </Tooltip>
  </div>);

const Close = createComponent(
  ({ theme }) => ({
    float: 'right !important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);

export default createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 10,
    width: '100%',
    boxShadow: 'inset 0 -10px 10px -10px #000000',
    paddingX: theme.space2,
  }),
  (props) => {
    const { isOpened, className, children } = props;

    if (!isOpened) {
      return <div />;
    }

    return (
      <Gateway into="toolbar">
        {children}
      </Gateway>
    );

    // Old one, but pimped!
    return (
      <Portal isOpened={!!isOpened}>
        <Menu className={className} mode="horizontal" theme="dark">
          {children}
          <Close>
            <Icon type="close" />
          </Close>
        </Menu>
      </Portal>
    );
  },
  p => Object.keys(p)
);
