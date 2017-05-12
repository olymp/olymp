import React, { Component } from 'react';
import { Link, Modal, withAuth } from 'olymp';
import { Form, Input, Button, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout } from './base';

@withAuth
@Form.create()
export default class AuthStatus extends Component {
  render() {
    const { isOpen, form, saving, pathname, onClose, text } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Status" onOk={this.ok} onCancel={onClose} cancelText="Schließen">
        <p style={{ textAlign: 'center' }}>
          {text}
        </p>
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>Zur Anmeldung</Link>
        </Modal.Links>
      </Base>
    );
  }
}

