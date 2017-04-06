import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Button, Form, Input, Icon, Tabs, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';

@withAuth
@Form.create()
export default class CollectionDetail extends Component {
  ok = () => {
    const { auth, form, data } = this.props;
    const item = data.item || {};
    form.validateFields((err, values) => {
      if (err) return onError(err);
      const user = { ...item, ...values };
      delete user.__typename;
      auth.save(user).then(({ name }) => {
        onSuccess('Gespeichert', `Das Profil wurde gespeichert`);
      }).catch(onError);
    });
  }

  render() {
    const { form, saving, pathname, data, typeName } = this.props;
    const { getFieldDecorator } = form;
    const item = data.item || {};

    return (
      <Tabs defaultActiveKey="1" size="small">
        <Tabs.TabPane tab={typeName} key="1">
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
            <Button onClick={this.ok}>Save</Button>
          </Panel>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
      </Tabs>
    );
  }
}
