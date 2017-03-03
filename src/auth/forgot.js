import React, { Component } from 'react';
import { Link } from 'react-router-v4-decode-uri';
import withAuth from './with-auth';
import { notification, Modal, Form, Button, Input } from 'antd';

@withAuth
export default class AuthForgot extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: props.email,
    };
  }
  save = () => {
    const { auth, onClose } = this.props;
    const { email } = this.state;
    auth.forgot(email).then(user => {
      notification.success({ message: 'Reset abgeschickt', description: 'Bitte Mails checken!' });
      onClose();
    }).catch(err => {
      notification.error({ message: 'Reset fehlgeschlagen', description: err.message });
    });
  }
  render() {
    const { onClose, pathname } = this.props;
    const { email } = this.state;

    const buttons = [
      <Link key="0" className="pull-left" style={{ marginTop: '5px' }} to={{ pathname, query: { login: email || null } }}>Zurück zur Anmeldung</Link>,
      <span key="0.5">&nbsp;</span>,
      <Button key="1" color="secondary" onClick={onClose}>Abbruch</Button>,
      <span key="1.5">&nbsp;</span>,
      <Button key="2" disabled={!email} color="primary" onClick={this.save}>Abschicken</Button>,
    ];

    return (
      <Modal title="Passwort vergessen" buttons={buttons} onClose={onClose}>
        <Form>
          <Form.Item label="E-Mail">
            <Input id="email" type="text" name="email" placeholder="max@mustermann.de" value={email || ''} onChange={v => this.setState({ email: v || null })} className="uk-width-1-1" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
