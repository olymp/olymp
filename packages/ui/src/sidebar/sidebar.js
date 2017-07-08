import React, { Children } from 'react';
import { createComponent } from 'olymp-fela';
import { Icon, Button } from 'antd';

const StyledInner = createComponent(
  ({
    theme,
    padding,
    paddingX,
    paddingY,
    width,
    minWidth,
    maxWidth,
    right,
  }) => ({
    width,
    minWidth,
    maxWidth,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: theme.boxShadow,
    zIndex: 2,
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
        '> .ant-tabs > .ant-tabs-bar': {
          marginBottom: 0,
        },
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
        '& .ant-modal-title': {
          paddingX: '2.5rem',
          ellipsis: true,
        },
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
  }),
  ({ children, className }) =>
    (<div className={className}>
      {children}
    </div>),
  ({ right, padding, paddingX, paddingY, width, minWidth, maxWidth, ...p }) =>
    Object.keys(p)
);

const Title = createComponent(
  ({ theme }) => ({
    position: 'relative',
    padding: '1rem',
    '> .ant-modal-title': {
      color: theme.color,
      fontSize: 40,
      fontWeight: 200,
      padding: 10,
    },
  }),
  'div',
  p => Object.keys(p)
);

const TitleButtons = createComponent(
  ({ left, right }) => ({
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
    },
  }),
  'div',
  ({ left, right, ...p }) => Object.keys(p)
);

const Sidebar = ({
  children,
  isOpen,
  showLogo,
  leftButtons,
  rightButtons,
  className,
  subtitle,
  onClose,
  onCancel,
  okText,
  cancelText,
  onOk,
  title,
  loading,
  header,
  footer,
  ...props
}) =>
  isOpen
    ? <StyledInner {...props}>
      <div className="ant-modal-content">
        {leftButtons || rightButtons || title || subtitle || header
            ? <div className="ant-modal-header">
              {leftButtons || rightButtons || title || subtitle
                  ? <Title>
                    {leftButtons &&
                    <TitleButtons left>
                      {leftButtons}
                    </TitleButtons>}
                    {rightButtons &&
                    <TitleButtons right>
                      {rightButtons}
                    </TitleButtons>}
                    <div className="ant-modal-title">
                      {title}
                    </div>
                    {subtitle &&
                    <div className="ant-modal-subtitle">
                      {subtitle}
                    </div>}
                  </Title>
                  : null}

              {header}
            </div>
            : null}

        {Children.toArray(children).length > 0 &&
        <div className="ant-modal-body">
          {children}
        </div>}

        {footer
            ? <div className="ant-modal-footer">
              {footer}
            </div>
            : null}
      </div>
    </StyledInner>
    : <StyledInner {...props} minWidth={80}>
      <div className="ant-modal-content">
        <div className="ant-modal-header">
          <Button.Group>
            <Button onClick={() => {}}>
              <Icon type="double-right" />
            </Button>
          </Button.Group>
        </div>
      </div>
    </StyledInner>;
Sidebar.defaultProps = { width: 350, minWidth: 350, padding: 0, isOpen: true };

export default Sidebar;
