import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import Navbar from './navbar';

const toggleComponent = props => (
  <Link updateQuery={{ toggled: props.toggled ? undefined : null }} {...props} />
);
export default connect(({ location }) => ({
  toggled: location.query.toggled !== undefined,
  toggleComponent,
}))(Navbar);
