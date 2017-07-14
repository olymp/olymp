import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { Link } from 'olymp-router';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope, FaStar } from 'olymp-icons';
import withAuth from '../with-auth';
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
      if (err) {
        return onError(err);
      }
      auth
        .login(values.email, values.password, values.totp)
        .then(({ name }) => {
          onSuccess('Anmeldung erfolgreich', `Wilkommen, ${name}`);
          onClose();
        })
        .catch(err => {
          if (err.message.indexOf('Please provide a totp token') !== -1) {
            onTotp();
          } else {
            onError(err);
          }
        });
    });
  };

  render() {
    const { isOpen, email, form, pathname, onClose, totp } = this.props;
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
              addonAfter={<FaEnvelope size={10} />}
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
              addonAfter={<FaStar size={10} />}
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
                addonAfter={<FaStar size={10} />}
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
              query: {
                forgot: form.getFieldValue('email') || null,
                login: undefined,
                totp: undefined,
              },
            }}
          >
            Passwort vergessen?
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}