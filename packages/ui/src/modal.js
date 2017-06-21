import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Button as AntButton, Modal as AntModal } from 'antd';
import { Gateway } from 'react-gateway';
import cn from 'classnames';
import { Spin } from 'antd';
import ReactModal2 from 'react-modal2';
import tinycolor from 'tinycolor2';
import { Transition } from './transitions';
ReactModal2.getApplicationElement = () => document.getElementById('app');

// isOpen={isOpen} transitionSpeed={1000} on={ReactModal}
const ReactModal = ({ className, ...props }) =>
  <ReactModal2 backdropClassName={className} {...props} />;

export const Modal = (
  {
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
    ...props
  },
  { theme }
) => {
  let copyright = null;
  let links = null;
  let footer = null;
  const children = Children.toArray(props.children).filter((child) => {
    if (child.type && child.type === component.Copyright) {
      copyright = child;
      return false;
    } else if (child.type && child.type === component.Links) {
      links = child;
      return false;
    } else if (child.type && child.type === component.Footer) {
      footer = child;
      return false;
    }
    return true;
  });
  return (
    <Gateway into="modal">
      <Transition isOpen={isOpen}>
        <ReactModal
          onClose={onCancel || onClose}
          closeOnEsc
          closeOnBackdropClick
          className={cn('ant-modal-wrap', className)}
          modalClassName="ant-modal"
        >
          <AntModal visible={false} />
          {showLogo &&
            theme.logo &&
            <div className="logo">
              <img src={theme.logo} />
              <h3>{theme.logoTitle}</h3>
            </div>}
          <Spin
            spinning={!!loading}
            tip={typeof loading === 'string' ? loading : 'Lädt ...'}
          >
            <div className="ant-modal-content">
              <div className="ant-modal-header">
                {leftButtons && <TitleButtons left>{leftButtons}</TitleButtons>}
                {rightButtons &&
                  <TitleButtons right>{rightButtons}</TitleButtons>}
                <div className="ant-modal-title">{title}</div>
                {subtitle &&
                  <div className="ant-modal-subtitle">{subtitle}</div>}
              </div>
              {Children.toArray(children).length > 0 &&
                <div className="ant-modal-body">
                  {children}
                </div>}
              {footer}
            </div>
          </Spin>
          {links && <component.Links>{links}</component.Links>}
          {copyright && <component.Copyright>{copyright}</component.Copyright>}
        </ReactModal>
      </Transition>
    </Gateway>
  );
};
Modal.contextTypes = { theme: PropTypes.object };

const component = createComponent(
  ({
    theme,
    padding,
    width,
    showLogo,
    bottomTransparency,
    topTransparency,
  }) => ({
    backgroundColor: 'whitesmoke',
    background: `linear-gradient(0deg, ${theme.colorStart ||
      tinycolor(theme.color)
        .darken(6)
        .spin(-6)
        .setAlpha(bottomTransparency || 1)
        .toRgbString()}, ${theme.colorEnd ||
      tinycolor(theme.color)
        .lighten(6)
        .spin(12)
        .setAlpha(topTransparency || 1)
        .toRgbString()})`,
    display: 'flex',
    '> .ant-modal': {
      '> .logo': {
        pointerEvents: 'none',
        margin: 'auto',
        marginBottom: 20,
        marginTop: -140,
        textAlign: 'center',
        '> img': {
          height: '75px',
        },
        '> h3': {
          color: 'rgba(255, 255, 255, 0.99)',
          fontWeight: 200,
          fontSize: 40,
        },
      },
      '> div > div': {
        '> .ant-modal-content': {
          borderRadius: 0,
          '> .ant-modal-close': {
            display: 'none',
          },
          '> .ant-modal-body': {
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
      },
      top: 0,
      outline: 0,
      width: width || 400,
      margin: 'auto',
      paddingBottom: 24,
      paddingTop: 24,
    },
  }),
  Modal,
  p => Object.keys(p)
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
  'div'
);

component.Footer = ({ children, className }) =>
  (<div className={cn('ant-modal-footer', className)}>
    {children}
  </div>);
component.Button = props => <AntButton {...props} />;

component.Links = createComponent(
  ({ theme }) => ({
    marginTop: 20,
    textAlign: 'center',
    '> a': {
      display: 'inline-block',
      minWidth: 200,
      padding: '0 9px',
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1,
      },
    },
    '> div > a': {
      display: 'inline-block',
      minWidth: 200,
      padding: '0 9px',
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1,
      },
    },
  }),
  'div'
);

const TitleButtons = createComponent(
  ({ theme, left, right, padding, width, showLogo }) => ({
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
  }),
  'div',
  ({ left, right, ...p }) => p
);

export default component;
