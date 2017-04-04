import React, { Component } from 'react';
import { Countdown, Link, Modal, graphql, gql } from 'olymp';
import { Form, Input, Button, notification } from 'antd';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';
import Base, { onEnterFocus, onEnterOk, layout, onSuccess, onError } from './base';

@withAuth
@Form.create()
@graphql(gql`
  query checkToken($token: String) {
    valid: checkToken(token: $token)
  }
`, {
  options: ({ token }) => ({
    variables: {
      token
    }
  }),
})
export default class AuthConfirm extends Component {
  ok = () => {
    const { auth, onOk, form, token } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      auth.confirm(token).then(({ email }) => {
        onSuccess('Konto bestätigt', `Sie können sich jetzt anmelden`);
        onOk({ email });
      }).catch(onError);
    });
  }

  render() {
    const { isOpen, email, form, saving, pathname, onClose, data } = this.props;
    const { getFieldDecorator } = form;
    const loading = data.valid !== true && data.valid !== false;
    const valid = data.valid !== false;

    return (
      <Base isOpen={isOpen} title="Bestätigen" onOk={data.valid ? this.ok : null} onCancel={onClose} loading={loading ? 'Prüfe Token ...' : false} okText="Sofort bestätigen">
        {!valid && <p style={{ textAlign: 'center' }}>
          Das Token ist ungültig oder abgelaufen. Bitte <Link to={{ pathname, query: { register: null, confirm: undefined } }}>registrieren Sie sich erneut</Link> oder <Link to={{ pathname, query: { feedback: null, confirm: undefined } }}>kontaktieren Sie den Support</Link>.
        </p>}
        {valid && <div style={{ textAlign: 'center' }}>
          Automatische bestätigung in
          <h1><Countdown initialTimeRemaining={5000} completeCallback={this.ok} /></h1>
        </div>}
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, confirm: undefined } }}>Zur Anmeldung</Link>
        </Modal.Links>
      </Base>
    );
  }
}
