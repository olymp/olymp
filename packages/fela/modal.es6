import React from 'react';
import { createComponent } from 'react-fela';
import Portal from 'react-portal';
import Layout from './layout';

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
  []
);

const Modal = createComponent(
  ({ theme, width }) => ({
    centerX: true,
    width: width || '100%',
    top: theme.space4,
    bottom: theme.space4,
    hasFlex: {
      display: 'flex',
    },
    '> div': {
      marginX: !width && theme.space4,
    },
  }),
  'div',
  []
);

const Inner = createComponent(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.light,
    boxShadow: theme.boxShadow,
    border: `1px solid ${theme.dark1}`,
    borderRadius: theme.borderRadius,
  }),
  p => <Layout affix {...p} />,
  []
);

export default ({ children, open, onClose, width, header, footer }) =>
  <Portal isOpened={open} onClose={onClose} closeOnEsc closeOnOutsideClick>
    <ModalBackground>
      <Modal width={width}>
        <Inner>
          {header &&
            <Layout.Header>
              {header}
            </Layout.Header>}
          <Layout.Body>
            {children}
          </Layout.Body>
          {footer &&
            <Layout.Footer>
              {footer}
            </Layout.Footer>}
        </Inner>
      </Modal>
    </ModalBackground>
  </Portal>;
