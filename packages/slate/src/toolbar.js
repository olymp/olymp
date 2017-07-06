import React from 'react';
import { Gateway } from 'react-gateway';
import { Tooltip } from 'antd';
import { createComponent } from 'react-fela';

export const Button = ({ onMouseDown, tooltip, children }) =>
  (<div onMouseDown={onMouseDown}>
    <Tooltip placement="bottom" title={tooltip || ''}>
      {children}
    </Tooltip>
  </div>);

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
    const { isOpened, children } = props;

    if (!isOpened) {
      return <div />;
    }

    return (
      <Gateway into="toolbar">
        {children}
      </Gateway>
    );
  },
  p => Object.keys(p)
);
