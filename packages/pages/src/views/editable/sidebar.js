import React, { Component, PropTypes } from 'react';
import { Form, Tabs } from 'antd';
import { slugify, unflatten } from 'olymp';
import { Panel, SectionH } from 'olymp-ui';
import { queryPage, queryPages, mutatePage } from '../../gql';
import { Input, PageType, State, Parent } from '../../edits';
import Tree from './tree';

class PageForm extends Component {
  handleNameChange = (e) => { // set slug if unset
    const { form } = this.props;
    const value = e.target.value;
    form.setFieldsValue({ slug: `/${slugify(value, true)}` });
  }
  handleTypeChange = (e) => { // set slug if unset
    const { form } = this.props;
    if (e === 'MENU') {
      form.setFieldsValue({ parentId: null });
    }
  }
  render() {
    const { form, item, items, navigation, tab, onTabClick } = this.props;
    const tree = unflatten(items.map(({ id, name, parentId }) => ({
      value: id,
      label: name,
      parent: parentId,
      children: [],
    })), { id: 'value', parentId: 'parent' });

    return (
      <Tabs
        activeKey={tab}
        onTabClick={onTabClick}
        size="small"
        tabBarStyle={{ marginBottom: 0 }}
      >
        <Tabs.TabPane tab="Navigation" key="0">
          <Panel>
            <Tree items={navigation} />
          </Panel>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Seite" key="1">
          <Panel padding={16} alignLabel="left">
            <Input form={form} item={item} field="name" label="Name" onChange={this.handleNameChange} rules={['required']} type="text" size="large" />
            <Input form={form} item={item} field="slug" label="Slug" type="text" size="large" />
            <State form={form} item={item} field="state" label="Status" rules={['required']} />
            <PageType form={form} item={item} field="type" label="Art" size="large" onChange={this.handleTypeChange} />
            {(form.getFieldValue('type') || item.type) !== 'MENU' && <Parent form={form} treeData={tree} item={item} field="parentId" label="Menü" placeholder="Übergeordnetes Menü" size="large" />}
            {(form.getFieldValue('type') || item.type) === 'LINK' && <Input form={form} item={item} field="href" label="Ext. Link" type="text" size="large" />}
            {(form.getFieldValue('type') || item.type) === 'ALIAS' && <Parent form={form} treeData={tree} item={item} field="aliasId" label="Alias" placeholder="Alias zu.." size="large" />}
            <SectionH title="Erweitert" description="Datenanbindung und Sortierung der Elemente" />
            <Input form={form} item={item} field="binding" placeholder="typ id name" label="Bindung" type="text" size="large" />
            <Input form={form} item={item} field="sorting" placeholder="+name, -id" label="Sortieren" type="text" size="large" />
          </Panel>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Collection" key="2">
          <Panel paddingX={16}>
            Hier kommt bei Bindings quasi der Parent rein
          </Panel>
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="Text" key="2">
          <Panel paddingX={16}>
            <SlateTree form={form} item={item} field="blocks" label={null} />
          </Panel>
        </Tabs.TabPane> */}
      </Tabs>
    );
  }
}
PageForm.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.arrayOf(PropTypes.object),
  tab: PropTypes.string,
  onTabClick: PropTypes.func,
};
PageForm.defaultProps = {
  item: {},
  items: [],
  navigation: [],
  tab: '0',
  onTabClick: key => console.log(key),
};
PageForm.WithData = queryPages(queryPage(mutatePage(Form.create(PageForm))));
export default PageForm;
