import React, { Component } from 'react';
import { Link as UnstyledLink, Modal } from 'olymp';
import { Form, Input, notification } from 'antd';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import withAuth from './with-auth';
import { EnvelopeO, Key } from 'olymp-icons';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

const FormItem = createComponent(({ theme }) => ({ }), Form.Item, p => p);

const Links = createComponent(({ theme }) => ({
  position: 'absolute',
  bottom: -60,
  textAlign: 'center',
  right: 0,
  left: 0,
  '> a': {
    display: 'inline-block',
    minWidth: 200,
    padding: '0 9px',
  },
}), 'div');
const Footer = createComponent(({ theme }) => ({
  position: 'fixed',
  bottom: 10,
  textAlign: 'center',
  right: 0,
  left: 0,
}), 'div');
const Link = createComponent(({ theme }) => ({
  color: 'white',
  opacity: .3,
  onHover: {
    opacity: 1,
  }
}), UnstyledLink, p => p);

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
    const { isOpen, email, form, onCreate, onCancel, saving, pathname } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal showLogo isOpen={isOpen} title="Anmelden" confirmLoading={saving} onCancel={onCancel} onOk={onCreate} maskClosable={false}>
        <FormItem key="email" label="E-Mail" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
          })(<Input type="email" placeholder="E-Mail" onKeyPress={this.onKeyPress1} size="large" addonAfter={<EnvelopeO size={10} />} />)}
        </FormItem>
        <FormItem key="password" label="Passwort" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Bitte das Passwort angeben!' }],
          })(<Input type="password" placeholder="Password" onKeyPress={this.onKeyPress2} ref={input => this.input = input } size="large" addonAfter={<Key size={10} />}/>)}
        </FormItem>
        <Links>
          <Link to={{ pathname, query: { register: null, login: undefined } }}>Registrieren</Link>
          <Link to={{ pathname, query: { forgot: null, login: undefined } }}>Passwort vergessen?</Link>
        </Links>
        <Footer>
          <Link to={{ pathname, query: { register: null, login: undefined } }}>made with ❤ by olymp</Link>
        </Footer>
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
