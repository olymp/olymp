import React from 'react';
import { Modal } from 'antd';
import './modal.less';

const modalSettings = {
  visible: true,
  style: { top: 20 },
  okText: 'Speichern',
  cancelText: 'Abbruch',
  transitionName: 'fade',
  maskTransitionName: 'fade',
  wrapClassName: 'fullscreen-modal-wrap',
  className: 'fullscreen-modal',
};

export default props => (
  <Modal {...modalSettings} {...props} footer={() => <div />} />
);
