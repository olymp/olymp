import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';
import md, { createSuggestPlugin, Plain2 } from 'olymp/md';
import { Editor as Slate, Plain, Raw } from 'slate';

const Remark = md({
  template: ({ children, name }) => (
    <div>
      <h1>{name}</h1>
      {children}
    </div>
  ),
});

const SlateEditor = ({ value, onChange }) => (
  <Slate slate={value} onChange={onChange} />
);

@withRouter
@Form.create()
export default class Page extends Component {
  ok = () => {
    const { auth, onClose, onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (err) return onError(err);
      const user = {...values};
      auth.save(user).then(({ name }) => {
        onSuccess('Gespeichert', `Das Profil wurde gespeichert`);
        onClose();
      }).catch(onError);
    });
  }

  render() {
    const { id, router, isOpen, email, form, saving, pathname, onClose, DetailView, typeName, description, data } = this.props;
    const { getFieldDecorator } = form;
    const item = (data && data.item) || {};
    return (
      <Modal isOpen={isOpen} onClose={() => router.push(pathname)} width="auto" padding={0} title="Seite" subtitle={description}>
        <Panel minWidth={560} margin="0 30px" padding={16}>
          <Form.Item key="name" label="Name" {...layout}>
            {getFieldDecorator('name', {
              initialValue: item.name,
              rules: [{ required: true, message: 'Bitte geben Sie Ihren Namen an' }],
            })(<Input type="text" placeholder="Name" onKeyPress={onEnterFocus(() => this.mail)} size="large" />)}
          </Form.Item>
          <Form.Item key="email" label="E-Mail" {...layout}>
            {getFieldDecorator('email', {
              initialValue: item.email,
              rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }],
            })(<Input type="email" placeholder="E-Mail" onKeyPress={onEnterFocus(() => this.pw1)} ref={x => this.mail = x} size="large" addonAfter={<EnvelopeO size={10} />} />)}
          </Form.Item>
          <Form.Item key="remark" label="Remark" {...layout}>
            {getFieldDecorator('remark')(<Remark />)}
          </Form.Item>
          <Form.Item key="slate" label="Slate" {...layout}>
            {getFieldDecorator('slate', {
              initialValue: item.markdown || Plain2.deserialize(''),
            })(<SlateEditor />)}
          </Form.Item>
        </Panel>
        <Modal.Links>
          <Link to={{ pathname, query: { [`@${lowerFirst(typeName)}`]: undefined } }}>Anderes</Link>
        </Modal.Links>
      </Modal>
    );
  }
}
