import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLogout, createVerify, setAttributes } from './redux';

export const auth = (options = {}) => (WrappedComponent) => {
  const { attributes } = options;
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

export const useAuth = (WrappedComponent) => {
  @connect(null, dispatch => ({ verify: createVerify(dispatch) }))
  class WithAuth extends Component {
    constructor(props) {
      super(props);
      if (props.auth && props.auth.attributes) {
        setAttributes(props.auth.attributes);
      }
      props.verify();
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
