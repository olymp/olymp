import React, { Component } from 'react';
import { Link } from 'olymp-router';
import withAuth from '../with-auth';
import Base from './base';

@withAuth
export default class AuthStatus extends Component {
  render() {
    const { isOpen, pathname, onClose, text } = this.props;

    return (
      <Base
        isOpen={isOpen}
        title="Status"
        onOk={this.ok}
        onCancel={onClose}
        cancelText="Schließen"
      >
        <p style={{ textAlign: 'center' }}>{text}</p>
        <Base.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>
            Zur Anmeldung
          </Link>
        </Base.Links>
      </Base>
    );
  }
}
