import React from 'react';
import { styled } from 'olymp';
import { Modal } from 'antd';
import tinycolor from 'tinycolor2';

const style = theme => {
  const color = theme.color || '#3271A8';

  return {
    backgroundColor: 'whitesmoke',
    background: `linear-gradient(230deg, ${tinycolor(color).spin(24).darken(24).toRgbString()}, ${tinycolor(color).darken(6).toRgbString()}, ${tinycolor(color).spin(-24).darken(24).toRgbString()})`,
    display: 'flex',
    '> .ant-modal': {
      top: 0,
      margin: 'auto',
      paddingBottom: 24,
      paddingTop: 24,
      '> .ant-modal-content': {
        borderRadius: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '> .ant-modal-close': {
          color: tinycolor(color).getBrightness() > 60 ? '#FFFFFF' : '#333333',
        },
        '> .ant-modal-body': {
          textAlign: 'center',
        },
        '> .ant-modal-footer': {
          '> .ant-btn': {
            width: 'calc(50% - 4px)',
          },
        },
      }
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

export default styled(({ theme }) => style(theme), ({ className, ...props }) => (
  <Modal {...modalSettings} {...props} wrapClassName={className} />
), p => p);
