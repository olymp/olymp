import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Form, Input } from 'antd';
import { FaEnvelope, FaStar } from 'olymp-icons';
import { createLogin } from '../redux';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess } from './base';

@connect(null, dispatch => ({
  login: createLogin(dispatch),
}))
@Form.create()
export default class AuthLogin extends Component {
  ok = () => {
    const {
      login, onClose, form, onTotp
    } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      login(values)
        .then(({ name }) => {
          onSuccess('Anmeldung erfolgreich', `Willkommen, ${name}`);
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
    const {
      isOpen, email, form, onClose, totp
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base isOpen={isOpen} title="Anmelden" onOk={this.ok} onCancel={onClose}>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(<Input
            type="email"
            placeholder="E-Mail"
            onKeyPress={onEnterFocus(() => this.input)}
            size="large"
            addonAfter={<FaEnvelope size={10} />}
          />,)}
        </Form.Item>
        <Form.Item key="password" label="Passwort" {...layout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input
            type="password"
            placeholder="Password"
            onKeyPress={onEnterOk(this.ok)}
            ref={x => (this.input = x)}
            size="large"
            addonAfter={<FaStar size={10} />}
          />,)}
        </Form.Item>
        {totp && (
          <Form.Item key="totp" label="Token" {...layout}>
            {getFieldDecorator('totp')(<Input
              type="text"
              placeholder="Token"
              onKeyPress={onEnterOk(this.ok)}
              ref={x => (this.totp = x)}
              size="large"
              addonAfter={<FaStar size={10} />}
            />,)}
          </Form.Item>
        )}

        <Base.Links>
          <Link query={({ login, totp, ...query }) => ({ ...query, register: null })}>
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
