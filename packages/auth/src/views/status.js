import React, { Component } from 'react';
import { Link, withAuth } from 'olymp';
import { Modal } from 'olymp-ui';
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
        <p style={{ textAlign: 'center' }}>
          {text}
        </p>
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>
            Zur Anmeldung
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
