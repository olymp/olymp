import React, { Component, Children } from 'react';
import { styled } from 'olymp';
import { Button as AntButton, Icon, Button, Spin } from 'antd';

const StyledInner = styled(({ padding, right, paddingX, paddingY, width, minWidth, maxWidth }) => ({
  width,
  minWidth,
  maxWidth,
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.04)',
  // borderLeft: right && '1px solid #eee',
  // borderRight: !right && '1px solid #eee',
  zIndex: 1,
  paddingBottom: 0,
  paddingTop: 0,
  '> .ant-modal-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    boxShadow: 'none',
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
      position: 'relative',
      // boxShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
    },
    '> .ant-modal-header': {
      textAlign: 'center',
      position: 'relative',
      backgroundColor: '#FFF',
      padding: 0,
      // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      border: 0,
      borderBottom: '1px solid #eee',
    },
    '> .ant-modal-footer': {
      backgroundColor: 'rgba(0, 0, 0, 0.015)',
      // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      border: 0,
      borderTop: '1px solid #eee',
      '> div > .ant-btn': {
        width: 'calc(50% - 4px)',
        maxWidth: 200,
      },
    },
  },
}), SidebarInner, ({ right, ...p }) => p);

const Title = styled(({ theme }) => ({
  position: 'relative',
  padding: '1rem',
  '> .ant-modal-title': {
    color: theme.color,
    fontSize: 40,
    fontWeight: 200,
    padding: 10,
  },
}), 'div', p => p);

const TitleButtons = styled(({ left, right }) => ({
  margin: 0,
  lineHeight: '21px',
  position: 'absolute',
  left: left && 0,
  right: right && 0,
  fontSize: 40,
  fontWeight: 200,
  padding: '0 1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  '> *': {
    display: 'flex', // verhindert unschönen Abstand
  }
}), 'div', ({ left, right, ...p }) => p);

const Sidebar = ({ children, isOpen, showLogo, leftButtons, rightButtons, className, subtitle, onClose, onCancel, okText, cancelText, onOk, title, loading, header, footer, ...props }) => isOpen ? (
  <StyledInner {...props}>
    <div className="ant-modal-content">
      {leftButtons || rightButtons || title || subtitle || header ? (
        <div className="ant-modal-header">
          <Title>
            {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
            {rightButtons && <TitleButtons right>{rightButtons}</TitleButtons>}
            <div className="ant-modal-title">{title}</div>
            {subtitle && <div className="ant-modal-subtitle">{subtitle}</div>}
          </Title>

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

export default Sidebar;
