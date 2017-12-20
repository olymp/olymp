import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Input } from 'antd';
import Form, { defaultLayout } from 'olymp-ui/form';
import { FaUser, FaUnlock } from 'olymp-icons';
import { onEnterFocus, onEnterOk, onError, onSuccess } from 'olymp-utils';
import { createLogin } from '../redux';
import Base from './base';

@connect(null, dispatch => ({
  login: createLogin(dispatch),
}))
@Form.create()
export default class AuthLogin extends Component {
  ok = () => {
    const { login, onClose, form, onTotp } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      login(values)
        .then(({ name }) => {
          onSuccess(`Willkommen, ${name}`);
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
    const { isOpen, email, form, onClose, totp } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Anmelden" onOk={this.ok} onCancel={onClose}>
        <Form.Item key="email" label="E-Mail" {...defaultLayout}>
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
              suffix={<FaUser size={14} />}
            />,
          )}
        </Form.Item>
        <Form.Item key="password" label="Passwort" {...defaultLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(
            <Input
              type="password"
              placeholder="Password"
              onKeyPress={onEnterOk(this.ok)}
              ref={x => (this.input = x)}
              suffix={<FaUnlock size={14} />}
            />,
          )}
        </Form.Item>
        {totp && (
          <Form.Item key="totp" label="Token" {...defaultLayout}>
            {getFieldDecorator('totp')(
              <Input
                type="text"
                placeholder="Token"
                onKeyPress={onEnterOk(this.ok)}
                ref={x => (this.totp = x)}
                suffix={<FaUnlock size={14} />}
              />,
            )}
          </Form.Item>
        )}

        <Base.Links>
          <Link
            query={({ login, totp, ...query }) => ({
              ...query,
              register: null,
            })}
          >
            Zur Registrierung
          </Link>
          <Link
            query={({ login, totp, ...query }) => ({
              ...query,
              forgot: form.getFieldValue('email') || null,
            })}
          >
            Passwort vergessen?
          </Link>
        </Base.Links>
      </Base>
    );
  }
}
