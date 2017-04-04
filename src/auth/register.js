import React, { Component } from 'react';
import { Link, Modal } from 'olymp';
import { Form, Input, notification } from 'antd';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess } from './base';

@withAuth
@Form.create()
export default class AuthRegister extends Component {
  ok = () => {
    const { auth, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      if (values.password2 !== values.password) return onError(new Error('Die Passwörter stimmen nicht überein!'));
      const user = {...values};
      delete user.password;
      delete user.password2;
      auth.register(user, values.password).then(({ name }) => {
        onSuccess('Registrierung abgeschickt', `Bitte checken Sie Ihre E-Mails`);
        onOk({ email: values.email });
      }).catch(onError);
    });
  }

  render() {
    const { isOpen, email, form, saving, pathname, onClose, extraFields } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Registrieren" onOk={this.ok} onCancel={onClose}>
        <Form.Item key="name" label="Name" {...layout}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Bitte geben Sie Ihren Namen an' }],
          })(<Input type="text" placeholder="Name" onKeyPress={onEnterFocus(() => this.mail)} size="large" />)}
        </Form.Item>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(<Input type="email" placeholder="E-Mail" onKeyPress={onEnterFocus(() => this.pw1)} ref={x => this.mail = x} size="large" addonAfter={<EnvelopeO size={10} />} />)}
        </Form.Item>
        <Form.Item key="password" label="Passwort" {...layout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input type="password" placeholder="Password" onKeyPress={onEnterFocus(() => this.pw2)} ref={x => this.pw1 = x} size="large" addonAfter={<Key size={10} />}/>)}
        </Form.Item>
        <Form.Item key="password2" label="Wiederholen" {...layout}>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Bitte die Passwort-Wiederholung angeben!' }],
          })(<Input type="password" placeholder="Password wiederholen" onKeyPress={onEnterOk(this.ok)} ref={x => this.pw2 = x} size="large" addonAfter={<Key size={10} />}/>)}
        </Form.Item>
        {extraFields ? extraFields({ layout, getFieldDecorator, state: this.state, setState: this.setState }) : null}
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>Zur Anmeldung</Link>
        </Modal.Links>
      </Base>
    );
  }
}
