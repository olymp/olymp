import React from 'react';
import { styled } from 'olymp';
import { Modal } from 'antd';
import tinycolor from 'tinycolor2';

const style = ({ theme }) => ({
  backgroundColor: 'whitesmoke',
  background: `linear-gradient(0deg, ${tinycolor(theme.color).darken(12).toRgbString()}, ${tinycolor(theme.color).lighten(12).toRgbString()})`,
  display: 'flex',
  '> .ant-modal': {
    onBefore: {
      content: '""',
      position: 'absolute',
      background: 'url(logo.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      left: 0,
      right: 0,
      top: -140,
      margin: 'auto',
      height: '75px',
    },
    onAfter: {
      content: '"Olymp"',
      position: 'absolute',
      left: 0,
      right: 0,
      top: -80,
      fontSize: 46,
      color: 'rgba(255, 255, 255, 0.99)',
      fontWeight: 200,
      margin: 'auto',
      textAlign: 'center',
    },
    top: 0,
    margin: 'auto',
    paddingBottom: 24,
    paddingTop: 24,
    '> .ant-modal-content': {
      borderRadius: 0,
      '> .ant-modal-close': {
        display: 'none',
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
        },
      },
    }
  }
});
const modalSettings = {
  visible: true,
  okText: 'Speichern',
  cancelText: 'Abbruch',
  transitionName: 'fade',
  maskTransitionName: 'fade',
};

export default styled(style, ({ className, title, ...props }) => (
  <Modal {...modalSettings} {...props} title={title} wrapClassName={className} />
), p => p);
