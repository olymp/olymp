import React from 'react';
import { styled } from 'olymp';
import { Modal } from 'antd';
import tinycolor from 'tinycolor2';

const style = ({ theme }) => {

  const logo = theme.header ? {
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
      content: `"${theme.header}"`,
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
  } : {
    onBefore: {
      content: '""',
      position: 'absolute',
      background: 'url(logo.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      left: 0,
      right: 0,
      top: -100,
      margin: 'auto',
      height: '100px',
    },
  }

  return {
    backgroundColor: 'whitesmoke',
    background: `linear-gradient(0deg, ${tinycolor(theme.color).darken(12).toRgbString()}, ${tinycolor(theme.color).lighten(12).toRgbString()})`,
    display: 'flex',
    '> .ant-modal': {
      ...logo,
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
          fontSize: 32,
          fontWeight: 200,
          padding: '.5rem',
        },
        '> .ant-modal-footer': {
          '> .ant-btn': {
            width: 'calc(50% - 4px)',
            background: `linear-gradient(90deg, ${tinycolor('#FFFFFF').darken(8).toRgbString()}, ${tinycolor('#FFFFFF').darken(2).toRgbString()})`,
            borderRadius: 0,
            borderColor: theme.color,
            color: theme.color,
          },
          '> .ant-btn-primary': {
            background: `linear-gradient(90deg, ${tinycolor(theme.color).darken(3).toRgbString()}, ${tinycolor(theme.color).lighten(3).toRgbString()})`,
            color: '#FFFFFF',
          }
        },
      }
    }
  }
};
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
