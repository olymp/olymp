import React, { Component } from 'react';
import { Link, Modal, graphql, gql, withAuth } from 'olymp';
import { Form, Input, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, {
  onEnterFocus,
  onEnterOk,
  layout,
  onError,
  onSuccess,
} from './base';

@withAuth
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
  }
)
export default class AuthRegister extends Component {
  ok = () => {
    const { auth, onClose, onOk, form, token } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      if (values.password2 !== values.password)
        return onError(new Error('Die Passwörter stimmen nicht überein!'));
      const user = { ...values };
      delete user.password;
      delete user.password2;
      auth
        .register(user, values.password, token)
        .then(() => {
          onSuccess(
            'Registrierung abgeschickt',
            `Bitte checken Sie Ihre E-Mails`
          );
          onOk({ email: values.email, token });
        })
        .catch(onError);
    });
  };

  render() {
    const {
      isOpen,
      form,
      saving,
      pathname,
      onClose,
      extraFields,
      data,
      token,
    } = this.props;
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
          token &&
          <p style={{ textAlign: 'center' }}>
            Das Token ist ungültig oder abgelaufen. Bitte{' '}
            <Link
              to={{ pathname, query: { feedback: null, confirm: undefined } }}
            >
              kontaktieren Sie den Support
            </Link>.
          </p>}
        {!valid &&
          !token &&
          <p style={{ textAlign: 'center' }}>
            Sie benötigen eine gültige Einladung um sich zu registrieren.{' '}
            <Link
              to={{ pathname, query: { feedback: null, confirm: undefined } }}
            >
              Kontaktieren Sie den Support
            </Link>.
          </p>}
        {valid &&
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
                size="large"
              />
            )}
          </Form.Item>}
        {valid &&
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
                size="large"
                addonAfter={<EnvelopeO size={10} />}
              />
            )}
          </Form.Item>}
        {valid &&
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
                size="large"
                addonAfter={<Key size={10} />}
              />
            )}
          </Form.Item>}
        {valid &&
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
                size="large"
                addonAfter={<Key size={10} />}
              />
            )}
          </Form.Item>}
        {valid && extraFields
          ? extraFields({
              layout,
              getFieldDecorator,
              state: this.state,
              setState: this.setState,
            })
          : null}
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>
            Zur Anmeldung
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
