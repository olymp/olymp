import React from 'react';
import { styled } from 'olymp';
import { Modal } from 'antd';

const style = {
  backgroundColor: 'whitesmoke',
  background: 'linear-gradient(0deg,#002673,#004e93)',
  display: 'flex',
  '> .ant-modal': {
    top: 0,
    margin: 'auto',
    paddingBottom: 24,
    paddingTop: 24,
    '> .ant-modal-content': {
      borderRadius: 0,
    }
  }
}
const modalSettings = {
  visible: true,
  okText: 'Speichern',
  cancelText: 'Abbruch',
  transitionName: 'fade',
  maskTransitionName: 'fade',
};

export default styled(() => style, ({ className, ...props }) => (
  <Modal {...modalSettings} {...props} wrapClassName={className} />
), p => p);
