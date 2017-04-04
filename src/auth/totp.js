import React, { Component } from 'react';
import { Link, Modal, graphql, gql } from 'olymp';
import { Form, Input, notification } from 'antd';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onError, onSuccess } from './base';

@withAuth
@Form.create()
@graphql(gql`
  query totp {
    totp { qr, token, enabled }
  }
`, {
  options: ({ token }) => ({
    fetchPolicy: 'network-only',
    variables: {
      token
    }
  }),
})
export default class AuthTotp extends Component {
  ok = () => {
    const { auth, onClose, onOk, form, data } = this.props;
    const enabled = data.totp && data.totp.enabled;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      if (enabled) {
        auth.totpConfirm(data.totp.token).then(() => {
          onSuccess('Gespeichert', `2-Faktor Authentifizierung deaktiviert`);
          onClose();
        }).catch(onError);
      } else {
        auth.totpConfirm(data.totp.token, values.token).then(() => {
          onSuccess('Gespeichert', `2-Faktor Authentifizierung aktiviert`);
          onClose();
        }).catch(onError);
      }
    });
  }

  render() {
    const { isOpen, email, form, saving, pathname, onClose, extraFields, auth, data } = this.props;
    const { getFieldDecorator } = form;

    const loading = data.loading;
    const qr = data.totp && data.totp.qr;
    const enabled = data.totp && data.totp.enabled;

    return (
      <Base isOpen={isOpen} title="2-Faktor Auth" okText={enabled ? 'Deaktivieren' : 'Abschließen'} onOk={this.ok} onCancel={onClose} loading={loading ? 'Hole QR-Code ...' : false} >
        {!enabled && <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div dangerouslySetInnerHTML={{ __html: qr }} />
          <h4>
            QR Code
          </h4>
          <p>
            Scannen Sie diesen QR-Code z.B. mithilfe der <a href="https://support.google.com/accounts/answer/1066447?hl=de" target="_blank" rel="noopener noreferrer">Google Authenticator</a> App. Geben Sie anschließend einen generierten Code unten ein um die Nutzung der 2-Faktor Authentifizierung zu bestätigen.
          </p>
        </div>}
        {!enabled && <Form.Item key="token" label="Token" {...layout}>
          {getFieldDecorator('token', {
            rules: [{ required: true, message: 'Bitte geben Sie ein Token an!' }],
          })(<Input type="text" placeholder="Token" onKeyPress={onEnterFocus(() => this.ok)} size="large" addonAfter={<Key size={10} />} />)}
        </Form.Item>}
      </Base>
    );
  }
}
