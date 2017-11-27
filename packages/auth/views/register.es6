import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Form, Input } from 'antd';
import { FaEnvelope, FaUnlock } from 'olymp-icons';
import {
  onEnterFocus,
  onEnterOk,
  layout,
  onError,
  onSuccess,
} from 'olymp-utils';
import Base from './base';
import { createRegister } from '../redux';

@connect(null, dispatch => ({
  register: createRegister(dispatch),
}))
@Form.create()
@graphql(
  gql`
    query checkTokenMail($token: String) {
      valid: checkToken(token: $token)
      email: checkTokenMail(token: $token)
    }
  `,
  {
    options: ({ token }) => ({
      fetchPolicy: !token ? 'cache-only' : 'network-only',
      variables: {
        token,
      },
    }),
  },
)
export default class AuthRegister extends Component {
  ok = () => {
    const { register, onClose, onOk, form, token } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      if (values.password2 !== values.password) {
        return onError(new Error('Die Passwörter stimmen nicht überein!'));
      }
      const user = { ...values };
      delete user.password;
      delete user.password2;
      register({ user, password: values.password, token })
        .then(() => {
          onSuccess('Bitte checken Sie Ihre E-Mails');
          onOk({ email: values.email, token });
        })
        .catch(onError);
    });
  };

  render() {
    const { isOpen, form, onClose, extraFields, data, token } = this.props;
    const { getFieldDecorator } = form;
    const loading =
      token && !data.error && data.valid !== true && data.valid !== false;
    const valid = token && !data.error && data.valid !== false;

    return (
      <Base
        isOpen={isOpen}
        title="Registrieren"
        onOk={data.valid ? this.ok : null}
        onCancel={onClose}
        loading={loading ? 'Prüfe Token ...' : false}
      >
        {!valid &&
          token && (
            <p style={{ textAlign: 'center' }}>
              Das Token ist ungültig oder abgelaufen. Bitte{' '}
              <Link
                query={({ confirm, ...query }) => ({
                  ...query,
                  feedback: null,
                })}
              >
                kontaktieren Sie den Support
              </Link>.
            </p>
          )}
        {!valid &&
          !token && (
            <p style={{ textAlign: 'center' }}>
              Sie benötigen eine gültige Einladung um sich zu registrieren.{' '}
              <Link
                query={({ confirm, ...query }) => ({
                  ...query,
                  feedback: null,
                })}
              >
                Kontaktieren Sie den Support
              </Link>.
            </p>
          )}
        {valid && (
          <Form.Item key="name" label="Name" {...layout}>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Bitte geben Sie Ihren Namen an' },
              ],
            })(
              <Input
                type="text"
                placeholder="Name"
                onKeyPress={onEnterFocus(() => this.mail)}
              />,
            )}
          </Form.Item>
        )}
        {valid && (
          <Form.Item key="email" label="E-Mail" {...layout}>
            {getFieldDecorator('email', {
              initialValue: data.email,
              rules: [
                { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
              ],
            })(
              <Input
                type="email"
                disabled={!!data.email}
                placeholder="E-Mail"
                onKeyPress={onEnterFocus(() => this.pw1)}
                ref={x => (this.mail = x)}
                suffix={<FaEnvelope size={12} />}
              />,
            )}
          </Form.Item>
        )}
        {valid && (
          <Form.Item key="password" label="Passwort" {...layout}>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Bitte das Passwort angeben!' },
              ],
            })(
              <Input
                type="password"
                placeholder="Password"
                onKeyPress={onEnterFocus(() => this.pw2)}
                ref={x => (this.pw1 = x)}
                suffix={<FaUnlock size={12} />}
              />,
            )}
          </Form.Item>
        )}
        {valid && (
          <Form.Item key="password2" label="Wiederholen" {...layout}>
            {getFieldDecorator('password2', {
              rules: [
                {
                  required: true,
                  message: 'Bitte die Passwort-Wiederholung angeben!',
                },
              ],
            })(
              <Input
                type="password"
                placeholder="Password wiederholen"
                onKeyPress={onEnterOk(this.ok)}
                ref={x => (this.pw2 = x)}
                suffix={<FaUnlock size={12} />}
              />,
            )}
          </Form.Item>
        )}
        {valid && extraFields
          ? extraFields({
              layout,
              getFieldDecorator,
              state: this.state,
              setState: this.setState,
            })
          : null}
        <Base.Links>
          <Link query={({ register, ...query }) => ({ ...query, login: null })}>
            Zur Anmeldung
          </Link>
        </Base.Links>
      </Base>
    );
  }
}
