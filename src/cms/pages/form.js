import React, { Component, PropTypes } from 'react';
import { Form } from 'antd';
import { unflatten, slugify } from 'olymp';
import { Tabs } from 'antd';
import { Panel, SectionH } from 'olymp/ui';
import { queryPage, queryPages, mutatePage } from './gql';
import { Input, SlateTree, State } from '../collection';
import { Parent } from './edits';

export class PageForm extends Component {
  handleNameChange = (e) => { // set slug if unset
    const { form } = this.props;
    const value = e.target.value;
    form.setFieldsValue({ slug: `/${slugify(value, true)}` });
  }
  render() {
    const { form, item, items } = this.props;

    let tree = unflatten(items.map(({ id, name, parentId }) => ({
      value: id,
      label: name,
      parent: parentId,
      children: [],
    })), { id: 'value', parentId: 'parent' });

    return (
      <div>
        <Tabs defaultActiveKey="1" size="small">
          <Tabs.TabPane tab="Basis" key="1">
            {/*<Panel minWidth={560} margin="0 30px" padding={16}>*/}
            <Panel paddingX={16} alignLabel="left">
              <Input form={form} item={item} field="name" label="Name" onChange={this.handleNameChange} rules={['required']} type="text" size="large" />
              <Input form={form} item={item} field="slug" label="Slug" type="text" size="large" />
              <State form={form} item={item} field="state" label="Status" rules={['required']} />
              <Parent form={form} treeData={tree} item={item} field="parentId" label="Menü" placeholder="Übergeordnetes Menü" size="large" />
              <SectionH title="Links" description="Externe/Interne Verlinkung" />
              <Input form={form} item={item} field="href" label="Ext. Link" type="text" size="large" />
              <Parent form={form} treeData={tree} item={item} field="aliasId" label="Alias" placeholder="Alias zu.." size="large" />
              <SectionH title="Erweitert" description="Datenanbindung und Sortierung der Elemente" />
              <Input form={form} item={item} field="binding" placeholder="typ id name" label="Bindung" type="text" size="large" />
              <Input form={form} item={item} field="sorting" placeholder="+name, -id" label="Sortieren" type="text" size="large" />
            </Panel>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Text" key="2">
            <Panel paddingX={16}>
              <SlateTree form={form} item={item} field="blocks" label={null} />
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
  items: PropTypes.arrayOf(PropTypes.object),
};
PageForm.defaultProps = {
  item: {},
  items: [],
};
export const PageFormGql = queryPages(queryPage(mutatePage(Form.create(PageForm))));
