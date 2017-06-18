import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { EnvelopeO } from 'olymp-icons';
import { onEnterFocus, layout } from '../../views/base';

export default class AuthProfileForm extends Component {
  render() {
    const { form, extraFields, auth } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div>
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
        Passwort???
        {extraFields
          ? extraFields({
              layout,
              getFieldDecorator,
              state: this.state,
              setState: this.setState,
            })
          : null}
      </div>
    );
  }
}
