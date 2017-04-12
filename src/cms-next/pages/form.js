import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter, Prompt } from 'olymp';
import { Tabs, Button, Form, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Panel } from 'olymp/ui';
import { queryPage, mutatePage } from './gql';
import { Input, Hashtax, State } from '../collection';

export class PageForm extends Component {
  handleChange = text => {
    const { form, item, onChangeText } = this.props;
    if (onChangeText) onChangeText(text);
  }
  render() {
    const { form, item } = this.props;
    const { getFieldDecorator, getFieldValue } = form;
    return (
      <div>
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
        <Tabs defaultActiveKey="1" size="small">
          <Tabs.TabPane tab="Basis" key="1">
            {/*<Panel minWidth={560} margin="0 30px" padding={16}>*/}
            <Panel paddingX={16}>
              <Input form={form} item={item} field="name" label="Name" rules={['required']} type="text" size="large" />
              <Input form={form} item={item} field="slug" label="Slug" rules={['required']} type="text" size="large" />
              <State form={form} item={item} field="state" label="Status" rules={['required']} />
            </Panel>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Text" key="2">
            <Panel paddingX={16}>
              <Hashtax form={form} item={item} field="text" label={null} placeholder="Text" onChange={this.handleChange} />
            </Panel>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
export const PageFormGql = queryPage(mutatePage(Form.create(PageForm)));
