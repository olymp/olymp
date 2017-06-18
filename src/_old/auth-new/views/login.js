import React, { Component } from 'react';
import { Link, Modal, withRouter, withAuth } from 'olymp';
import { Form, Input, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, {
  onEnterFocus,
  onEnterOk,
  layout,
  onError,
  onSuccess,
} from './base';

@withRouter
@withAuth
@Form.create()
export default class AuthLogin extends Component {
  ok = () => {
    const { auth, onClose, form, onTotp } = this.props;
    form.validateFields((err, values) => {
      if (err) { return onError(err); }
      auth
        .login(values.email, values.password, values.totp)
        .then(({ name }) => {
          onSuccess('Anmeldung erfolgreich', `Wilkommen, ${name}`);
          onClose();
        })
        .catch((err) => {
          if (err.message.indexOf('Please provide a totp token') !== -1) {
            onTotp();
          } else {
            onError(err);
          }
        });
    });
  };

  render() {
    const { isOpen, email, form, saving, pathname, onClose, totp } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Anmelden" onOk={this.ok} onCancel={onClose}>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [
              { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
            ],
          })(
            <Input
              type="email"
              placeholder="E-Mail"
              onKeyPress={onEnterFocus(() => this.input)}
              size="large"
              addonAfter={<EnvelopeO size={10} />}
            />
          )}
        </Form.Item>
        <Form.Item key="password" label="Passwort" {...layout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(
            <Input
              type="password"
              placeholder="Password"
              onKeyPress={onEnterOk(this.ok)}
              ref={x => (this.input = x)}
              size="large"
              addonAfter={<Key size={10} />}
            />
          )}
        </Form.Item>
        {totp &&
          <Form.Item key="totp" label="Token" {...layout}>
            {getFieldDecorator('totp')(
              <Input
                type="text"
                placeholder="Token"
                onKeyPress={onEnterOk(this.ok)}
                ref={x => (this.totp = x)}
                size="large"
                addonAfter={<Key size={10} />}
              />
            )}
          </Form.Item>}
        <Modal.Links>
          <Link
            to={{
              pathname,
              query: { register: null, login: undefined, totp: undefined },
            }}
          >
            Zur Registrierung
          </Link>
          <Link
            to={{
              pathname,
              query: { forgot: null, login: undefined, totp: undefined },
            }}
          >
            Passwort vergessen?
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
