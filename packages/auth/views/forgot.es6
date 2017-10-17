import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Form, Input } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { createForgot } from '../redux';
import Base, { onEnterOk, layout, onError, onSuccess } from './base';

@connect(null, dispatch => ({
  forgot: createForgot(dispatch),
}))
@Form.create()
export default class AuthForgot extends Component {
  ok = () => {
    const { forgot, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      forgot({ email: values.email })
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
    const { isOpen, email, form, saving, onClose } = this.props;
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
              addonAfter={<FaEnvelope size={10} />}
            />
          )}
        </Form.Item>
        <Base.Links>
          <Link updateQuery={{ login: null, forgot: undefined }}>
            Zur Anmeldung
          </Link>
        </Base.Links>
      </Base>
    );
  }
}
