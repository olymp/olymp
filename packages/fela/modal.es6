import React from 'react';
import { createComponent } from 'react-fela';
import Layout from './layout';
import Portal from './portal';

const ModalBackground = createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: theme.dark2,
  }),
  'div',
  ['onClick'],
);

const Modal = createComponent(
  ({ theme, width, container }) => ({
    centerX: true,
    width: !container && (width || `calc(100% - ${theme.space5})`),
    top: theme.space4,
    bottom: theme.space4,
    hasFlex: {
      display: 'flex',
    },
  }),
  'div',
  ['onClick'],
);

const Inner = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.light,
    // boxShadow: theme.boxShadow,
    border: `1px solid ${theme.dark1}`,
    borderRadius: theme.borderRadius,
  }),
  p => <Layout affix {...p} />,
  [],
);

export default ({
  children,
  open,
  onClose,
  width,
  header,
  footer,
  container,
}) =>
  open === undefined || open ? (
    <Portal noScroll>
      <ModalBackground onClick={onClose}>
        <Modal
          width={width}
          container={container}
          onClick={e => {
            // e.cancelBubble = true;
            if (e.stopPropagation) {
              e.stopPropagation();
            }
          }}
        >
          <Inner>
            {header && (
              <Layout.Header container={container}>{header}</Layout.Header>
            )}
            <Layout.Body container={container}>{children}</Layout.Body>
            {footer && (
              <Layout.Footer container={container}>{footer}</Layout.Footer>
            )}
          </Inner>
        </Modal>
      </ModalBackground>
    </Portal>
  ) : null;
