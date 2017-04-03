import React, { Component } from 'react';
import { Link, Modal, withRouter } from 'olymp';
import { Form, Input, notification } from 'antd';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess } from './base';

@withAuth
@Form.create()
export default class AuthReset extends Component {
  ok = () => {
    const { auth, token, onOk, onClose, form } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      if (values.password2 !== values.password) return onError(new Error('Die Passwörter stimmen nicht überein!'));
      auth.reset(token, values.password).then(({ name }) => {
        onSuccess('Zurücksetzung erfolgreich', `Sie können sich jetzt anmelden`);
        onOk({ email });
      }).catch(onError);
    });
  }

  render() {
    const { isOpen, email, form, saving, pathname, onClose } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Zurücksetzen" onOk={this.ok} onCancel={onClose}>
        <Form.Item key="password" label="Passwort" {...layout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input type="password" placeholder="Password" onKeyPress={onEnterFocus(() => this.input)} size="large" addonAfter={<Key size={10} />}/>)}
        </Form.Item>
        <Form.Item key="password2" label="Passwort" {...layout}>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input type="password" placeholder="Password" onKeyPress={onEnterOk(this.ok)} ref={x => this.input = x} size="large" addonAfter={<Key size={10} />}/>)}
        </Form.Item>
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>Zur Anmeldung</Link>
        </Modal.Links>
      </Base>
    );
  }
}

