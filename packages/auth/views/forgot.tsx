import React, { Component } from 'react';
import { Link } from 'olymp-utils';
import { Modal } from 'olymp-ui';
import { Form, Input } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import withAuth from '../with-auth';
import Base, { onEnterOk, layout, onError, onSuccess } from './base';

@withAuth
@Form.create()
export default class AuthForgot extends Component {
  ok = () => {
    const { auth, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      auth
        .forgot(values.email)
        .then(({ name }) => {
          onSuccess(
            'E-Mail abgeschickt',
            'Bitte bestätigen Sie die Zurücksetzung'
          );
          onOk({ email: values.email });
        })
        .catch(onError);
    });
  };

  render() {
    const { isOpen, email, form, saving, pathname, onClose } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Base
        isOpen={isOpen}
        title="Zurücksetzen"
        onOk={this.ok}
        onCancel={onClose}
      >
        <Form.Item hasFeedback key="email" label="E-Mail" {...layout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [
              { required: true, message: 'Bitte geben Sie Ihre E-Mail an!' },
            ],
          })(
            <Input
              type="email"
              placeholder="E-Mail"
              onKeyPress={onEnterOk(this.ok)}
              size="large"
              addonAfter={<FaEnvelope size={10} />}
            />
          )}
        </Form.Item>
        <Modal.Links>
          <Link to={{ pathname, query: { login: null, forgot: undefined } }}>
            Zur Anmeldung
          </Link>
        </Modal.Links>
      </Base>
    );
  }
}
