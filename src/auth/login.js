import React, { Component } from 'react';
import { Link } from 'react-router-v4-decode-uri';
import { Modal, Form, Input, notification } from 'antd';
import withAuth from './with-auth';

const FormItem = Form.Item;
const modalSettings = { visible: true, style: { top: 20 }, okText: 'Login', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

@Form.create()
class ModalForm extends Component {
  render() {
    const { email, form, onCreate, onCancel, saving, pathname } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal {...modalSettings} confirmLoading={saving} title="Anmelden" onCancel={onCancel} onOk={onCreate}>
        <FormItem key="email" label="E-Mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(
            <Input
              size="large"
              addonBefore={<i className="fa fa-envelope-o" />}
              type="email"
              placeholder="E-Mail"
              onKeyPress={(element) => {
                if (element.key === 'Enter' && typeof this !== 'undefined') {
                  return this.input && this.input.refs.input && this.input.refs.input.focus();
                }

                return false;
              }}
            />
          )}
        </FormItem>
        <FormItem key="password" label="Passwort" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(
            <Input
              size="large"
              addonBefore={<i className="fa fa-lock" />}
              type="password"
              placeholder="Password"
              onKeyPress={(element) => {
                if (element.key === 'Enter') {
                  onCreate();
                }
              }}
              ref={(input) => { this.input = input; }}
            />
          )}
        </FormItem>
        <Link to={{ pathname, query: { forgot: null } }}>Passwort vergessen?</Link>
      </Modal>
    );
  }
}

@withAuth
export default class AuthLogin extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { auth, onClose } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      auth.login(values.email, values.password).then(({ name }) => {
        notification.success({
          message: 'Anmeldung erfolgreich',
          description: `Wilkommen, ${name}`,
        });
        onClose();
      }).catch((err) => {
        notification.error({
          message: 'Anmeldung fehlgeschlagen',
          description: err.message,
        });
      });
    });
  }

  render() {
    return (
      <ModalForm
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    );
  }
}
