import React, { Component } from 'react';
import { withAuth } from 'olymp';
import { Button, Tabs } from 'antd';
import { Panel } from 'olymp-ui';
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
