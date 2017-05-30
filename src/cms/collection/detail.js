import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Button, Form, Icon, Tabs, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';
import { Input } from './edits';

@withAuth
export default class CollectionDetail extends Component {
  render() {
    const { form, saving, pathname, data, typeName } = this.props;
    const { getFieldDecorator } = form;
    const item = data.item || {};

    return (
      <Tabs defaultActiveKey="1" size="small">
        <Tabs.TabPane tab={typeName} key="1">
          <Panel minWidth={560} margin="0 30px" padding={16}>
            <Input form={form} item={item} field="name" label="Name" rules={['required']} type="text" size="large" />
            <Input form={form} item={item} field="email" label="E-Mail" rules={['required']} type="text" size="large" />
            <Button onClick={this.ok}>Save</Button>
          </Panel>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
      </Tabs>
    );
  }
}
