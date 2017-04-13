import React, { Component, PropTypes } from 'react';
import { Form } from 'antd';
import { Prompt } from 'olymp';
import { Tabs } from 'antd';
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
    return (
      <div>
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
        <Tabs defaultActiveKey="1" size="small">
          <Tabs.TabPane tab="Basis" key="1">
            {/*<Panel minWidth={560} margin="0 30px" padding={16}>*/}
            <Panel paddingX={16}>
              <Input form={form} item={item} field="name" label="Name" rules={['required']} type="text" size="large" />
              <Input form={form} item={item} field="slug" label="Slug" type="text" size="large" />
              <State form={form} item={item} field="state" label="Status" rules={['required']} />
              <Input form={form} item={item} field="binding" placeholder="typ feld1,feld2 slug" label="Bindung" type="text" size="large" />
              <Input form={form} item={item} field="sorting" placeholder="" label="Sortieren" type="text" size="large" />
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
PageForm.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
};
PageForm.defaultProps = {
  item: {},
};
export const PageFormGql = queryPage(mutatePage(Form.create(PageForm)));
