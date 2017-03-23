import React, { Component } from 'react';
import { Link as OlympLink } from 'olymp';
import { Form, Input, notification } from 'antd';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Modal from './modal';
import withAuth from './with-auth';

const modalSettings = { visible: true, okText: 'Anmelden', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
const formItemLayout = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

const getColor = color => tinycolor(color).getBrightness() > 60 ? '#FFFFFF' : '#333333';

const FormItem = createComponent(({ theme }) => ({
  '> .ant-form-item-control-wrapper': {
    '> .ant-form-item-control': {
      '> .ant-input': {
        border: 'none',
        backgroundColor: theme.color || '#3271A8',
        color: getColor(theme.color || '#3271A8'),
        textAlign: 'left',
        fontSize: '18px',
        padding: '1.2rem .8rem',
        '::placeholder': {
          color: getColor(theme.color || '#3271A8'),
        }
      }
    }
  }
}), p => <Form.Item {...p} />, p => p);

const Image = createComponent(({ theme }) => ({
  width: '200px',
  margin: '0 0 1.5rem 0',
  textAlign: 'center',
}), p => <img {...p} />, p => p);

const Link = createComponent(({ theme }) => ({
  color: getColor(theme.color || '#3271A8'),
}), p => <OlympLink {...p} />, p => p);

@Form.create()
class ModalForm extends Component {
  render() {
    const { email, form, onCreate, onCancel, saving, pathname } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        {...modalSettings}
        confirmLoading={saving}
        onCancel={onCancel}
        onOk={onCreate}
        maskClosable={false}
      >
        <Image src="logo.png" />
        <FormItem key="email" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(
            <Input
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
        <FormItem key="password" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(
            <Input
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
