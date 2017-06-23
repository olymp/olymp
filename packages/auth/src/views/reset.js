import React, { Component } from 'react';
import { Link, graphql, gql } from 'olymp';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { Key } from 'olymp-icons';
import withAuth from '../with-auth';
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
  query checkToken($token: String) {
    valid: checkToken(token: $token)
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
export default class AuthReset extends Component {
  ok = () => {
    const { auth, token, onOk, onClose, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      if (values.password2 !== values.password) {
        return onError(new Error('Die Passwörter stimmen nicht überein!'));
      }
      auth
        .reset(token, values.password)
        .then(({ email }) => {
          onSuccess(
            'Zurücksetzung erfolgreich',
            'Sie können sich jetzt anmelden'
          );
          onOk({ email });
        })
        .catch(onError);
    });
  };

  render() {
    const { isOpen, email, form, saving, pathname, onClose, data } = this.props;
    const { getFieldDecorator } = form;
    const loading = data.valid !== true && data.valid !== false;
    const valid = data.valid !== false;

    return (
      <Base
        isOpen={isOpen}
        title="Zurücksetzen"
        onOk={valid ? this.ok : null}
        onCancel={onClose}
        loading={loading ? 'Prüfe Token ...' : false}
      >
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
                onKeyPress={onEnterFocus(() => this.input)}
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
                  message: 'Bitte das wiederholte Passwort angeben!',
                },
              ],
            })(
              <Input
                type="password"
                placeholder="Password wiederholen"
                onKeyPress={onEnterOk(this.ok)}
                ref={x => (this.input = x)}
                size="large"
                addonAfter={<Key size={10} />}
              />
            )}
          </Form.Item>}
        {!valid &&
          <p style={{ textAlign: 'center' }}>
            Das Token ist ungültig oder abgelaufen. Bitte{' '}
            <Link to={{ pathname, query: { forgot: null, reset: undefined } }}>
              beantragen Sie das Zurücksetzen des Passworts erneut
            </Link>{' '}
            oder{' '}
            <Link
              to={{ pathname, query: { feedback: null, reset: undefined } }}
            >
              kontaktieren Sie den Support
            </Link>.
          </p>}
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, reset: undefined } }}>
            Zur Anmeldung
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
