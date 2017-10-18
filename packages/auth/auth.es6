import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLogout, createVerify, setAttributes } from './redux';

export default (options = {}) => WrappedComponent => {
  const { attributes } = options;
  if (attributes) {
    setAttributes(attributes);
  }
  @connect(
    ({ auth }) => ({ verifying: auth.verifying }),
    dispatch => ({ verify: createVerify(dispatch) })
  )
  class WithAuth extends Component {
    constructor(props) {
      super(props);
      if (props.verifying) {
        props.verify(props.verifying);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return WithAuth;
};