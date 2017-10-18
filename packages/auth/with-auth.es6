import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLogout, createVerify, setAttributes } from './redux';

export default connect(
  ({ auth }) => ({ auth }),
  dispatch => ({ logout: createLogout(dispatch) })
);
