import React, { Component } from 'react';
import { Link, Modal, withAuth } from 'olymp';
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
export default class AuthMe extends Component {
  ok = () => {
    const { auth, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) { return onError(err); }
      const user = { ...values };
      auth
        .save(user)
        .then(({ name }) => {
          onSuccess('Gespeichert', 'Das Profil wurde gespeichert');
          onClose();
        })
        .catch(onError);
    });
  };

  render() {
    const {
      isOpen,
      email,
      form,
      saving,
      pathname,
      onClose,
      extraFields,
      auth,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base
        isOpen={isOpen}
        title="Profil"
        okText="Speichern"
        onOk={this.ok}
        onCancel={onClose}
      >
        <Form.Item key="name" label="Name" {...layout}>
          {getFieldDecorator('name', {
            initialValue: auth.user && auth.user.name,
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
        </Form.Item>
        <Form.Item key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: auth.user && auth.user.email,
            rules: [
              { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
            ],
          })(
            <Input
              type="email"
              placeholder="E-Mail"
              onKeyPress={onEnterFocus(() => this.pw1)}
              ref={x => (this.mail = x)}
              size="large"
              addonAfter={<EnvelopeO size={10} />}
            />
          )}
        </Form.Item>
        {extraFields
          ? extraFields({
            layout,
            getFieldDecorator,
            state: this.state,
            setState: this.setState,
          })
          : null}
        <Modal.Links>
          <Link to={{ pathname, query: { totp: null, profile: undefined } }}>
            2-Faktor Authentifizierung
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
