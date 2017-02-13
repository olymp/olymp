import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { notification, Form, Modal, Button, Input } from 'antd';
import gql from 'graphql-tag';
import withAuth from './with-auth';

@withAuth
@graphql(gql`
  query checkToken($token: String) {
    checkToken(token: $token)
  }
`, {
  options: ({ token }) => ({
    variables: { token },
  }),
})
export default class AuthReset extends Component {
  state = {};
  save = () => {
    const { auth, onClose, token } = this.props;
    const { password, password2 } = this.state;
    if (password !== password2) return;
    auth.reset(token, password).then(user => {
      notification.success({ message: 'Reset erfolgreich', description: `Wilkommen, ${user.name}` });
      onClose();
    }).catch(err => {
      notification.error({ message: 'Reset fehlgeschlagen', description: err.message });
    });
  }
  getInner = () => {
    const { password, password2 } = this.state;
    if (this.props.data.checkToken === undefined) {
      /* todo: return (
        <LoadingScreen style={{ minHeight: '200px' }} />
      ); */
    } else if (this.props.data.checkToken === false) {
      return (
        <p className="text-center">
          Bestätigung ungültig oder abgelaufen.
        </p>
      );
    } else if (this.props.data.checkToken === true) {
      return (
        <Form>
          <Form.Item label="Passwort">
            <Input type="password" placeholder="Passwort" value={password || ''} onChange={v => this.setState({ password: v || null })} className="uk-width-1-1" />
          </Form.Item>
          <Form.Item label="Passwort wiederholen">
            <Input type="password" placeholder="Passwort" value={password2 || ''} onChange={v => this.setState({ password2: v || null })} className="uk-width-1-1" />
          </Form.Item>
        </Form>
      );
    }
  }
  render() {
    const { onClose, pathname } = this.props;
    const { password, password2 } = this.state;

    const buttons = [
      <Button key="1" color="secondary" onClick={onClose}>Abbruch</Button>,
      <span key="1.5">&nbsp;</span>,
      <Button key="2" disabled={!password || password !== password2 || this.props.data.checkToken !== true} color="primary" onClick={this.save}>Abschicken</Button>,
    ];

    return (
      <Modal title="Passwort zurücksetzen" buttons={buttons} onClose={onClose}>
        {this.getInner()}
      </Modal>
    );
  }
}
