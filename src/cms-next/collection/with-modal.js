import React, { Component } from 'react';
import { withRouter, Modal } from 'olymp';

export default WrappedComponent => withRouter(props => {
  const { pathname, router, typeName } = props;
  return (
    <Modal title={`${typeName}-Liste`} onCancel={() => router.push({ pathname, query: { [`@${typeName.toLowerCase()}`]: undefined } })}>
      <WrappedComponent {...props} />
    </Modal>
  );
});
