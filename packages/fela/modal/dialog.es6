import React from 'react';
import { createComponent } from 'react-fela';
import Layout from '../layout';
import Modal from './modal';

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

export default ({ header, footer, container, children, ...props }) => (
  <Modal {...props}>
    <Inner>
      {header && <Layout.Header container={container}>{header}</Layout.Header>}
      <Layout.Body container={container}>{children}</Layout.Body>
      {footer && <Layout.Footer container={container}>{footer}</Layout.Footer>}
    </Inner>
  </Modal>
);
