import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';
import { Form, Input } from 'antd';
import { FaEnvelope } from 'olymp-icons';
import { onEnterOk, layout, onError, onSuccess } from 'olymp-utils';
import { createForgot } from '../redux';
import Base from './base';

@connect(null, dispatch => ({
  forgot: createForgot(dispatch),
}))
@Form.create()
export default class AuthForgot extends Component {
  ok = () => {
    const { forgot, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return onError(err);
      }
      forgot({ email: values.email })
        .then(() => {
          onSuccess('Bitte bestätigen Sie die Zurücksetzung');
          onOk({ email: values.email });
        })
        .catch(onError);
    });
  };

  render() {
    const { isOpen, email, form, onClose } = this.props;
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
            />,
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
