import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Form, Input } from 'antd';
import { FaStar } from 'olymp-icons';
import { onEnterFocus, onError, onSuccess } from 'olymp-utils';

@graphql(
  gql`
    query totp {
      totp {
        qr
        token
        enabled
      }
    }
  `,
  {
    options: ({ isOpen }) => ({
      fetchPolicy: 'network-only',
      skip: !isOpen,
    }),
  },
)
export default class AuthTotp extends Component {
  static defaultProps = { data: {} };

  ok = () => {
    const { auth, onClose, onOk, form, data } = this.props;
    const enabled = data.totp && data.totp.enabled;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      if (enabled) {
        auth
          .totpConfirm(data.totp.token)
          .then(() => {
            onSuccess('2-Faktor Authentifizierung deaktiviert');
            onClose();
          })
          .catch(onError);
      } else {
        auth
          .totpConfirm(data.totp.token, values.token)
          .then(() => {
            onSuccess('2-Faktor Authentifizierung aktiviert');
            onClose();
          })
          .catch(onError);
      }
    });
  };

  render() {
    const { form, data } = this.props;
    const { getFieldDecorator } = form;
    const qr = data.totp && data.totp.qr;
    const enabled = data.totp && data.totp.enabled;

    return (
      <div style={{ marginBottom: 20 }}>
        <div dangerouslySetInnerHTML={{ __html: qr }} />
        <p>
          Scannen Sie diesen QR-Code z.B. mithilfe der{' '}
          <a
            href="https://support.google.com/accounts/answer/1066447?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Authenticator
          </a>{' '}
          App. Geben Sie anschließend einen generierten Code unten ein um die
          Nutzung der 2-Faktor Authentifizierung zu bestätigen.
        </p>
        <Form.Item key="token">
          {getFieldDecorator('token', {
            // rules: [{ required: true, message: 'Bitte geben Sie ein Token an!' }],
          })(
            <Input
              type="text"
              placeholder="Token"
              onKeyPress={onEnterFocus(() => this.ok)}
              addonAfter={<FaStar size={10} />}
            />,
          )}
        </Form.Item>
      </div>
    );
  }
}
