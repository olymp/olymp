import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'olymp-router';
import { Form, Input } from 'antd';
import { FaStar } from 'olymp-icons';
import {
  onEnterFocus,
  onEnterOk,
  layout,
  onError,
  onSuccess,
} from 'olymp-utils';
import Base from './base';
import { createReset } from '../redux';

@connect(null, dispatch => ({
  reset: createReset(dispatch),
}))
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
  },
)
export default class AuthReset extends Component {
  ok = () => {
    const { reset, token, onOk, onClose, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      if (values.password2 !== values.password) {
        return onError(new Error('Die Passwörter stimmen nicht überein!'));
      }
      reset({ token, password: values.password })
        .then(({ email }) => {
          onSuccess('Sie können sich jetzt anmelden');
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
                onKeyPress={onEnterFocus(() => this.input)}
                addonAfter={<FaStar size={10} />}
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
                  message: 'Bitte das wiederholte Passwort angeben!',
                },
              ],
            })(
              <Input
                type="password"
                placeholder="Password wiederholen"
                onKeyPress={onEnterOk(this.ok)}
                ref={x => (this.input = x)}
                addonAfter={<FaStar size={10} />}
              />,
            )}
          </Form.Item>
        )}
        {!valid && (
          <p style={{ textAlign: 'center' }}>
            Das Token ist ungültig oder abgelaufen. Bitte{' '}
            <Link updateQuery={{ forgot: null, reset: undefined }}>
              beantragen Sie das Zurücksetzen des Passworts erneut
            </Link>{' '}
            oder{' '}
            <Link updateQuery={{ feedback: null, reset: undefined }}>
              kontaktieren Sie den Support
            </Link>.
          </p>
        )}
        <Base.Links>
          <Link updateQuery={{ login: null, reset: undefined }}>
            Zur Anmeldung
          </Link>
        </Base.Links>
      </Base>
    );
  }
}
