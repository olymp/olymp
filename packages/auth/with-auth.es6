import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLogout, createVerify, setAttributes } from './redux';

export const auth = (options = {}) => (WrappedComponent) => {
  const { attributes } = options;
  if (attributes) {
    setAttributes(attributes);
  }
  @connect(
    ({ auth }) => ({ verifying: auth.verifying }),
    dispatch => ({ verify: createVerify(dispatch) }),
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

export const useAuth = (WrappedComponent) => {
  @connect(
    ({ auth }) => ({ verifying: auth.verifying }),
    dispatch => ({ verify: createVerify(dispatch) }),
  )
  class WithAuth extends Component {
    constructor(props) {
      super(props);
      if (props.auth && props.auth.attributes) {
        setAttributes(props.auth.attributes);
      }
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

export const withAuth = connect(
  ({ auth }) => ({ auth }),
  dispatch => ({ logout: createLogout(dispatch) }),
);
