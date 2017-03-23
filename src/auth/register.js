import React, { Component } from 'react';
import { Link } from 'olymp';
import { Form, Input, notification } from 'antd';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Modal from './modal';
import withAuth from './with-auth';

const modalSettings = { visible: true, okText: 'Anmelden', cancelText: 'Abbruch', transitionName: 'fade', maskTransitionName: 'fade' };
const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 19 } };

const FormItem = createComponent(({ theme }) => ({ }), Form.Item, p => p);

const Links = createComponent(({ theme }) => ({
  position: 'absolute',
  bottom: -60,
  textAlign: 'center',
  right: 0,
  left: 0,
  '> a': {
    color: 'white',
    padding: '0 9px',
  },
  '> a:not(:first-child)': {
    borderLeft: '1px solid white',
  },
}), 'div');

@Form.create()
class ModalForm extends Component {
  onKeyPress1 = (e) => {
    if (e.key === 'Enter' && typeof this !== 'undefined') {
      return this.input && this.input.refs.input && this.input.refs.input.focus();
    } return false;
  }
  onKeyPress2 = (e) => {
    if (e.key === 'Enter') {
      onCreate();
    }
  }
  render() {
    const { email, form, onCreate, onCancel, saving, pathname } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal {...modalSettings} title="Registrieren" confirmLoading={saving} onCancel={onCancel} onOk={onCreate} maskClosable={false}>
        <FormItem key="email" label="E-Mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(<Input type="email" placeholder="E-Mail" onKeyPress={this.onKeyPress1} size="large" addonAfter={<i className="fa fa-envelope-o" />} />)}
        </FormItem>
        <FormItem key="password" label="Passwort" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input type="password" placeholder="Password" onKeyPress={this.onKeyPress2} ref={input => this.input = input } size="large" addonAfter={<i className="fa fa-key" />}/>)}
        </FormItem>
        <Links>
          <Link to={{ pathname, query: { login: null, register: undefined } }}>Login</Link>
        </Links>
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
