import React, { Component } from 'react';
import { withRouter } from 'olymp';
import Modal from '../../auth/modal';

export default WrappedComponent => withRouter(props => {
  const { pathname, router, typeName } = props;
  return (
    <Modal title={`${typeName}-Liste`} onCancel={() => router.push({ pathname, query: { [`@${typeName.toLowerCase()}`]: undefined } })}>
      <WrappedComponent {...props} />
    </Modal>
  );
});
