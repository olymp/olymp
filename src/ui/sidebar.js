import React, { Component, Children } from 'react';
import { styled } from 'olymp';
import { Button as AntButton, Icon, Button, Spin } from 'antd';

const Sidebar = ({ children, isOpen, showLogo, leftButtons, rightButtons, className, subtitle, onClose, onCancel, okText, cancelText, onOk, title, loading, header, footer, ...props }) => isOpen ? (
  <StyledInner {...props}>
    <div className="ant-modal-content">
      {leftButtons || rightButtons || title || subtitle || header ? (
        <div className="ant-modal-header">
          {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
          {rightButtons && <TitleButtons right>{rightButtons}</TitleButtons>}
          <div className="ant-modal-title">{title}</div>
          {subtitle && <div className="ant-modal-subtitle">{subtitle}</div>}

          {header}
        </div>
      ) : null}

      {Children.toArray(children).length > 0 && (
        <div className="ant-modal-body">
          {children}
        </div>
      )}

      {footer ? (
        <div className="ant-modal-footer">
          {footer}
        </div>
      ) : null}
    </div>
  </StyledInner>
) : (
  <StyledInner {...props} minWidth={80}>
    <div className="ant-modal-content">
      <div className="ant-modal-header">
        <Button.Group>
          <Button onClick={() => {}}>
            <Icon type="double-right" />
          </Button>
        </Button.Group>
      </div>
    </div>
  </StyledInner>
);
Sidebar.defaultProps = { width: 350, minWidth: 350 };

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

const StyledInner = styled(({ theme, padding, paddingX, paddingY, width, minWidth, maxWidth, showLogo }) => ({
  width,
  minWidth,
  maxWidth,
  height: '100%',
  borderRight: '1px solid #e9e9e9',
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.25)",
  paddingBottom: 0,
  paddingTop: 0,
  '> .ant-modal-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.015)',
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
      position: 'relative',
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
    },
    '> .ant-modal-footer': {
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
      '> div > .ant-btn': {
        width: 'calc(50% - 4px)',
        maxWidth: 200,
      },
    },
  },
}), SidebarInner, p => p);

const TitleButtons = styled(({ theme, left, right, padding, width, showLogo }) => ({
  margin: 0,
  lineHeight: '21px',
  position: 'absolute',
  left: left && 16,
  right: right && 16,
  color: theme.color,
  fontSize: 40,
  fontWeight: 200,
  padding: 10,
  top: '50%',
  transform: 'translateY(-50%)',
}), 'div', ({ left, right, ...p }) => p);

export default Sidebar;
