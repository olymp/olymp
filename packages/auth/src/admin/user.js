import React, { Component } from 'react';
import { withAuth } from 'olymp';
import AuthProfile from './profile';

@withAuth
export default class AuthUsers extends Component {
  render() {
    const { extraFields, auth } = this.props;

    return <AuthProfile user={auth.user} extraFields={extraFields} />;
  }
}
