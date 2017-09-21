import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLogout, createVerify, setAttributes } from './redux';

export const auth = (obj = {}) => (WrappedComponent) => {
  const { attributes } = obj;
  if (attributes) {
    setAttributes(attributes);
  }
  @connect(null, dispatch => ({ verify: createVerify(dispatch) }))
  class WithAuth extends Component {
    constructor(props) {
      super(props);
      props.verify();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithAuth;
};

export default connect(({ auth }) => ({ auth }), dispatch => ({ logout: createLogout(dispatch) }));
