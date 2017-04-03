import React, { Component } from 'react';
import { Link, Modal } from 'olymp';
import { Form, Input, Button, notification } from 'antd';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onSuccess, onError } from './base';

@withAuth
@Form.create()
export default class AuthConfirm extends Component {
  ok = () => {
    const { auth, onOk, form, token } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      auth.confirm(token).then(({ name }) => {
        onSuccess('Konto bestätigt', `Sie können sich jetzt anmelden`);
        onOk({ email });
      }).catch(onError);
    });
  }

  render() {
    const { isOpen, email, form, saving, pathname, onClose } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Bestätigen" onOk={this.ok} onCancel={onClose}>
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>Zur Anmeldung</Link>
        </Modal.Links>
      </Base>
    );
  }
}

