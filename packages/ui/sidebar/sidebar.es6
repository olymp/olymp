import React, { Children } from 'react';
import { createComponent } from 'olymp-fela';
import { Icon, Button } from 'antd';

const StyledInner = createComponent(
  ({ theme, padding, paddingX, paddingY, width, right, darkened }) => ({
    width,
    minWidth: width,
    maxWidth: width,
    height: '100%',
    transition: 'width .25s ease,min-width .25s ease,max-width .25s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    // borderRight: '1px solid #eee',
    // boxShadow: theme.boxShadow,
    boxShadow: 'none',
    zIndex: 2,
    paddingBottom: 0,
    paddingTop: 0,
    onAfter: {
      content: '""',
      opacity: darkened ? 1 : 0,
      transition: 'opacity .4s ease',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: theme.dark2,
      boxShadow: `inset -6px 0 5px -5px #444`,
      zIndex: 1,
      display: 'block',
    },
    '> .ant-modal-content': {
      borderRight: !right && '1px solid rgb(233, 233, 233)',
      borderLeft: right && '1px solid rgb(233, 233, 233)',
      hasFlex: {
        display: 'flex',
        flexDirection: 'column',
      },
      height: '100%',
      borderRadius: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
      boxShadow: 'none',
      '> .ant-modal-close': {
        display: 'none',
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
          overflowY: 'visible',
          paddingX: '2.5rem',
          paddingBottom: theme.space3,
          ellipsis: true,
        },
      },
      '> .ant-modal-body': {
        '> .ant-collapse': {
          border: 0,
          borderRadius: 0,
          '> .ant-collapse-item': {
            borderRadius: 0,
            '> .ant-collapse-content': {
              padding: 0,
              '> .ant-collapse-content-box': {
                padding: 0,
              },
            },
          },
        },
        '> .ant-tabs > .ant-tabs-bar': {
          marginBottom: 0,
          hasFlex: {
            '& .ant-tabs-nav': {
              display: 'flex',
              '>  .ant-tabs-tab': {
                flex: '1 1 0%',
                textAlign: 'center',
              },
            },
          },
        },
        flex: '1 1 0%',
        overflowY: 'auto',
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        padding,
        position: 'relative',
        // boxShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
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
  'div',
  ({
    right,
    padding,
    paddingX,
    paddingY,
    width,
    minWidth,
    maxWidth,
    darkened,
    ...p
  }) => Object.keys(p),
);

const Title = createComponent(
  ({ theme }) => ({
    position: 'relative',
    padding: '1rem',
    '> .ant-modal-title': {
      color: theme.color,
      fontSize: 40,
      padding: 10,
    },
  }),
  'div',
  p => Object.keys(p),
);

const TitleButtons = createComponent(
  ({ left, right }) => ({
    margin: 0,
    lineHeight: '21px',
    position: 'absolute',
    left: left && 0,
    right: right && 0,
    fontSize: 40,
    padding: '0 1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    '> *': {
      hasFlex: {
        display: 'flex', // verhindert unschönen Abstand
      },
    },
  }),
  'div',
  ({ left, right, ...p }) => Object.keys(p),
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
  header,
  footer,
  ...props
}) =>
  isOpen ? (
    <StyledInner {...props}>
      <div className="ant-modal-content">
        {leftButtons || rightButtons || title || subtitle || header ? (
          <div className="ant-modal-header">
            {leftButtons || rightButtons || title || subtitle ? (
              <Title>
                {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
                {rightButtons && (
                  <TitleButtons right>{rightButtons}</TitleButtons>
                )}
                <div className="ant-modal-title">{title}</div>
                {subtitle && (
                  <div className="ant-modal-subtitle">{subtitle}</div>
                )}
              </Title>
            ) : null}

            {header}
          </div>
        ) : null}

        {Children.toArray(children).length > 0 && (
          <div className="ant-modal-body">{children}</div>
        )}

        {footer ? <div className="ant-modal-footer">{footer}</div> : null}
      </div>
    </StyledInner>
  ) : (
    <StyledInner {...props} minWidth={64}>
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
Sidebar.defaultProps = { width: 350, padding: 0, isOpen: true };

export default Sidebar;
