import React, { Component, Children } from 'react';
import { createComponent } from 'react-fela';
import cn from 'classnames';
import { Gateway } from 'react-gateway';
import ReactModal2 from 'react-modal2';
import tinycolor from 'tinycolor2';
import { TransitionSlide, TransitionFade } from './transitions';
ReactModal2.getApplicationElement = () => document.getElementById('app');

// isOpen={isOpen} transitionSpeed={1000} on={ReactModal}
const ReactModal = ({ className, ...props }) => <ReactModal2 backdropClassName={className} {...props}/>
export const Modal = ({ isOpen, className, children, onCancel, okText, cancelText, onOk, title, ...props }) => (
  <Gateway into="modal">
    <TransitionSlide speed={500} isOpen={isOpen}>
      <ReactModal onClose={onCancel} closeOnEsc closeOnBackdropClick className={cn('ant-modal-wrap', className)} modalClassName="ant-modal">
        <div className="ant-modal-content">
          <div className="ant-modal-header">
            <div className="ant-modal-title">{title}</div>
          </div>
          <div className="ant-modal-body">
            {children}
          </div>
          <div className="ant-modal-footer">
            <button onClick={onCancel} type="button" className="ant-btn ant-btn-lg">
              <span>{cancelText || 'Abbruch'}</span>
            </button>
            <button onClick={onOk} type="button" className="ant-btn ant-btn-primary ant-btn-lg">
              <span>{okText || 'Speichern'}</span>
            </button>
          </div>
        </div>
      </ReactModal>
    </TransitionSlide>
  </Gateway>
);

export default createComponent(({ theme, padding, width, showLogo }) => ({
  backgroundColor: 'whitesmoke',
  background: `linear-gradient(0deg, ${tinycolor(theme.color).darken(6).spin(-6).toRgbString()}, ${tinycolor(theme.color).lighten(6).spin(12).toRgbString()})`,
  display: 'flex',
  '> .ant-modal': {
    onBefore: showLogo && {
      content: '""',
      position: 'absolute',
      background: `url("${theme.logo || '/logo.png'}")`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      left: 0,
      right: 0,
      top: -150,
      margin: 'auto',
      height: '75px',
    },
    onAfter: showLogo && {
      content: `"${theme.logoTitle || 'Olymp'}"`,
      position: 'absolute',
      left: 0,
      right: 0,
      top: -80,
      fontSize: 40,
      color: 'rgba(255, 255, 255, 0.99)',
      fontWeight: 200,
      margin: 'auto',
      textAlign: 'center',
    },
    top: 0,
    outline: 0,
    width: width || 400,
    margin: 'auto',
    paddingBottom: 24,
    paddingTop: 24,
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
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 200,
        padding: 10,
      },
      '> .ant-modal-footer': {
        '> .ant-btn': {
          width: 'calc(50% - 4px)',
          maxWidth: 200,
        },
      },
    }
  }
}), Modal, p => p);
