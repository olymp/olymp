import React from 'react';
import { Gateway } from 'react-gateway';
import { Tooltip } from 'antd';
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
  ({ onMouseDown, tooltip, children, className }) =>
    <div onMouseDown={onMouseDown} className={className}>
      <Tooltip placement="bottom" title={tooltip || ''}>
        {children}
      </Tooltip>
    </div>,
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
    hasFlex: {
      justifyContent: 'center',
      display: 'flex',
    },
    '> li': {
      padding: 0,
    },
  }),
  props => {
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
