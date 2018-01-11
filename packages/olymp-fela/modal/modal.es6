import React from 'react';
import { createComponent } from 'react-fela';
import { get } from 'lodash';
import Portal from '../portal';

const ModalBackground = createComponent(
  ({ theme, backgroundColor }) => ({
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: backgroundColor || theme.dark2,
    ...get(theme, 'modalBackdrop', {}),
  }),
  'div',
  ['onClick'],
);

const Modal = createComponent(
  ({ theme, width = 500, height, scroll = false }) => ({
    position: 'static',
    overflow: 'hidden',
    // display: 'none',
    zIndex: 1001,
    // top: '50%',
    margin: 'auto',
    left: '50%',
    background: '#fff',
    border: 'none',
    transformOrigin: '50% 25%',
    userSelect: 'text',
    willChange: 'top,left,margin,transform,opacity',
    width: width === 'fill' ? '90%' : width,
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateY(60px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    },
    animationIterationCount: 1,
    animationDuration: '.3s',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    backgroundColor: theme.light,
    // boxShadow: theme.boxShadow,
    // border: `1px solid ${theme.dark1}`,
    borderRadius: theme.borderRadius,
    extend: scroll
      ? {
          minHeight: 500,
        }
      : {
          marginTop: height === '100%' ? 0 : 50,
          height: height || '90%',
        },
  }),
  'div',
  ['onClick'],
);

export default ({
  children,
  open,
  portal = false,
  noScroll = true,
  onClose,
  backgroundColor,
  ...props
}) =>
  open === undefined || open ? (
    <Portal noScroll={noScroll} noPortal={!portal}>
      <ModalBackground
        backgroundColor={backgroundColor}
        onClick={e => {
          e.stopPropagation();
          onClose(e);
        }}
      >
        <Modal
          {...props}
          onClick={e => {
            // e.cancelBubble = true;
            if (e.stopPropagation) {
              e.stopPropagation();
            }
          }}
        >
          {children}
        </Modal>
      </ModalBackground>
    </Portal>
  ) : null;
