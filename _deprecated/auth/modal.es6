import React, { Children } from 'react';
import { Button as AntButton, Modal as AntModal, Spin } from 'antd';
import Portal from 'olymp-fela/portal';
import cn from 'classnames';
import ReactModal2 from 'react-modal2';
import { withTheme } from 'react-fela';
import { getAntStyle, createComponent } from 'olymp-fela';
import tinycolor from 'tinycolor2';

ReactModal2.getApplicationElement = () => document.getElementById('app');

// isOpen={isOpen} transitionSpeed={1000} on={ReactModal}
const ReactModal = ({ className, ...props }) => (
  <ReactModal2 backdropClassName={className} {...props} />
);

const getLogo = x => {
  if (typeof x === 'function') {
    return x();
  }
  return <img src={x} alt="logo" />;
};

const Modal = withTheme(
  ({
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
    theme,
    noPortal,
    ...props
  }) => {
    let copyright = null;
    let footer = null;
    const children = Children.toArray(props.children).filter(child => {
      if (child.type && child.type === component.Copyright) {
        copyright = child;
        return false;
      } else if (child.type && child.type === component.Footer) {
        footer = child;
        return false;
      }
      return true;
    });

    return !isOpen ? null : (
      <Portal noPortal={noPortal}>
        <ReactModal
          onClose={onCancel || onClose}
          closeOnEsc
          closeOnBackdropClick
          className={cn('ant-modal-wrap', className)}
          modalClassName="ant-modal"
        >
          <AntModal visible={false} />
          {theme.logoWhite &&
            showLogo && (
              <div className="logo">
                {getLogo(theme.logoWhite)}
                {theme.logoTitle && <h3>{theme.logoTitle}</h3>}
              </div>
            )}
          <Spin
            spinning={!!loading}
            tip={typeof loading === 'string' ? loading : 'Lädt ...'}
          >
            <div className="ant-modal-content">
              <div className="ant-modal-header">
                {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
                {rightButtons && (
                  <TitleButtons right>{rightButtons}</TitleButtons>
                )}
                <div className="ant-modal-title">{title}</div>
              </div>
              {Children.toArray(children).length > 0 && (
                <div className="ant-modal-body">{children}</div>
              )}
              {footer}
            </div>
          </Spin>
          {copyright && <component.Copyright>{copyright}</component.Copyright>}
        </ReactModal>
      </Portal>
    );
  },
);

const component = createComponent(
  ({ theme, padding, width, bottomTransparency, topTransparency }) => ({
    ...getAntStyle({ theme }),
    backgroundColor: theme.color,
    background: `linear-gradient(0deg, ${theme.colorEnd ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .setAlpha(bottomTransparency || 1)
        .toRgbString()}, ${theme.colorStart ||
      tinycolor(theme.color)
        .lighten(6)
        .spin(12)
        .setAlpha(topTransparency || 1)
        .toRgbString()})`,
    hasFlex: {
      display: 'flex',
    },
    height: '100%',
    '> .ant-modal': {
      top: 0,
      outline: 0,
      width: width || 480,
      margin: 'auto',
      paddingY: theme.space4,
      '> .logo': {
        pointerEvents: 'none',
        margin: 'auto',
        marginBottom: 20,
        marginTop: -140,
        textAlign: 'center',
        '> img': {
          height: 75,
        },
        '> h3': {
          color: theme.light1,
          fontWeight: 200,
          fontSize: 40,
        },
      },
      '> div > div': {
        '> .ant-modal-content': {
          borderRadius: theme.borderRadius,
          '> .ant-modal-close': {
            display: 'none',
          },
          '> .ant-modal-body': {
            padding: padding === undefined ? theme.space2 : padding,
            '> *': {
              marginY: theme.space3,
            },
            '& .ant-input-group-wrapper': {
              width: '100%',
            },
          },
          '> .ant-modal-header > .ant-modal-title': {
            color: theme.color,
            fontSize: 40,
            // fontWeight: 200,
            padding: 10,
            lineHeight: '30px',
            paddingTop: 0,
          },
          '> .ant-modal-header': {
            textAlign: 'center',
          },
          '> .ant-modal-footer': {
            hasFlex: {
              display: 'flex',
            },
            padding: theme.space1,
            '> .ant-btn': {
              flex: '1 1 auto',
              margin: theme.space1,
            },
          },
        },
      },
    },
  }),
  Modal,
  p => Object.keys(p),
);

// Copyright
component.Copyright = createComponent(
  ({ theme }) => ({
    position: 'fixed',
    bottom: 10,
    textAlign: 'center',
    right: 0,
    left: 0,
    '> a': {
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1,
      },
    },
  }),
  'div',
);

component.Footer = ({ children, className }) => (
  <div className={cn('ant-modal-footer', className)}>{children}</div>
);
component.Button = props => <AntButton {...props} />;

const TitleButtons = createComponent(
  ({ theme, left, right }) => ({
    margin: 0,
    lineHeight: '21px',
    position: 'absolute',
    left: left && 16,
    right: right && 16,
    color: theme.color,
    fontSize: 40,
  }),
  'div',
  ({ left, right, ...p }) => Object.keys(p),
);

export default component;
