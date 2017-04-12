import React, { Component, Children } from 'react';
import { createComponent } from 'react-fela';
import { Button as AntButton } from 'antd';
import cn from 'classnames';
import { Spin } from 'antd';
import tinycolor from 'tinycolor2';
import Transition from 'olymp/src/core/components/transitions';
import { Gateway } from 'react-gateway';

const Sidebar = ({ children, isOpen, showLogo, leftButtons, rightButtons, className, subtitle, onClose, onCancel, okText, cancelText, onOk, title, loading, ...props }) => (
  <Gateway into="sidebar">
    <StyledInner {...props}>
      <div className="ant-modal-content">
        <div className="ant-modal-header">
          {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
          {rightButtons && <TitleButtons right>{rightButtons}</TitleButtons>}
          <div className="ant-modal-title">{title}</div>
          {subtitle && <div className="ant-modal-subtitle">{subtitle}</div>}
        </div>
        {Children.toArray(children).length > 0 && <div className="ant-modal-body">
          {children}
        </div>}
      </div>
    </StyledInner>
  </Gateway>
);
Sidebar.defaultProps = { width: 400 };

let actives = [];
class SidebarInner extends Component {
  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
};
const StyledInner = createComponent(({ theme, padding, paddingX, paddingY, minWidth, showLogo }) => ({
  '> .ant-modal-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: 0,
    '> .ant-modal-close': {
      display: 'none',
    },
    '> .ant-modal-body': {
      flex: 1,
      overflowY: 'auto',
      paddingLeft: paddingX,
      paddingRight: paddingX,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      padding,
    },
    '> .ant-modal-header > .ant-modal-title': {
      color: theme.color,
      fontSize: 40,
      fontWeight: 200,
      padding: 10,
    },
    '> .ant-modal-header': {
      textAlign: 'center',
    },
    '> .ant-modal-footer': {
      '> .ant-btn': {
        width: 'calc(50% - 4px)',
        maxWidth: 200,
      },
    },
  },
  minWidth,
  height: '100%',
  borderRight: '1px solid #e9e9e9',
  marginRight: '30px',
  paddingBottom: 0,
  paddingTop: 0,
}), SidebarInner, p => p);

const TitleButtons = createComponent(({ theme, left, right, padding, width, showLogo }) => ({
  margin: 0,
  lineHeight: '21px',
  position: 'absolute',
  left: left && 16,
  right: right && 16,
  color: theme.color,
  fontSize: 40,
  fontWeight: 200,
  padding: 10,
  top: 14,
}), 'div', ({ left, right, ...p }) => p);

export default Sidebar;
